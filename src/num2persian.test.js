/* eslint no-use-before-define: 0 */  // --> OFF

import Num2persian from './num2persian';

// بهبود تبدیل عدد به فارسی (پشتیبانی از اعداد بزرگتر، منفی، اعشاری و علمی)
const numToPersianExtended = (num) => {
  if (typeof num !== 'string' && typeof num !== 'number') return 'ورودی نامعتبر است';

  num = num.toString().replace(/[^\d.-]/g, ''); // حذف کاراکترهای غیرعددی
  if (!num.match(/^-?\d+(\.\d+)?(e[+-]?\d+)?$/)) return 'ورودی نامعتبر است';

  let isNegative = num.startsWith('-');
  num = isNegative ? num.substring(1) : num;

  // پردازش اعداد علمی (e notation)
  if (num.includes('e')) {
    num = Number(num).toFixed(0); // تبدیل به عدد عادی
  }

  const numberMap = {
    0: 'صفر', 1: 'یک', 2: 'دو', 3: 'سه', 4: 'چهار', 5: 'پنج', 6: 'شش', 7: 'هفت', 8: 'هشت', 9: 'نه',
    10: 'ده', 11: 'یازده', 12: 'دوازده', 13: 'سیزده', 14: 'چهارده', 15: 'پانزده', 16: 'شانزده', 
    17: 'هفده', 18: 'هجده', 19: 'نوزده', 20: 'بیست', 30: 'سی', 40: 'چهل', 50: 'پنجاه', 60: 'شصت', 
    70: 'هفتاد', 80: 'هشتاد', 90: 'نود', 100: 'یکصد', 1000: 'هزار', 1e6: 'میلیون', 1e9: 'میلیارد',
    1e12: 'تریلیون', 1e15: 'کادریلیون', 1e18: 'کوینتیلیون', 1e21: 'سکستیلیون', 1e24: 'سپتیلیون',
    1e27: 'اکتیلیون', 1e30: 'نانیلیون', 1e33: 'دسیلیون', 1e100: 'گوگول'
  };

  const convertToPersian = (num) => {
    if (num === '0') return numberMap[0];
    let result = '';
    let power = 0;

    while (num > 0) {
      let part = num % 1000;
      if (part > 0) {
        result = `${convertHundreds(part)} ${numberMap[10 ** (power * 3)] || ''} ${result}`.trim();
      }
      num = Math.floor(num / 1000);
      power++;
    }
    return result.trim();
  };

  const convertHundreds = (num) => {
    if (num < 100) return convertTens(num);
    const hundreds = Math.floor(num / 100);
    const remainder = num % 100;
    return `${numberMap[hundreds]} صد ${remainder > 0 ? `و ${convertTens(remainder)}` : ''}`;
  };

  const convertTens = (num) => {
    if (num < 20) return numberMap[num];
    const tens = Math.floor(num / 10) * 10;
    const ones = num % 10;
    return `${numberMap[tens]}${ones ? ` و ${numberMap[ones]}` : ''}`;
  };

  // پردازش اعداد اعشاری
  if (num.includes('.')) {
    let [integerPart, decimalPart] = num.split('.');
    let integerWord = convertToPersian(parseInt(integerPart));
    let decimalWord = decimalPart.split('').map(digit => numberMap[digit]).join(' ');
    return isNegative ? `منفی ${integerWord} ممیز ${decimalWord}` : `${integerWord} ممیز ${decimalWord}`;
  }

  let result = convertToPersian(parseInt(num));
  return isNegative ? `منفی ${result}` : result;
};

// تست‌های جدید
test('test Large Number 10^18', () => {
  expect(numToPersianExtended('1000000000000000000')).toBe('یک کوینتیلیون');
});

test('test decimal 100.50', () => {
  expect(numToPersianExtended('100.50')).toBe('یکصد ممیز پنجاه');
});

test('test negative decimal -2.5', () => {
  expect(numToPersianExtended('-2.5')).toBe('منفی دو ممیز پنج');
});

test('test scientific notation 1e6', () => {
  expect(numToPersianExtended('1e6')).toBe('یک میلیون');
});

test('test very large number 10^50', () => {
  expect(numToPersianExtended('1e50')).toBe('یک گوگول');
});

test('test string input with extra chars %10.25a', () => {
  expect(numToPersianExtended('%10.25a')).toBe('ده ممیز بیست و پنج');
});

test('test invalid input', () => {
  expect(numToPersianExtended('abcd')).toBe('ورودی نامعتبر است');
});
