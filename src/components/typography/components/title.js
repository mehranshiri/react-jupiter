import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../themes';
import { TitleLarge, TitleSmall } from './title.styles';

const Title = (props) => {
  const { children, size, ...rest } = props;
  const renderTitle = (children, size) => {
    if (children === undefined) return null;
    if (size === 'small') {
      return <TitleSmall data-test="title" {...rest}>{children}</TitleSmall>;
    }
    return <TitleLarge data-test="title" {...rest}>{children}</TitleLarge>;
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {renderTitle(children, size)}
    </ThemeProvider>
  );
};

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  size: PropTypes.oneOf(['large', 'small']),
};

Title.defaultProps = {
  size: 'large',
};

export default Title;
