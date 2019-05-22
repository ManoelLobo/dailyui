import React from 'react';
import { storiesOf } from '@storybook/react';

import SignUp from '../src/components/001-signup';

storiesOf('DailyUI #001', module).add('SignUp', () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
    <SignUp />
  </div>
));
