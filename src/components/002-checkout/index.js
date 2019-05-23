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
    <Main>
      <form>
        <label htmlFor="cardholder">Name</label>
        <input
          type="text"
          name="cardholder"
          id="cardholder"
          placeholder="Name"
          className="first-liner"
        />
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" placeholder="Address" />

        <div className="halfer">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City"
            className="bottom-liner-left"
          />

          <label htmlFor="postalcode">Name</label>
          <input
            type="text"
            name="postalcode"
            id="postalcode"
            placeholder="Postal Code"
            className="bottom-liner-right"
          />
        </div>

        <hr />
      </form>
    </Main>
  </Container>
);

export default Checkout;
