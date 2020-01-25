/* eslint-disable react/no-array-index-key */
// @flow

import React from 'react';
import Icon from '../icon';
import { Text } from '../typography';
import { Container, ListContainer } from './index.style';

type Props = {
  iconName: string,
  text: string,
}

type ComponentPros = {
  list: [],
  isHorizontal?: boolean,
}

const ProductProperty = (props: Props) => {
  const { iconName, text } = props;

  return (
    <Container>
      <Icon name={iconName} size="sm" color="gray" stickyRight />
      <Text color="gray" size="12">
        {text}
      </Text>
    </Container>
  );
};

const ProductProperties = (props: ComponentPros) => {
  const { list, isHorizontal } = props;

  if (list.length === 1) {
    return (<ProductProperty iconName={list[0].iconName} text={list[0].text} />);
  }

  return (
    <ListContainer isHorizontal={isHorizontal}>
      {list.map(({ iconName, text }, index) => (
        <li key={`${iconName}-${index}`}>
          <ProductProperty iconName={iconName} text={text} />
        </li>
      ))}
    </ListContainer>
  );
};

ProductProperties.defaultProps = {
  isHorizontal: false,
};

export default ProductProperties;
