import React, { useState } from 'react';
import Button from '../button';
import { ShowMoreButton, ActionCellContainer, ActionsContainer } from './index.style';

type Props = {
  callToActions: [{
    props?: {},
    text?: string,
  }]
};

function ActionCell({ callToActions }: Props) {
  const [isShowingMore, setIsShowingMore] = useState(false);

  function toggleShowMore() {
    setIsShowingMore(!isShowingMore);
  }

  return (
    <td>
      <ActionCellContainer>
        <Button
          {...callToActions[0].props}
          htmlType="button"
          mainColor="blue"
          styleType="secondary"
          wide
        >
          {callToActions[0].text}
        </Button>

        {callToActions.length > 1 && (
          <>
            <ShowMoreButton type="button" onClick={toggleShowMore}>
              ...
            </ShowMoreButton>

            {isShowingMore && (
              <ActionsContainer>
                {callToActions.map((item, index) => {
                  if (index === 0) {
                    return null;
                  }
                  return (
                    <Button
                      key={item.text}
                      {...item.props}
                      htmlType="button"
                      mainColor="blue"
                      styleType="tertiary"
                      wide
                    >
                      {item.text}
                    </Button>
                  );
                })}
              </ActionsContainer>
            )}

          </>
        )}
      </ActionCellContainer>
    </td>
  );
}

export default ActionCell;
