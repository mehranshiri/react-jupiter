import React from 'react';
import Icon from '../icon';
import { Text } from '../typography';
import { Margin } from '../spacing';

const ErrorMsg = ({ errorMessage }: { errorMessage?: string }) => {
  if (errorMessage) {
    return (
      <Margin top={4}>
        <Icon name="error" color="red" size="sm" stickyRight />
        <Text bold size={10} color="red" data-test="error-message">
          {errorMessage}
        </Text>
      </Margin>
    );
  }

  return null;
};

ErrorMsg.defaultProps = {
  errorMessage: '',
};

export default ErrorMsg;
