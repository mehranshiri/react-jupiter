import { getSizeOfHeading, getMarginOfHeading } from './utils';
import theme from './theme';

describe('Utils of typography', () => {
  describe('Get size of heading', () => {
    it('should return 30px', () => {
      const fontSize = getSizeOfHeading(theme, 'lg', 1);
      expect(fontSize).toBe(30);
    });

    it('should return 24px', () => {
      const fontSize = getSizeOfHeading(theme, 'md', 1);
      expect(fontSize).toBe(24);
    });

    it('should return 18px', () => {
      const fontSize = getSizeOfHeading(theme, 'sm', 1);
      expect(fontSize).toBe(18);
    });

    it('should return 24px', () => {
      const fontSize = getSizeOfHeading(theme, 'lg', 2);
      expect(fontSize).toBe(24);
    });

    it('should return 20px', () => {
      const fontSize = getSizeOfHeading(theme, 'md', 2);
      expect(fontSize).toBe(20);
    });

    it('should return 16px', () => {
      const fontSize = getSizeOfHeading(theme, 'sm', 2);
      expect(fontSize).toBe(16);
    });

    it('should return 20px', () => {
      const fontSize = getSizeOfHeading(theme, 'lg', 3);
      expect(fontSize).toBe(20);
    });

    it('should return 18px', () => {
      const fontSize = getSizeOfHeading(theme, 'md', 3);
      expect(fontSize).toBe(18);
    });

    it('should return 14px', () => {
      const fontSize = getSizeOfHeading(theme, 'sm', 3);
      expect(fontSize).toBe(14);
    });

    it('should return 16px', () => {
      const fontSize = getSizeOfHeading(theme, 'lg', 4);
      expect(fontSize).toBe(16);
    });

    it('should return 14px', () => {
      const fontSize = getSizeOfHeading(theme, 'md', 4);
      expect(fontSize).toBe(14);
    });

    it('should return 12px', () => {
      const fontSize = getSizeOfHeading(theme, 'sm', 4);
      expect(fontSize).toBe(12);
    });

    it('should return 14px', () => {
      const fontSize = getSizeOfHeading(theme, 'lg', 5);
      expect(fontSize).toBe(14);
    });

    it('should return 12px', () => {
      const fontSize = getSizeOfHeading(theme, 'md', 5);
      expect(fontSize).toBe(12);
    });

    it('should return 10px', () => {
      const fontSize = getSizeOfHeading(theme, 'sm', 5);
      expect(fontSize).toBe(10);
    });

    it('should return 12px', () => {
      const fontSize = getSizeOfHeading(theme, 'lg', 6);
      expect(fontSize).toBe(12);
    });

    it('should return 10px', () => {
      const fontSize = getSizeOfHeading(theme, 'md', 6);
      expect(fontSize).toBe(10);
    });

    it('should return 10px', () => {
      const fontSize = getSizeOfHeading(theme, 'sm', 6);
      expect(fontSize).toBe(10);
    });
  });

  describe('Get margin of heading', () => {
    it('should return 24px 0 18px', () => {
      const margin = getMarginOfHeading(theme, 'lg', 1);
      expect(margin).toBe('24px 0 18px');
    });

    it('should return 18px 0 12px', () => {
      const margin = getMarginOfHeading(theme, 'md', 1);
      expect(margin).toBe('18px 0 12px');
    });

    it('should return 12px 0 8px', () => {
      const margin = getMarginOfHeading(theme, 'sm', 1);
      expect(margin).toBe('12px 0 8px');
    });

    it('should return 18px 0 14px', () => {
      const margin = getMarginOfHeading(theme, 'lg', 2);
      expect(margin).toBe('18px 0 14px');
    });

    it('should return 14px 0 10px', () => {
      const margin = getMarginOfHeading(theme, 'md', 2);
      expect(margin).toBe('14px 0 10px');
    });

    it('should return 10px 0 8px', () => {
      const margin = getMarginOfHeading(theme, 'sm', 2);
      expect(margin).toBe('10px 0 8px');
    });

    it('should return 16px 0 12px', () => {
      const margin = getMarginOfHeading(theme, 'lg', 3);
      expect(margin).toBe('16px 0 12px');
    });

    it('should return 14px 0 10px', () => {
      const margin = getMarginOfHeading(theme, 'md', 3);
      expect(margin).toBe('14px 0 10px');
    });

    it('should return 12px 0 8px', () => {
      const margin = getMarginOfHeading(theme, 'sm', 3);
      expect(margin).toBe('12px 0 8px');
    });

    it('should return 16px 0 12px', () => {
      const margin = getMarginOfHeading(theme, 'lg', 4);
      expect(margin).toBe('16px 0 12px');
    });

    it('should return 14px 0 10px', () => {
      const margin = getMarginOfHeading(theme, 'md', 4);
      expect(margin).toBe('14px 0 10px');
    });

    it('should return 10px 0 8px', () => {
      const margin = getMarginOfHeading(theme, 'sm', 4);
      expect(margin).toBe('10px 0 8px');
    });

    it('should return 14px 0 12px', () => {
      const margin = getMarginOfHeading(theme, 'lg', 5);
      expect(margin).toBe('14px 0 12px');
    });

    it('should return 12px 0 10px', () => {
      const margin = getMarginOfHeading(theme, 'md', 5);
      expect(margin).toBe('12px 0 10px');
    });

    it('should return 10px 0 8px', () => {
      const margin = getMarginOfHeading(theme, 'sm', 5);
      expect(margin).toBe('10px 0 8px');
    });

    it('should return 12px 0 12px', () => {
      const margin = getMarginOfHeading(theme, 'lg', 6);
      expect(margin).toBe('12px 0 12px');
    });

    it('should return 10px 0 10px', () => {
      const margin = getMarginOfHeading(theme, 'md', 6);
      expect(margin).toBe('10px 0 10px');
    });

    it('should return 10px 0 10px', () => {
      const margin = getMarginOfHeading(theme, 'sm', 6);
      expect(margin).toBe('10px 0 10px');
    });
  });
});
