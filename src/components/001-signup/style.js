import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../../style/colors';

export const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato|Raleway&display=swap');
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`;

export const Container = styled.div`
  font-family: 'Lato', sans-serif;
  box-shadow: 5px 5px ${colors.primary[100]};
  border-radius: 5px;

  background: ${colors.gray[100]};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 960px;
  min-width: 400px;
  height: 500px;
  min-height: 350px;

  h1 {
    font-family: 'Raleway', sans-serif;
    font-size: 2rem;
    text-shadow: 1px 1px 1px ${colors.gray[100]};
  }

  .social-signup,
  .email-signup {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex: 1;

    height: 100%;

    padding: 1em;
    justify-content: center;
    align-items: center;
  }

  .social-signup {
    background: ${colors.primary[500]};
    border-radius: 5px 0 0 5px;
    color: #f2f9f3;
  }

  .email-signup {
    color: ${colors.primary[800]};
  }
`;

export const Field = styled.div`
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 1em;
`;
