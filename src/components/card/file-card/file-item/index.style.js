import styled from 'styled-components';
import './filesImgs.scss';

export const StyledImgIcon = styled.span`
  font-size: 67px;
`;

export const Wrapper = styled.div`
  cursor: pointer;
  border: ${({ isActive }) => (isActive ? '1px solid red' : 'none')};
  border-radius: ${({ theme }) => `${theme.borderRadius}px`};
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[6]};
  box-sizing: border-box;
`;
