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

        <label htmlFor="card">Card #</label>
        <input
          type="number"
          min="1000000000000000"
          max="9999999999999999"
          name="card"
          id="card"
          className="first-liner"
          placeholder="Card number"
        />

        <div className="halfer">
          <label htmlFor="expiry">Expiry date</label>
          <input
            type="text"
            pattern="\d\d\/\d\d"
            maxLength={5}
            name="expiry"
            id="expiry"
            placeholder="12/12"
            className="bottom-liner-left"
          />

          <label htmlFor="cvc">Card Verification Code</label>
          <input
            type="number"
            min="100"
            max="999"
            name="cvc"
            id="cvc"
            placeholder="CVC"
            className="bottom-liner-right"
          />
        </div>

        <hr />

        <button type="button">Confirm purchase</button>
      </form>
    </Main>
  </Container>
);

export default Checkout;
