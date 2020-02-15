// @flow

import React from 'react';
import defaultImage from '../assets/defaults-images/Cover_default.jpg';
import { Container, StyledLazyImage, StyledImage } from './index.style';

type Props = {
  src?: string,
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
    alt,
    minHeight,
    linkTo,
    linkTarget,
    renderLink,
    isLazy,
    ...rest
  } = props;

  const renderCover = () => (
    <>
      {
        isLazy ? (
          <StyledLazyImage effect="blur" src={src} alt={alt} data-test="cover" {...rest} />
        ) : (
          <StyledImage src={src} alt={alt} data-test="cover" {...rest} />
        )
      }
    </>
  );

  if (renderLink) {
    return (
      <Container minHeight={minHeight}>
        {renderLink(renderCover())}
      </Container>
    );
  }
  if (linkTo) {
    return (
      <Container minHeight={minHeight}>
        <a href={linkTo} target={linkTarget}>
          {renderCover()}
        </a>
      </Container>
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
  src: defaultImage,
  minHeight: 151,
  renderLink: null,
  linkTo: null,
  linkTarget: '_blank',
  isLazy: false,
};

export default Cover;
