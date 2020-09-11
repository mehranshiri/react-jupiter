import React, { type Node, useState } from 'react';
import Button from '../button';

type Props = {
  children: * => Node,
};

function Tabs({ children }: Props) {
  const tabPanels = React.Children.toArray(children);
  const [activeTabKey, setActiveTabKey] = useState(tabPanels[0].props.tabKey);
  const selectedTabPanel = tabPanels.find((item) => item.props.tabKey === activeTabKey);

  function handleClick(e) {
    let selectedTabKey;
    if (e.target.tagName !== 'BUTTON') {
      selectedTabKey = e.target.parentElement.attributes['data-access'].value;
    } else {
      selectedTabKey = e.target.attributes['data-access'].value;
    }

    if (selectedTabKey !== activeTabKey) {
      setActiveTabKey(selectedTabKey);
    }
  }

  return (
    <div data-test="tabs-container">
      <>
        {tabPanels.map((tabPanelData) => {
          const { props: { label, tabKey } } = tabPanelData;

          return (
            <Button
              data-access={tabKey}
              key={tabKey}
              data-test="tab-label"
              htmlType="button"
              mainColor="blue"
              styleType="secondary"
              size="sm"
              onClick={handleClick}
            >
              {label || '-'}
            </Button>
          );
        })}
      </>

      {React.cloneElement(selectedTabPanel)}
    </div>
  );
}

export default Tabs;
