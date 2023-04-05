import React, { useState } from "react";
import {
  Button,
  Container,
  Edit,
  EditInput,
  EditLabel,
  Heading,
  LinkContainer,
  LinkText,
} from "./UpdateForm.styles";
import { BsArrowLeft, BsStar, BsStarFill } from "react-icons/bs";
import { LikeLink } from "../books/Book.style";

import { editPrice, rateBook } from "../../service/api";

interface Props {
  price: string;
  rating: number;
  id: string;
}

type ChangeHandler = (fieldName: string) => (e: React.SyntheticEvent) => void;

type ClickHandler = (e: React.MouseEvent, i: number) => void;

type SubmitHandler = (e: React.SyntheticEvent) => void;

// Form for updating the rating and price for our favourites
const UpdateForm = ({ price, rating = 0, id }: Props) => {
  const [values, setValues] = useState({
    price: price,
    rating: rating,
  });
  const [hover, setHover] = useState(0);

  // function to prevent users from typing letters into input box
  const numberInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    (event.target as HTMLInputElement).style.width = (
      event.target as HTMLInputElement
    ).value.length.toString();
    const eventCode = event.code.toLowerCase();
    if (
      !(
        event.code !== null &&
        (eventCode.includes("digit") ||
          eventCode.includes("arrow") ||
          eventCode.includes("period") ||
          eventCode.includes("home") ||
          eventCode.includes("end") ||
          eventCode.includes("backspace") ||
          (eventCode.includes("numpad") && eventCode.length === 7))
      )
    ) {
      event.preventDefault();
    }
  };

  // Event handlers for the user input
  const handleChange: ChangeHandler = (fieldName: string) => (event) => {
    setValues({
      ...values,
      [fieldName]: (event.target as HTMLInputElement).value,
    });
  };

  const handleClick: ClickHandler = (event, i) => {
    event.preventDefault();
    setValues({
      ...values,
      rating: i,
    });
  };

  // Submit handler to send the data to firecloud and let the user know it's been submitted
  const handleSubmit: SubmitHandler = (event) => {
    event.preventDefault();
    editPrice(id, values.price);
    rateBook(id, values.rating);
    alert("Form submitted");
  };
  return (
    <Container>
      <Heading>Edit</Heading>
      <form onSubmit={handleSubmit}>
        <Edit>
          <EditLabel>Cost</EditLabel>
          <EditInput
            type="number"
            step="0.01"
            pattern="[0-9]*"
            value={values.price}
            placeholder={price}
            onChange={handleChange("price")}
            onKeyDown={numberInputKeyDown}
          ></EditInput>
          <span style={{ marginRight: 60 }}>GBP</span>
        </Edit>

        <Edit>
          <EditLabel>Rating</EditLabel>

          {[...Array(5)].map((e, i) => {
            i += 1;
            return (
              <LikeLink
                key={i}
                onClick={(e) => {
                  handleClick(e, i);
                }}
                onDoubleClick={(e) => {
                  handleClick(e, 0);
                  setHover(0);
                }}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(values.rating)}
              >
                {i <= (hover || values.rating) ? <BsStarFill /> : <BsStar />}
              </LikeLink>
            );
          })}
        </Edit>
        <Button type="submit">update</Button>
      </form>
      <LinkContainer>
        <BsArrowLeft /> Return to:{" "}
        <LinkText to={"/favourites"}>Favourites</LinkText>
      </LinkContainer>
    </Container>
  );
};

export default UpdateForm;
