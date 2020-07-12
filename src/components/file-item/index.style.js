import styled from 'styled-components';

export const StyledImgIcon = styled.span`
  font-size: 67px;
`;

export const Wrapper = styled.div`
  cursor: pointer;
  border: 1px solid ${({ theme, isActive }) => (isActive ? theme.colors.riverBedDark : 'transparent')};
  border-radius: ${({ theme }) => `${theme.borderRadius}px`};
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[6]};
  box-sizing: border-box;
  display: flex;
`;

export const InfoWrapper = styled.div`
  width: calc(100% - 52px);
  padding-right: ${({ theme }) => theme.spacing[4]};

  & > span {
    display: block;
  }
`;

export const VerticalDivider = styled.span`
  display: inline-block;
  width: 1px;
  height: 8px;
  margin: 0 ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.riverBed};
`;
