import React, { useState } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import GlobalStyle from '../../globalStyle';
import { VERTICAL_CARD, HORIZONTAL_CARD } from './constants';
import ShowDate from '../../show-date';
import { Text } from '../../typography';
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

const finishedClockLabelUrl = 'https://evand-storage.oss-eu-central-1.aliyuncs.com/assets/images/other/finished-clock-label.svg';
const defaultCoverUrl = 'https://static.evand.net/assets/images/defaults/event-cover.jpg';

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
    showDate,
    ...rest
  } = props;
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);
  // date param used on main evand and because it wrong to use moment-jalali in react jupiter
  // we ommmit it in evand-next and use showDate param instead but its still used in evand
  // TODO: remove date params if no longer needed (in evand project)
  // TODO: remove ShowDate component and remove used places
  // TODO: remove moment-jalali from this package after removing ShowDate

  // in new form of event-card we dont show organazation info as a titled-avatar
  // TODO: if the new form was accepted and remove old one from evand clean these parts
  const productPropertiesList = [
    { iconName: 'place', text: place },
    { iconName: 'local-offer', text: price },
  ];
  if (organization && organization.logo === 'unset') {
    productPropertiesList.push({ iconName: 'supervisor-account', text: organization.name });
  }

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
      {...rest}
    >
      {renderEventLink(<VerticalCover data-test="vertical-cover" src={cover || defaultCoverUrl} loading="lazy" />) }
      <VerticalContentContainer
        data-test="vertical-content"
        background={finished ? finishedClockLabelUrl : null}
      >
        <div>
          <DateBookmarkContainer data-test="vertical-date-bookmark">
            <DateLabelContainer>
              {finished && <EventCardLabel type="finished" />}
              {!finished && ads && <EventCardLabel type="ads" />}
              {date && <ShowDate date={date} color="gray" fontSize="12" />}
              {showDate && (
                <Text size="12" color="gray" data-test="show-date">{showDate}</Text>
              )}
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
        {(organization && organization.logo !== 'unset') && (
          <TitledAvatar title={organization.name} titleSize={10} avatar={organization.logo} avatarSize="sm" renderAvatarLink={renderOrganizationLink} />
        )}
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
      {renderEventLink(<HorizontalCover data-test="horizontal-cover" src={cover || defaultCoverUrl} loading="lazy" />) }
      <HorizontalContentContainer data-test="horizontal-content">
        <DateBookmarkContainer>
          <DateLabelContainer>
            {finished && <EventCardLabel type="finished" />}
            {!finished && ads && <EventCardLabel type="ads" />}
            {date && <ShowDate date={date} color="gray" fontSize="12" />}
            {showDate && (
              <Text size="12" color="gray" data-test="show-date">{showDate}</Text>
            )}
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

  return (
    <>
      <GlobalStyle />
      {renderCard()}
    </>
  );
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
  ]),
  showDate: PropTypes.string,
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
  organization: undefined,
  renderOrganizationLink: () => false,
  date: '',
  showDate: '',
};

export default EventCard;
