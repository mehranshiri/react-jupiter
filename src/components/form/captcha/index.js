import React, { useState } from 'react';
import TextInput from '../text-input';
import Button from '../../button';
import { ImgContainer, Loading } from './index.style';

type Props = {
  src: string,
  errorMessage?: string,
  handleCaptchaError?: () => void;
  handleRetryCaptcha: () => void;
};

function Captcha(props: Props) {
  const {
    src,
    errorMessage,
    handleCaptchaError,
    handleRetryCaptcha,
  } = props;
  const [imageLoadingStatus, setImageLoadingStatus] = useState('loading');

  function hanelImgLoading() {
    setImageLoadingStatus('loaded');
  }
  function handleImgError() {
    setImageLoadingStatus('failedToLoad');
    handleCaptchaError();
  }

  return (
    <div data-test="captcha-box">
      <div>
        <TextInput
          data-test="captcha-input"
          htmlElementName="captcha-input"
          label="کد تصویری"
          errorMessage={errorMessage}
          type="text"
        />
      </div>
      <ImgContainer>
        {imageLoadingStatus !== 'loaded' && (
          <Loading />
        )}
        <img
          className={`${imageLoadingStatus === 'loaded' ? '' : 'hide'}`}
          src={src}
          alt="captcha-img"
          loading="lazy"
          onLoad={hanelImgLoading}
          onError={handleImgError}
          data-test="captcha-img"
        />
      </ImgContainer>
      <Button
        data-test="captcha-retry"
        htmlType="button"
        icon="restore"
        isLoading={imageLoadingStatus === 'loading'}
        onClick={handleRetryCaptcha}
        mainColor="blue"
        size="sm"
        styleType={imageLoadingStatus === 'failedToLoad' ? 'primary' : 'tertiary'}
      >
        کپچای جدید
      </Button>
    </div>
  );
}

Captcha.defaultProps = {
  errorMessage: '',
  handleCaptchaError: () => {},
};

export default Captcha;
