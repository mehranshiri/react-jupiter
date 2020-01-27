// @flow

import React, { useState, type Node } from 'react';
import { VERTICAL_CARD, HORIZONTAL_CARD } from './constants';
import ShowDate from '../../show-date';
import ProductProperties from '../../product-properties';
import TitledAvatar from '../../titled-avatar';
import {
  VerticalCardContainer,
  Link,
  VerticalCover,
  VerticalContentContainer,
  DateBookmarkContainer,
  BookmarkIcon,
  Title,
  HorizontalCardContainer,
  HorizontalCover,
  HorizontalContentContainer,
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
  linkTo: string,
  renderEventLink?: * => Node,
  queryString?: string,
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
    renderEventLink,
    queryString,
    ...rest
  } = props;

  const [isBookmarked, setBookmark] = useState(bookmarked);
  const productPropertiesList = [
    { iconName: 'place', text: place },
    { iconName: 'loyalty', text: price },
  ];

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
      {...rest}
    >
      {
        renderEventLink
          ? renderEventLink(<VerticalCover data-test="vertical-cover" src={cover} />)
          : <Link href={`${linkTo}${queryString ? `?${queryString}` : ''}`}><VerticalCover data-test="vertical-cover" src={cover} /></Link>
      }
      <VerticalContentContainer data-test="vertical-content">
        <div>
          <DateBookmarkContainer data-test="vertical-date-bookmark">
            <ShowDate date={date} color="gray" fontSize="12" />
            <BookmarkIcon
              name={isBookmarked ? 'bookmark' : 'bookmark-border'}
              size="lg"
              color="gray"
              onClick={handleClickBookmark}
            />
          </DateBookmarkContainer>
          {
            renderEventLink
              ? renderEventLink(<Title level={2} size="sm">{title}</Title>)
              : <Link href={`${linkTo}${queryString ? `?${queryString}` : ''}`}><Title level={2} size="sm">{title}</Title></Link>
          }
          <ProductProperties list={productPropertiesList} />
        </div>
        {
          organization
          && <TitledAvatar size="sm" title={organization.name} avatar={organization.logo} />
        }
      </VerticalContentContainer>
    </VerticalCardContainer>
  );

  const renderHorizontalCard = () => (
    <HorizontalCardContainer
      direction={type}
      hoverToLevel={3}
      maxWidth={560}
      {...rest}
    >
      {
        renderEventLink
          ? renderEventLink(<HorizontalCover data-test="horizontal-cover" src={cover} />)
          : <Link href={`${linkTo}${queryString ? `?${queryString}` : ''}`}><HorizontalCover data-test="horizontal-cover" src={cover} /></Link>
      }
      <HorizontalContentContainer data-test="horizontal-content">
        <DateBookmarkContainer>
          <ShowDate date={date} color="gray" fontSize="12" />
          <BookmarkIcon
            name={isBookmarked ? 'bookmark' : 'bookmark-border'}
            size="lg"
            color="gray"
            onClick={handleClickBookmark}
          />
        </DateBookmarkContainer>
        {
          renderEventLink
            ? renderEventLink(<Title level={2} size="sm">{title}</Title>)
            : <Link href={`${linkTo}${queryString ? `?${queryString}` : ''}`}><Title level={2} size="sm">{title}</Title></Link>
        }
        <ProductProperties list={productPropertiesList} isHorizontal />
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
  queryString: '',
  renderEventLink: undefined,
};

export default EventCard;
