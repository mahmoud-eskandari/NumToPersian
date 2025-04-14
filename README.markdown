# NumToPersian

Persian Number to Words Converter:

The Persian Number to Words Converter is a lightweight and versatile library designed to convert numerical values into their Persian (Farsi) word equivalents. Whether you're working with integers, decimals, or large numbers, this library provides accurate and human-readable Persian representations of numbers.

### Key Features:
* Comprehensive Number Support:
Converts both positive and negative integers.
Handles decimal numbers with precision, including the correct placement of "ممیز" (decimal point) and appropriate suffixes like "دهم", "صدم", and "هزارم".
Supports large numbers up to 66 digits, including terms like "هزار", "میلیون", "میلیارد", "تریلیون", and beyond.
* Human-Readable Output:
Generates natural Persian phrases using proper grammar and formatting.
Ensures culturally accurate representation of Persian numerals, adhering to Persian language conventions.
* Edge Case Handling:
Gracefully handles edge cases like zero (صفر), invalid inputs, and very large numbers exceeding the supported range (with a fallback message: "خارج از محدوده").
Automatically removes trailing zeros in decimal parts for cleaner output.
* Extensibility:
Extends native String and Number prototypes with a `.num2persian()` method, allowing seamless integration into your codebase.
Written in TypeScript, ensuring type safety and compatibility with modern JavaScript/TypeScript projects.

* Lightweight and Dependency-Free:
Minimalistic design with no external dependencies, making it easy to integrate into any project.
Optimized for performance without compromising functionality.


Example Usage:
```javascript
import num2persian from 'num2persian';

// Convert integers
console.log(num2persian(123)); // Output: "یکصد و بیست و سه"

// Convert decimals
console.log(num2persian(123.45)); // Output: "یکصد و بیست و سه ممیز چهل و پنج صدم"

// Convert large numbers
console.log(num2persian(1000000)); // Output: "یک میلیون"

// Handle negative numbers
console.log(num2persian(-456)); // Output: "منفی چهارصد و پنجاه و شش"

// Prototype extension
console.log((789).num2persian()); // Output: "هفتصد و هشتاد و نه"

```


Mixed numbers and letters:
```javascript
// اعداد به صورت کاراکتر عددی و واحدهای اندازه گیری با حروف
import { num2mixed }  from 'num2persian';
 console.log(num2mixed(123400)); // output: ۱۲۳
 // هزار
 // و
 //  ۴۰۰ 
```

Helper functions:
```javascript
import {moneyFormat, fa2en, en2fa}  from 'num2persian';
 console.log(moneyFormat(123000)); // output: ۱۲۳،۰۰۰
 console.log(en2fa(123000)); // output: ۱۲۳۰۰۰
 console.log(fa2en('۱۲۳۰۰۰')); // output: 123000
```

Installation:
Install the library via npm:

```bash
npm i num2persian
```

Testing:
The library includes a robust test suite written with Jest to ensure correctness across various scenarios. Run the tests using:

```bash
npm test
```

License:
This library is released under the MIT License , making it free to use, modify, and distribute for both personal and commercial purposes.

Whether you're building a Persian-language application or need a reliable way to display numbers in Persian words, the Persian Number to Words Converter is the perfect tool for the job. Its simplicity, accuracy, and extensibility make it an invaluable addition to any project requiring Persian numeral conversions.


## تبدیل عدد به حروف فارسی در جاوا اسکریپت
توانایی پردازش اعداد تا 66 رقم عدد صحیح و 11 رقم اعشار | دسیلیارد

#### برای استفاده از اعداد بزرگ از نوع داده استرینگ استفاده کنید.

## [(CDN)](https://cdn.jsdelivr.net/gh/mahmoud-eskandari/NumToPersian/dist/num2persian.min.js) :
[https://cdn.jsdelivr.net/gh/mahmoud-eskandari/NumToPersian/dist/num2persian.min.js]

## [Github Page](https://mahmoud-eskandari.github.io/NumToPersian/)
