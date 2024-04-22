import { Layout } from "../../components";
import { useContext, useState } from "react"; 
import OrderContext from "../../context/OrderContext";
import { priceFormat } from "../../helpers/priceFormat";
import { FinishButton, FinishDiv, ListItem, PaymentDiv, RemoveButton, SelectPayment } from "./Checkout.style";

export default function Checkout() {
  const { hamburgerOrder, appettizerOrder, beverageOrder, dessertOrder, comboOrder, order, setOrder } = useContext(OrderContext);
  const [paymentMethod, setPaymentMethod] = useState(""); 

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
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

  const handleFinishOrder = () => {
    console.log("Produtos:");
    console.log("--------------------");
    console.log("Combos:");
    comboOrder.forEach((combo) => {
      console.log(`COMBO ${combo.name}: ${priceFormat(combo.value)}`);
    });
    console.log("--------------------");

    console.log("Hamburguers:");
    hamburgerOrder.forEach((hamburger) => {
      console.log(`${hamburger.name}: ${priceFormat(hamburger.value)}`);
    });
    console.log("--------------------");
    console.log("Aperitivos:");
    appettizerOrder.forEach((appetizer) => {
      console.log(`${appetizer.name}: ${priceFormat(appetizer.value)}`);
    });
    console.log("--------------------");
    console.log("Bebidas:");
    beverageOrder.forEach((beverage) => {
      console.log(`${beverage.name}: ${priceFormat(beverage.value)}`);
    });
    console.log("--------------------");
    console.log("Sobremesas:");
    dessertOrder.forEach((dessert) => {
      console.log(`${dessert.name}: ${priceFormat(dessert.value)}`);
    });
    console.log("--------------------");
    console.log("Valor Total:", priceFormat(order.totalValue));
    console.log("Forma de Pagamento:", paymentMethod);
  };

  return (
    <Layout>
      <h1>Checkout</h1>
      <div>
        <h3>Produtos:</h3>
        <ul>
          {comboOrder.map((combo, index) => (
            <ListItem key={index}>
              COMBO {combo.name} - R${combo.value} <RemoveButton onClick={handleRemoveCombo}>X</RemoveButton>
            </ListItem>
          ))}
        </ul>
        <ul>
          {hamburgerOrder.map((hamburger, index) => (
            <ListItem key={index}>
              {hamburger.name} - R${hamburger.value} <RemoveButton onClick={handleRemoveHamburguer}>X</RemoveButton>
            </ListItem>
          ))}
        </ul>
        <ul>
          {appettizerOrder.map((appetizer, index) => (
            <ListItem key={index}>
              {appetizer.name} - R${appetizer.value} <RemoveButton onClick={handleRemoveAppetizer}>X</RemoveButton>
            </ListItem>
          ))}
        </ul>
        <ul>
          {beverageOrder.map((beverage, index) => (
            <ListItem key={index}>
              {beverage.name} - R${beverage.value} <RemoveButton onClick={handleRemoveBeverage}>X</RemoveButton>
            </ListItem>
          ))}
        </ul>
        <ul>
          {dessertOrder.map((dessert, index) => (
            <ListItem key={index}>
              {dessert.name} - R${dessert.value} <RemoveButton onClick={handleRemoveDessert}>X</RemoveButton>
            </ListItem>
          ))}
        </ul>
      </div>
      
      <PaymentDiv>
        <h3>Forma de Pagamento:</h3>
        <SelectPayment value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="">Selecione...</option>
          <option value="credito">Cartão de Crédito</option>
          <option value="debito">Cartão de Débito</option>
          <option value="dinheiro">Dinheiro</option>
          <option value="pix">Pix</option>
        </SelectPayment>
      </PaymentDiv>

      <FinishDiv>
        <h3>Total:</h3>
        <h1>{priceFormat(order.totalValue)}</h1>
      </FinishDiv>
      <FinishButton onClick={handleFinishOrder}>Finalizar</FinishButton>
    </Layout>
  );
}
