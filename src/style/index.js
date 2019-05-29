import { createGlobalStyle } from 'styled-components';
import 'typeface-lato';
import 'typeface-raleway';

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Lato', sans-serif;
    font-size: 20px;
  }

  html, body, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
