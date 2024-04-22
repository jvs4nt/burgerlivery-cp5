import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const RemoveButton = styled.button`
  background-color: gray;
  color: ${colors.commom.white};
  border: none;
  padding: 2px;
  margin-left: 8px;
  width: 30px;
  cursor: pointer;
  margin: 0;
  transition: 0.3s;

  &:hover {
    background-color: red;
  }
`;

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 10px 0;
`;

export const FinishButton = styled.button`
  width: 30%;
  padding: 8px;
  border: none;
  background-color: ${colors.primary.main};
  color: black;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #cc9e21;
  }
`;


export const FinishDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

export const PaymentDiv = styled.div`
margin-top: 20px;
`;

export const SelectPayment = styled.select`
    width: 30%;
    padding: 8px;
    padding-right: 20px;
    border: 2px solid green;
    background-color: lightgreen;
    color: black;
    font-size: 16px;
    cursor: pointer;
`;

