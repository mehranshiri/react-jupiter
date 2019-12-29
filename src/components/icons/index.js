import React from 'react';
import PropTypes from 'prop-types';

import theme from '../themes';
import { IconElement } from './index.style';

const Icons = (props) => {
  const { type, size } = props;
  if (type === undefined) return null;

  return (
    <IconElement type={type} size={size} data-test="i-tag" />
  );
};

Icons.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Icons.defaultProps = {
  size: theme.sizes.medium,
};

export default Icons;
