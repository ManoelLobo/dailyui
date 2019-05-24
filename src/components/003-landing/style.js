import styled from 'styled-components';

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
  flex: 2;
`;

export const Header = styled.header`
  flex: 3;
`;

export const SignUp = styled.div`
  flex: 1;
  min-width: 300px;
`;
