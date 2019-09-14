import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../themes';
import { H1, H2, H3 } from './title.styles';

const Title = (props) => {
  const { children, level, type } = props;

  const renderLevel = (children, level, type) => {
    switch (level) {
      case 3:
        return (<H3 type={type}>{children}</H3>);
      case 2:
        return (<H2 type={type}>{children}</H2>);
      case 1:
      default:
        return (<H1 type={type}>{children}</H1>);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {renderLevel(children, level, type)}
    </ThemeProvider>
  );
};

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  level: PropTypes.number,
  type: PropTypes.string,
};

Title.defaultProps = {
  level: 1,
  type: 'default',
};

export default Title;
