// @flow

import React from 'react';
import TitledAvatar from '../titled-avatar';
import { ButtonContainer, StyledButton } from './index.style';

type Props = {
  name: string,
  avatar: string,
  onClickFollowMe?: () => void,
  onClickConnectUs?: () => void,
  onClickDescription?: () => void,
}

const ProductOwner = (props: Props) => {
  const {
    name,
    avatar,
    onClickFollowMe,
    onClickConnectUs,
    onClickDescription,
  } = props;

  return (
    <div data-test="product-owner">
      <TitledAvatar
        title={name}
        avatar={avatar}
      />
      <ButtonContainer>
        <StyledButton mainColor="blue" htmlType="button" size="sm" onClick={onClickFollowMe}>
          دنبال کنید
        </StyledButton>
        <StyledButton mainColor="blue" htmlType="button" styleType="secondary" size="sm" onClick={onClickConnectUs}>
          تماس
        </StyledButton>
        <StyledButton htmlType="button" styleType="tertiary" size="sm" onClick={onClickDescription}>
          توضیحات
        </StyledButton>
      </ButtonContainer>
    </div>
  );
};

ProductOwner.defaultProps = {
  onClickFollowMe: () => {},
  onClickConnectUs: () => {},
  onClickDescription: () => {},
};

export default ProductOwner;
