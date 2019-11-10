import styled from 'styled-components';

export const Child = styled.div`
  font-family: ${({ isBold }) => (isBold === true ? 'IranSharp‌Bold' : 'IranSharp')};
`;
