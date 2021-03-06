import styled from 'styled-components';
import { primary, secondary, gray } from '../../style/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;

  font-family: Raleway, sans-serif;
  background: ${gray[100]};

  margin: 0;
  padding: 0;
`;

export const PageHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  padding: 10px;
  background: ${primary[900]};

  font-family: Lato, sans-serif;
  color: ${primary[100]};

  a {
    color: ${secondary[100]};
    text-decoration: none;
    margin: 10px;
  }

  .settings {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      height: 28px;
    }
  }
`;

export const Content = styled.main`
  width: 960px;
  font-size: 0.9rem;
  color: ${gray[900]};
  padding-top: 20px;

  input,
  select,
  button,
  textarea {
    margin-top: 5px;
    margin-bottom: 20px;
    padding: 8px;
    font-size: 1rem;
    border: 1px solid ${gray[200]};
    border-radius: 6px;
    background: white;
  }

  fieldset {
    border: 0;
    border-bottom: 2px solid ${gray[300]};
    margin-top: 20px;
    padding: 10px 0;

    legend {
      text-transform: uppercase;
      font-weight: bold;
    }

    .field-block {
      display: flex;
      flex-direction: row;

      .hint {
        display: flex;
        flex: 1;

        color: ${gray[700]};
        font-size: 0.75rem;
      }
      .fields {
        display: flex;
        flex: 2;
        flex-direction: column;

        label {
          font-weight: bold;
        }

        label input[type='checkbox'] {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }

        .button-secondary {
          background: ${gray[700]};
          color: ${gray[100]};

          width: 40%;
        }
      }
    }
  }

  .form-confirmation {
    text-align: right;

    button {
      margin-left: 10px;
      border: 0;

      &.button-primary {
        background: ${secondary[800]};
        color: ${secondary[100]};
      }

      &.button-cancel {
        border: 1px solid${secondary[800]};
        color: ${secondary[800]};
      }
      }
    }
  }
`;
