import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { Child } from './componentWrapper.styles';
import GlobalStyle from '../globalStyle';
import defaultTheme from '../themes';

export const GlobalAndThemeWrapper = (props) => {
  const { theme, children, isBold } = props;
  if (children === undefined) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Child isBold={isBold}>
          {children}
        </Child>
      </>
    </ThemeProvider>
  );
};

GlobalAndThemeWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
  isBold: PropTypes.bool,
};

GlobalAndThemeWrapper.defaultProps = {
  theme: defaultTheme,
  isBold: false,
};
