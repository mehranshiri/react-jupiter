import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import EventCard from './index';
import { VERTICAL_CARD, HORIZONTAL_CARD } from './constants';
import { findByTestAtrr } from '../../utils/test';

const setupMount = (props = {}) => (
  mount(<Router><EventCard level={props.level} {...props} /></Router>)
);

describe('Event Card', () => {
  it('should render default vertical event card', () => {
    const VerticalCard = setupMount({
      type: VERTICAL_CARD,
      title: 'تایتل یک رویداد نسبتا طولانی در اینجاست که قرار است اضافه بیاید و بزند به بیرون',
      cover: 'https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg',
      date: '2020-01-10T14:00:00+0330',
      place: 'تهران',
      price: 'از ۴۴۰۰۰ تومان',
      organizationLogo: 'https://static.evand.net/images/organizations/logos/original/e90483ade453446ae2fd156e15244d04.jpg',
      organizationName: 'هلدینگ کلان - مجتمع فنی پلی تکنیک - شرکت تجارت جهانی اندیشه',
      organizationSlug: 'drskill',
      onClickBookmark: () => { window.console.log('handle click bookmark'); },
      linkTo: '/somewhere',
    });
    const VerticalCover = findByTestAtrr(VerticalCard.find('img'), 'vertical-cover');
    const VerticalContent = findByTestAtrr(VerticalCard.find('div'), 'vertical-content');
    expect(VerticalCover.length).toBe(1);
    expect(VerticalContent.length).toBe(1);
    VerticalCard.unmount();
  });

  it('should render horizontal event card', () => {
    const HorizontalCard = setupMount({
      type: HORIZONTAL_CARD,
      title: 'نام رویداد مورد نظر',
      price: 'از ۲۰۰۰۰۰ تومان',
      location: 'تهران',
      date: '2020-01-10T14:00:00+0330',
      cover: 'https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg',
      organizerName: 'برگزار کننده نمونه',
      organizerLogo: 'https://static.evand.net/images/organizations/logos/original/e90483ade453446ae2fd156e15244d04.jpg',
      linkTo: '/somewhere',
    });
    const HorizontalCover = findByTestAtrr(HorizontalCard.find('img'), 'horizontal-cover');
    const HorizontalContent = findByTestAtrr(HorizontalCard.find('div'), 'horizontal-content');
    expect(HorizontalCover.length).toBe(1);
    expect(HorizontalContent.length).toBe(1);
    HorizontalCard.unmount();
  });

  it('should act correctly on clicking on bookmark icon', () => {
    const fn = jest.fn();
    const VerticalCard = setupMount({
      type: VERTICAL_CARD,
      title: 'تایتل یک رویداد نسبتا طولانی در اینجاست که قرار است اضافه بیاید و بزند به بیرون',
      cover: 'https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg',
      date: '2020-01-10T14:00:00+0330',
      place: 'تهران',
      price: 'از ۴۴۰۰۰ تومان',
      onClickBookmark: fn,
      linkTo: '/somewhere',
    });
    const Bookmark = findByTestAtrr(VerticalCard, 'vertical-date-bookmark').find('i[name="bookmark-border"]');
    expect(Bookmark.length).toBe(1);
    Bookmark.simulate('click');
    const NewBookmark = findByTestAtrr(VerticalCard, 'vertical-date-bookmark').find('i[name="bookmark-border"]');
    expect(NewBookmark.length).toBe(0);
    const Bookmarked = findByTestAtrr(VerticalCard, 'vertical-date-bookmark').find('i[name="bookmark"]');
    expect(Bookmarked.length).toBe(1);
    VerticalCard.unmount();
  });
});
