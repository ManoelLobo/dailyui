import React from 'react';
import { storiesOf } from '@storybook/react';

import { GlobalStyle } from '../src/style';
import SignUp from '../src/components/001-signup';
import Checkout from '../src/components/002-checkout';
import LandingPage from '../src/components/003-landing';

storiesOf('DailyUI #001', module).add('SignUp', () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
    <SignUp />
  </div>
));

storiesOf('DailyUI #002', module).add('Credit Card Checkout', () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '20px',
      background: 'rgba(0,0,0,.35)',
    }}
  >
    <GlobalStyle />
    <Checkout />
  </div>
));

storiesOf('DailyUI #003', module).add('Landing Page', () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
    <GlobalStyle />
    <LandingPage />
  </div>
));
