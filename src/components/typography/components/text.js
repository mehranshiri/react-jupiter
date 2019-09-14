import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../themes';
import { String } from './text.style';

const Text = (props) => {
  const {
    children, size, type, underline, remove, weight,
  } = props;
  return (
    <ThemeProvider theme={defaultTheme}>
      <String
        size={size}
        type={type}
        underline={underline}
        remove={remove}
        weight={weight}
      >
        {children}
      </String>
    </ThemeProvider>
  );
};

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  size: PropTypes.number,
  type: PropTypes.string,
  underline: PropTypes.bool,
  remove: PropTypes.bool,
  weight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Text.defaultProps = {
  size: 13,
  type: 'default',
  underline: false,
  remove: false,
  weight: 'normal',
};

export default Text;
