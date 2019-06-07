import React from 'react';
import { storiesOf } from '@storybook/react';

import SignUp from '../src/components/001-signup';
import Checkout from '../src/components/002-checkout';
import LandingPage from '../src/components/003-landing';
import Calculator from '../src/components/004-calculator';
import Logo from '../src/components/005-logo';
import UserProfile from '../src/components/006-profile';
import Settings from '../src/components/007-settings';
import Error404 from '../src/components/008-404';

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
    <Checkout />
  </div>
));

storiesOf('DailyUI #003', module).add('Landing Page', () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
    <LandingPage />
  </div>
));

storiesOf('DailyUI #004', module).add('Calculator', () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
    <Calculator />
  </div>
));

storiesOf('DailyUI #005', module).add('App Logo', () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
    <Logo />
  </div>
));

storiesOf('DailyUI #006', module).add('User Profile', () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
    <UserProfile />
  </div>
));

storiesOf('DailyUI #007', module).add('Settings Page', () => <Settings />);

storiesOf('DailyUI #008', module).add('404 Page', () => <Error404 />);
