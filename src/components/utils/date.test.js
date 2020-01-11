import { isDateObject } from './date';

describe('Date utils', () => {
  describe('isDateObject method', () => {
    it('should return true for a date object', () => {
      const dateObject = new Date();
      expect(isDateObject(dateObject)).toBe(true);
    });

    it('should return true for a date object', () => {
      const dateObject = 'Mon, 18 Dec 1995 17:28:35 GMT';
      expect(isDateObject(dateObject)).toBe(false);
    });
  });
});
