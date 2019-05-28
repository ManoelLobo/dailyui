import React from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

import { Container, Field } from './style';

const SignUp = () => (
  <Container>
    <div className="social-signup">
      <h1>Join THE-APP</h1>

      <span>Sign up with your social accounts</span>
      <div className="social-buttons">
        <a href="/">
          <span>Join with yor Google account</span>
          <FaGoogle aria-hidden />
        </a>
        <a href="/">
          <span>Join with yor Facebook account</span>
          <FaFacebookF aria-hidden />
        </a>
      </div>
    </div>
    <div className="email-signup">
      <form>
        Or use your email
        <Field>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@yourmail.com"
          />
        </Field>
        <Field>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
          />
        </Field>
        <button>Sign Up</button>
      </form>
    </div>
  </Container>
);

export default SignUp;
