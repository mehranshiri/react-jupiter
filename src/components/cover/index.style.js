import styled, { keyframes } from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import defaultImage from '../assets/defaults-images/Cover_default.jpg';

export const Container = styled.div`
  min-height: ${(props) => props.minHeight}px;
  & > a {
    display: block;
  }
  
  & > span {
    display: block;
    width: 100%;
    min-height: inherit;
  }
`;

const lazyLoadingAnimation = keyframes`
  100% {
    opacity: 1;
    filter: none;
  }
  0% {
    opacity: 0;
    filter: blur(20px);
  }
`;

export const StyledLazyImage = styled(LazyLoadImage)`
  margin-bottom: -5px;
  min-height: inherit;
  width: 100%;
  font-family: 'IranSharp';
  display: block;
  background-image: url(${defaultImage});
  background-size: cover;
  animation: ${lazyLoadingAnimation} 2s 1;
`;

export const StyledImage = styled.img`
  min-height: inherit;
  width: 100%;
  font-family: 'IranSharp';
  display: block;
  background-image: url(${defaultImage});
  background-size: cover;
`;
