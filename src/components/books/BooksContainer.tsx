import React from 'react';
import { Container } from './BooksContainer.styles';

type Props = {
  title: string;
  children: JSX.Element;
};

const BooksContainer = ({ title, children }: Props) => {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
};

export default BooksContainer;
