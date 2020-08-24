import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
} from '@storybook/addon-knobs';
import Select from './select';
import SelectOption from './option';

storiesOf('Form/Dropdown', module)
  .add('Minimal Select', () => (
    <Select>
      <SelectOption value="first" label="First Value" />
    </Select>
  ))
  .add('Select with placeholder', () => (
    <Select
      htmlElementName={text('optional htmlElementName', 'استان')}
      defaultValue={text('optional defaultValue(if its not et or set wrong get the first option)', '30')}
      placeholder={text('optional placeholder', '__استان مورد نظر خود را انتخاب کنید__')}
      handleChange={action('triger what you want to do in onChange function')}
    >
      <SelectOption value="20" label="کرج" />
      <SelectOption value="30" label="تهران" />
      <SelectOption value="40" label="فم" />
    </Select>
  ))
  .add('Full option Select(no placeholder)', () => (
    <Select
      htmlElementName={text('optional htmlElementName', 'استان')}
      defaultValue={text('optional defaultValue(if its not et or set wrong get the first option)', '30')}
      handleChange={action('triger what you want to do in onChange function')}
      isDisabled={boolean('disabled(default : false)', false)}
      label={text('optional label', 'محل برگزاری رویداد')}
      errorMessage={text('optional error msg', 'ارور زیبا')}
    >
      <SelectOption value="20" label="کرج" />
      <SelectOption value="30" label="تهران" />
      <SelectOption value="40" label="فم" isDisabled />
    </Select>
  ))
  .add('Full option SelectOption', () => (
    <Select
      htmlElementName="استان"
      defaultValue="30"
      handleChange={action('triger what you want to do in onChange function')}
      isDisabled={false}
    >
      <SelectOption
        value={text('value', '20')}
        label={text('label', 'کرج')}
        isDisabled={boolean('disabled(default : false)', false)}
      />
      <SelectOption value="30" label="تهران" />
      <SelectOption value="40" label="فم" />
    </Select>
  ))
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
