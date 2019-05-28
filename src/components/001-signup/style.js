import styled from 'styled-components';
import * as colors from '../../style/colors';

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

    margin: 40px;
  }

  a {
    color: ${colors.gray[100]};
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
    color: ${colors.gray[100]};
    display: flex;
    flex: 1;

    .social-buttons {
      margin: 2rem;

      a {
        margin: 0.5rem;

        span {
          clip-path: inset(100%);
          clip: rect(1px 1px 1px 1px); /* IE 6/7 */
          clip: rect(1px, 1px, 1px, 1px);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap; /* added line */
          width: 1px;
        }
      }
    }
  }

  .email-signup {
    color: ${colors.primary[800]};

    form button {
      margin-top: 1rem;
      padding: 0.3rem;
      font-size: 1.2rem;

      border: 0;
      border-radius: 3px;
      box-shadow: 1px 1px 0px 1px ${colors.primary[200]};

      color: ${colors.primary[100]};
      background: ${colors.primary[500]};
    }
  }
`;

export const Field = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 1rem;

  label {
    font-size: 0.75rem;
  }

  input {
    width: 100%;
    border: 1px solid ${colors.primary[200]};
    border-radius: 3px;
    box-shadow: inset 1px 1px 2px 0px ${colors.primary[200]};

    padding: 0.5rem 0.2rem;

    font-size: 1.1rem;
  }
`;
