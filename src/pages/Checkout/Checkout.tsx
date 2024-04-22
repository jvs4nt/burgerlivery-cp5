import { Layout } from "../../components";
import { useContext } from "react";
import OrderContext from "../../context/OrderContext";
import { priceFormat } from "../../helpers/priceFormat";

export default function Checkout() {
  const { hamburgerOrder, appettizerOrder, order, setOrder } = useContext(OrderContext);
  
  return (
    <Layout>
      <h1>Checkout</h1>
      <div>
        <h3>Hamburguers:</h3>
        <ul>
          {hamburgerOrder.map((hamburger, index) => (
            <li key={index}>
              {hamburger.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Aperitivos:</h3>
        <ul>
          {appettizerOrder.map((appetizer, index) => (
            <li key={index}>
              {appetizer.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Total:</h3>
        <h1>{priceFormat(order.totalValue)}</h1>
      </div>
    </Layout>
  );
}
