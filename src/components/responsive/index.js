import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

const Responsive = (props) => {
  const { option, children } = props;
  const { isDefault } = option;
  const generateQueryObject = () => {
    const { min, max } = option;
    let query;
    if (min !== undefined && max !== undefined) {
      query = { minWidth: min, maxWidth: max };
    } else if (min !== undefined) {
      query = { minWidth: min };
    } else {
      query = { maxWidth: max };
    }
    return query;
  };

  const screen = useMediaQuery(generateQueryObject());
  return ((isDefault || screen) && <>{children}</>);
};

Responsive.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  option: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number,
    isDefault: PropTypes.bool,
  }).isRequired,
};

export default Responsive;
