import styled from "styled-components";

import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  margin: 10px 10px;
  padding: 0 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  padding-left: 15px;
  padding-right: 5px;
  font-size: 1rem;
`;

export const Author = styled.p`
  text-overflow: ellipsis;
`;

export const Edit = styled(Link)`
  text-overflow: ellipsis;
  text-decoration: none;
  color: #5b5b5b;
  padding: 0 3px;
  &:hover {
    color: #454664;
  }
`;

export const Delete = styled.a`
  text-overflow: ellipsis;
  text-decoration: none;
  color: #5b5b5b;
  padding: 0 3px;
  cursor: pointer;
  &:hover {
    color: #454664;
  }
`;

export const Price = styled.h4`
  text-transform: uppercase;
  padding: 0 15px;
`;

export const LikeLink = styled.a`
  cursor: pointer;
  padding: 3px;
`;

export const Heart = styled(BsHeart)`
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  &:focus,
  :hover,
  :active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const HeartFilled = styled(BsHeartFill)`
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  &:focus,
  :hover,
  :active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
