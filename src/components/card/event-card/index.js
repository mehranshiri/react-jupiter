
import React, { useState } from 'react';

import { SQUARE_CARD, RECTANGLE_CARD } from './constants';
import CardTemplate from '../card-template';
import ShowDate from '../../show-date';
import { Text } from '../../typography';
import Avatar from '../../avatar';
import {
  SquareCover,
  SquareContentContainer,
  DateBookmarkContainer,
  BookmarkIcon,
  Title,
  PlacePriceContainer,
  PlacePriceIcon,
  OrganizationLink,
  OrganizationName,
  RectangleCover,
  RectangleContentContainer,
} from './index.style';

type Props = {
  title: string,
  bookmarked?: boolean,
  type?: SQUARE_CARD | RECTANGLE_CARD,
  price: string,
  place: string,
  date: string | Object,
  cover: String,
  organizationName: ?string,
  organizationLogo: ?string,
  organizationSlug: ?string,
  linkTo: ?string,
  onClickBookmark: () => void,
}

const EventCard = (props: Props) => {
  const {
    title,
    type,
    bookmarked,
    price,
    place,
    date,
    cover,
    organizationName,
    organizationLogo,
    organizationSlug,
    onClickBookmark,
    linkTo,
  } = props;

  const [isBookmarked, setBookmark] = useState(bookmarked);

  const handleClickBookmark = (e) => {
    e.preventDefault();
    setBookmark(!isBookmarked);
    onClickBookmark();
  };

  const renderSquareCard = () => (
    <CardTemplate
      direction="vertical"
      hoverToLevel={3}
      data-test={SQUARE_CARD}
      maxWidth={400}
      linkTo={linkTo}
    >
      <SquareCover src={cover} />
      <SquareContentContainer>
        <DateBookmarkContainer data-test="square-date-bookmark">
          <ShowDate date={date} color="gray" fontSize="12" />
          {
            isBookmarked
              ? <BookmarkIcon type="bookmark" size="lg" color="gray" onClick={handleClickBookmark} />
              : <BookmarkIcon type="bookmark-border" size="lg" color="gray" onClick={handleClickBookmark} />
          }
        </DateBookmarkContainer>
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
        {(organizationLogo || organizationName) && (
          <OrganizationLink to={`organizations/${organizationSlug}`}>
            <Avatar src={organizationLogo} size="sm" />
            <OrganizationName>{organizationName}</OrganizationName>
          </OrganizationLink>
        )}
      </SquareContentContainer>
    </CardTemplate>
  );

  const renderRectangleCard = () => (
    <CardTemplate
      direction="horizontal"
      hoverToLevel={3}
      data-test={RECTANGLE_CARD}
      maxWidth={592}
      linkTo={linkTo}
    >
      <RectangleCover src={cover} />
      <RectangleContentContainer>
        <DateBookmarkContainer>
          <ShowDate date={date} color="gray" fontSize="12" />
          {
            isBookmarked
              ? <BookmarkIcon type="bookmark" size="lg" color="gray" onClick={handleClickBookmark} />
              : <BookmarkIcon type="bookmark-border" size="lg" color="gray" onClick={handleClickBookmark} />
          }
        </DateBookmarkContainer>
        <Title level={2} size="sm">{title}</Title>
        <PlacePriceContainer>
          <div>
            <PlacePriceIcon type="place" size="sm" color="gray" />
            <Text color="gray" size="12">{place}</Text>
          </div>
          <div>
            <PlacePriceIcon type="loyalty" size="sm" color="gray" />
            <Text color="gray" size="12">{price}</Text>
          </div>
        </PlacePriceContainer>
      </RectangleContentContainer>
    </CardTemplate>
  );

  const renderCard = () => {
    switch (type) {
      case RECTANGLE_CARD:
        return renderRectangleCard();
      case SQUARE_CARD:
      default:
        return renderSquareCard();
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
