import styled from 'styled-components';
import CardTemplate from '../card-template';
import Button from '../../button';

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
