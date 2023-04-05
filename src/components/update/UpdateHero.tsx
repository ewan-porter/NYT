import React from "react";
import { Hero, BookSpan, HeroText } from "./UpdateHero.styles";
interface Props {
  book: string;
  author: string;
}

// A basic hero image as per the wireframes
const UpdateHero = ({ book, author }: Props) => {
  return (
    <Hero>
      <HeroText>
        <BookSpan>{book} </BookSpan>by {author}
      </HeroText>
    </Hero>
  );
};

export default UpdateHero;
