// @flow

import React from 'react';
import Avatar from '../avatar';
import { Container, Link, Title } from './index.style';

type Props = {
  title: string,
  avatar: string,
  linkTo?: string,
};

const TitledAvatar = (props: Props) => {
  const { title, avatar, linkTo } = props;

  if (!linkTo) {
    return (
      <Container data-test="titled-avatar">
        <Avatar src={avatar} />
        <Title level={4} size="md" bold>{title}</Title>
      </Container>
    );
  }

  return (
    <Container data-test="titled-avatar">
      <Link to={linkTo}>
        <Avatar src={avatar} />
        <Title level={4} size="md" bold>{title}</Title>
      </Link>
    </Container>
  );
};

TitledAvatar.defaultProps = {
  linkTo: '',
};

export default TitledAvatar;
