// @flow

import React, { type Node } from 'react';
import Avatar from '../avatar';
import GlobalStyle from '../globalStyle';
import {
  Container, Link, Title, SmallTitle,
} from './index.style';

type Props = {
  title: string,
  avatar: string,
  linkTo?: string,
  renderAvatarLink?: * => Node,
  avatarSize?: 'sm' | 'md',
  titleSize?: 10 | 12,
};

const TitledAvatar = (props: Props) => {
  const {
    title, avatar, linkTo, renderAvatarLink, avatarSize, titleSize,
  } = props;

  const renderTitle = () => {
    if (titleSize === 10) {
      return <SmallTitle size={10}>{title}</SmallTitle>;
    }
    return <Title level={4} size="md">{title}</Title>;
  };

  if (renderAvatarLink) {
    return renderAvatarLink(
      <Container data-test="titled-avatar">
        <GlobalStyle />
        <Avatar src={avatar} size={avatarSize} />
        {renderTitle()}
      </Container>,
    );
  }

  if (!linkTo) {
    return (
      <Container data-test="titled-avatar">
        <Avatar src={avatar} size={avatarSize} />
        {renderTitle()}
      </Container>
    );
  }

  return (
    <Link href={linkTo}>
      <Avatar src={avatar} size={avatarSize} />
      {renderTitle()}
    </Link>
  );
};

TitledAvatar.defaultProps = {
  linkTo: '',
  renderAvatarLink: undefined,
  avatarSize: 'md',
  titleSize: 12,
};

export default TitledAvatar;
