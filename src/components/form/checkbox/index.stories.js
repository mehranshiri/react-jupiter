import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs';
import Checkbox from './checkbox';
import CheckboxOption from './checkbox-option';

storiesOf('Form/Checkbox', module)
  .add('Minimal Form/Checkbox', () => (
    <Checkbox>
      <CheckboxOption value="first" label="First Value" />
      <CheckboxOption value="sec" label="Sec Value" />
      <CheckboxOption value="third" label="Third Value" />
    </Checkbox>
  ))
  .add('Full option Checkbox', () => (
    <Checkbox
      groupName={text('optional groupName(but highly recommended to set manually)', 'degree')}
      label={text('optional label', 'در کدام موضوع ها توانایی دارید')}
      handleChange={action('triger what you want to do in onChange function')}
      isDisabled={boolean('optional disabled all', false)}
      type={select('optional type', ['horizental', 'vertical'])}
      errorMessage={text('optional error msg', 'ارور زیبا')}
    >
      <CheckboxOption value="100" label="ورزشی" />
      <CheckboxOption value="234" label="علمی" />
      <CheckboxOption value="300" label="مذهبی" />
      <CheckboxOption value="400" label="فرهنگی" isChecked />
      <CheckboxOption value="500" label="هنری" isChecked />
    </Checkbox>
  ))
  .add('Full option CheckboxOption', () => (
    <Checkbox
      groupName="degree"
      label="در کدام موضوع ها توانایی دارید"
    >
      <CheckboxOption
        label={text('label', 'ورزشی')}
        value={text('value', '100')}
        isDisabled={boolean('optional disabled item', false)}
        isChecked={boolean('optional disabled item', false)}
      />
      <CheckboxOption value="200" label="علمی" />
      <CheckboxOption value="300" label="مذهبی" />
      <CheckboxOption value="400" label="فرهنگی" />
      <CheckboxOption value="500" label="هنری" />
    </Checkbox>
  ))
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
