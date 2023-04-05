import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Heading = styled.h2`
  padding: 2% 0;
`;

export const Edit = styled.div`
  color: #5b5b5b;
  padding-left: 1px;
  margin: 4% 0;
  height: 52px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
`;

export const EditInput = styled.input`
  border: none;
  width: 100%;
  padding-left: 5px;
  font-size: 16px;
  font-family: "Lato";
  font-weight: 700;
  color: #5b5b5b;
  outline: none;
  -moz-appearance: textfield;
  &:focus {
    color: #454664;
  }
  &:-webkit-outer-spin-button :-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const EditLabel = styled.label`
  min-width: 20%;
  height: 100%;
  margin-right: 3%;
  font-size: 16px;
  border: 1px solid #93b4bc;
  background: #93b4bc;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const EditUnit = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

export const Button = styled.button`
  margin: 5% 0;
  width: 218px;
  height: 52px;
  font-size: 16px;
  background: linear-gradient(180deg, #679cf6 0%, #4072ee 100%);
  border-radius: 41px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  align-items: center;
  color: #fff;
  box-shadow: none;
  border: none;
  cursor: pointer;
  &:hover {
    background: linear-gradient(180deg, #679cf6 0%, #4072ee 50%);
  }

  &:active {
    background: linear-gradient(180deg, #679cf6 0%, #4072ee 20%);
  }
`;

export const LinkContainer = styled.div`
  margin: 2% 0;
  display: flex;
  align-items: center;
  gap: 2%;
  font-family: "Blender Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #454664;
`;

export const LinkText = styled(Link)`
  color: #93b4bc;
`;
