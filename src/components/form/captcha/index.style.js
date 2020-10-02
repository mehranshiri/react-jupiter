import styled from 'styled-components';

export const ImgContainer = styled.div`
  & .hide {
    display: none;
  }
`;

export const Loading = styled.div`
  height: 20px;
  background: lightgray;
  animation-name: sparkle;
  animation-duration: 2s;
  animation-iteration-count: infinite;

    @keyframes sparkle {
      0% {opacity: 0;}
      50% {opacity: 1;}
      70% {opacity: 1;}
      100% {opacity: 0;}
    }
  }
`;
