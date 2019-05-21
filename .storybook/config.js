import { configure, addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import myTheme from './myTheme';

addParameters({
  options: { theme: myTheme },
});

function loadStories() {
  require('../stories/index.js');
}

addDecorator(withA11y);

configure(loadStories, module);
