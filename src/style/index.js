import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    @import url('https://fonts.googleapis.com/css?family=Lato|Raleway&display=swap');
    font-family: 'Lato', sans-serif;
    font-size: 20px;
  }

  html, body, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
