import styled, { createGlobalStyle } from 'styled-components';
import IranSharpBoldWoff from './assets/fonts/iransharp_bold_web.woff';
import IranSharpBoldWoff2 from './assets/fonts/iransharp_bold_web.woff2';
import IranSharpRegularWoff from './assets/fonts/iransharp_regular_web.woff';
import IranSharpRegularWoff2 from './assets/fonts/iransharp_regular_web.woff2';
import IconMoonWoff from './assets/fonts/new-icomoon.woff';
import FilesImgsWoff from './assets/fonts/filesImgs.woff';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'IranSharp';
    font-style: normal;
    font-weight: bold;
    src:
      url(${IranSharpBoldWoff2}) format("woff2"),
      url(${IranSharpBoldWoff}) format("woff");
  }
  @font-face {
    font-family: 'IranSharp';
    font-style: normal;
    font-weight: 300;
    src:
      url(${IranSharpRegularWoff2}) format("woff2"),
      url(${IranSharpRegularWoff}) format("woff");
  }
  @font-face {
    font-family: 'Jupiterico';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url(${IconMoonWoff}) format("woff");
  }

  @font-face {
    font-family: 'JupiterfilesImgs';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url(${FilesImgsWoff}) format("woff");
  }

  body {
    box-sizing: border-box;
    direction: rtl;
    font-size: 13px;
    height: 100%;
  }

`;

export default GlobalStyle;

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-right: 180px;
`;
