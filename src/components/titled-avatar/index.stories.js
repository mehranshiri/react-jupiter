import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TitledAvatar from './index';
import '../storybook.css';

storiesOf('TitledAvatar', module)
  .add(
    'small titled avatar',
    () => (
      <TitledAvatar
        title="نام صاحب آواتار"
        avatar="https://i.pravatar.cc/150?img=62"
        avatarSize="sm"
        titleSize={10}
      />
    ),
  )
  .add(
    'medium titled avatar',
    () => (
      <TitledAvatar
        title="نام صاحب آواتار"
        avatar="https://i.pravatar.cc/150?img=62"
        avatarSize="md"
        titleSize={12}
      />
    ),
  )
  .add(
    'linked titled avatar',
    () => (
      <TitledAvatar
        title="نام صاحب آواتار"
        avatar="https://i.pravatar.cc/150?img=62"
        avatarSize="md"
        titleSize={12}
        renderAvatarLink={(el) => (<a href="https://i.pravatar.cc/150?img=62">{el}</a>)}
      />
    ),
  )
  .addDecorator(withInfo);
