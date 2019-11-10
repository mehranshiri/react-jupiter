import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../themes';
import GlobalStyle from '../../globalStyle';
import { Content } from './paragraph.style';

const Paragraph = (props) => {
  const {
    children, size,
  } = props;
  if (children === undefined) return null;
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyle />
        <Content size={size} data-test="paragraph" {...props}>
          {children}
        </Content>
      </>
    </ThemeProvider>
  );
};

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  size: PropTypes.number, // accepted values: 8 or 9 or 10 or ...
};

Paragraph.defaultProps = {
  size: defaultTheme.typography.baseSize,
};

export default Paragraph;
