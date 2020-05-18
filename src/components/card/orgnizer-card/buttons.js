import React, { useState } from 'react';
import Grid from 'styled-components-grid';
import Button from '../../button';
import { Margin } from '../../spacing';
import Responsive from '../../responsive';
import {
  LTRContainer,
  StyledButton,
} from './index.style';

type Props = {
  isFollowed: boolean,
  onClickFollowMe: () => boolean,
  onClickConnectUs: () => void,
  followersCount: string,
}

const Buttons = (props: Props) => {
  const {
    onClickFollowMe,
    onClickConnectUs,
    isFollowed,
    followersCount,
  } = props;
  const [isFollow, setFollowStatus] = useState(isFollowed);
  const [isLoading, setLoadingStatus] = useState(false);

  async function handleClickFollowMe() {
    setLoadingStatus(true);
    const updatedIsFollowStatus = await onClickFollowMe();
    setLoadingStatus(false);
    if (updatedIsFollowStatus) {
      setFollowStatus(!isFollowed);
    }
  }

  return (
    <>
      <Responsive option={{ greaterThan: '768px' }}>
        <LTRContainer>
          <StyledButton
            className="follow-button"
            styleType="secondary"
            htmlType="button"
            size="sm"
            isLoading={isLoading}
            onClick={handleClickFollowMe}
          >
            {isFollow ? 'دنبال میکنید' : 'دنبال کنید'}
            {followersCount && ` (${followersCount} دنبال کننده) `}
          </StyledButton>
          <StyledButton
            styleType="secondary"
            htmlType="button"
            mainColor="blue"
            size="sm"
            onClick={onClickConnectUs}
          >
            تماس
          </StyledButton>
        </LTRContainer>
      </Responsive>

      <Responsive option={{ lessThan: '768px' }}>
        <Grid>
          <Grid.Unit size={1 / 2}>
            <Margin all={4}>
              <Button
                className="follow-button"
                styleType="secondary"
                htmlType="button"
                size="sm"
                isLoading={isLoading}
                onClick={handleClickFollowMe}
                wide
              >
                {isFollow ? 'دنبال میکنید' : 'دنبال کنید'}
                {followersCount && ` (${followersCount} دنبال کننده) ` }
              </Button>
            </Margin>
          </Grid.Unit>

          <Grid.Unit size={1 / 2}>
            <Margin all={4}>
              <Button
                styleType="secondary"
                htmlType="button"
                mainColor="blue"
                size="sm"
                onClick={onClickConnectUs}
                wide
              >
                تماس
              </Button>
            </Margin>
          </Grid.Unit>
        </Grid>
      </Responsive>
    </>
  );
};

export default Buttons;
