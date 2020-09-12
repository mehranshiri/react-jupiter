import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Tabs, TabPanel } from './index';


storiesOf('Tabs', module)
  .add('minimal tabs', () => (
    <Tabs>
      <TabPanel label="تب اول" tabKey="firstTab">
        this is 1th panel data
      </TabPanel>
      <TabPanel label="تب دوم اینجا" tabKey="secTab">
        this is 2nd panel data
      </TabPanel>
      <TabPanel label="تب سوم طولانی است" tabKey="thirsdTab">
        this is 3th panel data
      </TabPanel>
      <TabPanel label="تب بعدی خیلی خیلی خیلی خیلی طولانی است" tabKey="the4thTab">
        this is ۴th panel data
      </TabPanel>
    </Tabs>
  ))
  .addDecorator(withInfo);
