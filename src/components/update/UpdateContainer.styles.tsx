import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  padding-top: 100px;
  padding-right: 15px;
  padding-left: 96px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 768px) {
    width: 20vw;
    padding-left: 60px;
  }
  @media (max-width: 992px) {
    width: 90vw;
  }
  @media (max-width: 1200px) {
    width: 80vw;
  }
`;
