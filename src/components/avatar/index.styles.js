import styled from 'styled-components';

const defaultImageUrl = 'https://evand-storage.oss-eu-central-1.aliyuncs.com/assets/images/defaults/avatar.svg';

const Image = styled.img`
  font-family: 'IranSharp';
  width: ${({ theme, size }) => `${theme.size[size]}px`};
  height: ${({ theme, size }) => `${theme.size[size]}px`};
  border-radius: ${({ theme }) => `${theme.borderRadius}px`};
  display: block;
  // background-image: url(${defaultImageUrl});
  background-size: cover;
`;

export default Image;
