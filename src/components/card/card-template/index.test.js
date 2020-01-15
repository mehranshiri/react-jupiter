import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';

import CardTemplate from './index';
import { Text } from '../../typography';
import { findByTestAtrr } from '../../utils/test';
import theme from '../../themes';

const setupShallow = (props = {}) => (
  shallow(
    <CardTemplate
      level={props.level}
      hoverToLevel={props.hoverToLevel}
      maxWidth={props.maxWidth}
      linkTo={props.linkTo}
      {...props}
    >
      {props.children}
    </CardTemplate>,
  )
);

const setupMount = (props = {}) => (
  mount(
    <CardTemplate
      level={props.level}
      hoverToLevel={props.hoverToLevel}
      maxWidth={props.maxWidth}
      linkTo={props.linkTo}
      {...props}
    >
      {props.children}
    </CardTemplate>,
  )
);

describe('Card Template', () => {
  it('should render correctly', () => {
    const component = setupShallow({
      level: 2,
      hoverToLevel: 3,
      children: <Text>یک متن تستی</Text>,
    });
    const CardTemplate = findByTestAtrr(component, 'card-template');
    expect(CardTemplate.length).toBe(1);
  });

  it('should render correctly with link wrapper', () => {
    const component = setupShallow({
      level: 2,
      hoverToLevel: 3,
      linkTo: '/link-address',
      children: <Text>یک متن تستی</Text>,
    });
    const CardTemplate = findByTestAtrr(component, 'card-template-link-wrapper');
    expect(CardTemplate.length).toBe(1);
  });

  it('should has correct style', () => {
    const props = {
      level: 1,
      hoverToLevel: 3,
      children: 'یک متن تستی',
      maxWidth: 300,
    };
    const CardTemplate = setupMount(props);
    expect(CardTemplate).toHaveStyleRule(
      'box-shadow',
      `0 0 ${theme.shadows[1].blur}px ${theme.shadows[1].spread}px rgba(0,0,0,${theme.shadows[1].opacity})`,
    );
    expect(CardTemplate).toHaveStyleRule(
      'box-shadow',
      `0 0 ${theme.shadows[3].blur}px ${theme.shadows[3].spread}px rgba(0,0,0,${theme.shadows[3].opacity})`,
      {
        modifier: ':hover',
      },
    );
    expect(CardTemplate).toHaveStyleRule(
      'border-radius',
      `${theme.borderRadius.low}px`,
    );
    expect(CardTemplate).toHaveStyleRule('max-width', `${props.maxWidth}px`);
  });
});
