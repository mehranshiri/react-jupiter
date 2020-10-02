import React, { useState } from 'react';
import TextInput from '../text-input';
import { ImgContainer, Loading } from './index.style';

type Props = {
  errorMessage?: string,
  handleCaptchaError?: () => void;
  src: string,
};

function Captcha(props: Props) {
  const { errorMessage, handleCaptchaError, src } = props;
  const [isImgReady, setIsImgReady] = useState(false);

  function hanelImgLoading() {
    setIsImgReady(true);
  }
  function handleImgError() {
    handleCaptchaError();
  }
  return (
    <div data-test="captcha-box">
      <TextInput
        data-test="captcha-input"
        htmlElementName="captcha-input"
        label="کد تصویری"
        errorMessage={errorMessage}
        type="text"
      />
      <ImgContainer>
        <Loading className={`${isImgReady ? 'hide' : ''}`} />
        <img
          className={`${isImgReady ? '' : 'hide'}`}
          src={src}
          alt="captcha-img"
          loading="lazy"
          onLoad={hanelImgLoading}
          onError={handleImgError}
          data-test="captcha-img"
        />
      </ImgContainer>
    </div>
  );
}

Captcha.defaultProps = {
  errorMessage: '',
  handleCaptchaError: () => {},
};

export default Captcha;
