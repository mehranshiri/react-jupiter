import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import generalTheme from '../themes';
import { IconElement } from './index.style';

const Icons = (props) => {
  const {
    type, size, color, ...rest
  } = props;
  if (type === undefined) return null;

  return (
    <ThemeProvider theme={generalTheme}>
      <IconElement type={type} size={size} color={color} {...rest} data-test="i-tag" />
    </ThemeProvider>
  );
};

Icons.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.oneOf(['default', 'red', 'green', 'blue', 'yellow', 'white', 'darkBlue', 'gray']),
};

Icons.defaultProps = {
  size: generalTheme.sizes.medium,
  color: 'default',
};

export default Icons;
