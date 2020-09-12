import React from 'react';
import { mount } from 'enzyme';
import { Tabs, TabPanel } from './index';
import findByTestAtrr from '../utils/test';

describe('Tabs', () => {
  it('render tabs container and tabs propare panel and tabs labels', () => {
    const component = mount(
      <Tabs>
        <TabPanel label="تب اول" key="firstTab">
          this is 1th panel data
        </TabPanel>
        <TabPanel label="تب دوم اینجا" key="secTab">
          this is 2nd panel data
        </TabPanel>
        <TabPanel label="تب سوم طولانی است" key="thirsdTab">
          this is 3th panel data
        </TabPanel>
      </Tabs>,
    );
    const tabsContainer = findByTestAtrr(component, 'tabs-container');
    const tabPanel = findByTestAtrr(component, 'tabs-panel');
    const tabLabel = findByTestAtrr(component, 'tab-label').find("[type='button']");

    expect(tabsContainer.length).toBe(1);
    expect(tabPanel.length).toBe(1);
    expect(tabPanel.text()).toBe('this is 1th panel data');
    expect(tabLabel.at(0).text()).toBe('تب اول');
  });
});
