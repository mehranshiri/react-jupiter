import defaultTheme from '../themes';

const theme = {
  size: {
    lg: {
      padding: '4px 48px',
      font: 20,
      minWidth: 172,
      height: 56,
    },
    md: {
      padding: '4px 32px',
      font: 14,
      minWidth: 128,
      height: 48,
    },
    sm: {
      padding: '2px 16px',
      font: 10,
      minWidth: 80,
      height: 36,
    },
  },
  colors: defaultTheme.colors,
  borderRadius: defaultTheme.borderRadius.low,
};

export default theme;
