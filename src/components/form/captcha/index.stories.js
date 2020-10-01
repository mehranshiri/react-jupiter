import React from 'react';
import { storiesOf } from '@storybook/react';
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
    />
  ))
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
