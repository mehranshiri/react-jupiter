import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../themes';
import {
  String, Strong, Emphasized, SubScript, SupScript,
} from './text.style';

const renderString = (options) => {
  const {
    children, size, color, underline, lineThrough, strong, emphasized, subScript, supScript, marked, label,
  } = options;

  if (children === undefined) return null;

  let typeOfText;
  if (strong) typeOfText = 'strong';
  else if (emphasized) typeOfText = 'emphasized';
  else if (subScript) typeOfText = 'subScript';
  else if (supScript) typeOfText = 'supScript';
  else typeOfText = 'span';

  switch (typeOfText) {
    case 'strong':
      return (
        <Strong
          size={size}
          color={color}
          underline={underline && !lineThrough}
          lineThrough={lineThrough && !underline}
          emphasized={emphasized}
          marked={marked && !label}
          isLabel={label && !marked}
          data-test="strong"
        >
          {children}
        </Strong>
      );
    case 'emphasized':
      return (
        <Emphasized
          size={size}
          color={color}
          underline={underline && !lineThrough}
          lineThrough={lineThrough && !underline}
          marked={marked && !label}
          isLabel={label && !marked}
          data-test="emphasized"
        >
          {children}
        </Emphasized>
      );
    case 'subScript':
      return (
        <SubScript color={color} data-test="subScript">
          {children}
        </SubScript>
      );
    case 'supScript':
      return (
        <SupScript color={color} data-test="supScript">
          {children}
        </SupScript>
      );
    case 'span':
    default:
      return (
        <String
          size={size}
          color={color}
          underline={underline && !lineThrough}
          lineThrough={lineThrough && !underline}
          marked={marked && !label}
          isLabel={label && !marked}
          data-test="span"
        >
          {children}
        </String>
      );
  }
};

const Text = (props) => {
  const {
    children, size, color, underline, lineThrough, strong, emphasized, subScript, supScript, marked, label,
  } = props;
  return (
    <ThemeProvider theme={defaultTheme}>
      {renderString({
        children,
        size,
        color,
        underline,
        lineThrough,
        strong,
        emphasized,
        subScript,
        supScript,
        marked,
        label,
      })}
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
  color: PropTypes.string, // accepted input: "red" or "green" or "blue" or "yellow" or "darkBlue"
  underline: PropTypes.bool,
  lineThrough: PropTypes.bool,
  strong: PropTypes.bool,
  emphasized: PropTypes.bool,
  subScript: PropTypes.bool,
  supScript: PropTypes.bool,
  marked: PropTypes.bool,
  label: PropTypes.bool,
};

Text.defaultProps = {
  size: defaultTheme.typography.baseSize,
  color: 'default',
  underline: false,
  lineThrough: false,
  strong: false,
  emphasized: false,
  subScript: false,
  supScript: false,
  marked: false,
  label: false,
};

export default Text;
