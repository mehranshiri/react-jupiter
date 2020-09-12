import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  select,
} from '@storybook/addon-knobs';
import { Tabs, TabPanel } from './index';


storiesOf('Tabs', module)
  .add('tabs example', () => (
    <Tabs
      defaultTab={select('optional default active tap (if dont enter it, it would be the first one by default)', ['firstTab', 'secTab', 'thirsdTab', 'the4thTab'])}
      onChange={action('default onChange function trigers what you want to do in onChange tab (it has new tabKey as input argument)')}
    >
      <TabPanel
        label={text('required panel tab label', 'تب اول')}
        tabKey="firstTab"
      >
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
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
