// @flow

import React, { type Node } from 'react';
import { useMediaQuery } from 'react-responsive';

type Props = {
  option: Object,
  children: * => Node,
}

const Responsive = (props: Props) => {
  const { option, children } = props;
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
  return (screen && <>{children}</>);
};

export default Responsive;
