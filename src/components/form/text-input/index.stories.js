import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  select,
  text,
  boolean,
} from '@storybook/addon-knobs';
import TextInput from './index';

storiesOf('Form/Inputs', module)
  .add('Minimal Text Input', () => <TextInput htmlElementName="text-name-01" label="این لیبل است" />)
  .add('Full option Text Input', () => (
    <TextInput
      htmlElementName="text-name-02"
      label={text('optional label', 'این لیبل است')}
      placeholder={text('optional placeholder', 'متن پیشفرض')}
      disabled={boolean('disabled(default : false)', false)}
      description={text('optional description', 'توضیحات اضافه')}
      errorMessage={text('optional error msg', 'ارور زیبا')}
      type={select('select type(default : text)', ['text', 'password'])}
    />
  ))
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
