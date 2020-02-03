import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../utils/test';
import ProductOwner from './index';
import { StyledButton } from './index.style';

describe('ProductOwner Tests', () => {
  it('render ProductOwner', () => {
    const component = shallow(<ProductOwner />);
    const productOwner = findByTestAtrr(component, 'product-owner');

    expect(productOwner.length).toBe(1);
  });

  it('check buttons order and their functionality', () => {
    let isFollowMeFunctionCalled = false;
    let isConnectUsFunctionCalled = false;
    let isDescriptionFunctionCalled = false;
    function followMeFunc() { isFollowMeFunctionCalled = !isFollowMeFunctionCalled; }
    function connectUsFunc() { isConnectUsFunctionCalled = !isConnectUsFunctionCalled; }
    function descriptionFunc() { isDescriptionFunctionCalled = !isDescriptionFunctionCalled; }

    const component = shallow(
      <ProductOwner
        name="انجمن علمی کامپیوتر دانشگاه صنعتی خواجه نصیرالدین طوسی
        انجمن علمی کامپیوتر دانشگاه صنعتی خواجه نصیرالدین طوسی"
        onClickFollowMe={followMeFunc}
        onClickConnectUs={connectUsFunc}
        onClickDescription={descriptionFunc}
      />,
    );
    const productOwner = findByTestAtrr(component, 'product-owner');
    const followmeButton = productOwner.find(StyledButton).at(0);
    const connectUsButton = productOwner.find(StyledButton).at(1);
    const descriptionButton = productOwner.find(StyledButton).at(2);

    expect(followmeButton.text()).toContain('دنبال');
    expect(connectUsButton.text()).toContain('تماس');
    expect(descriptionButton.text()).toContain('توضیحات');
    expect(isFollowMeFunctionCalled).toBe(false);
    expect(isConnectUsFunctionCalled).toBe(false);
    expect(isDescriptionFunctionCalled).toBe(false);

    followmeButton.simulate('click');

    expect(isFollowMeFunctionCalled).toBe(true);
    expect(isConnectUsFunctionCalled).toBe(false);
    expect(isDescriptionFunctionCalled).toBe(false);

    connectUsButton.simulate('click');

    expect(isFollowMeFunctionCalled).toBe(true);
    expect(isConnectUsFunctionCalled).toBe(true);
    expect(isDescriptionFunctionCalled).toBe(false);

    descriptionButton.simulate('click');

    expect(isFollowMeFunctionCalled).toBe(true);
    expect(isConnectUsFunctionCalled).toBe(true);
    expect(isDescriptionFunctionCalled).toBe(true);
  });
});
