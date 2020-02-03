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
  return (screen && <>{children}</>);
};

export default Responsive;
