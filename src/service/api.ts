import React, { useEffect } from "react";
import { db } from "./firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";

import axios from "axios";

export interface IData {
  status: string;
  copyright: string;
  num_results: number;
  last_modified: Date;
  results: Result[];
}

export interface Result {
  list_name: string;
  display_name: string;
  bestsellers_date: Date;
  published_date: Date;
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  asterisk: number;
  dagger: number;
  amazon_product_url: string;
  isbns: Isbn[];
  book_details: BookDetail[];
  reviews: Review[];
}

export interface BookDetail {
  title: string;
  description: string;
  contributor: string;
  author: string;
  contributor_note: string;
  price: string;
  age_group: string;
  publisher: string;
  primary_isbn13: string;
  primary_isbn10: string;
}

export interface Isbn {
  isbn10: string;
  isbn13: string;
}

export interface Review {
  book_review_link: string;
  first_chapter_link: string;
  sunday_review_link: string;
  article_chapter_link: string;
}

const fetchDataAndPostToFirestore = async () => {
  try {
    const { data } = await axios<IData>({
      method: "get",
      url: "https://api.nytimes.com/svc/books/v3/lists.json?api-key=FGABxA5DDEtYZPrmSmVWYxwImNQcLTrH",
      params: {
        list: "Combined Print and E-Book Fiction",
      },
    });

    data.results.forEach(async (item) => {
      const docRef = await setDoc(
        doc(db, "bestsellers", `${item.book_details[0].primary_isbn13}`),
        {
          id: item.book_details[0].primary_isbn13,
          title: item.book_details[0].title,
          description: item.book_details[0].description,
          author: item.book_details[0].author,
          price: item.book_details[0].price,
          // age_group: string;
          // publisher: string;
          // isbns: Isbn[];
          // ranks_history: RanksHistory[];
          // reviews: Review[];
        },
        { merge: true }
      );
    });
  } catch (error) {
    console.error(error);
  }
};

const MyComponent: React.FC = () => {
  useEffect(() => {
    fetchDataAndPostToFirestore();
  }, []);

  return null;
};

export default MyComponent;

export const likeBook = async (book: string) => {
  const ref = (await getDoc(doc(db, "bestsellers", `${book}`))).data();

  const likedBool =
    ref?.liked == undefined || ref?.liked === false ? true : false;

  setDoc(
    doc(db, "bestsellers", `${book}`),
    {
      liked: likedBool,
    },
    { merge: true }
  );
};

export const rateBook = async (book: string, rating: number) => {
  setDoc(
    doc(db, "bestsellers", `${book}`),
    {
      rating: rating,
    },
    { merge: true }
  );
};