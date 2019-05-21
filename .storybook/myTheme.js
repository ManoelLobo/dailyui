import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#003E25',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#CAE3CD',
  // appBorderRadius: 4,

  // Typography
  fontBase: '"Raleway","Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#002212',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#F2F9F3',
  barSelectedColor: '#CAE3CD',
  barBg: '#002212',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: "Manoel's Daily UI",
  brandUrl: 'https://manoelsdailyui.netlify.com',
  brandImage: '',
});
