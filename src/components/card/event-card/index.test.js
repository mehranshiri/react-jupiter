import React from 'react';
import { shallow } from 'enzyme';

import EventCard from './index';
import { SQUARE_CARD, RECTANGLE_CARD, SLIDER_CARD } from './constants';
import { findByTestAtrr } from '../../utils/testUtils';

const setupShallow = (props = {}) => (
  shallow(<EventCard level={props.level} {...props} />)
);

// const setupMount = (props = {}) => (
//   mount(<EventCard level={props.level} {...props} />)
// );

describe('Event Card', () => {
  it('should render default square event card', () => {
    const component = setupShallow({
      title: 'نام رویداد مورد نظر',
      price: 'از ۲۰۰۰۰۰ تومان',
      location: 'تهران',
      date: '2020-01-10T14:00:00+0330',
      cover: 'https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg',
      organizerName: 'برگزار کننده نمونه',
      organizerLogo: 'https://static.evand.net/images/organizations/logos/original/e90483ade453446ae2fd156e15244d04.jpg',
    });
    const EventCard = findByTestAtrr(component, SQUARE_CARD);
    expect(EventCard.length).toBe(1);
  });

  it('should render default rectangle event card', () => {
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

  it('should render default slider event card', () => {
    const component = setupShallow({
      type: 'slider',
      title: 'نام رویداد مورد نظر',
      price: 'از ۲۰۰۰۰۰ تومان',
      location: 'تهران',
      date: '2020-01-10T14:00:00+0330',
      cover: 'https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg',
      organizerName: 'برگزار کننده نمونه',
      organizerLogo: 'https://static.evand.net/images/organizations/logos/original/e90483ade453446ae2fd156e15244d04.jpg',
    });
    const EventCard = findByTestAtrr(component, SLIDER_CARD);
    expect(EventCard.length).toBe(1);
  });
});
