// @flow

import React from 'react';
import Icon from '../../icon';
import { Text } from '../../typography';
import { Container } from './index.style';

type Props = {
  iconName: string,
  text: string,
  color: 'grey' | 'darkBlue' | 'default',
}

const ProductProperty = (props: Props) => {
  const {
    iconName,
    text,
    color,
    ...rest
  } = props;

  return (
    <Container {...rest}>
      <Icon name={iconName} size="sm" color={color} stickyRight />
      <Text color={color} size="12">
        {text}
      </Text>
    </Container>
  );
};

export default ProductProperty;
