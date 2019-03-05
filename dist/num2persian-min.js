/**
 * Name:Javascript Number To Persian Convertor.
 * License: GPL-2.0
 * Generated on 2019-03-05
 * Author:Mahmoud Eskanadri.
 * Copyright:2018 http://Webafrooz.com.
 * version:3.0.0
 * Email:info@webafrooz.com,sbs8@yahoo.com
 * coded with ♥ in Webafrooz.
 * big numbers refrence: https://fa.wikipedia.org/wiki/%D9%86%D8%A7%D9%85_%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF_%D8%A8%D8%B2%D8%B1%DA%AF
 */

"use strict";var Delimiter=" و ",Zero="صفر",Letters=[["","یک","دو","سه","چهار","پنج","شش","هفت","هشت","نه"],["ده","یازده","دوازده","سیزده","چهارده","پانزده","شانزده","هفده","هجده","نوزده","بیست"],["","","بیست","سی","چهل","پنجاه","شصت","هفتاد","هشتاد","نود"],["","یکصد","دویست","سیصد","چهارصد","پانصد","ششصد","هفتصد","هشتصد","نهصد"],[""," هزار"," میلیون"," میلیارد"," بیلیون"," بیلیارد"," تریلیون"," تریلیارد","کوآدریلیون"," کادریلیارد"," کوینتیلیون"," کوانتینیارد"," سکستیلیون"," سکستیلیارد"," سپتیلیون","سپتیلیارد"," اکتیلیون"," اکتیلیارد"," نانیلیون"," نانیلیارد"," دسیلیون"," دسیلیارد"]],PrepareNumber=function(e){var r=e;"number"==typeof r&&(r=r.toString());var t=r.length%3;return 1===t?r="00".concat(r):2===t&&(r="0".concat(r)),r.replace(/\d{3}(?=\d)/g,"$&*").split("*")},ThreeNumbersToLetter=function(e){if(0===parseInt(e,0))return"";var r=parseInt(e,0);if(r<10)return Letters[0][r];if(r<=20)return Letters[1][r-10];if(r<100){var t=r%10,n=(r-t)/10;return t>0?Letters[2][n]+Delimiter+Letters[0][t]:Letters[2][n]}var i=r%10,s=(r-r%100)/100,u=(r-(100*s+i))/10,o=[Letters[3][s]],a=10*u+i;return a>0&&(a<10?o.push(Letters[0][a]):a<=20?o.push(Letters[1][a-10]):(o.push(Letters[2][u]),i>0&&o.push(Letters[0][i]))),o.join(Delimiter)},Num2persian=function(e){if(0===parseInt(e,0))return Zero;if(e.length>66)return"خارج از محدوده";for(var r=PrepareNumber(e),t=[],n=r.length,i=0;i<n;i+=1){var s=Letters[4][n-(i+1)],u=ThreeNumbersToLetter(r[i]);""!==u&&t.push(u+s)}return t.join(Delimiter)};String.prototype.toPersianLetter=function(){return Num2persian(this)},Number.prototype.toPersianLetter=function(){return Num2persian(parseInt(this).toString())};