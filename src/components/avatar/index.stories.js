import React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from './index';

storiesOf('Avatar', module)
  .add('default avatar', () => <Avatar src="https://i.pravatar.cc/150?img=56" />)
  .add('small avatar', () => <Avatar size="sm" src="https://i.pravatar.cc/150?img=68" />)
  .add('medium avatar', () => <Avatar size="md" src="https://i.pravatar.cc/150?img=69" />)
  .add('large avatar', () => <Avatar size="lg" src="https://i.pravatar.cc/150?img=66" />)
  .add('not found avatar', () => <Avatar src="https://i.pravatarsdsf.cc/150?img=66" />)
  .add('undefined avatar', () => <Avatar />);
