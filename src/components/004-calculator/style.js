import styled from 'styled-components';
import { primary, secondary, gray } from '../../style/colors';

export const Container = styled.div`
  width: 400px;
  height: 500px;
  background: ${primary[800]};
  background: linear-gradient(to bottom right, ${primary[900]}, ${gray[600]});
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 3px;
  grid-row-gap: 3px;

  button {
    border: 0;
    font-size: 1.5rem;

    color: ${secondary[100]};
  }

  .display {
    display: grid;
    grid-area: 1 / 1 / 2 / 5;
    align-content: center;
    justify-content: end;
    padding: 10px;

    font-size: 2rem;
    color: ${primary[100]};
  }

  .button-modifier {
    background: ${primary[400]};
  }

  .button-operation {
    background: ${secondary[600]};
  }

  .button-number,
  .button-decimal,
  .button-backspace {
    background: ${primary[300]};
  }

  .button-c {
    grid-area: 2 / 1 / 3 / 2;
  }

  .button-change {
    grid-area: 2 / 2 / 3 / 3;
  }

  .button-percent {
    grid-area: 2 / 3 / 3 / 4;
  }

  .button-7 {
    grid-area: 3 / 1 / 4 / 2;
  }

  .button-8 {
    grid-area: 3 / 2 / 4 / 3;
  }

  .button-9 {
    grid-area: 3 / 3 / 4 / 4;
  }

  .button-4 {
    grid-area: 4 / 1 / 5 / 2;
  }

  .button-5 {
    grid-area: 4 / 2 / 5 / 3;
  }

  .button-6 {
    grid-area: 4 / 3 / 5 / 4;
  }

  .button-1 {
    grid-area: 5 / 1 / 6 / 2;
  }

  .button-2 {
    grid-area: 5 / 2 / 6 / 3;
  }

  .button-3 {
    grid-area: 5 / 3 / 6 / 4;
  }

  .button-divide {
    grid-area: 2 / 4 / 3 / 5;
  }

  .button-multiply {
    grid-area: 3 / 4 / 4 / 5;
  }

  .button-subtract {
    grid-area: 4 / 4 / 5 / 5;
  }

  .button-sum {
    grid-area: 5 / 4 / 6 / 5;
  }

  .button-0 {
    grid-area: 6 / 1 / 7 / 2;
  }

  .button-decimal {
    grid-area: 6 / 2 / 7 / 3;
  }

  .button-backspace {
    grid-area: 6 / 3 / 7 / 4;
  }

  .button-result {
    grid-area: 6 / 4 / 7 / 5;

    background: ${secondary[100]};
    color: ${primary[900]};
  }
`;
