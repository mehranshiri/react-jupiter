import React from 'react';
import { shallow } from 'enzyme';
import findByTestAtrr from '../../utils/test';
import OrganizationCard from './index';

const setupShallow = (props = {}) => (
  shallow(<OrganizationCard data={props.data} {...props} />)
);

describe('should render correctly', () => {
  it('should render correctly', () => {
    const component = setupShallow({
      title: 'انجمن علمی کامپیوتر دانشگاه صنعتی خواجه',
      logo: 'https://static.evand.net/images/organizations/logos/original/d431e339d86b187f356055f1d6f39ddb.jpg?x-oss-process=image/resize,h_250',
      report: {
        heldEventsNumber: 2,
        activeEventsNumber: 17,
        followingNumber: 148,
      },
      onClickFollow: () => { window.console.log('handle click follow'); },
    });
    const OrganizationCard = findByTestAtrr(component, 'organization-card');
    expect(OrganizationCard.length).toBe(1);
  });
});
