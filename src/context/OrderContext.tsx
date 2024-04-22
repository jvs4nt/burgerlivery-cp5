import { createContext, useEffect, useState } from "react";

type OrderContextProps = {
  appetizer: [];
  hamburger: [];
  combo: [];
  dessert: [];
  beverage: [];
  totalValue: number;
};

const OrderContext = createContext<OrderContextProps>({});

interface OrderContextProviderProps {
  children: React.ReactNode;
}

const OrderContextProvider = ({ children }: OrderContextProviderProps) => {
  const inicialOrder = {
    appetizer: [],
    hamburger: [],
    combo: [],
    dessert: [],
    beverage: [],
    totalValue: 0,
  };

  const [appetizerOrder, setAppetizerOrder] = useState([]);
  const [hamburgerOrder, setHamburgerOrder] = useState([]);
  const [comboOrder, setComboOrder] = useState([]);
  const [beverageOrder, setBeverageOrder] = useState([]);
  const [dessertOrder, setDessertOrder] = useState([]);
  const [order, setOrder] = useState(inicialOrder);

  const sumValues = (arrayValues) => {
    return arrayValues.reduce(
      (acumulador, valorAtual) => acumulador + Number(valorAtual),
      0
    );
  };

  const getPrices = (values) => {
    const result = values.map((item) => item.value);
    return result;
  };

  useEffect(() => {
    const subTotalHamburgers = getPrices(hamburgerOrder);
    const subTotalAppetizer = getPrices(appetizerOrder);
    const subTotalCombo = getPrices(comboOrder);
    const subTotalBeverage = getPrices(beverageOrder);
    const subTotalDessert = getPrices(dessertOrder);
    const subtotal = subTotalHamburgers.concat(
      subTotalAppetizer,
      subTotalBeverage,
      subTotalCombo,
      subTotalDessert,
    );

    const internalOrder = {
      ...order,
      ["hamburger"]: hamburgerOrder,
      ["appetizer"]: appetizerOrder,
      ["combo"]: comboOrder,
      ["beverage"]: beverageOrder,
      ["dessert"]: dessertOrder,
      totalValue: sumValues(subtotal),
    };

    console.log(subtotal);
    console.log(internalOrder);

    setOrder(internalOrder);
  }, [hamburgerOrder, appetizerOrder, beverageOrder, dessertOrder, comboOrder, setOrder]);

  return (
    <OrderContext.Provider
      value={{
        appetizerOrder,
        setAppetizerOrder,
        hamburgerOrder,
        setHamburgerOrder,
        comboOrder,
        setComboOrder,
        beverageOrder,
        setBeverageOrder,
        dessertOrder,
        setDessertOrder,
        order,
        setOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContextProvider };
export default OrderContext;
