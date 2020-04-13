import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  select,
  text,
  boolean,
} from '@storybook/addon-knobs';
import Button from './index';
import '../storybook.css';

storiesOf('Button', module)
  .add('default button', () => (
    <Button
      size={select('size', ['sm', 'md', 'lg'])}
      icon={select('icon(these icon-name and all other available)', ['warning', 'watch-later', 'notification-important', 'help'])}
      wide={boolean('wide', true)}
      disabled={boolean('disabled', true)}
      styleType={select('styleType', ['primary', 'secondary', 'tertiary'])}
      mainColor={select('mainColor', ['red', 'blue', 'green', 'yellow', 'darkBlue'])}
    >
      {text('children text', 'متن زیبای داخل دکمه')}
    </Button>
  ))
  .add('button with icon', () => <Button icon="watch-later">دکمه‌ با آیکون</Button>)
  .add('wide button', () => <Button wide>دکمه‌ی تمام عرض</Button>)
  .add('small button', () => <Button size="sm">دکمه‌ی کوچک</Button>)
  .add('medium button', () => <Button size="md">دکمه‌ی متوسط</Button>)
  .add('large button', () => <Button size="lg">دکمه‌ی بزرگ</Button>)
  .add('small button with icon', () => <Button size="sm" icon="watch-later">دکمه‌ی کوچک با آیکون</Button>)
  .add('medium button with icon', () => <Button size="md" icon="watch-later">دکمه‌ی متوسط با آیکون</Button>)
  .add('large button with icon', () => <Button size="lg" icon="watch-later">دکمه‌ی بزرگ با آیکون</Button>)
  .add('default primary', () => <Button styleType="primary">دکمه‌ی دیفالت اولیه</Button>)
  .add('default secondary', () => <Button styleType="secondary">دکمه‌ی دیفالت ثانویه</Button>)
  .add('default tertiary', () => <Button styleType="tertiary">دکمه‌ی دیفالت ثالثیه</Button>)
  .add('primary disabled', () => <Button disabled>دکمه‌ی دیفالت غیر فعال</Button>)
  .add('secondary disabled', () => <Button styleType="secondary" disabled>دکمه‌ی دیفالت ثانویه غیر فعال</Button>)
  .add('tertiary disabled', () => <Button styleType="tertiary" disabled>دکمه‌ی دیفالت ثالثیه غیر فعال</Button>)
  .add('red primary', () => <Button styleType="primary" mainColor="red">دکمه‌ی قرمز اولیه</Button>)
  .add('red secondary', () => <Button styleType="secondary" mainColor="red">دکمه‌ی قرمز ثانویه</Button>)
  .add('red primary disabled', () => <Button mainColor="red" disabled>دکمه‌ی قرمز اولیه غیر فعال</Button>)
  .add('red secondary disabled', () => <Button styleType="secondary" mainColor="red" disabled>دکمه‌ی قرمز ثانویه غیر فعال</Button>)
  .add('blue primary', () => <Button styleType="primary" mainColor="blue">دکمه‌ی آبی اولیه</Button>)
  .add('blue secondary', () => <Button styleType="secondary" mainColor="blue">دکمه‌ی آبی ثانویه</Button>)
  .add('blue primary disabled', () => <Button mainColor="blue" disabled>دکمه‌ی آبی اولیه غیر فعال</Button>)
  .add('blue secondary disabled', () => <Button styleType="secondary" mainColor="blue" disabled>دکمه‌ی آبیه ثانویه غیر فعال</Button>)
  .add('green primary', () => <Button styleType="primary" mainColor="green">دکمه‌ی سبز اولیه</Button>)
  .add('green secondary', () => <Button styleType="secondary" mainColor="green">دکمه‌ی سبز ثانویه</Button>)
  .add('green primary disabled', () => <Button mainColor="green" disabled>دکمه‌ی سبز اولیه غیر فعال</Button>)
  .add('green secondary disabled', () => <Button styleType="secondary" mainColor="green" disabled>دکمه‌ی سبز ثانویه غیر فعال</Button>)
  .add('yellow primary', () => <Button styleType="primary" mainColor="yellow">دکمه‌ی زرد اولیه</Button>)
  .add('yellow secondary', () => <Button styleType="secondary" mainColor="yellow">دکمه‌ی زرد ثانویه</Button>)
  .add('yellow primary disabled', () => <Button mainColor="yellow" disabled>دکمه‌ی زرد اولیه غیر فعال</Button>)
  .add('yellow secondary disabled', () => <Button styleType="secondary" mainColor="yellow" disabled>دکمه‌ی زرد ثانویه غیر فعال</Button>)
  .add('link button', () => <Button renderLink={(element) => <a href="http://google.com">{element}</a>}>لینک به گوگل</Button>)
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
