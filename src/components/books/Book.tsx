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

const Book = ({ item, favourites }: Props) => {

  // Click handler for adding liked books to the firebase instance
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
        {favourites && (
          <Flex>
            <Edit to={`update/${item.id}`}>Edit</Edit>
            <Delete onClick={handleClick}>Delete</Delete>
          </Flex>
        )}
        <LikeLink onClick={handleClick}>
          {item.liked === true ? <HeartFilled /> : <Heart />}
        </LikeLink>
      </Flex>
    </Container>
  );
};

export default Book;
