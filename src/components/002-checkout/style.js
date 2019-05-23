import styled from 'styled-components';
import { gray } from '../../style/colors';

export const Container = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  background: ${gray[100]};

  font-size: 0.8rem;
  color: ${gray[900]};

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px 10px 0 0;
  background: ${gray[200]};

  h1 {
    font-size: 1rem;
  }

  hr {
    width: 50%;
    border: 1px solid ${gray[300]};
  }

  .user-email {
    font-size: 0.7rem;
    color: ${gray[700]};
  }
`;

export const Main = styled.main`
  display: flex;
  flex: 2;
  width: 100%;
  padding: 15px;

  form {
    display: flex;
    flex: 1;
    flex-direction: column;

    label {
      clip-path: inset(100%);
      clip: rect(1px 1px 1px 1px); /* IE 6/7 */
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap; /* added line */
      width: 1px;
    }

    input {
      width: 100%;
      font-size: 0.7rem;
      padding: 6px;
      border: 1px solid ${gray[200]};
      margin-bottom: -1px;

      &.first-liner {
        border-radius: 3px 3px 0 0;
      }

      &.bottom-liner-left {
        border-radius: 0 0 0 3px;
      }

      &.bottom-liner-right {
        border-radius: 0 0 3px 0;
      }
    }

    .halfer {
      display: flex;
      width: 100%;
      flex-direction: row;
    }
  }

  hr {
    width: 75%;
    border: 1px solid ${gray[300]};
  }
`;
