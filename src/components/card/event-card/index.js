
import React, { useState } from 'react';

import { SQUARE_CARD, RECTANGLE_CARD, SLIDER_CARD } from './constants';
import CardTemplate from '../card-template';
import ShowDate from '../../show-date';
import { Text } from '../../typography';
import Avatar from '../../avatar';
import {
  SquareCover,
  SquareContentContainer,
  SquareDateBookmarkContainer,
  BookmarkIcon,
  Title,
  PlacePriceContainer,
  PlacePriceIcon,
  OrganizationLink,
  OrganizationName,
} from './index.style';

type Props = {
  title: string,
  bookmarked?: boolean,
  type?: SQUARE_CARD | RECTANGLE_CARD | SLIDER_CARD,
  price: string,
  place: string,
  date: string | Object,
  cover: String,
  organizationName: ?string,
  organizationLogo: ?string,
  organizationSlug: ?String,
  onClickBookmark: () => void,
}

const EventCard = (props: Props) => {
  const {
    title, type, bookmarked, price, place, date, cover, organizationName, organizationLogo, organizationSlug, onClickBookmark,
  } = props;

  const [isBookmarked, setBookmark] = useState(bookmarked);

  const handleClickBookmark = (e) => {
    e.preventDefault();
    setBookmark(!isBookmarked);
    onClickBookmark();
  };

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
            hoverToLevel={3}
            data-test={SQUARE_CARD}
            maxWidth={400}
            linkTo="/alinkaddress"
          >
            <SquareCover src={cover} />
            <SquareContentContainer>
              <SquareDateBookmarkContainer>
                <ShowDate date={date} color="gray" fontSize="12" />
                {
                  isBookmarked
                    ? <BookmarkIcon type="bookmark" size="md" color="gray" onClick={handleClickBookmark} />
                    : <BookmarkIcon type="bookmark-border" size="md" color="gray" onClick={handleClickBookmark} />
                }
              </SquareDateBookmarkContainer>
              <Title level={2} size="sm">{title}</Title>
              <PlacePriceContainer>
                <div>
                  <PlacePriceIcon type="place" size="md" color="gray" />
                  <Text color="gray" size="12">{place}</Text>
                </div>
                <div>
                  <PlacePriceIcon type="loyalty" size="md" color="gray" />
                  <Text color="gray" size="12">{price}</Text>
                </div>
              </PlacePriceContainer>
              <OrganizationLink to={`organizations/${organizationSlug}`}>
                <Avatar src={organizationLogo} size="sm" />
                <OrganizationName>{organizationName}</OrganizationName>
              </OrganizationLink>
            </SquareContentContainer>
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
