import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    direction: rtl;
    font-size: 13px;
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    outline: none;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

`;

export default GlobalStyle;

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-right: 180px;
`;
