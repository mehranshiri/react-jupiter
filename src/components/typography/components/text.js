import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../themes';
import GlobalStyle from '../../globalStyle';
import {
  String, Strong, Emphasized, SubScript, SupScript,
} from './text.style';

const renderString = (props) => {
  const {
    children, size, color, underline, lineThrough, strong, emphasized, subScript, supScript, marked, label,
  } = props;

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
          {...props}
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
          {...props}
        >
          {children}
        </Emphasized>
      );
    case 'subScript':
      return (
        <SubScript color={color} data-test="subScript" {...props}>
          {children}
        </SubScript>
      );
    case 'supScript':
      return (
        <SupScript color={color} data-test="supScript" {...props}>
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
          {...props}
        >
          {children}
        </String>
      );
  }
};

renderString.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  size: PropTypes.number,
  color: PropTypes.string, // accepted input: "red" or "green" or "blue" or "yellow" or "white" or "darkBlue"
  underline: PropTypes.bool,
  lineThrough: PropTypes.bool,
  strong: PropTypes.bool,
  emphasized: PropTypes.bool,
  subScript: PropTypes.bool,
  supScript: PropTypes.bool,
  marked: PropTypes.bool,
  label: PropTypes.bool,
};

renderString.defaultProps = {
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

const Text = (props) => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyle />
        {renderString(props)}
      </>
    </ThemeProvider>
  </>
);

export default Text;
