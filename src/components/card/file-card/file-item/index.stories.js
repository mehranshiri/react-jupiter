import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  select,
  text,
} from '@storybook/addon-knobs';
import FileItem from './index';

storiesOf('FileItem', module)
  .add('default file item', () => (
    <FileItem
      type={select('file type(default: zip)', ['zip', 'doc', 'rar', 'pdf', 'jpg', 'png', 'mp3', 'mp4', 'pptx', 'xlsx'])}
      title={text('title (default: فایل دانلودی)o', 'فایل جلسه اول ما')}
      description={text('description text(optional)', 'متن توضیحات')}
      price={text('*price', '۶۰۰۰ تومن')}
      fileSize={text('*fileSize', '۵ مگابایت')}
    />
  ))
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
