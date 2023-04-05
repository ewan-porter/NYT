import React from "react";
import { Title, Flex, Image } from "./HomeGrid.styles";

interface Props {
  title: string;
  images: string[];
  pathname: string;
}

// Basic home page grid with images

const HomeGrid = ({ title, pathname, images }: Props) => {
  return (
    <>
      <Title to={pathname}>{title}</Title>
      <Flex>
        {images.map((image, i) => (
          <Image key={i} src={image} />
        ))}
      </Flex>
    </>
  );
};

export default HomeGrid;
