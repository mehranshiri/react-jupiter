import styled from 'styled-components';
import defaultTheme from '../../themes';

export const ImgContainer = styled.div`
  & .hide {
    display: none;
  }
`;

export const Loading = styled.div`
  height: 20px;
  background: ${defaultTheme.colors.gray600};
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
