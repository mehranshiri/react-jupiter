import styled from 'styled-components';
import defaultImage from '../assets/defaults-images/Avatar_default.svg';

export const Image = styled.img`
  width: ${({ theme, size }) => theme.size[size]}px;
  height: ${({ theme, size }) => theme.size[size]}px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  display: block;
  background-image: url(${defaultImage});
  background-size: cover;
`;