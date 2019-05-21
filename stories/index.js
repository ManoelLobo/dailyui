import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

storiesOf('btn', module)
  .add('Accessible', () => <button>OK</button>)
  .add('Inaccessible', () => (
    <button style={{ color: 'white', background: 'red' }}>Not OK</button>
  ));
