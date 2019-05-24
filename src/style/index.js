import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{
    @import url('https://fonts.googleapis.com/css?family=Lato|Raleway&display=swap');
    font-size: 20px;
  }

  html, body, * {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
