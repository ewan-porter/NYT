import React from "react";

import { DocumentData } from "firebase/firestore";
import { BsBook } from "react-icons/bs";
import {
  Container,
  Title,
  Author,
  Price,
  Flex,
  LikeLink,
  HeartFilled,
  Heart,
} from "./Book.style";
import { likeBook } from "../../service/api";
import BookRating from "./BookRating";

type Props = {
  item: DocumentData;
};

type ClickHandler = (e: React.MouseEvent) => void;

const Book = ({ item }: Props) => {
  const handleClick: ClickHandler = (e) => {
    e.preventDefault();
    likeBook(item.id);
  };
  return (
    <Container>
      <Flex>
        <BsBook />
        <Title>{item.title}</Title>
        <Author>by {item.author}</Author>
      </Flex>
      <Flex>
        <BookRating initialRating={item?.rating} book={item.id} />
        <Price>{Math.round(item.price)} GBP</Price>
        <LikeLink onClick={handleClick}>
          {item.liked === true ? <HeartFilled /> : <Heart />}
        </LikeLink>
      </Flex>
    </Container>
  );
};

export default Book;
