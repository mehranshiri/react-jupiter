import { create } from '@storybook/theming/create';
import defaultTheme from '../src/components/themes';

const { darkBlue600, blue600, gray200, white, gray400, riverBedDark, blue400 } = defaultTheme.colors;

export default create({
  base: 'light',

  colorPrimary: darkBlue600,
  colorSecondary: blue600,

  // UI
  appBg: gray200,
  appContentBg: white,
  appBorderColor: gray400,
  appBorderRadius: 3,

  // Text colors
  textColor: riverBedDark,
  textInverseColor: white,

  // Toolbar default and active colors
  barTextColor: white,
  barSelectedColor: blue400,
  barBg: darkBlue600,

  brandTitle: 'Evand',
  brandUrl: 'https://evand.com',
  brandImage: '/logo.svg',
});
