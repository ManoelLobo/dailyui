import styled from 'styled-components';
import { primary, secondary, gray } from '../../style/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 600px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  min-width: 400px;
`;

export const Main = styled.main`
  display: flex;
  flex: 2;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;

  background: ${gray[200]};

  color: ${gray[700]};
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;

  span {
    flex: 1;
    margin-right: 20px;

    p,
    ul {
      margin-bottom: 15px;
    }

    ul {
      margin-left: 20px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  flex: 4;
  padding: 20px;

  background: ${secondary[600]};
  color: ${secondary[100]};

  font-size: 1.2rem;

  h1 {
    font-size: 1.5rem;
  }

  div {
    display: flex;
    flex: 1;

    .page-title {
      flex-direction: column;
      justify-content: center;
    }

    .illustration {
      align-items: center;
      font-size: 8rem;
      color: ${primary[500]};
    }
  }
`;

export const SignUp = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 20px;

  background: ${primary[700]};
  color: ${primary[200]};
`;
