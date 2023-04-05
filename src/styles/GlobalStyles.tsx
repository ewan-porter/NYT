// Global styles for styled-components

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
  font-family: 'Lato', sans-serif;
  background-color: #E9EDF6;
}
h1 {
  font-weight: 800;
  color: #000000;
  font-size: 23px
}

h2 {
  color: #454664;
  font-size: 22px;
  font-weight: 700;
}

h3 {
  color: #454664;
  font-size: 20px;
  font-weight: 700;
}

h4 {
  color: #454664;
  font-size: 16px;
  font-weight: 700;
}
p {
  font-size: 16px;
  color: #5b5b5b;
}
`;

export default GlobalStyles;
