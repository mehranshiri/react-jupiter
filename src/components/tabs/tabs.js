import React, { type Node, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../globalStyle';
import { Text } from '../typography';
import { TabHeader, StyledButton } from './index.style';
import theme from './theme';

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div data-test="tabs-container">
        <TabHeader>
          {tabPanels.map((tabPanelData) => {
            const { props: { label, tabKey } } = tabPanelData;

            return (
              <StyledButton
                data-access={tabKey}
                className={`${activeTabKey === tabKey ? 'active' : ''}`}
                key={tabKey}
                data-test="tab-label"
                type="button"
                onClick={handleClick}
              >
                <Text isCutWithEllipsis size={12}>
                  {label || '-'}
                </Text>
              </StyledButton>
            );
          })}
        </TabHeader>

        {React.cloneElement(selectedTabPanel)}
      </div>
    </ThemeProvider>
  );
}

export default Tabs;
