import React from 'react';
import { storiesOf } from '@storybook/react';

import TitledAvatar from './index';

storiesOf('TitledAvatar', module)
  .add(
    'small titled avatar',
    () => (
      <div style={{ direction: 'rtl' }}>
        <TitledAvatar
          title="نام صاحب آواتار"
          avatar="https://i.pravatar.cc/150?img=62"
          avatarSize="sm"
          titleSize={10}
        />
      </div>
    ),
  )
  .add(
    'medium titled avatar',
    () => (
      <div style={{ direction: 'rtl' }}>
        <TitledAvatar
          title="نام صاحب آواتار"
          avatar="https://i.pravatar.cc/150?img=62"
          avatarSize="md"
          titleSize={12}
        />
      </div>
    ),
  )
  .add(
    'linked titled avatar',
    () => (
      <div style={{ direction: 'rtl' }}>
        <TitledAvatar
          title="نام صاحب آواتار"
          avatar="https://i.pravatar.cc/150?img=62"
          avatarSize="md"
          titleSize={12}
          renderAvatarLink={(el) => (<a href="https://i.pravatar.cc/150?img=62">{el}</a>)}
        />
      </div>
    ),
  );
