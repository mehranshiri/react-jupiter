import { createGlobalStyle } from 'styled-components';
import IranSharpRegularWoff2 from './assets/fonts/iransharp_regular_web.woff2';
import IranSharpBoldWoff2 from './assets/fonts/iransharp_bold_web.woff2';
import IranSharpRegularWoff from './assets/fonts/iransharp_regular_web.woff';
import IranSharpBoldWoff from './assets/fonts/iransharp_bold_web.woff';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'IranSharp';
    font-style: normal;
    font-weight: bold;
    src: url(${IranSharpBoldWoff2}) format('woff2'), url(${IranSharpBoldWoff}) format('woff');
  }

  @font-face {
    font-family: 'IranSharp';
    font-style: normal;
    font-weight: 300;
    src: url(${IranSharpRegularWoff2}) format('woff2'), url(${IranSharpRegularWoff}) format('woff');
  }
`;

export default GlobalStyle;
