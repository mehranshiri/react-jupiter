import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Button1', module)
  .add('default', () => <Button displayText="Submit" />);
