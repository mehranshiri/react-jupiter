// @flow

import React, { useState } from 'react';
import TitledAvatar from '../titled-avatar';
import { ButtonContainer, StyledButton } from './index.style';

type Props = {
  name: string,
  avatar: string,
  isFollowed?: boolean,
  // onClickFollowMe : it should handle actions that should be happened after click follow-me button
  // and return new value for isFollow and if the function return nothing the default value is set to be 'false'
  onClickFollowMe?: () => boolean,
  onClickConnectUs?: () => void,
  onClickDescription?: () => void,
}

const ProductOwner = (props: Props) => {
  const {
    name,
    avatar,
    isFollowed,
    onClickFollowMe,
    onClickConnectUs,
    onClickDescription,
  } = props;
  const [isFollow, setFollowStatus] = useState(isFollowed);

  function handleClickFollowMe() {
    setFollowStatus(onClickFollowMe());
  }

  return (
    <div data-test="product-owner">
      <TitledAvatar
        title={name}
        avatar={avatar}
      />
      <ButtonContainer>
        <StyledButton
          styleType={isFollow ? 'secondary' : 'primary'}
          htmlType="button"
          mainColor="blue"
          size="sm"
          onClick={handleClickFollowMe}
        >
          {isFollow ? 'دنبال میکنید' : 'دنبال کنید' }
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
        <StyledButton
          styleType="tertiary"
          htmlType="button"
          size="sm"
          onClick={onClickDescription}
        >
          توضیحات
        </StyledButton>
      </ButtonContainer>
    </div>
  );
};

ProductOwner.defaultProps = {
  isFollowed: false,
  onClickFollowMe: () => false,
  onClickConnectUs: () => {},
  onClickDescription: () => {},
};

export default ProductOwner;
