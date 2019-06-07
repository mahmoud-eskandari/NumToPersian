/**
 * Name:Javascript Number To Persian Convertor.
 * License: GPL-2.0
 * Generated on 2019-06-07
 * Author:Mahmoud Eskanadri.
 * Copyright:2018 http://Webafrooz.com.
 * version:3.0.3
 * Email:info@webafrooz.com,sbs8@yahoo.com
 * coded with ♥ in Webafrooz.
 * big numbers refrence: https://fa.wikipedia.org/wiki/%D9%86%D8%A7%D9%85_%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF_%D8%A8%D8%B2%D8%B1%DA%AF
 */

"use strict";

/**
 *
 * @type {string}
 */
var Delimiter = ' و ';
/**
 *
 * @type {string}
 */

var Zero = 'صفر';
/**
 *
 * @type {*[]}
 */

var Letters = [['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'], ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده', 'بیست'], ['', '', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'], ['', 'یکصد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'], ['', ' هزار', ' میلیون', ' میلیارد', ' بیلیون', ' بیلیارد', ' تریلیون', ' تریلیارد', 'کوآدریلیون', ' کادریلیارد', ' کوینتیلیون', ' کوانتینیارد', ' سکستیلیون', ' سکستیلیارد', ' سپتیلیون', 'سپتیلیارد', ' اکتیلیون', ' اکتیلیارد', ' نانیلیون', ' نانیلیارد', ' دسیلیون', ' دسیلیارد']];
/**
 * Decimal suffixes for decimal part
 * @type {string[]}
 */

var DecimalSuffixes = ['', 'دهم', 'صدم', 'هزارم', 'ده‌هزارم', 'صد‌هزارم', 'میلیونوم', 'ده‌میلیونوم', 'صدمیلیونوم', 'میلیاردم', 'ده‌میلیاردم', 'صد‌‌میلیاردم'];
/**
 * Clear number and split to 3 sections
 * @param {*} num
 */

var PrepareNumber = function PrepareNumber(num) {
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

var ThreeNumbersToLetter = function ThreeNumbersToLetter(num) {
  // return Zero
  if (parseInt(num, 0) === 0) {
    return '';
  }

  var parsedInt = parseInt(num, 0);

  if (parsedInt < 10) {
    return Letters[0][parsedInt];
  }

  if (parsedInt <= 20) {
    return Letters[1][parsedInt - 10];
  }

  if (parsedInt < 100) {
    var _one = parsedInt % 10;

    var _ten = (parsedInt - _one) / 10;

    if (_one > 0) {
      return Letters[2][_ten] + Delimiter + Letters[0][_one];
    }

    return Letters[2][_ten];
  }

  var one = parsedInt % 10;
  var hundreds = (parsedInt - parsedInt % 100) / 100;
  var ten = (parsedInt - (hundreds * 100 + one)) / 10;
  var out = [Letters[3][hundreds]];
  var SecondPart = ten * 10 + one;

  if (SecondPart > 0) {
    if (SecondPart < 10) {
      out.push(Letters[0][SecondPart]);
    } else if (SecondPart <= 20) {
      out.push(Letters[1][SecondPart - 10]);
    } else {
      out.push(Letters[2][ten]);

      if (one > 0) {
        out.push(Letters[0][one]);
      }
    }
  }

  return out.join(Delimiter);
};
/**
 * Remove end zero of decimal part
 * @param input
 * @returns {string}
 * @constructor
 */


var ClearEndZero = function ClearEndZero(input) {
  var ReversedInput = input.split('').reverse();

  for (var i = 0; i < ReversedInput.length; i++) {
    if (ReversedInput[i] !== '0') {
      return ReversedInput.reverse().join('');
    }

    i--;
    ReversedInput.shift();
  }

  return '';
};
/**
 * Convert Decimal part
 * @param DecimalPart
 * @returns {string}
 * @constructor
 */


var ConvertDecimalPart = function ConvertDecimalPart(DecimalPart) {
  // Clear right zero
  DecimalPart = ClearEndZero(DecimalPart);

  if (DecimalPart === '') {
    return '';
  }

  if (DecimalPart.length > 11) {
    DecimalPart = DecimalPart.substr(0, 11);
  }

  return ' ممیز ' + Num2persian(DecimalPart) + ' ' + DecimalSuffixes[DecimalPart.length];
};
/**
 * Main function
 * @param InputNumber
 * @returns {string}
 * @constructor
 */


var Num2persian = function Num2persian(InputNumber) {
  // Clear Non digits
  InputNumber = InputNumber.replace(/\D+(?<![.])/g, ''); // return Zero

  if (isNaN(parseFloat(InputNumber))) {
    return Zero;
  } // Declare Parts


  var DecimalPart = '';
  var IntegerPart = InputNumber;
  var PointIndex = InputNumber.indexOf('.'); // Check for float numbers form string and split Int/Dec

  if (PointIndex > -1) {
    IntegerPart = InputNumber.substring(0, PointIndex);
    DecimalPart = InputNumber.substring(PointIndex + 1, InputNumber.length);
  }

  if (IntegerPart.length > 66) {
    return 'خارج از محدوده';
  } // Split to sections


  var SpitedNumber = PrepareNumber(IntegerPart); // Fetch Sections and convert

  var Output = [];
  var SplitLength = SpitedNumber.length;

  for (var i = 0; i < SplitLength; i += 1) {
    var SectionTitle = Letters[4][SplitLength - (i + 1)];
    var converted = ThreeNumbersToLetter(SpitedNumber[i]);

    if (converted !== '') {
      Output.push(converted + SectionTitle);
    }
  } // Convert Decimal part


  if (DecimalPart.length > 0) {
    DecimalPart = ConvertDecimalPart(DecimalPart);
  }

  return Output.join(Delimiter) + DecimalPart;
};

String.prototype.toPersianLetter = function () {
  return Num2persian(this);
};

Number.prototype.toPersianLetter = function () {
  return Num2persian(parseFloat(this).toString());
};