import styled from 'styled-components';

import { getIconContentByType, getSizeOfIcon, getMarginOfIcon } from './utils';
import './font.scss';

export const IconElement = styled.i`
  display: inline-block;
  vertical-align: middle;
  font-family: 'icomoon' !important;
  font-weight: normal;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  speak: none;
  text-transform: none;
  font-size: ${({ size }) => `${getSizeOfIcon(size)}px;`}
  margin-left: ${({ size }) => `${getMarginOfIcon(size)}px;`}
  margin-right: ${({ size }) => `${getMarginOfIcon(size)}px;`}
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::before {
    ${({ type }) => getIconContentByType(type)};
  }
`;
