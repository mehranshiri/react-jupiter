import React, { useState } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { VERTICAL_CARD, HORIZONTAL_CARD } from './constants';
import ShowDate from '../../show-date';
import TitledAvatar from '../../titled-avatar';
import EventCardLabel from './event-card-label';
import {
  VerticalCardContainer,
  VerticalCover,
  VerticalContentContainer,
  DateLabelContainer,
  DateBookmarkContainer,
  BookmarkIcon,
  VerticalPlacePrice,
  VerticalTitle,
  HorizontalCardContainer,
  HorizontalCover,
  HorizontalContentContainer,
  HorizontalTitle,
  HorizontalPlacePrice,
} from './index.style';
import DefaultCover from '../../assets/defaults-images/default-cover.jpg';
import finishedClockLabel from '../../assets/images/finished-clock-label.svg';

const EventCard = (props) => {
  const {
    title,
    bookmarked,
    type,
    price,
    place,
    date,
    cover,
    ads,
    finished,
    organization,
    renderEventLink,
    renderOrganizationLink,
    clickBookmark,
    ...rest
  } = props;
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);

  const productPropertiesList = [
    { iconName: 'place', text: place },
    { iconName: 'local-offer', text: price },
  ];

  const handleClickBookmark = () => {
    const returnedValue = clickBookmark();
    if (returnedValue !== false) {
      setIsBookmarked(!isBookmarked);
    }
  };

  const renderVerticalCard = () => (
    <VerticalCardContainer
      direction={type}
      hoverToLevel={3}
      maxWidth={270}
      background={finished ? finishedClockLabel : null}
      {...rest}
    >
      { renderEventLink(<VerticalCover data-test="vertical-cover" src={!cover ? DefaultCover : cover} />) }
      <VerticalContentContainer data-test="vertical-content">
        <div>
          <DateBookmarkContainer data-test="vertical-date-bookmark">
            <DateLabelContainer>
              {finished && <EventCardLabel type="finished" />}
              {!finished && ads && <EventCardLabel type="ads" />}
              <ShowDate date={date} color="gray" fontSize="12" />
            </DateLabelContainer>
            <BookmarkIcon
              name={isBookmarked ? 'bookmark' : 'bookmark-border'}
              size="lg"
              color="gray"
              onClick={handleClickBookmark}
            />
          </DateBookmarkContainer>
          { renderEventLink(<VerticalTitle level={2} size="sm">{title}</VerticalTitle>)}
          <VerticalPlacePrice list={productPropertiesList} />
        </div>
        {
          organization && <TitledAvatar title={organization.name} titleSize={10} avatar={organization.logo} avatarSize="sm" renderAvatarLink={renderOrganizationLink} />
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
      { renderEventLink(<HorizontalCover data-test="horizontal-cover" src={!cover ? DefaultCover : cover} />) }
      <HorizontalContentContainer data-test="horizontal-content">
        <DateBookmarkContainer>
          <DateLabelContainer>
            {finished && <EventCardLabel type="finished" />}
            {!finished && ads && <EventCardLabel type="ads" />}
            <ShowDate date={date} color="gray" fontSize="12" />
          </DateLabelContainer>
          <BookmarkIcon
            name={isBookmarked ? 'bookmark' : 'bookmark-border'}
            size="lg"
            color="gray"
            onClick={handleClickBookmark}
            data-test={isBookmarked ? 'bookmark' : 'bookmark-border'}
          />
        </DateBookmarkContainer>
        { renderEventLink(<HorizontalTitle level={2} size="sm">{title}</HorizontalTitle>) }
        <HorizontalPlacePrice list={productPropertiesList} isHorizontal />
      </HorizontalContentContainer>
    </HorizontalCardContainer>
  );

  const renderCard = () => {
    const { type } = props;
    switch (type) {
      case HORIZONTAL_CARD:
        return renderHorizontalCard(props);
      case VERTICAL_CARD:
      default:
        return renderVerticalCard(props);
    }
  };

  return renderCard();
};

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  bookmarked: PropTypes.bool,
  type: PropTypes.string,
  price: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  cover: PropTypes.string,
  ads: PropTypes.bool,
  finished: PropTypes.bool,
  organization: oneOfType([
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string,
    }),
    undefined,
  ]),
  renderEventLink: PropTypes.func.isRequired,
  renderOrganizationLink: PropTypes.func,
  clickBookmark: PropTypes.func.isRequired,
};

EventCard.defaultProps = {
  bookmarked: false,
  cover: '',
  type: VERTICAL_CARD,
  ads: false,
  finished: false,
  renderOrganizationLink: () => false,
};

export default EventCard;
