import React from "react";

import { LoaderContainer, Loader as StyledLoader } from "./Loader.styles";

interface Props {
  color: string;
  size: number;
  sizeUnit: string;
}

const Loader = ({ color = "#00bfff", size = 64, sizeUnit = "px" }: Props) => (
  <LoaderContainer>
    <StyledLoader color={color} size={size} sizeUnit={sizeUnit}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </StyledLoader>
  </LoaderContainer>
);

export default Loader;
