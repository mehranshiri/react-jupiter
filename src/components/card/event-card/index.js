// @flow

import React, { type Node, PureComponent } from 'react';
import { VERTICAL_CARD, HORIZONTAL_CARD } from './constants';
import ShowDate from '../../show-date';
import ProductProperties from '../../product-properties';
import TitledAvatar from '../../titled-avatar';
import AdsLabel from '../../ads-label';
import {
  VerticalCardContainer,
  VerticalCover,
  VerticalContentContainer,
  DateAdsContainer,
  DateBookmarkContainer,
  BookmarkIcon,
  Title,
  HorizontalCardContainer,
  HorizontalCover,
  HorizontalContentContainer,
} from './index.style';
import DefaultCover from '../../assets/defaults-images/default-cover.jpg';

type Props = {
  title: string,
  bookmarked?: boolean,
  type?: VERTICAL_CARD | HORIZONTAL_CARD,
  price: string,
  place: string,
  date: string | Object,
  cover?: string,
  ads?: boolean,
  organization: ?{
    name: string,
    logo: string,
    slug: string,
  },
  renderEventLink: * => Node,
  clickBookmark: () => void,
}

type State = {
  isBookmarked: boolean
}

class EventCard extends PureComponent<Props, State> {
  static defaultProps = {
    cover: '',
    bookmarked: false,
    type: VERTICAL_CARD,
    ads: false,
  };

  constructor(props: Object) {
    super(props);
    this.state = { isBookmarked: props.bookmarked };
  }

  handleClickBookmark = () => {
    const { isBookmarked } = this.state;
    const { clickBookmark } = this.props;
    this.setState({ isBookmarked: !isBookmarked });
    clickBookmark();
  };

  handleFailedBookmarked = () => {
    const { bookmarked } = this.props;
    this.setState({ isBookmarked: bookmarked });
  }

  renderVerticalCard = (productPropertiesList: Object) => {
    const {
      type, title, renderEventLink, date, cover, ads, organization, ...rest
    } = this.props;
    const { isBookmarked } = this.state;
    return (
      <VerticalCardContainer
        direction={type}
        hoverToLevel={3}
        maxWidth={270}
        {...rest}
      >
        { renderEventLink(<VerticalCover data-test="vertical-cover" src={!cover ? DefaultCover : cover} />) }
        <VerticalContentContainer data-test="vertical-content">
          <div>
            <DateBookmarkContainer data-test="vertical-date-bookmark">
              <DateAdsContainer>
                {ads && <AdsLabel />}
                <ShowDate date={date} color="gray" fontSize="12" />
              </DateAdsContainer>
              <BookmarkIcon
                name={isBookmarked ? 'bookmark' : 'bookmark-border'}
                size="lg"
                color="gray"
                onClick={this.handleClickBookmark}
              />
            </DateBookmarkContainer>
            { renderEventLink(<Title level={2} size="sm">{title}</Title>) }
            <ProductProperties list={productPropertiesList} />
          </div>
          {
            organization
            && <TitledAvatar size="sm" title={organization.name} avatar={organization.logo} />
          }
        </VerticalContentContainer>
      </VerticalCardContainer>
    );
  }

  renderHorizontalCard = (productPropertiesList: Object) => {
    const {
      type, title, renderEventLink, date, cover, ads, ...rest
    } = this.props;
    const { isBookmarked } = this.state;
    return (
      <HorizontalCardContainer
        direction={type}
        hoverToLevel={3}
        maxWidth={560}
        {...rest}
      >
        { renderEventLink(<HorizontalCover data-test="horizontal-cover" src={!cover ? DefaultCover : cover} />) }
        <HorizontalContentContainer data-test="horizontal-content">
          <DateBookmarkContainer>
            <DateAdsContainer>
              { ads && <AdsLabel /> }
              <ShowDate date={date} color="gray" fontSize="12" />
            </DateAdsContainer>
            <BookmarkIcon
              name={isBookmarked ? 'bookmark' : 'bookmark-border'}
              size="lg"
              color="gray"
              onClick={this.handleClickBookmark}
            />
          </DateBookmarkContainer>
          { renderEventLink(<Title level={2} size="sm">{title}</Title>) }
          <ProductProperties list={productPropertiesList} isHorizontal />
        </HorizontalContentContainer>
      </HorizontalCardContainer>
    );
  };

  renderCard = () => {
    const { type, place, price } = this.props;
    const productPropertiesList = [
      { iconName: 'place', text: place },
      { iconName: 'local-offer', text: price },
    ];
    switch (type) {
      case HORIZONTAL_CARD:
        return this.renderHorizontalCard(productPropertiesList);
      case VERTICAL_CARD:
      default:
        return this.renderVerticalCard(productPropertiesList);
    }
  };

  render() {
    return this.renderCard();
  }
}

export default EventCard;
