import { getSizeOfIcon, getMarginOfIcon } from './utils';
import theme from './theme';

describe('Tests of icons utils', () => {
  describe('Test of icon sizes', () => {
    it('Should return 20 as font size of medium icons', () => {
      const sizeOfMediumIcon = getSizeOfIcon('md');
      expect(sizeOfMediumIcon).toBe(theme.sizes.medium);
    });

    it('Should return 24 as font size of large icons', () => {
      const sizeOfLargeIcon = getSizeOfIcon('lg');
      expect(sizeOfLargeIcon).toBe(theme.sizes.large);
    });

    it('Should return 16 as font size of small icons', () => {
      const sizeOfSmallIcon = getSizeOfIcon('sm');
      expect(sizeOfSmallIcon).toBe(theme.sizes.small);
    });
  });

  describe('Test of icons margin', () => {
    it('Should return 10 as margin of medium icons', () => {
      const marginOfMediumIcon = getMarginOfIcon('md');
      expect(marginOfMediumIcon).toBe(theme.sizes.mediumMargin);
    });

    it('Should return 12 as margin of large icons', () => {
      const marginOfLargeIcon = getMarginOfIcon('lg');
      expect(marginOfLargeIcon).toBe(theme.sizes.largeMargin);
    });

    it('Should return 8 as margin of small icons', () => {
      const marginOfSmallIcon = getMarginOfIcon('sm');
      expect(marginOfSmallIcon).toBe(theme.sizes.smallMargin);
    });
  });
});
