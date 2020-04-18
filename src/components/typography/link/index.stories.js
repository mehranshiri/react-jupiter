import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Link from './index';

storiesOf('Link', module)
  .add('simple link', () => <Link href="http://www.google.com">ورود به سایت گوگل</Link>)
  .add('small link', () => <Link href="http://www.google.com" size={12}>لینک با سایز کوچکتر</Link>)
  .add('bold link', () => <Link href="http://www.google.com" size={12} strong>لینک با متن بولد</Link>)
  .add('emphasized link', () => <Link href="http://www.google.com" size={12} emphasized>لینک با متن کچ</Link>)
  .add('link with renderprops', () => <Link href={(el) => <a href="http://yahoo.com">{el}</a>} linkContent="لینک با رندر پراپس" />)
  .addDecorator(withInfo);
