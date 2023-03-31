const ONES = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];
const TENS = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];
const THOUSANDS = ['', 'thousand', 'million', 'billion', 'trillion'];

export const numberToEnglishText = (num: number): string => {
  try {
    if (num < 0 || num > 99999999999) {
      console.log(num);
      throw new Error('Input must be between 0 and 999999999');
    }
    if (num === 0) {
      return 'zero';
    }

    let i = 0;
    let words = '';

    while (num > 0) {
      if (num % 1000 !== 0) {
        words =
          numberToWordsHelper(num % 1000) +
          '' +
          THOUSANDS[i] +
          ', ' +
          words;
      }
      num = Math.floor(num / 1000);
      i++;
    }

    return words.trim().replace(/,$/, '').trim();
  } catch (error) {
    return error.message;
  }
};

function numberToWordsHelper(num: number): string {
  if (num === 0) {
    return '';
  } else if (num < 20) {
    return ONES[num] + ' ';
  } else if (num < 100) {
    return (
      TENS[Math.floor(num / 10)] + ' ' + numberToWordsHelper(num % 10)
    );
  } else {
    return (
      ONES[Math.floor(num / 100)] +
      ' hundred ' +
      numberToWordsHelper(num % 100)
    );
  }
}

const result = numberToEnglishText(-1);
console.log('Result', result);
