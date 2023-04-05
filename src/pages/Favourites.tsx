import React from "react";
import BookList from "../components/books/BookList";
import BooksContainer from "../components/books/BooksContainer";
import { collection, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../service/firebase";

// Similar set up to the best sellers page but we're fetching "liked" books now
function Favourites() {
  const [value, loading, error] = useCollectionData(
    query(collection(db, "bestsellers"), where("liked", "==", true))
  );
  return (
    <>
      <BooksContainer title="New York Times Best Sellers">
        <>
          {loading && <p>Loading</p>}
          {error && <p>Error</p>}
          {value && <BookList data={value} favourites={true} />}
        </>
      </BooksContainer>
    </>
  );
}

export default Favourites;
