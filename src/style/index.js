import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
  }

  html{
    @import url('https://fonts.googleapis.com/css?family=Lato|Raleway&display=swap');
    font-size: 20px;
  }
`;
