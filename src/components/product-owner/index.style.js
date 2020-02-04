import styled from 'styled-components';
import Button from '../button';

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledButton = styled(Button)`
  margin: 4px;

  &:first-child {
    margin-right: 0;
  }
`;
