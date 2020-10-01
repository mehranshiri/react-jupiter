import React from 'react';
import TextInput from '../text-input';

type Props = {
  errorMessage?: string,
};

function Captcha(props: Props) {
  const { errorMessage } = props;

  return (
    <div data-test="captcha-box">
      <TextInput
        data-test="captcha-input"
        htmlElementName="captcha-input"
        label="کد تصویری"
        errorMessage={errorMessage}
        type="text"
      />
    </div>
  );
}

Captcha.defaultProps = {
  errorMessage: '',
};

export default Captcha;
