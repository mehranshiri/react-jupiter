import styled from 'styled-components';
import CardTemplate from '../card-template';
import Button from '../../button';
import defaultTheme from '../../themes';

export const Container = styled(CardTemplate)`
  padding: 16px 32px;
`;

export const LTRContainer = styled.div`
  direction: ltr;
  display: flex;
`;

export const StyledButton = styled(Button)`
  margin: 4px 8px;
  direction: rtl;

  &.follow-button {
    min-width: 140px;
  }
`;

export const BorderedBox = styled.div`
  border: ${({ theme }) => theme.border.lightBlue};
  padding: 8px 16px;
  margin: 8px 8px 0 8px;
  display: flex;
  justify-content: space-between;
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const ResponsiveFlex = styled.div`
  display: flex;
  @media only screen and (max-width: ${defaultTheme.breakpoints.sm}px) {
    flex-flow: column nowrap;
  }
  @media only screen and (min-width: ${defaultTheme.breakpoints.sm}px) {
    flex-flow: row nowrap;
  }
  align-items: center;
  justify-content: space-between;
`;
