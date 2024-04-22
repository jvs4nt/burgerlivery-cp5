import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const RemoveButton = styled.button`
  background-color: red;
  color: ${colors.commom.white};
  border: none;
  padding: 2px;
  margin-left: 8px;
  cursor: pointer;
  margin: 0;
`;

export const FinishButton = styled.button`
  width: 30%;
  padding: 8px;
  border: none;
  background-color: ${colors.primary.main};
  color: black;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  bottom: 15px;
  cursor: pointer;
`;


export const FinishDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    
    `;

export const PaymentDiv = styled.div`
    
    padding: 10px;
    
    `;


