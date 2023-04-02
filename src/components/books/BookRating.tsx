import React, { useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { LikeLink } from "./Book.style";
import { rateBook } from "../../service/api";

type Props = {
  initialRating: number;
  book: string;
};
type ClickHandler = (e: React.MouseEvent, i: number) => void;
const BookRating = ({ initialRating = 0, book }: Props) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleClick: ClickHandler = (e, i) => {
    e.preventDefault();
    rateBook(book, i);
  };
  return (
    <>
      {[...Array(5)].map((e, i) => {
        i += 1;
        return (
          <LikeLink
            key={i}
            onClick={(e) => {
              handleClick(e, i);
              setRating(i);
            }}
            onDoubleClick={() => {
              setRating(0);
              setHover(0);
            }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(rating)}
          >
            {i <= (hover || rating) ? <BsStarFill /> : <BsStar />}
          </LikeLink>
        );
      })}
    </>
  );
};

export default BookRating;
