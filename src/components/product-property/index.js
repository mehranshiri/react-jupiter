import React from 'react';
import Icon from '../icon';
import { Text } from '../typography';
import { Wrapper } from './index.styles';

type Props = {
  iconName: string,
  text: string,
}

const ProductProperty = (props: Props) => {
  const { iconName, text } = props;

  return (
    <Wrapper>
      <Icon name={iconName} size="sm" color="gray" stickyRight />
      <Text color="gray">
        {text}
      </Text>
    </Wrapper>
  );
};

export default ProductProperty;
