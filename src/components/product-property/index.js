import React from 'react';
import Icon from '../icon';
import { Text } from '../typography';

type Props = {
  iconName: string,
  text: string,
}

const ProductProperty = (props: Props) => {
  const { iconName, text } = props;

  return (

    <>
      <Icon name={iconName} size="sm" color="gray" />
      <Text color="gray">
        {text}
      </Text>
    </>
  );
};

export default ProductProperty;
