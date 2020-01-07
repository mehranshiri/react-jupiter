
import React from 'react';

import { SQUARE_CARD, RECTANGLE_CARD, SLIDER_CARD } from './constants';
import CardTemplate from '../card-template';
import ShowDate from '../../show-date';
// import Icon from '../../icon';
import {
  SquareCover,
  SquareContentContainer,
  SquareDateBookmarkContainer,
  // Date,
} from './index.style';

type Props = {
  title: string,
  bookmarked?: boolean,
  type?: SQUARE_CARD | RECTANGLE_CARD | SLIDER_CARD,
  price: string,
  location: string,
  date: string | Object,
  cover: String,
  organizerName: ?string,
  organizerLogo: ?string,
  organizerSlug: ?String,
}

const EventCard = (props: Props) => {
  // const {
  //   title, type, bookmarked, price, location, date, cover, organizerName, organizerLogo,
  // } = props;

  const {
    type, date, cover,
  } = props;

  const renderCard = () => {
    switch (type) {
      case RECTANGLE_CARD:
        return <div data-test={RECTANGLE_CARD}>Hello default card</div>;
      case SLIDER_CARD:
        return <div data-test={SLIDER_CARD}>Hello default card</div>;
      case SQUARE_CARD:
      default:
        return (
          <CardTemplate
            direction="vertical"
            data-test={SQUARE_CARD}
          >
            <SquareCover src={cover} />
            <SquareContentContainer>
              <SquareDateBookmarkContainer>
                <ShowDate date={date} fontSize="12" />
                {/* <Icon name="" /> */}
              </SquareDateBookmarkContainer>
            </SquareContentContainer>
            <p>Hello default card</p>
          </CardTemplate>
        );
    }
  };

  return (
    renderCard()
  );
};

EventCard.defaultProps = {
  bookmarked: false,
  type: SQUARE_CARD,
};

export default EventCard;
