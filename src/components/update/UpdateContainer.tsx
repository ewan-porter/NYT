import React from "react";
import { Container } from "./UpdateContainer.styles";

type Props = {
  children: JSX.Element;
};

const UpdateContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default UpdateContainer;
