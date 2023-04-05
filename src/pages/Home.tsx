import React, { useEffect, useState } from "react";
import BookSearch from "../components/books/BookSearch";

import { categoryData } from "../data/categories";
import HomeContainer from "../components/home/HomeContainer";
import HomeGrid from "../components/home/HomeGrid";

export interface categoryType {
  [field: string]: any;
}

// The app home pahe
// Uses a useffect and state to allow for realtime filtering of the categories
// We pull the categories from a stored array which would be kept on a backend in a real world scenario
const Home = () => {
  const [categories, setCategories] = useState<categoryType>();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (search: string) => {
    setSearchTerm(search);
  };

  useEffect(() => {
    setCategories(categoryData);
    const filteredData = categoryData.filter((category) =>
      category.title.toLowerCase().includes(searchTerm?.toLocaleLowerCase())
    );
    setCategories(filteredData);
  }, [categoryData, searchTerm]);
  return (
    <>
      <HomeContainer>
        <>
          <BookSearch handleSearch={handleSearch} />
          {categories?.map((category: categoryType, i: number) => (
            <HomeGrid
              key={i}
              title={category.title}
              images={category.images}
              pathname={category.pathname}
            />
          ))}
        </>
      </HomeContainer>
    </>
  );
};

export default Home;
