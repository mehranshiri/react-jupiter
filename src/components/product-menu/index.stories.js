import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  // text,
  // select,
  // boolean,
} from '@storybook/addon-knobs';
import Menu from './menu';
import MenuItem from './menu-item';

storiesOf('ProductMenu', module)
  .add('Minimal ProductMenu', () => (
    <Menu>
      <MenuItem label="درباره رویداد" />
      <MenuItem label="سخنرانان" />
      <MenuItem label="زمان بندی رویداد" />
      <MenuItem label="اطلاعات تکمیلی" />
    </Menu>
  ))
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
