import classNames from './classNames';

describe('classNames', () => {
  describe('when the class list provided is an array', () => {
    it('should return a formatted class list', () => {
      const classList = classNames(['foo', 'bar', 'baz']);

      expect(classList).toEqual('foo bar baz');
    });
  });

  describe('when the class list provided is an empty array', () => {
    it('should return an empty string', () => {
      const classList = classNames([]);

      expect(classList).toEqual('');
    });
  });

  describe('when the class list provided is not an array', () => {
    it('should return an unformatted class list', () => {
      const classList = classNames('foo bar baz');

      expect(classList).toEqual('foo bar baz');
    });
  });
});
