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
      <Main>
        <span>
          <p>
            Have you always wondered what is all the fuss about eBooks? No?
            Neither did we! That's why we created this completely bogus landing
            page, just for no one!
          </p>
          <p>
            It will be a deep dive through a shallow subject, and the results
            are guaranteed to be none.
          </p>
        </span>
        <span>
          <p>What you will get in this package:</p>
          <ul>
            <li>One important thing first</li>
            <li>Other important thing, but less important than the previous</li>
            <li>The most important thing</li>
            <li>Other superfluous, filler things</li>
          </ul>
          <p>All that (and much more) for FREE!!!</p>
        </span>
      </Main>
    </Content>
    <SignUp>FORM</SignUp>
  </Container>
);

export default LandingPage;
