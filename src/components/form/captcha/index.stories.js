import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  // select,
  text,
  // boolean,
} from '@storybook/addon-knobs';
import Captcha from './index';

storiesOf('Form/Captcha', module)
  .add('minimal captcha example', () => (
    <Captcha
      errorMessage={text('optional error msg', 'ارور زیبا')}
      src={text('captcha img src', 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2')}
      handleCaptchaError={action('trigger what you want to do when captcha src has an err')}
      handleRetryCaptcha={action('trigger what you want to do when click on retry button')}
    />
  ))
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
