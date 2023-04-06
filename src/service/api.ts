import React from "react";
import { db } from "./firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import axios from "axios";

// To help us persist the front end state (favourites, rating etc) I hooked the app up to a firebase instance
// All our data is stored there and means we can mutate it more easily
// Wrote some reusable functions for interacting with the db
// I also used a third party library the allowed for easier fetching from firecloud

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
export interface IData {
  status: string;
  copyright: string;
  num_results: number;
  last_modified: Date;
  results: Result[];
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

// Function to fetch from the NYT api and post it to firebase
export const fetchDataAndPostToFirestore = async () => {
  try {
    const {
      data: { results },
    } = await axios<IData>({
      method: "get",
      url: `${process.env.REACT_APP_NYT_ENDPOINT}?api-key=${process.env.REACT_APP_NYT_API_KEY}`,
      params: {
        list: "Combined Print and E-Book Fiction",
      },
    });

    results.forEach(
      async ({
        book_details: [{ title, primary_isbn13, description, author, price }],
      }) => {
        await setDoc(
          doc(db, "bestsellers", `${primary_isbn13}`),
          {
            id: primary_isbn13,
            title: title,
            description: description,
            author: author,
            price: price,
          },
          { merge: true }
        );
      }
    );
  } catch (error) {
    console.error(error);
  }
};

// Reusable function for liking books
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

// Reusable function for rating books
export const rateBook = async (book: string, rating: number) => {
  setDoc(
    doc(db, "bestsellers", `${book}`),
    {
      rating: rating,
    },
    { merge: true }
  );
};

// Reusable function for editing book prices

export const editPrice = async (book: string, price: string) => {
  setDoc(
    doc(db, "bestsellers", `${book}`),
    {
      price: price,
    },
    { merge: true }
  );
};
