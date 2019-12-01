import { getSizeOfHeading } from './utils';
import theme from '../themes';

describe('Utils of typography', () => {
  describe('Get size of heading', () => {
    it('should return 30px', () => {
      const fontSize = getSizeOfHeading(theme, 'large', 1);
      expect(fontSize).toBe(30);
    });

    it('should return 24px', () => {
      const fontSize = getSizeOfHeading(theme, 'medium', 1);
      expect(fontSize).toBe(24);
    });

    it('should return 18px', () => {
      const fontSize = getSizeOfHeading(theme, 'small', 1);
      expect(fontSize).toBe(18);
    });

    it('should return 24px', () => {
      const fontSize = getSizeOfHeading(theme, 'large', 2);
      expect(fontSize).toBe(24);
    });

    it('should return 20px', () => {
      const fontSize = getSizeOfHeading(theme, 'medium', 2);
      expect(fontSize).toBe(20);
    });

    it('should return 16px', () => {
      const fontSize = getSizeOfHeading(theme, 'small', 2);
      expect(fontSize).toBe(16);
    });

    it('should return 20px', () => {
      const fontSize = getSizeOfHeading(theme, 'large', 3);
      expect(fontSize).toBe(20);
    });

    it('should return 18px', () => {
      const fontSize = getSizeOfHeading(theme, 'medium', 3);
      expect(fontSize).toBe(18);
    });

    it('should return 14px', () => {
      const fontSize = getSizeOfHeading(theme, 'small', 3);
      expect(fontSize).toBe(14);
    });

    it('should return 16px', () => {
      const fontSize = getSizeOfHeading(theme, 'large', 4);
      expect(fontSize).toBe(16);
    });

    it('should return 14px', () => {
      const fontSize = getSizeOfHeading(theme, 'medium', 4);
      expect(fontSize).toBe(14);
    });

    it('should return 12px', () => {
      const fontSize = getSizeOfHeading(theme, 'small', 4);
      expect(fontSize).toBe(12);
    });

    it('should return 14px', () => {
      const fontSize = getSizeOfHeading(theme, 'large', 5);
      expect(fontSize).toBe(14);
    });

    it('should return 12px', () => {
      const fontSize = getSizeOfHeading(theme, 'medium', 5);
      expect(fontSize).toBe(12);
    });

    it('should return 10px', () => {
      const fontSize = getSizeOfHeading(theme, 'small', 5);
      expect(fontSize).toBe(10);
    });

    it('should return 12px', () => {
      const fontSize = getSizeOfHeading(theme, 'large', 6);
      expect(fontSize).toBe(12);
    });

    it('should return 10px', () => {
      const fontSize = getSizeOfHeading(theme, 'medium', 6);
      expect(fontSize).toBe(10);
    });

    it('should return 10px', () => {
      const fontSize = getSizeOfHeading(theme, 'small', 6);
      expect(fontSize).toBe(10);
    });
  });
});
