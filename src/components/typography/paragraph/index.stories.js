import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  select,
  text,
  boolean,
} from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Paragraph from './index';


storiesOf('Paragraph', module)
  .add('default paragraph', () => (
    <Paragraph
      color={select('color (default: riverBedDark)', ['riverBedDark', 'riverBed'])}
      bold={boolean('bold(optional - default: false)', false)}
      size={text('size (default: 13)', '13')}
    >
      {
        text('the paragraph (as children)',
          'طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی')
      }
    </Paragraph>
  ))
  .addDecorator(withKnobs)
  .addDecorator(withInfo);
