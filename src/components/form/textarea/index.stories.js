import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs';
import Textarea from './index';

storiesOf('Form/Textarea', module)
  .add('Minimal Textarea', () => (
    <Textarea />
  ))
  .add('Full option Textarea', () => (
    <Textarea
      label={text('optional label', 'توضیجات')}
      htmlElementName={text('optional html-element-name', 'html-element-name')}
      initialVal={text('optional initialVal', 'توضیحات قبلی')}
      placeholder={text('optional placeholder', 'این پلیس هولدر است')}
      minHeight={text('optional minHeight (it should be a number)', '120')}
      isDisabled={boolean('optional disabled all', false)}
      resize={select('optional resize', ['none', 'vertical', 'horizontal'])}
      handleChange={action('triger what you want to do in onChange function')}
      errorMessage={text('optional error msg', 'ارور زیبا')}
    />
  ))
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
