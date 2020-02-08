import styled from 'styled-components';
import Button from '../button';

export const ButtonContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledButton = styled(Button)`
  margin-left: 8px;

  &.follow-button {
    min-width: 88px;
  }
`;
