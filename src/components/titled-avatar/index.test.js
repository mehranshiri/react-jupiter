import React from 'react';
import { shallow } from 'enzyme';
import TitledAvatar from './index';
import { findByTestAtrr } from '../utils/test';

const setupShallow = (props = {}) => (
  shallow(
    <TitledAvatar
      title={props.title}
      avatar={props.avatar}
      {...props}
    />,
  )
);

describe('TitledAvatar', () => {
  it('should render correctly', () => {
    const component = setupShallow({
      title: 'تیم برگزاری جاده ابریشم',
      avatar: 'https://static.evand.net/images/organizations/logos/original/246c931fa36fd3ae8d05f59c64cd74d0.jpg',
    });
    const TitledAvatar = findByTestAtrr(component, 'titled-avatar');
    expect(TitledAvatar.length).toBe(1);
  });
});
