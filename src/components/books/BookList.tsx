import { DocumentData } from "firebase/firestore";
import Book from "./Book";
import { Container } from "./BookList.styles";
import React, { useEffect, useState } from "react";
import BookSearch from "./BookSearch";
type Props = {
  data: DocumentData[];
  favourites?: boolean;
};

// Component for rendering list of books
const BookList = ({ data, favourites }: Props) => {
  const [books, setBooks] = useState<DocumentData[]>();
  const [searchTerm, setSearchTerm] = useState<string | undefined>("");


  // Search handler for realtime filtering of books
  const handleSearch = (search: string) => {
    setSearchTerm(search);
  };

  // Use effect to enable the filtered list to be updated
  useEffect(() => {
    setBooks(data);
    const filteredData = data.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm?.toLocaleLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm?.toLocaleLowerCase())
    );

    setBooks(filteredData);
  }, [data, searchTerm]);


  
  return (
    <Container>
      <BookSearch handleSearch={handleSearch} />
      {books?.map((item, i) => {
        return <Book key={i} item={item} favourites={favourites} />;
      })}
    </Container>
  );
};

export default BookList;
