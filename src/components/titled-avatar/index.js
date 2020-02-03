// @flow

import React, { type Node } from 'react';
import Avatar from '../avatar';
import GlobalStyle from '../globalStyle';
import globalTheme from '../themes';
import {
  Container, Link, Title, SmallTitle,
} from './index.style';

type Props = {
  title: string,
  avatar: string,
  linkTo?: string,
  renderAvatarLink?: * => Node,
  size?: string,
};

const TitledAvatar = (props: Props) => {
  const {
    title, avatar, linkTo, renderAvatarLink, size,
  } = props;

  const renderTitle = () => {
    if (size === globalTheme.sizes.small) {
      return <SmallTitle size="12">{title}</SmallTitle>;
    }
    return <Title level={4} size={size}>{title}</Title>;
  };

  if (renderAvatarLink) {
    return renderAvatarLink(
      <Container data-test="titled-avatar">
        <GlobalStyle />
        <Avatar src={avatar} size={size} />
        {renderTitle()}
      </Container>,
    );
  }

  if (!linkTo) {
    return (
      <Container data-test="titled-avatar">
        <Avatar src={avatar} size={size} />
        {renderTitle()}
      </Container>
    );
  }

  return (
    <Link href={linkTo}>
      <Avatar src={avatar} size={size} />
      {renderTitle()}
    </Link>
  );
};

TitledAvatar.defaultProps = {
  linkTo: '',
  renderAvatarLink: undefined,
  size: globalTheme.sizes.medium,
};

export default TitledAvatar;
