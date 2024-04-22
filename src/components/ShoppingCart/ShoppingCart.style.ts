import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const ShoppingCartElement = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 450px;
  height: 100vh;
  padding: 16px;
  background-color: ${colors.commom.white};
  transform: translateX(100%);
  transition: transform 0.2s ease-out;

  ${(props) =>
    props.open === true &&
    `
    transform: translateX(0);
    `}
`;

export const ShoppingCartCheckout = styled.button`
  width: 90%;
  padding: 8px;
  border: none;
  background-color: ${colors.primary.main};
  color: black;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  bottom: 15px;
`;

export const RemoveButton = styled.button`
  background-color: red;
  color: ${colors.commom.white};
  border: none;
  padding: 2px;
  margin-left: 8px;
  cursor: pointer;
  margin: 0;
`;

export const CloseButton = styled.button`
  background-color: red;
  color: ${colors.commom.white};
  border: none;
  padding: 2px;
  width: 30px;
  height: 30px;
  margin-left: 8px;
  cursor: pointer;
  margin: 0;
  border-radius: 100%;
`;

export const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;
  padding: 0;
`;

export const Total = styled.p`
  font-size: 24px;
  font-weight: bold;
`;