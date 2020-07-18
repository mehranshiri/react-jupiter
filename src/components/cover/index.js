// @flow

import React from 'react';
import { Container, StyledLazyImage, StyledImage } from './index.style';

const defaultImageUrl = 'https://static.evand.net/assets/images/defaults/event-cover.jpg';

type Props = {
  src?: string,
  srcSet?: string,
  alt?: string,
  minHeight?: number,
  linkTo?: string,
  linkTarget?: '_self' | '_blank',
  renderLink?: * => Node,
  isLazy?: boolean,
}

const Cover = (props: Props) => {
  const {
    src,
    srcSet,
    alt,
    minHeight,
    linkTo,
    linkTarget,
    renderLink,
    isLazy,
    ...rest
  } = props;

  const renderCover = () => (
    isLazy
      ? (
        <StyledLazyImage
          effect="blur"
          srcSet={`${src}`}
          src={src}
          alt={alt}
          data-test="cover"
          {...rest}
        />
      )
      : (
        <StyledImage
          srcSet={`${src}`}
          src={src}
          alt={alt}
          data-test="cover"
          {...rest}
        />
      )
  );

  if (renderLink) {
    return (
      // <Container minHeight={minHeight}>
      renderLink(renderCover())
      // </Container>
    );
  }
  if (linkTo) {
    return (
      <a href={linkTo} target={linkTarget}>
        {renderCover()}
      </a>
    );
  }
  return (
    <Container minHeight={minHeight}>
      {renderCover()}
    </Container>
  );
};

Cover.defaultProps = {
  alt: 'کاور',
  src: defaultImageUrl,
  srcSet: undefined,
  minHeight: 151,
  renderLink: undefined,
  linkTo: undefined,
  linkTarget: '_blank',
  isLazy: false,
};

export default Cover;
