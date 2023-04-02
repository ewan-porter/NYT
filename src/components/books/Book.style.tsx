import styled from "styled-components";

import { BsHeart, BsHeartFill } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  margin: 10px 0;
  padding: 0 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  padding-left: 15px;
  padding-right: 5px;
  font-size: 1rem;
`;

export const Author = styled.p`
  font-size: 16px;
  color: #5b5b5b;
  text-overflow: ellipsis;
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
