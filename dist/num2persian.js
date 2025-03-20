"use strict";

// تعریف متغیرها
const delimiter = ' و ';
const zero = 'صفر';
const negative = 'منفی ';
const letters = [
    ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'],
    ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده', 'بیست'],
    ['', '', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'],
    ['', 'یکصد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'],
    ['', ' هزار', ' میلیون', ' میلیارد', ' تریلیون', ' کوآدریلیون', ' کوینتیلیون']
];
const decimalSuffixes = ['', 'دهم', 'صدم', 'هزارم', 'ده‌هزارم', 'صد‌هزارم', 'میلیونوم', 'میلیاردم'];
const weekdays = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];

// افزودن کاما به اعداد برای خوانایی بهتر
const addThousandSeparator = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// آماده‌سازی عدد برای پردازش
const prepareNumber = (num) => {
    let out = num.toString();
    while (out.length % 3 !== 0) {
        out = '0' + out;
    }
    return out.match(/.{1,3}/g);
};

// تبدیل عدد سه‌رقمی به حروف
const tinyNumToWord = (num) => {
    let n = parseInt(num, 10);
    if (n === 0) return '';
    if (n < 10) return letters[0][n];
    if (n < 20) return letters[1][n - 10];

    let one = n % 10;
    let ten = Math.floor(n / 10) % 10;
    let hundred = Math.floor(n / 100);

    let words = [];
    if (hundred > 0) words.push(letters[3][hundred]);
    if (ten >= 2) words.push(letters[2][ten]);
    if (one > 0) words.push(letters[0][one]);

    return words.join(delimiter);
};

// تبدیل بخش اعشاری
const convertDecimalPart = (decimalPart) => {
    decimalPart = decimalPart.replace(/0+$/, '');
    if (!decimalPart) return '';

    let length = Math.min(decimalPart.length, decimalSuffixes.length - 1);
    return ' ممیز ' + Num2persian(decimalPart) + ' ' + decimalSuffixes[length];
};

// تبدیل اعداد کسری (مثلاً "۳/۴" به "سه چهارم")
const convertFraction = (fraction) => {
    let [num, denom] = fraction.split('/');
    if (!num || !denom || isNaN(num) || isNaN(denom)) return 'عدد نامعتبر';
    return Num2persian(num) + ' ' + Num2persian(denom) + 'م';
};

// تبدیل اعداد به حروف فارسی
const Num2persian = (input) => {
    input = input.toString().replace(/[^0-9./-]/g, '');
    if (input.includes('/')) return convertFraction(input);

    if (isNaN(parseFloat(input))) return 'عدد نامعتبر';

    let isNegative = input.startsWith('-');
    if (isNegative) input = input.replace(/-/g, '');

    let [integerPart, decimalPart] = input.split('.');
    if (!integerPart) integerPart = '0';

    let sections = prepareNumber(integerPart);
    let words = sections.map((section, index) => {
        let word = tinyNumToWord(section);
        return word ? word + letters[4][sections.length - 1 - index] : '';
    }).filter(Boolean);

    let decimalWords = decimalPart ? convertDecimalPart(decimalPart) : '';
    let result = (isNegative ? negative : '') + words.join(delimiter) + decimalWords;

    return result || zero;
};

// تبدیل اعداد به تومان یا ریال
const convertToCurrency = (num, type = 'تومان') => {
    let words = Num2persian(num);
    return words + ' ' + type;
};

// نمایش عدد به صورت خلاصه (مثلاً "۱.۲ میلیون")
const Num2persianShort = (input) => {
    let num = parseFloat(input);
    if (isNaN(num)) return 'عدد نامعتبر';

    let absNum = Math.abs(num);
    let suffixIndex = 0;

    while (absNum >= 1000 && suffixIndex < letters[4].length - 1) {
        absNum /= 1000;
        suffixIndex++;
    }

    return (num < 0 ? negative : '') + absNum.toFixed(1) + letters[4][suffixIndex];
};

// تبدیل تاریخ شمسی به نوشتار فارسی با نام روز هفته
const persianDateToWords = (date) => {
    let parts = date.split('/'); // مثال: "1403/02/15"
    if (parts.length !== 3) return 'تاریخ نامعتبر';

    let [year, month, day] = parts.map(Number);
    if (isNaN(year) || isNaN(month) || isNaN(day)) return 'تاریخ نامعتبر';

    let weekday = weekdays[new Date(year, month - 1, day).getDay()];
    const months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

    return `${weekday}، سال ${Num2persian(year)}، ${Num2persian(day)}م ${months[month - 1]}`;
};

// تبدیل محدوده اعداد به نوشتار
const convertRange = (range) => {
    let [start, end] = range.split('-').map(Number);
    if (isNaN(start) || isNaN(end)) return 'محدوده نامعتبر';
    return Num2persian(start) + ' تا ' + Num2persian(end);
};

// تبدیل اعداد انگلیسی به فارسی
const convertToPersianDigits = (num) => num.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);

// افزودن متدهای جدید به رشته‌ها و اعداد
String.prototype.num2persian = function () {
    return Num2persian(this);
};

Number.prototype.num2persian = function () {
    return Num2persian(this.toString());
};

String.prototype.num2persianShort = function () {
    return Num2persianShort(this);
};

Number.prototype.num2persianShort = function () {
    return Num2persianShort(this.toString());
};

String.prototype.persianDateToWords = function () {
    return persianDateToWords(this);
};

String.prototype.convertToPersianDigits = function () {
    return convertToPersianDigits(this);
};
