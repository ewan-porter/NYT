import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (!isOpen ? `81px` : `200px`)};
  background-color: #454664;
  height: 100vh;
  padding-top: 24px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 50;
  @media (max-width: 768px) {
    width: ${({ isOpen }) => (!isOpen ? `50px` : `200px`)};
  }
`;

export const SidebarButton = styled.button<{ isOpen: boolean }>`
  font-family: inherit;
  outline: none;
  border: none;
  background: none;
  letter-spacing: inherit;
  color: inherit;
  font-size: inherit;
  align-self: center;
  padding: 0;
  margin: 10px 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #B8C5D3
  box-shadow: 0 0 4px #B8C5D3,
    0 0 7px #B8C5D3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)}; 
  svg {
    font-size: 20px;
  }
`;

export const SidebarDivider = styled.div<{
  isActive: boolean;
  isOpen: boolean;
}>`
  height: 1px;
  display: ${({ isActive }) => (!isActive ? `block` : `none`)};
  width: 70%;
  background-color: #e8f0f8;
  margin: 5px;
  justify-self: end;
  margin-bottom: -1px;
`;

export const SidebarLinkContainer = styled.div<{
  isActive: boolean;
  isOpen: boolean;
}>`
  border-radius: 6px;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ isOpen }) => (!isOpen ? `center` : `start`)};
  background: ${({ isActive }) =>
    !isActive ? `` : `linear-gradient(180deg, #679CF6 0%, #4072EE 100%);`};
  padding: ${({ isOpen }) => (!isOpen ? `10px 5px` : `10px 5px 10px 30px`)};
  box-shadow: ${({ isActive }) =>
    !isActive ? `none` : ` 0px 5px 15px #3D4C6C;`};

  border-radius: 0 5px 5px 0;
  :hover {
    background: linear-gradient(180deg, #679cf6 0%, #4072ee 10%);
    border-radius: 0 5px 5px 0;
  }

  @media (max-width: 768px) {
    padding: 10px 2px;
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: 10px 0;
`;

export const SidebarLinkIcon = styled.div`
  display: flex;

  svg {
    font-size: 20px;
  }
`;

export const SidebarLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: 8px;
  text-transform: uppercase;
  color: #b8c5d3;
  font-size: 1rem;
`;
