// styled navbar elements

import styled from "styled-components";

export const NavBar = styled.div`
  width: 100vw;
  background-color: #ffffff;
  height: 74px;
  display: flex;
  z-index: 100;
  position: fixed;
`;

export const UserContainer = styled.div`
  background-color: #93b4bc;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 81px;
  @media (max-width: 768px) {
    width: 50px;
  }
`;

export const UserImage = styled.img`
  border-radius: 50%;
  max-height: 25px;
  height: 100%;
  width: auto;
`;

export const Header = styled.h1`
  align-self: center;
  padding-left: 1em;
`;

export const Red = styled.span`
  color: #8b201d;
`;
