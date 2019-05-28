import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import { GlobalStyle } from '../src/style';
import myTheme from './myTheme';

addParameters({
  options: { theme: myTheme },
});

function loadStories() {
  require('../stories/index.js');
}

const withGlobal = cb => (
  <>
    <GlobalStyle />
    {cb()}
  </>
);

addDecorator(withGlobal);
addDecorator(withA11y);

configure(loadStories, module);
