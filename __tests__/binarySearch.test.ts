import { binarySearch } from '../src/binarySearch';

describe('binarySearch', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  test('should return -1 when target is not in array', () => {
    expect(binarySearch(arr, 0)).toBe(-1);
  });

  test('should return the index of the target in the array', () => {
    expect(binarySearch(arr, 5)).toBe(4);
  });

  test('should return -1 when array is empty', () => {
    expect(binarySearch([], 5)).toBe(-1);
  });
});
