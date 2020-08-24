import React from 'react';
import { Text } from '../typography';

type Props = {
  label: string,
  handleClick?: () => void,
}
function MenuItem({ label, handleClick } : Props) {
  return (
    <Text
      size={14}
      bold
      onClick={handleClick}
      data-test="product-menu-item"
    >
      {label}
    </Text>
  );
}

MenuItem.defaultProps = {
  handleClick: () => {},
};
export default MenuItem;
