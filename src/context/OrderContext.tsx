import { createContext, useState } from "react";

type OrderContextProps = {
  appettizer: [];
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
  const [appettizerOrder, setAppettizerOrder] = useState([]);
  const [hamburgerOrder, setHamburgerOrder] = useState([]);

  return (
    <OrderContext.Provider
      value={{
        appettizerOrder,
        setAppettizerOrder,
        hamburgerOrder,
        setHamburgerOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContextProvider };
export default OrderContext;
