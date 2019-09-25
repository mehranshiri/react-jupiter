import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../themes';
import GlobalStyle from '../../globalStyle';
import { Content } from './paragraph.style';

const Paragraph = (props) => {
  const {
    children, size, bold,
  } = props;
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyle />
        <Content
          size={size}
          bold={bold}
        >
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
  size: PropTypes.number,
  bold: PropTypes.bool,
};

Paragraph.defaultProps = {
  size: 13,
  bold: false,
};

export default Paragraph;
