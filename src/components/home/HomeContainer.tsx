import React from "react";
import { Container } from "./HomeContainer.styles";

type Props = {
  children: JSX.Element;
};

// Container for the home screen
const HomeContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default HomeContainer;
