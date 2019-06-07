/**
 * Name:Javascript Number To Persian Convertor.
 * License: GPL-2.0
 * Generated on 2019-06-07
 * Author:Mahmoud Eskanadri.
 * Copyright:2018 http://Webafrooz.com.
 * version:3.1.1
 * Email:info@webafrooz.com,sbs8@yahoo.com
 * coded with ♥ in Webafrooz.
 * big numbers refrence: https://fa.wikipedia.org/wiki/%D9%86%D8%A7%D9%85_%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF_%D8%A8%D8%B2%D8%B1%DA%AF
 */

"use strict";

/**
 *
 * @type {string}
 */
var delimiter = ' و ';
/**
 *
 * @type {string}
 */

var zero = 'صفر';
/**
 *
 * @type {*[]}
 */

var letters = [['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'], ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده', 'بیست'], ['', '', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'], ['', 'یکصد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'], ['', ' هزار', ' میلیون', ' میلیارد', ' بیلیون', ' بیلیارد', ' تریلیون', ' تریلیارد', 'کوآدریلیون', ' کادریلیارد', ' کوینتیلیون', ' کوانتینیارد', ' سکستیلیون', ' سکستیلیارد', ' سپتیلیون', 'سپتیلیارد', ' اکتیلیون', ' اکتیلیارد', ' نانیلیون', ' نانیلیارد', ' دسیلیون', ' دسیلیارد']];
/**
 * Decimal suffixes for decimal part
 * @type {string[]}
 */

var decimalSuffixes = ['', 'دهم', 'صدم', 'هزارم', 'ده‌هزارم', 'صد‌هزارم', 'میلیونوم', 'ده‌میلیونوم', 'صدمیلیونوم', 'میلیاردم', 'ده‌میلیاردم', 'صد‌‌میلیاردم'];
/**
 * Clear number and split to 3 sections
 * @param {*} num
 */

var prepareNumber = function prepareNumber(num) {
  var Out = num;

  if (typeof Out === 'number') {
    Out = Out.toString();
  }

  var NumberLength = Out.length % 3;

  if (NumberLength === 1) {
    Out = "00".concat(Out);
  } else if (NumberLength === 2) {
    Out = "0".concat(Out);
  } // Explode to array


  return Out.replace(/\d{3}(?=\d)/g, '$&*').split('*');
};

var threeNumbersToLetter = function threeNumbersToLetter(num) {
  // return zero
  if (parseInt(num, 0) === 0) {
    return '';
  }

  var parsedInt = parseInt(num, 0);

  if (parsedInt < 10) {
    return letters[0][parsedInt];
  }

  if (parsedInt <= 20) {
    return letters[1][parsedInt - 10];
  }

  if (parsedInt < 100) {
    var _one = parsedInt % 10;

    var _ten = (parsedInt - _one) / 10;

    if (_one > 0) {
      return letters[2][_ten] + delimiter + letters[0][_one];
    }

    return letters[2][_ten];
  }

  var one = parsedInt % 10;
  var hundreds = (parsedInt - parsedInt % 100) / 100;
  var ten = (parsedInt - (hundreds * 100 + one)) / 10;
  var out = [letters[3][hundreds]];
  var SecondPart = ten * 10 + one;

  if (SecondPart > 0) {
    if (SecondPart < 10) {
      out.push(letters[0][SecondPart]);
    } else if (SecondPart <= 20) {
      out.push(letters[1][SecondPart - 10]);
    } else {
      out.push(letters[2][ten]);

      if (one > 0) {
        out.push(letters[0][one]);
      }
    }
  }

  return out.join(delimiter);
};
/**
 * Convert Decimal part
 * @param decimalPart
 * @returns {string}
 * @constructor
 */


var convertDecimalPart = function convertDecimalPart(decimalPart) {
  // Clear right zero
  decimalPart = decimalPart.replace(/0*$/, "");

  if (decimalPart === '') {
    return '';
  }

  if (decimalPart.length > 11) {
    decimalPart = decimalPart.substr(0, 11);
  }

  return ' ممیز ' + Num2persian(decimalPart) + ' ' + decimalSuffixes[decimalPart.length];
};
/**
 * Main function
 * @param input
 * @returns {string}
 * @constructor
 */


var Num2persian = function Num2persian(input) {
  // Clear Non digits
  input = input.replace(/[^0-9.]/g, ''); // return zero

  if (isNaN(parseFloat(input))) {
    return zero;
  } // Declare Parts


  var decimalPart = '';
  var integerPart = input;
  var pointIndex = input.indexOf('.'); // Check for float numbers form string and split Int/Dec

  if (pointIndex > -1) {
    integerPart = input.substring(0, pointIndex);
    decimalPart = input.substring(pointIndex + 1, input.length);
  }

  if (integerPart.length > 66) {
    return 'خارج از محدوده';
  } // Split to sections


  var slicedNumber = prepareNumber(integerPart); // Fetch Sections and convert

  var Output = [];
  var SplitLength = slicedNumber.length;

  for (var i = 0; i < SplitLength; i += 1) {
    var SectionTitle = letters[4][SplitLength - (i + 1)];
    var converted = threeNumbersToLetter(slicedNumber[i]);

    if (converted !== '') {
      Output.push(converted + SectionTitle);
    }
  } // Convert Decimal part


  if (decimalPart.length > 0) {
    decimalPart = convertDecimalPart(decimalPart);
  }

  return Output.join(delimiter) + decimalPart;
};

String.prototype.toPersianLetter = function () {
  return Num2persian(this);
};

Number.prototype.toPersianLetter = function () {
  return Num2persian(parseFloat(this).toString());
};