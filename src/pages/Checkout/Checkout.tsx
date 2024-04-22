import { Layout } from "../../components";
import { useContext, useState } from "react"; 
import OrderContext from "../../context/OrderContext";
import { priceFormat } from "../../helpers/priceFormat";
import { FinishButton, RemoveButton } from "./Checkout.style";

export default function Checkout() {
  const { hamburgerOrder, appettizerOrder, comboOrder, order, setOrder } = useContext(OrderContext);
  const [paymentMethod, setPaymentMethod] = useState(""); 

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleFinishOrder = () => {
    console.log("Produtos:");
    console.log("Combos:");
    comboOrder.forEach((combo) => {
      console.log(`COMBO ${combo.name}: ${priceFormat(combo.value)}`);
    });
    console.log("Hambúrgueres:");
    hamburgerOrder.forEach((hamburger) => {
      console.log(`${hamburger.name}: ${priceFormat(hamburger.value)}`);
    });
    console.log("Aperitivos:");
    appettizerOrder.forEach((appetizer) => {
      console.log(`${appetizer.name}: ${priceFormat(appetizer.value)}`);
    });
    console.log("Valor Total:", priceFormat(order.totalValue));
    console.log("Forma de Pagamento:", paymentMethod);
  };

  return (
    <Layout>
      <h1>Checkout</h1>
      <div>
        <h3>Combos:</h3>
        <ul>
          {comboOrder.map((combo, index) => (
            <li key={index}>
              COMBO {combo.name} - R${combo.value} <RemoveButton>X</RemoveButton>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Hambúrgueres:</h3>
        <ul>
          {hamburgerOrder.map((hamburger, index) => (
            <li key={index}>
              {hamburger.name} - R${hamburger.value} <RemoveButton>X</RemoveButton>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Aperitivos:</h3>
        <ul>
          {appettizerOrder.map((appetizer, index) => (
            <li key={index}>
              {appetizer.name} - R${appetizer.value} <RemoveButton>X</RemoveButton>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Total:</h3>
        <h1>{priceFormat(order.totalValue)}</h1>
      </div>
      <div>
        <h3>Forma de Pagamento:</h3>
        <select value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="">Selecione...</option>
          <option value="credit_card">Cartão de Crédito</option>
          <option value="debit_card">Cartão de Débito</option>
          <option value="cash">Dinheiro</option>
        </select>
      </div>
      <FinishButton onClick={handleFinishOrder}>Finalizar</FinishButton>
    </Layout>
  );
}
