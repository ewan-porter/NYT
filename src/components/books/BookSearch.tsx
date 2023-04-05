import React from "react";
import {
  Search,
  SearchInput,
  Wrap,
  Submit,
  SubmitText,
  SearchIcon,
} from "./BookSearch.styles";
import { BsSearch } from "react-icons/bs";

interface Props {
  handleSearch: (e: string) => void;
}

// Search bar component
const BookSearch = ({ handleSearch }: Props) => {
  return (
    <Wrap>
      <Search>
        <SearchIcon>
          <BsSearch />
        </SearchIcon>
        <SearchInput
          placeholder="Search"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Submit>
          <SubmitText>go</SubmitText>
        </Submit>
      </Search>
    </Wrap>
  );
};

export default BookSearch;
