
import React, { useState } from 'react';

import { VERTICAL_CARD, HORIZONTAL_CARD } from './constants';
import ShowDate from '../../show-date';
import { Text } from '../../typography';
import Avatar from '../../avatar';
import {
  VerticalCardContainer,
  Link,
  VerticalCover,
  VerticalContentContainer,
  DateBookmarkContainer,
  BookmarkIcon,
  Title,
  PlacePriceIcon,
  OrganizationLink,
  OrganizationName,
  HorizontalCardContainer,
  HorizontalCover,
  HorizontalContentContainer,
  VerticalPlacePriceContainer,
  HorizontalPlacePriceContainer,
} from './index.style';

type Props = {
  title: string,
  bookmarked?: boolean,
  type?: VERTICAL_CARD | HORIZONTAL_CARD,
  price: string,
  place: string,
  date: string | Object,
  cover: String,
  organization: ?{
    name: string,
    logo: string,
    slug: string,
  },
  linkTo?: string,
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
    organization,
    onClickBookmark,
    linkTo,
  } = props;

  const [isBookmarked, setBookmark] = useState(bookmarked);

  const handleClickBookmark = (e) => {
    e.preventDefault();
    setBookmark(!isBookmarked);
    onClickBookmark();
  };

  const renderVerticalCard = () => (
    <VerticalCardContainer
      direction={type}
      hoverToLevel={3}
      maxWidth={270}
    >
      <Link to={linkTo}><VerticalCover data-test="vertical-cover" src={cover} /></Link>
      <VerticalContentContainer data-test="vertical-content">
        <div>
          <DateBookmarkContainer data-test="vertical-date-bookmark">
            <ShowDate date={date} color="gray" fontSize="12" />
            {
              isBookmarked
                ? <BookmarkIcon type="bookmark" size="lg" color="gray" onClick={handleClickBookmark} />
                : <BookmarkIcon type="bookmark-border" size="lg" color="gray" onClick={handleClickBookmark} />
            }
          </DateBookmarkContainer>
          <Link to={linkTo}><Title level={2} size="sm">{title}</Title></Link>
          <VerticalPlacePriceContainer>
            <div>
              <PlacePriceIcon type="place" size="sm" color="gray" />
              <Text color="gray" size="10">{place}</Text>
            </div>
            <div>
              <PlacePriceIcon type="loyalty" size="sm" color="gray" />
              <Text color="gray" size="10">{price}</Text>
            </div>
          </VerticalPlacePriceContainer>
        </div>
        {organization && (
          <OrganizationLink to={`organizations/${organization.slug}`}>
            <Avatar src={organization.logo} size="sm" />
            <OrganizationName size="12">{organization.name}</OrganizationName>
          </OrganizationLink>
        )}
      </VerticalContentContainer>
    </VerticalCardContainer>
  );

  const renderHorizontalCard = () => (
    <HorizontalCardContainer
      direction={type}
      hoverToLevel={3}
      maxWidth={560}
    >
      <Link to={linkTo}><HorizontalCover data-test="horizontal-cover" src={cover} /></Link>
      <HorizontalContentContainer data-test="horizontal-content">
        <DateBookmarkContainer>
          <ShowDate date={date} color="gray" fontSize="12" />
          {
            isBookmarked
              ? <BookmarkIcon type="bookmark" size="lg" color="gray" onClick={handleClickBookmark} />
              : <BookmarkIcon type="bookmark-border" size="lg" color="gray" onClick={handleClickBookmark} />
          }
        </DateBookmarkContainer>
        <Link to={linkTo}><Title level={2} size="sm">{title}</Title></Link>
        <HorizontalPlacePriceContainer>
          <div>
            <PlacePriceIcon type="place" size="sm" color="gray" />
            <Text color="gray" size="12">{place}</Text>
          </div>
          <div>
            <PlacePriceIcon type="loyalty" size="sm" color="gray" />
            <Text color="gray" size="12">{price}</Text>
          </div>
        </HorizontalPlacePriceContainer>
      </HorizontalContentContainer>
    </HorizontalCardContainer>
  );

  const renderCard = () => {
    switch (type) {
      case HORIZONTAL_CARD:
        return renderHorizontalCard();
      case VERTICAL_CARD:
      default:
        return renderVerticalCard();
    }
  };

  return (
    renderCard()
  );
};

EventCard.defaultProps = {
  bookmarked: false,
  type: VERTICAL_CARD,
};

export default EventCard;
