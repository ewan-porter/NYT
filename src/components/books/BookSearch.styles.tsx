import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
`;

export const Search = styled.div`
  width: calc(100% - 10px);
  display: flex;
  padding-bottom: 20px;
  height: 61px;
`;

export const SearchIcon = styled.div`
  border-radius: 41px 0 0 41px;
  color: #5b5b5b;
  padding-left: 1px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  padding-right: 5px;
  font-size: 16px;
  color: #5b5b5b;
  outline: none;
  &:focus {
    color: #454664;
  }
`;

export const Submit = styled.button`
  width: 50px;

  border: 1px solid #93b4bc;
  background: #93b4bc;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 0 41px 41px 0;
  cursor: pointer;
`;

export const SubmitText = styled.h4`
  text-transform: uppercase;
`;
