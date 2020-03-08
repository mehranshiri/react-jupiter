// @flow

import React from 'react';
import { ListContainer, ListItem } from './index.style';
import ProductProperty from './product-property';

type Props = {
  list: [],
  isHorizontal?: boolean,
  color?: 'gray' | 'darkBlue' | 'default',
}

const ProductProperties = (props: Props) => {
  const {
    list,
    isHorizontal,
    color,
    ...rest
  } = props;
  const propsLength = list.length > 1 && isHorizontal ? list.length : 1;

  if (list.length === 1) {
    return (<ProductProperty iconName={list[0].iconName} text={list[0].text} {...rest} />);
  }

  return (
    <ListContainer isHorizontal={isHorizontal} {...rest}>
      {list.map(({ iconName, text }, index) => (
        <ListItem key={`${iconName}-${index.toString()}`} propsLength={propsLength}>
          <ProductProperty iconName={iconName} text={text} color={color} />
        </ListItem>
      ))}
    </ListContainer>
  );
};

ProductProperties.defaultProps = {
  isHorizontal: false,
  color: 'gray',
};

export default ProductProperties;
