import { range } from './integer';

describe('range', () => {
  it('generate range of numbers', () => {
    expect(range(1, 3)).toEqual([1, 2, 3]);
  });

  it('generate range of numbers with negative values', () => {
    expect(range(-1, 1)).toEqual([-1, 0, 1]);
  });

  it('generate range of numbers with negative start value', () => {
    expect(range(-5, 0)).toEqual([-5, -4, -3, -2, -1, 0]);
  });

  it('generate no numbers when start is greater than end', () => {
    expect(range(5, 1)).toEqual([]);
  });
});
