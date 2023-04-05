import React from "react";
import { getFirestore, collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../service/firebase";
import BooksContainer from "../components/books/BooksContainer";
import BookList from "../components/books/BookList";
import Loader from "../components/loader/Loader";

// Our best sellers page - pulls data from firebase and displays to the user
// or shows errors or loading
function BestSellers() {
  const [value, loading, error] = useCollectionData(
    collection(db, "bestsellers")
  );

  return (
    <>
      <BooksContainer title="New York Times Best Sellers">
        <>
          {loading && <Loader size={64} color="#93B4BC" sizeUnit="px" />}
          {error && <p>Error</p>}
          {value && <BookList data={value} />}
        </>
      </BooksContainer>
    </>
  );
}

export default BestSellers;
