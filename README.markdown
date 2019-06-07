# NumToPersian

## Installation

### npm
```
  npm install num2persian
```
### bower
```
 bower install num2persian
 ```
 ## Usage
 ```
 import Num2persian from 'num2persian';
 console.log(Num2persian(123));
 ```
## Convert numbers/digits to Persian letters in  JavaScript

Just call `Num2persian()` or use `.toPersianLetter()` prototype.

#  Example

```javascript
//Global function
Num2persian(1250); //output: یک هزار و دویست و پنجاه

//String Prototype
"2001".toPersianLetter(); //output: دو هزار و یک

//Non-Digits
"%20s01".toPersianLetter(); //output: دو هزار و یک
"2,001".toPersianLetter(); //output: دو هزار و یک

//Number Prototype
(84000).toPersianLetter(); //output: هشتاد و چهار هزار

//Float
(12.450).toPersianLetter(); //output: دوازده ممیز چهل و پنج صدم
```

## تبدیل عدد به حروف فارسی در جاوا اسکریپت
* توانایی پردازش اعداد تا 66 رقم عدد صحیح و 11 رقم اعشار | دسیلیارد

#### برای استفاده از اعداد بزرگ از نوع داده استرینگ استفاده کنید.

CDN:
[https://cdn.jsdelivr.net/gh/mahmoud-eskandari/NumToPersian/dist/num2persian-min.js]
