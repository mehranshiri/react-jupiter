import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../themes';
import { Content } from './paragraph.style';

const Paragraph = (props) => {
  const {
    children, size, weight,
  } = props;
  return (
    <ThemeProvider theme={defaultTheme}>
      <Content
        size={size}
        weight={weight}
      >
        {children}
      </Content>
    </ThemeProvider>
  );
};

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  size: PropTypes.number,
  weight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Paragraph.defaultProps = {
  size: 13,
  weight: 'normal',
};
