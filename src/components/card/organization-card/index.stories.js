import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import OrganizationCard from './index';

storiesOf('OrganizationCard', module)
  .add('horizontal event card', () => (
    <OrganizationCard
      title="انجمن علمی کامپیوتر دانشگاه صنعتی خواجه نصیرالدین طوسی انجمن علمی کامپیوتر دانشگاه صنعتی خواجه"
      logo="https://static.evand.net/images/organizations/logos/original/d431e339d86b187f356055f1d6f39ddb.jpg?x-oss-process=image/resize,h_250"
      report={{
        heldEventsNumber: 2,
        activeEventsNumber: 17,
        followingNumber: 148,
      }}
      onClickFollow={() => { window.console.log('click on follow'); }}
    />
  ))
  .addDecorator(withInfo);
