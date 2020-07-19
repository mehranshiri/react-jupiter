import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../globalStyle';
import FontStyle from './iconFont';
import iconTheme from './theme';
import StyledIcon from './index.styles';

const Icon = (props) => {
  const {
    name,
    size,
    color,
    className,
    stickyLeft,
    stickyRight,
    ...rest
  } = props;

  if (name === undefined) return null;

  return (
    <ThemeProvider theme={iconTheme}>
      <GlobalStyle />
      <FontStyle />
      <StyledIcon
        size={size}
        IconColor={color}
        className={`jupiter-icon new-icon-${name} ${className}`}
        data-test="icon"
        stickyLeft={stickyLeft}
        stickyRight={stickyRight}
        {...rest}
      />
    </ThemeProvider>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  color: PropTypes.oneOf(['default', 'red', 'green', 'blue', 'yellow', 'white', 'darkBlue', 'gray']),
  className: PropTypes.string,
  stickyLeft: PropTypes.bool,
  stickyRight: PropTypes.bool,
};

Icon.defaultProps = {
  size: 'md',
  color: 'default',
  className: '',
  stickyLeft: false,
  stickyRight: false,
};

export default Icon;
