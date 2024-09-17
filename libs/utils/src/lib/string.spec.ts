import { dashcase } from './string';

describe('string', () => {
  describe('dasherize', () => {
    it('should return a string with dashes', () => {
      expect(dashcase('Hello world')).toBe('hello-world');
    });

    it("should not dashirize when don't have space", () => {
      expect(dashcase('Hello')).toBe('hello');
    });
  });
});
