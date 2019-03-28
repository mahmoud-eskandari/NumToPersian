# NumToPersian

## Installation

### NPM
```
  npm install num2persian
```
### Bower
```
 bower install num2persian
 ```
 ## Usage
 ```
 import Num2persian from 'num2persian';
 console.log(Num2persian(123));
 ```
Convert numbers to Persian letters in  JavaScript

## تبدیل عدد به حروف فارسی در جاوا اسکریپت

* سهولت در استفاده
* توانایی پردازش اعداد تا 66 رقم | دسیلیارد
* پرفورمنس بالا

call `Num2persian()` or use `.toPersianLetter()` prototype.

#  Example

```javascript
//Global function
Num2persian(1250); //output: یک هزار و دویست و پنجاه

//String Prototype
"2001".toPersianLetter(); //output: دو هزار و یک

//Number Prototype
(84000).toPersianLetter(); //output: هشتاد و چهار هزار
```
```
100000000000000000000000000000000000000000000000000000000000000001
>>
یكصد دسیلیارد و یک
```
##### این کتابخانه در ورژن فعلی از اعداد اعشاری پشتیبانی نمیکند
#### برای استفاده از اعداد بزرگ از نوع داده استرینگ استفاده کنید.

CDN:
[https://cdn.jsdelivr.net/gh/mahmoud-eskandari/NumToPersian/dist/num2persian-min.js]
