import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  select,
  text,
  // boolean,
} from '@storybook/addon-knobs';
import FileItem from './index';

storiesOf('FileItem', module)
  .add('default file item', () => (
    <FileItem
      type={select('file type(default: zip)', ['zip', 'doc', 'rar', 'pdf', 'jpg', 'png', 'mp3', 'mp4', 'pptx', 'xlsx'])}
      title={text('title (default: فایل دانلودی)o', 'فایل جلسه اول ما')}
      description={text('description text(optional)', 'متن توضیحات')}
    />
  ))
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
