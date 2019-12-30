import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import iconTheme from './theme';
import { StyledIcon } from './index.styles';

const Icon = (props) => {
  const {
    name,
    size,
    color,
  } = props;

  if (name === undefined) return null;

  return (
    <ThemeProvider theme={iconTheme}>
      <StyledIcon
        size={size}
        color={color}
        className={`icon-${name}`}
        data-test="icon"
      />
    </ThemeProvider>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  color: PropTypes.oneOf(['default', 'red', 'green', 'blue', 'yellow', 'white', 'darkBlue', 'gray']),
};

Icon.defaultProps = {
  size: 'md',
  color: 'default',
};

export default Icon;
