import { useContext, useState } from "react";
import OrderContext from "../../context/OrderContext";
import { ShoppingCartCheckout, ShoppingCartElement, RemoveButton, CloseButton, TotalDiv, Total } from "./ShoppingCart.style"; // Supondo que você tenha importado um estilo para o botão de remover
import { priceFormat } from "../../helpers/priceFormat";
import { useNavigate } from "react-router-dom";

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShoppingCart = ({ isOpen, onClose }: ShoppingCartProps) => {
  
  const { hamburgerOrder, appettizerOrder, comboOrder, beverageOrder, dessertOrder, order, setOrder } =
    useContext(OrderContext);

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  }

  const calculateTotalValue = () => {
    let total = 0;
    hamburgerOrder.forEach((hamburger) => {
      total += hamburger.value;
    });
    appettizerOrder.forEach((appettizer) => {
      total += appettizer.value;
    });
    dessertOrder.forEach((dessert) => {
      total += dessert.value;
    });
    comboOrder.forEach((combo) => {
      total += combo.value;
    });
    beverageOrder.forEach((beverage) => {
      total += beverage.value;
    });
    return total;
  }

  const handleRemoveHamburguer = (index) => {
    const updateOrder = () => {
      order.hamburger.splice(index, 1);
    };
    updateOrder();
    setOrder({ ...order, totalValue: calculateTotalValue()});

  };
  const handleRemoveCombo = (index) => {
    const updateOrder = () => {
      order.combo.splice(index, 1);
    };
    updateOrder();
    setOrder({ ...order, totalValue: calculateTotalValue()});

  };
  const handleRemoveAppetizer = (index) => {
    const updateOrder = () => {
      order.appetizer.splice(index, 1);
    };
    updateOrder();
    setOrder({ ...order, totalValue: calculateTotalValue()});

  };
  const handleRemoveDessert = (index) => {
    const updateOrder = () => {
      order.dessert.splice(index, 1);
    };
    updateOrder();
    setOrder({ ...order, totalValue: calculateTotalValue()});

  };
  const handleRemoveBeverage = (index) => {
    const updateOrder = () => {
      order.beverage.splice(index, 1);
    };
    updateOrder();
    setOrder({ ...order, totalValue: calculateTotalValue()});
  };

  return (
    <ShoppingCartElement open={isOpen}>
      <CloseButton onClick={onClose}>x</CloseButton>
      <h1>Carrinho de compras</h1>
      <div>
        {appettizerOrder.map((appettizer, index) => (
          <div key={index}>
            <p>
              {appettizer.name} - {appettizer.size} {priceFormat(appettizer.value)}
              <RemoveButton onClick={() => handleRemoveAppetizer(index)}>X</RemoveButton>
            </p>
            
          </div>
        ))}
      </div>
      <div>
        {hamburgerOrder.map((hamburger, index) => (
          <div key={index}>
            <p>
              {hamburger.name} {priceFormat(hamburger.value)}
              <RemoveButton onClick={() => handleRemoveHamburguer(index)}>X</RemoveButton>
            </p>
            
          </div>
        ))}
      </div>
      <div>
        {dessertOrder.map((dessert, index) => (
          <div key={index}>
            <p>
              {dessert.name} {priceFormat(dessert.value)}
              <RemoveButton onClick={() => handleRemoveDessert(index)}>X</RemoveButton>
            </p>
            
          </div>
        ))}
      </div>
      <div>
        {comboOrder.map((combo, index) => (
          <div key={index}>
            <p>
              COMBO {combo.name} {priceFormat(combo.value)}
              <RemoveButton onClick={() => handleRemoveCombo(index)}>X</RemoveButton>
            </p>
            
          </div>
        ))}
      </div>

      <div>
        {beverageOrder.map((beverage, index) => (
          <div key={index}>
            <p>
              {beverage.name} {priceFormat(beverage.value)}
              <RemoveButton onClick={() => handleRemoveBeverage(index)}>X</RemoveButton>
            </p>
            
          </div>
        ))}
      </div>
      <TotalDiv>
        <Total>Total: {priceFormat(order.totalValue)}</Total>
      </TotalDiv>
      <ShoppingCartCheckout onClick={handleCheckout}>CHECKOUT</ShoppingCartCheckout>
    </ShoppingCartElement>
  );
};
