import styled from 'styled-components';

export const Img = styled.img`
  width: ${({ theme, size }) => theme.avatar.size[size]}px;
  height: ${({ theme, size }) => theme.avatar.size[size]}px;
  border: ${({ theme }) => theme.avatar.borderWidth}px solid ${({ theme, borderColor }) => (borderColor === 'primaryColor' ? theme.colors.darkBlue600 : theme.colors.white)};
  height: ${({ theme, size }) => theme.avatar.size[size]}px;
  border-radius: ${({ theme }) => theme.avatar.borderRadius}px;
  display: block;
`;
