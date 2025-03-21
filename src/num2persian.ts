/**
 * Delimiter used between parts of the Persian number words
 */
const delimiter = ' و ';

/**
 * Persian word for zero
 */
const zero = 'صفر';

/**
 * Persian prefix for negative numbers
 */
const negative = 'منفی ';

/**
 * Arrays of Persian words for different number parts
 */
const letters: string[][] = [
  ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'],
  ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده', 'بیست'],
  ['', '', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'],
  ['', 'یکصد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'],
  ['', ' هزار', ' میلیون', ' میلیارد', ' بیلیون', ' بیلیارد', ' تریلیون', ' تریلیارد',
    ' کوآدریلیون', ' کادریلیارد', ' کوینتیلیون', ' کوانتینیارد', ' سکستیلیون', ' سکستیلیارد', ' سپتیلیون',
    ' سپتیلیارد', ' اکتیلیون', ' اکتیلیارد', ' نانیلیون', ' نانیلیارد', ' دسیلیون', ' دسیلیارد'
  ],
];

/**
 * Decimal suffixes for decimal part
 */
const decimalSuffixes: string[] = [
  '',
  'دهم',
  'صدم',
  'هزارم',
  'ده‌هزارم',
  'صد‌هزارم',
  'میلیونوم',
  'ده‌میلیونوم',
  'صدمیلیونوم',
  'میلیاردم',
  'ده‌میلیاردم',
  'صد‌‌میلیاردم'
];

/**
 * Clear number and split to 3-digit sections
 * @param num - The number to prepare
 * @returns Array of 3-digit sections
 */
const prepareNumber = (num: string | number): string[] => {
  let out = typeof num === 'number' ? num.toString() : num;

  // Make first part 3 chars by padding with zeros
  if (out.length % 3 === 1) {
    out = `00${out}`;
  } else if (out.length % 3 === 2) {
    out = `0${out}`;
  }
  
  // Split into 3-digit chunks
  return out.replace(/\d{3}(?=\d)/g, '$&*').split('*');
};

/**
 * Convert a 3-digit number to Persian words
 * @param num - The 3-digit number to convert
 * @returns The Persian word representation
 */
const tinyNumToWord = (num: string): string => {
  // Return empty string for zero
  const parsedInt = parseInt(num, 10);
  if (parsedInt === 0) {
    return '';
  }
  
  if (parsedInt < 10) {
    return letters[0][parsedInt];
  }
  
  if (parsedInt <= 20) {
    return letters[1][parsedInt - 10];
  }
  
  if (parsedInt < 100) {
    const one = parsedInt % 10;
    const ten = Math.floor((parsedInt - one) / 10);
    if (one > 0) {
      return letters[2][ten] + delimiter + letters[0][one];
    }
    return letters[2][ten];
  }
  
  const one = parsedInt % 10;
  const hundreds = Math.floor((parsedInt - (parsedInt % 100)) / 100);
  const ten = Math.floor((parsedInt - ((hundreds * 100) + one)) / 10);
  const out: string[] = [letters[3][hundreds]];
  const secondPart = ((ten * 10) + one);

  if (secondPart === 0) {
    return out.join(delimiter);
  }

  if (secondPart < 10) {
    out.push(letters[0][secondPart]);
  } else if (secondPart <= 20) {
    out.push(letters[1][secondPart - 10]);
  } else {
    out.push(letters[2][ten]);
    if (one > 0) {
      out.push(letters[0][one]);
    }
  }
  
  return out.join(delimiter);
};

/**
 * Convert decimal part of a number to Persian words
 * @param decimalPart - The decimal part as a string
 * @returns Persian representation of the decimal part
 */
const convertDecimalPart = (decimalPart: string): string => {
  // Clear trailing zeros
  decimalPart = decimalPart.replace(/0*$/, "");

  if (decimalPart === '') {
    return '';
  }

  if (decimalPart.length > 11) {
    decimalPart = decimalPart.substring(0, 11);
  }
  
  return ' ممیز ' + num2persian(decimalPart) + ' ' + decimalSuffixes[decimalPart.length];
};

/**
 * Main function to convert a number to Persian words
 * @param input - The number to convert (as string or number)
 * @returns The Persian word representation
 */
const num2persian = (input: string | number): string => {
  // Clear non-digits
  const cleanInput = input.toString().replace(/[^0-9.-]/g, '');
  let isNegative = false;
  const floatParse = parseFloat(cleanInput);
  
  // Return zero if this isn't a valid number
  if (isNaN(floatParse)) {
    return zero;
  }
  
  // Check for zero
  if (floatParse === 0) {
    return zero;
  }
  
  // Set negative flag if the number is less than 0
  if (floatParse < 0) {
    isNegative = true;
    input = cleanInput.replace(/-/g, '');
  } else {
    input = cleanInput;
  }

  // Declare parts
  let decimalPart = '';
  let integerPart = input.toString();
  const pointIndex = integerPart.indexOf('.');
  
  // Check for float numbers and split integer/decimal parts
  if (pointIndex > -1) {
    integerPart = input.toString().substring(0, pointIndex);
    decimalPart = input.toString().substring(pointIndex + 1);
  }

  if (integerPart.length > 66) {
    return 'خارج از محدوده';
  }

  // Split to sections
  const slicedNumber = prepareNumber(integerPart);
  
  // Fetch sections and convert
  const out: string[] = [];
  for (let i = 0; i < slicedNumber.length; i += 1) {
    const converted = tinyNumToWord(slicedNumber[i]);
    if (converted !== '') {
      out.push(converted + letters[4][slicedNumber.length - (i + 1)]);
    }
  }

  if (out.length == 0){
    out[0] = zero
  }
  
  // Convert decimal part
  let decimalWords = '';
  if (decimalPart.length > 0) {
    decimalWords = convertDecimalPart(decimalPart);
  }

  return (isNegative ? negative : '') + out.join(delimiter) + decimalWords;
};

// Type declaration merging for adding methods to native prototypes
declare global {
  interface String {
    /**
     * Convert a string number to Persian words
     */
    num2persian(): string;
  }
  
  interface Number {
    /**
     * Convert a number to Persian words
     */
    num2persian(): string;
  }
}

// Add methods to native prototypes with proper type safety
String.prototype.num2persian = function(this: string): string {
  return num2persian(this);
};

Number.prototype.num2persian = function(this: number): string {
  return num2persian(this.toString());
};

/**
 * Helper function to convert an English number to Persian Number
 * @param input - Number or String Like: 123
 * @returns The Persian numbers Like: ۱۲۳
 */
export function en2fa(value: string | string): string {
  value = String(value)
  const englishNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ','],
    persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰', '،']

  for (let i = 0; i < 11; i++) {
    value = value.replace(new RegExp(englishNumbers[i], 'g'), persianNumbers[i])
  }
  return value
}

/**
 * Helper function to convert a Persian number to English number
 * @param input - Number or String Like: ۱۲۳
 * @returns The Persian numbers Like: 123
 */
export function fa2en(value: string): string {
  const englishNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ','],
    persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰', '،']

  for (let i = 0; i < 11; i++) {
    value = value.replace(new RegExp(persianNumbers[i], 'g'), englishNumbers[i])
  }
  return value
}

/**
 * Helper function to convert an English number to Persian Number with comma delimited, Money forma
 * @param input - Number or String Like: 123000
 * @returns The Persian numbers Like: ۱۲۳،۰۰۰
*/
export function moneyFormat(value: string | number): string {
  value = en2fa(String(value))
  if (value.length <= 3) {
    return value
  }

  let out = ''
  let cursor = 0
  for (let i = value.length - 1; i >= 0; i--) {
    out = value[i] + (cursor > 0 && cursor % 3 === 0 && cursor !== value.length ? '،' : '') + out
    cursor++
  }

  return out
}



export default num2persian;