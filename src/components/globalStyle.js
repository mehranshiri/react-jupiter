import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    outline: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
