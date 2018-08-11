# NumToPersian

Convert numbers to Persian letters in  JavaScript

## تبدیل عدد به حروف فارسی در جاوا اسکریپت

* بدون نیاز به jQuery
* سهولت در استفاده
* توانایی پردازش اعداد تا 66 رقم | دسیلیارد
* پرفورمنس بالا

call `NumToPersian()` or use `.toPersian()` prototype.

# مثالها

```javascript
//Global function
NumToPersian(1250); //output: یك هزار و دویست و پنجاه

//String Prototype
"2001".toPersian(); //output: دو هزار و یك

//Number Prototype
(84000).toPersian(); //output: هشتاد و چهار هزار
```
```
100000000000000000000000000000000000000000000000000000000000000001
>>
یكصد دسیلیارد و یك
```
#### این کتابخانه در ورژن فعلی از اعداد اعشاری پشتیبانی نمیکند
CDN:
[https://cdn.rawgit.com/mahmoud-eskandari/NumToPersian/2e66d7cf/num2persian.min.js]
CDN for dev:
[https://rawgit.com/mahmoud-eskandari/NumToPersian/master/num2persian.min.js]
