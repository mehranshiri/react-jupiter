// @flow

import React, { useState } from 'react';
import TitledAvatar from '../titled-avatar';
import { ButtonContainer, StyledButton } from './index.style';

type Props = {
  name: string,
  avatar: string,
  isFollowed?: boolean,
  renderTitledAvatarLink?: * => Node,
  renderDescriptionLink?: * => Node,
  // onClickFollowMe : it should handle actions that should be happened after click follow-me button
  // and return new value for isFollow and if the function return nothing the default value is set to be 'false'
  onClickFollowMe?: () => boolean,
  onClickConnectUs?: () => void,
}

const ProductOwner = (props: Props) => {
  const {
    name,
    avatar,
    isFollowed,
    renderTitledAvatarLink,
    renderDescriptionLink,
    onClickFollowMe,
    onClickConnectUs,
  } = props;
  const [isFollow, setFollowStatus] = useState(isFollowed);
  const [isLoading, setLoadingStatus] = useState(false);

  async function handleClickFollowMe() {
    setLoadingStatus(true);
    const updatedIsFollowStatus = await onClickFollowMe();
    setLoadingStatus(false);
    setFollowStatus(updatedIsFollowStatus);
  }

  return (
    <div data-test="product-owner">
      <TitledAvatar
        title={name}
        avatar={avatar}
        renderAvatarLink={renderTitledAvatarLink}
      />
      <ButtonContainer>
        <StyledButton
          className="follow-button"
          styleType={isFollow ? 'secondary' : 'primary'}
          htmlType="button"
          mainColor="blue"
          size="sm"
          isLoading={isLoading}
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
          renderLink={renderDescriptionLink}
        >
          توضیحات
        </StyledButton>
      </ButtonContainer>
    </div>
  );
};

ProductOwner.defaultProps = {
  isFollowed: false,
  renderTitledAvatarLink: null,
  renderDescriptionLink: null,
  onClickFollowMe: () => false,
  onClickConnectUs: () => {},
};

export default ProductOwner;
