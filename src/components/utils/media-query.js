import { generateMedia } from 'styled-media-query';
import theme from '../themes';

const mediaQuery = generateMedia({
  xl: `${theme.breakpoints.xl}px`,
  lg: `${theme.breakpoints.lg}px`,
  md: `${theme.breakpoints.md}px`,
  sm: `${theme.breakpoints.sm}px`,
  xs: `${theme.breakpoints.xs}px`,
});

export default mediaQuery;
