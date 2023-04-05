import styled from "styled-components";

export const Hero = styled.div`
  background: url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx"),
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  background-blend-mode: overlay;
  width: 100%;
  height: 221px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookSpan = styled.span`
  font-weight: 700;
  font-size: 43px;
  color: #fff;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const HeroText = styled.h1`
  font-weight: 400;
  font-size: 43px;
  color: #fff;
  padding: 0 20px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;
