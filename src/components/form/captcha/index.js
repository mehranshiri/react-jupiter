// @flow

import React, { useState } from 'react';
import TextInput from '../text-input';
import Button from '../../button';
import {
  CaptchaBoxContainer,
  Loading,
  InputConiatiner,
  Container,
} from './index.style';

type Props = {
  src: string,
  errorMessage?: string,
  inputRef?: any,
  handleCaptchaError?: () => void;
  handleRetryCaptcha?: () => void;
};

function Captcha(props: Props) {
  const {
    src,
    errorMessage,
    inputRef,
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
    <CaptchaBoxContainer data-test="captcha-box">
      <InputConiatiner>
        <TextInput
          data-test="captcha-input"
          htmlElementName="captcha-input"
          label="کد تصویری"
          errorMessage={errorMessage}
          type="text"
          inputRef={inputRef}
        />
      </InputConiatiner>
      <Container>
        {imageLoadingStatus !== 'loaded' && (
          <Loading />
        )}
        <img
          className={`${imageLoadingStatus === 'loaded' ? '' : 'hide'}`}
          width="120px"
          height="32px"
          src={src}
          alt="captcha-img"
          loading="lazy"
          onLoad={hanelImgLoading}
          onError={handleImgError}
          data-test="captcha-img"
        />
      </Container>
      {handleRetryCaptcha && (
        <Container>
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
            کد تصویری جدید
          </Button>
        </Container>
      )}
    </CaptchaBoxContainer>
  );
}

Captcha.defaultProps = {
  errorMessage: '',
  inputRef: null,
  handleCaptchaError: () => {},
  handleRetryCaptcha: null,
};

export default Captcha;
