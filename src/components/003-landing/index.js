import React from 'react';
import { FaBookDead } from 'react-icons/fa';
import { Container, Content, Header, Main, SignUp } from './style';

const LandingPage = () => (
  <Container>
    <Content>
      <Header>
        <span>Company Name</span>
        <div>
          <div className="page-title">
            <h1>What is an eBook?</h1>
            <span>The true story behind the bits</span>
          </div>
          <div className="illustration">
            <FaBookDead />
          </div>
        </div>
      </Header>
      <Main>MAIN</Main>
    </Content>
    <SignUp>FORM</SignUp>
  </Container>
);

export default LandingPage;
