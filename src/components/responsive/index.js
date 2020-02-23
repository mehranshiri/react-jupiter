import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

const Responsive = (props) => {
  const { option, children } = props;
  const { isDefault } = option;
  const generateQueryObject = () => {
    // const { min, max } = option;
    const { greaterThan, lessThan } = option;
    let query;
    if (greaterThan !== undefined && lessThan !== undefined) {
      query = { minWidth: greaterThan, maxWidth: lessThan };
    } else if (greaterThan !== undefined) {
      query = { minWidth: greaterThan };
    } else {
      query = { maxWidth: lessThan };
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
    lessThan: PropTypes.number,
    greaterThan: PropTypes.number,
    isDefault: PropTypes.bool,
  }).isRequired,
};

export default Responsive;
