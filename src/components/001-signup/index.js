import React from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

import { Container, Field, GlobalStyle } from './style';

const SignUp = () => (
  <Container>
    <GlobalStyle />
    <div className="social-signup">
      <h1>Join THE-APP</h1>

      <span>Sign up with your social accounts</span>
      <div className="social-buttons">
        <FaGoogle />
        <FaFacebookF />
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
