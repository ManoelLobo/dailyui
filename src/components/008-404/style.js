import styled from 'styled-components';
import { primary } from '../../style/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  a {
    color: ${primary[500]};
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 48px;
    padding: 10px;
    background: ${primary[900]};

    font-family: Lato, sans-serif;
    color: ${primary[100]};
  }

  .content {
    padding: 100px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    grid-column-gap: 15px;
    grid-row-gap: 15px;

    color: ${primary[900]};

    max-width: 960px;

    .label-404 {
      grid-area: 1 / 1 / 2 / 2;

      font-weight: bolder;
      font-size: 1.5rem;
    }

    .description {
      grid-area: 2 / 2 / 3 / 3;
    }
  }
`;
