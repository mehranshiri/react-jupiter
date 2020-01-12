import React from 'react';
import { shallow, mount } from 'enzyme';

import EventCard from './index';
import { SQUARE_CARD, RECTANGLE_CARD } from './constants';
import { findByTestAtrr } from '../../utils/testUtils';

const setupShallow = (props = {}) => (
  shallow(<EventCard level={props.level} {...props} />)
);

const setupMount = (props = {}) => (
  mount(<EventCard level={props.level} {...props} />)
);

describe('Event Card', () => {
  it('should render default square event card', () => {
    const component = setupShallow({
      type: 'square',
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
    const EventCard = findByTestAtrr(component, SQUARE_CARD);
    expect(EventCard.length).toBe(1);
  });

  it('should render rectangle event card', () => {
    const component = setupShallow({
      type: 'rectangle',
      title: 'نام رویداد مورد نظر',
      price: 'از ۲۰۰۰۰۰ تومان',
      location: 'تهران',
      date: '2020-01-10T14:00:00+0330',
      cover: 'https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg',
      organizerName: 'برگزار کننده نمونه',
      organizerLogo: 'https://static.evand.net/images/organizations/logos/original/e90483ade453446ae2fd156e15244d04.jpg',
    });
    const EventCard = findByTestAtrr(component, RECTANGLE_CARD);
    expect(EventCard.length).toBe(1);
  });

  it('should act correctly on clicking on bookmark icon', () => {
    const fn = jest.fn();
    const SquareCard = setupMount({
      type: 'square',
      title: 'تایتل یک رویداد نسبتا طولانی در اینجاست که قرار است اضافه بیاید و بزند به بیرون',
      cover: 'https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg',
      date: '2020-01-10T14:00:00+0330',
      place: 'تهران',
      price: 'از ۴۴۰۰۰ تومان',
      onClickBookmark: fn,
    });
    const Bookmark = findByTestAtrr(SquareCard, 'square-date-bookmark').find('i[type="bookmark-border"]');
    expect(Bookmark.length).toBe(1);
    Bookmark.simulate('click');
    const NewBookmark = findByTestAtrr(SquareCard, 'square-date-bookmark').find('i[type="bookmark-border"]');
    expect(NewBookmark.length).toBe(0);
    const Bookmarked = findByTestAtrr(SquareCard, 'square-date-bookmark').find('i[type="bookmark"]');
    expect(Bookmarked.length).toBe(1);
  });
});
