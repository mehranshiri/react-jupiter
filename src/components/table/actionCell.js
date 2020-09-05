import React, { useState } from 'react';
import Button from '../button';

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
          <button type="button" onClick={toggleShowMore}>
            ...
          </button>

          {isShowingMore && (
            <>
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
            </>
          )}

        </>
      )}
    </td>
  );
}

export default ActionCell;
