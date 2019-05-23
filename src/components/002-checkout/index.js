import React from 'react';

import { Container, Header, Main } from './style';

const Checkout = () => (
  <Container>
    <Header>
      <h1>Company Name</h1>
      <span>The product #1</span>
      <hr />
      <span className="user-email">john@smith.com</span>
    </Header>
    <Main>Ok</Main>
  </Container>
);

export default Checkout;
