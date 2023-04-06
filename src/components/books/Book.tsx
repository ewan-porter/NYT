import React from "react";

import { DocumentData } from "firebase/firestore";
import { BsBook } from "react-icons/bs";
import {
  Container,
  Title,
  Edit,
  Delete,
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
  favourites?: boolean;
};

type ClickHandler = (e: React.MouseEvent) => void;

// Our Book component for displaying an individual book in the list

const Book = ({
  item: { title, id, author, price, rating, liked },
  favourites,
}: Props) => {
  // Click handler for adding liked books to the firebase instance
  const handleClick: ClickHandler = (e) => {
    e.preventDefault();
    likeBook(id);
  };
  return (
    <Container>
      <Flex>
        <BsBook />
        <Title>{title}</Title>
        <Author>by {author}</Author>
      </Flex>
      <Flex>
        <BookRating initialRating={rating} book={id} />
        <Price>{Math.round(price)} GBP</Price>
        {favourites && (
          <Flex>
            <Edit to={`${id}`}>Edit</Edit>
            <Delete onClick={handleClick}>Delete</Delete>
          </Flex>
        )}
        <LikeLink onClick={handleClick}>
          {liked === true ? <HeartFilled /> : <Heart />}
        </LikeLink>
      </Flex>
    </Container>
  );
};

export default Book;
