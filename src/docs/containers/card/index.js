import React from 'react';

import { Typography } from '../../../components';
import ShowDate from '../../../components/show-date';
import CardTemplate from '../../../components/card/card-template';

const { Heading } = Typography;

const CardPage = () => (
  <>
    <Heading level={1}>
      کارت
    </Heading>
    <ShowDate date={new Date()} />
    <br />
    <br />
    <CardTemplate hoverToLevel={2}><div>Hello empty card</div></CardTemplate>
    <br />
    <br />
    <br />
    <br />
    <CardTemplate level={2} hoverToLevel={4}><div>Hello empty card</div></CardTemplate>
    <br />
    <br />
    <br />
    <br />
    <CardTemplate level={3} maxWidth="400" linkTo="/test/ds" hoverToLevel={4}>
      <div>
        <Heading>Hello empty card. Hello empty card. Hello empty card.Hello empty card. Hello empty card. Hello empty card.</Heading>
      </div>
    </CardTemplate>
    <br />
    <br />
    <br />
    <br />
    <CardTemplate level={4}><div>Hello empty card</div></CardTemplate>
    <br />
    <br />
    <br />
    <br />
    <CardTemplate level={5}><div>Hello empty card</div></CardTemplate>
    <br />
    <br />
    <br />
    <br />

  </>
);

export default CardPage;
