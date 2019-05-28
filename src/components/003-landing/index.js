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
            <FaBookDead style={{ height: '50%', width: '50%' }} />
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
    <SignUp>
      <h2>Get your free eBook</h2>
      <form>
        <label htmlFor="name">Your best name</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="email">Your best email</label>
        <input type="text" name="email" id="email" />

        <label htmlFor="selection1">Your best choice</label>
        <select name="selection1" id="selection1">
          <option value="1">This</option>
          <option value="2">That</option>
        </select>

        <label htmlFor="company">Your best company name</label>
        <input type="text" name="company" id="company" />

        <label htmlFor="captcha">Are you a robot?</label>
        <input type="text" name="captcha" id="captcha" />

        <button type="button">I want this eBook</button>
      </form>
      <span className="disclaimer">
        <p>
          We promise we won't use your data for anything and you will not
          receive any eBook, according to our non-existing{' '}
          <a href="/">Terms of Service</a>
        </p>
      </span>
    </SignUp>
  </Container>
);

export default LandingPage;
