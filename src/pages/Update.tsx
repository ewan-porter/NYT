import React from "react";
import UpdateContainer from "../components/update/UpdateContainer";
import UpdateHero from "../components/update/UpdateHero";
import UpdateForm from "../components/update/UpdateForm";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "../service/firebase";
import { useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";

const Update = () => {
  const { bookId } = useParams<{ bookId: string }>();

  const [value, loading, error] = useDocumentData(
    doc(db, "bestsellers", bookId!)
  );

  return (
    <UpdateContainer>
      <>
        {loading && <Loader size={64} color="#93B4BC" sizeUnit="px" />}
        {error && <p>Error</p>}
        {value && (
          <>
            <UpdateHero book={value.title} author={value.author} />
            <UpdateForm
              price={value.price}
              rating={value.rating}
              id={bookId!}
            />
          </>
        )}
      </>
    </UpdateContainer>
  );
};

export default Update;
