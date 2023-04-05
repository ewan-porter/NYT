import React, { useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { LikeLink } from "./Book.style";
import { rateBook } from "../../service/api";

type Props = {
  initialRating: number;
  book: string;
};
type ClickHandler = (e: React.MouseEvent, i: number) => void;

// This component renders a list of stars to allow users to rate books and posts the results to the firbase instance
// Added some functionality to allow users to rate their books here rather than through the edit form
// It kind of makes the form redundant but felt like a nice feature to include

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
            {i <= (hover || rating) ? (
              <BsStarFill color="#E08D3A" />
            ) : (
              <BsStar />
            )}
          </LikeLink>
        );
      })}
    </>
  );
};

export default BookRating;
