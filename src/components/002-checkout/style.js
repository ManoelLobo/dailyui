import styled from 'styled-components';
import { gray } from '../../style/colors';

export const Container = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  background: ${gray[100]};

  font-size: 0.8rem;

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
  }

  .user-email {
    font-size: 0.7rem;
    color: ${gray[700]};
  }
`;

export const Main = styled.main`
  flex: 2;
  padding: 15px;
`;
