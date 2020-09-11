import React, { type Node } from 'react';

type Props = {
  children: * => Node,
  label: string,
  tabKey: string,
};

function TabPanel({ children, label, tabKey }: Props) {
  return (
    <div className={`${label}-${tabKey}`} data-test="tabs-panel">
      {children}
    </div>
  );
}

export default TabPanel;
