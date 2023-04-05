import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled(Link)`
  padding-top: 50px;
  color: #454664;
  font-size: 22px;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    text-decoration: underline 3px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 50px;
`;

export const Image = styled.img`
  width: 324px;
  height: 204px;
  overflow: hidden;
  object-fit: cover;
  padding: 20px 20px;
  opacity: 0.8;
`;
