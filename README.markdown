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
Convert numbers to Persian letters in  JavaScript

## تبدیل عدد به حروف فارسی در جاوا اسکریپت

* سهولت در استفاده
* توانایی پردازش اعداد تا 66 رقم | دسیلیارد
* پرفورمنس بالا

call `NumToPersian()` or use `.toPersianLetter()` prototype.

# مثالها

```javascript
//Global function
NumToPersian(1250); //output: یک هزار و دویست و پنجاه

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
#### توجه کنید برای اعداد بالای 16 رقم نباید از نوع داده اینتجر استفاده شود. زیرا جاوا اسکریپت ساپورت نمیکند و باید از نوع داده استرینگ استفاده کنید!

CDN:
[https://cdn.jsdelivr.net/gh/mahmoud-eskandari/NumToPersian/dist/num2persian-min.js]
