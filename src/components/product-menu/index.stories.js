import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
} from '@storybook/addon-knobs';
import Menu from './menu';
import MenuItem from './menu-item';

storiesOf('ProductMenu', module)
  .add('ProductMenu with more', () => (
    <Menu>
      <MenuItem
        label={text('first item label(required)', 'درباره رویداد')}
        handleClick={action('trigger what you want to do in onClick function')}
      />
      <MenuItem label="سخنرانان" />
      <MenuItem label="زمان بندی رویداد" />
      <MenuItem label="اطلاعات تکمیلی" />
      <MenuItem label="گالری تصاویر" />
      <MenuItem label="درباره ما" />
    </Menu>
  ))
  .add('ProductMenu without more', () => (
    <Menu>
      <MenuItem
        label={text('first item label(required)', 'درباره رویداد')}
        handleClick={action('trigger what you want to do in onClick function')}
      />
      <MenuItem label="سخنرانان" />
      <MenuItem label="زمان بندی رویداد" />
    </Menu>
  ))
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
