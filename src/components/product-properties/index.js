// @flow

import React from 'react';
import Icon from '../icon';
import { Text } from '../typography';
import { Container, ListContainer, ListItem } from './index.style';

type Props = {
  iconName: string,
  text: string,
}

type ComponentPros = {
  list: [],
  isHorizontal?: boolean,
}

const ProductProperty = (props: Props) => {
  const { iconName, text, ...rest } = props;

  return (
    <Container {...rest}>
      <Icon name={iconName} size="sm" color="gray" stickyRight />
      <Text color="gray" size="12">
        {text}
      </Text>
    </Container>
  );
};

const ProductProperties = (props: ComponentPros) => {
  const { list, isHorizontal, ...rest } = props;
  const propsLength = list.length > 1 && isHorizontal ? list.length : 1;

  if (list.length === 1) {
    return (<ProductProperty iconName={list[0].iconName} text={list[0].text} {...rest} />);
  }

  return (
    <ListContainer isHorizontal={isHorizontal} {...rest}>
      {list.map(({ iconName, text }, index) => (
        <ListItem key={`${iconName}-${index.toString()}`} propsLength={propsLength}>
          <ProductProperty iconName={iconName} text={text} />
        </ListItem>
      ))}
    </ListContainer>
  );
};

ProductProperties.defaultProps = {
  isHorizontal: false,
};

export default ProductProperties;
