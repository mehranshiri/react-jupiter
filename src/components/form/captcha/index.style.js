import styled from 'styled-components';
import defaultTheme from '../../themes';

export const Container = styled.div`
  flex-shrink: 0;
  margin: 6px 6px 0 0;

  & .hide {
    display: none;
  }
`;

export const Loading = styled.div`
  height: 32px;
  width: 120px;
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

export const CaptchaBoxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;

export const InputConiatiner = styled.div`
  flex-grow: 1;
`;
