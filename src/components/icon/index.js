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
  color: PropTypes.oneOf([
    'darkBlue800', 'darkBlue600', 'darkBlue400', 'darkBlue200',
    'blue800', 'blue600', 'blue400', 'blue200',
    'green800', 'green600', 'green400', 'green200',
    'red800', 'red600', 'red400', 'red200',
    'yellow800', 'yellow600', 'yellow400', 'yellow200',
    'gray800', 'gray600', 'gray400', 'gray200',
    'riverBedDark', 'riverBed',
    'white',
  ]),
};

Icon.defaultProps = {
  size: 'md',
  color: 'riverBedDark',
};

export default Icon;
