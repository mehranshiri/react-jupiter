import defaultTheme from '../themes';

const theme = {
  borderRadius: defaultTheme.borderRadius.low,
  borderColor: {
    normal: defaultTheme.colors.gray800,
    hover: defaultTheme.colors.blue400,
    focus: defaultTheme.colors.blue600,
  },
  disabled: {
    background: defaultTheme.colors.gray200,
    color: defaultTheme.colors.gray400,
  },
};

export default theme;
