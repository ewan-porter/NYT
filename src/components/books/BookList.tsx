import { DocumentData } from "firebase/firestore";
import Book from "./Book";
import { Container } from "./BookList.styles";
import React from "react";
type Props = {
  data: DocumentData[];
};

const BookList = ({ data }: Props) => {
  return (
    <Container>
      {data.map((item, i) => {
        return <Book key={i} item={item} />;
      })}
    </Container>
  );
};

export default BookList;
