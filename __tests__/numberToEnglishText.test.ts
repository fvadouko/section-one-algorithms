import { numberToEnglishText } from '../src/numberToEnglishText';

describe('numberToEnglishText', () => {
  test('should throw an error when input is less than 0', () => {
    expect(numberToEnglishText(-1)).toEqual(
      'Input must be between 0 and 999999999'
    );
  });

  test('should return zero when input is 0', () => {
    expect(numberToEnglishText(0)).toBe('zero');
  });

  test('should return one when input is 1', () => {
    expect(numberToEnglishText(1)).toBe('one');
  });

  test('should return ten when input is 10', () => {
    expect(numberToEnglishText(10)).toBe('ten');
  });

  test('should return twenty when input is 20', () => {
    expect(numberToEnglishText(20)).toBe('twenty');
  });

  test('should return twenty one when input is 21', () => {
    expect(numberToEnglishText(21)).toBe('twenty one');
  });

  test('should return one hundred when input is 100', () => {
    expect(numberToEnglishText(100)).toBe('one hundred');
  });

  test('should return one hundred one when input is 101', () => {
    expect(numberToEnglishText(101)).toBe('one hundred one');
  });

  test('should return one thousand, two hundred thirty four when input is 1234', () => {
    expect(numberToEnglishText(1234)).toBe(
      'one thousand, two hundred thirty four'
    );
  });

  test('should return two million, one hundred forty seven thousand, four hundred eighty three when input is 2147483', () => {
    expect(numberToEnglishText(2147483)).toBe(
      'two million, one hundred forty seven thousand, four hundred eighty three'
    );
  });

  test('should return six hundred ninety nine million, three hundred twenty seven thousand, four hundred fifty eight when input is 699327458', () => {
    expect(numberToEnglishText(699327458)).toBe(
      'six hundred ninety nine million, three hundred twenty seven thousand, four hundred fifty eight'
    );
  });

  test('should return one billion when input is 1000000000', () => {
    expect(numberToEnglishText(1000000000)).toBe('one billion');
  });

  test('should return two billion, one hundred forty seven million, four hundred eighty three thousand, six hundred forty seven when input is 2147483647', () => {
    expect(numberToEnglishText(2147483647)).toBe(
      'two billion, one hundred forty seven million, four hundred eighty three thousand, six hundred forty seven'
    );
  });
});
