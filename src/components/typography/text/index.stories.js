import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Text from './index';

storiesOf('Text', module)
  .add('simple text', () => <Text>استفاده ساده از کامپوننت تکست</Text>)
  .add('light text', () => <Text color="light">متن رنگ لایت</Text>)
  .add('dark blue text', () => <Text color="darkBlue">متن آبی پر رنگ</Text>)
  .add('blue text', () => <Text color="blue">متن آبی</Text>)
  .add('red text', () => <Text color="red">متن قرمز رنگ</Text>)
  .add('green text', () => <Text color="green">متن سبز رنگ</Text>)
  .add('yellow text', () => <Text color="yellow">متن زرد رنگ</Text>)
  .add('gray text', () => <Text color="gray">متن خاکستری رنگ</Text>)
  .add('text with custom size', () => <Text size={18}>متن با سایز کاستوم</Text>)
  .add('text with underline', () => <Text underline>متن زیرخط دار</Text>)
  .add('bold text', () => <Text bold>متن بولد</Text>)
  .add('line throw text', () => <Text lineThrough>متن روی خطدار</Text>)
  .add('strong text', () => <Text strong>متن استرانگ</Text>)
  .add('emphasized text', () => <Text emphasized>متن کج</Text>)
  .add('subScript text', () => <Text subScript>متن پایین خط</Text>)
  .add('supScript text', () => <Text supScript>متن بالا خط</Text>)
  .add('label text', () => <Text label>متن به صورت لیبل</Text>)
  .add('marked text', () => <Text marked>متن به صورت مارک شده</Text>)
  .addDecorator(withInfo);
