import { useContext } from "react";
import OrderContext from "../../context/OrderContext";
import { ShoppingCartCheckout, ShoppingCartElement, RemoveButton, CloseButton } from "./ShoppingCart.style"; // Supondo que você tenha importado um estilo para o botão de remover
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

  const handleRemoveItem = (index) => {
    const updateOrder = () => {
      order.hamburger.splice(index, 1);
    };
    updateOrder();
    setOrder({ ...order});
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
              <RemoveButton onClick={() => handleRemoveItem(index)}>X</RemoveButton>
            </p>
            
          </div>
        ))}
      </div>
      <div>
        {hamburgerOrder.map((hamburger, index) => (
          <div key={index}>
            <p>
              {hamburger.name} {priceFormat(hamburger.value)}
              <RemoveButton onClick={() => handleRemoveItem(index)}>X</RemoveButton>
            </p>
            
          </div>
        ))}
      </div>
      <div>
        {dessertOrder.map((dessert, index) => (
          <div key={index}>
            <p>
              {dessert.name} {priceFormat(dessert.value)}
              <RemoveButton onClick={() => handleRemoveItem(index)}>X</RemoveButton>
            </p>
            
          </div>
        ))}
      </div>
      <div>
        {comboOrder.map((combo, index) => (
          <div key={index}>
            <p>
              COMBO {combo.name} {priceFormat(combo.value)}
              <RemoveButton onClick={() => handleRemoveItem(index)}>X</RemoveButton>
            </p>
            
          </div>
        ))}
      </div>

      <div>
        {beverageOrder.map((beverage, index) => (
          <div key={index}>
            <p>
              {beverage.name} {priceFormat(beverage.value)}
              <RemoveButton onClick={() => handleRemoveItem(index)}>X</RemoveButton>
            </p>
            
          </div>
        ))}
      </div>
      <div>
        <p>Total: {priceFormat(order.totalValue)}</p>
      </div>
      <ShoppingCartCheckout onClick={handleCheckout}>CHECKOUT</ShoppingCartCheckout>
    </ShoppingCartElement>
  );
};
