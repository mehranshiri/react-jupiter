import React from 'react';
import PropTypes from 'prop-types';
import { Block, Flex } from './index.style';

const displays = {
  block: 'block',
  flex: 'flex',
};

const Display = (props) => {
  const {
    children, display, ...rest
  } = props;

  const renderDisplay = (display) => {
    if (children === undefined) {
      return null;
    }
    switch (display) {
      case 'block':
        return (<Block {...rest}>{children}</Block>);
      case 'flex':
        return (<Flex {...rest}>{children}</Flex>);
      default:
        return (<Block {...rest}>{children}</Block>);
    }
  };

  return (
    <>
      {renderDisplay(display)}
    </>
  );
};

Display.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  display: PropTypes.oneOf([displays.block, displays.flex]),
};

Display.defaultProps = {
  display: displays.block,
};

export default Display;
