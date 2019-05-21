import React from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 5px 1px #f2f2f2;
  border-radius: 5px;

  background: #fcfcfc;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 960px;
  min-width: 400px;
  height: 500px;
  min-height: 350px;

  .social-signup,
  .email-signup {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex: 1;

    height: 100%;

    padding: 1em;
    justify-content: center;
    align-items: center;
  }

  .social-signup {
    background: #00611b;
    border-radius: 5px 0 0 5px;
    color: #f2f9f3;
  }

  .email-signup {
    color: #002212;
  }
`;

const Field = styled.div`
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 1em;
`;

const SignUp = () => (
  <Container>
    <div className="social-signup">
      <h1>Sign up for THE-APP</h1>
      <div>
        Sign up with your social accounts
        <div>
          <FaGoogle />
          <FaFacebookF />
        </div>
      </div>
    </div>
    <div className="email-signup">
      <form>
        Or use your email
        <Field>
          <input id="email" name="email" type="email" />
          <label htmlFor="email">Email</label>
        </Field>
        <Field>
          <input id="password" name="password" type="password" />
          <label htmlFor="password">Password</label>
        </Field>
        <button>Sign Up</button>
      </form>
    </div>
  </Container>
);

export default SignUp;
