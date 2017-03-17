/**
 Name:Javascript Number To Persian Convertor.
 Author:Mahmoud Eskanadri.
 Copyright:2015 http://Webafrooz.com.
 Licence: GNU Licence 2.4
 version:1.1.0
 Email:info@webafrooz.com,sbs8@yahoo.com
 Programming With love in Webafrooz.
 **/
/**
 *
 * @type {string}
 */
var andd = " و ";
/**
 *
 * @type {string}
 */
var zero = "صفر";
/**
 *
 * @type {*[]}
 */
var persian = [
    ["", "یك", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"],
    ["", "ده", "بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"],
    ["", "یكصد", "دویست", "سیصد", "چهارصد", "پانصد", "ششصد", "هفتصد", "هشتصد", "نهصد"],
    ['', '', " هزار ", " میلیون ", " میلیارد ", " تریلیون "],
    ["ده", "یازده", "دوازده", "سیزده", "چهارده", "پانزده", "شانزده", "هفده", "هجده", "نوزده"]
];
/**
 *
 * @param num
 * @param tt
 * @returns {*}
 * @constructor
 */
function NumToPersian(num, tt) {
    if (typeof(tt) === 'undefined') {
        tt = 0;
    }
    var let_stack = [];
    //num = num.toString();
    len = num.length;
    var chars = [];
    if (len > 3) {
        /** Split To 3 chars **/
        var carry = len % 3;
        var jc = 0;
        if (carry > 0) {
            chars.push(num.substring(0, carry));
        }
        for (var j = carry; len > j; j++) {
            if (jc % 3 == 0)
                chars.push(num.substring(j, j + 3));
            jc++;
        }
        /** End Of Split **/
        var len = chars.length;
        var t = [];
        for (i = 0; len > i; i++) {

            var nn = NumToPersian(chars[i], 2);

            if (Object.prototype.toString.call(nn) === '[object Array]') {
                k = nn.join(andd);
                if (persian[3][len - i] != '')
                    k += persian[3][len - i];

                t.push(k);
            }

        }
        return (t.join(andd));
    } else {
        var ar = num.split('');
        if (parseInt(num) == 0) {
            if (tt == 0) {
                return zero;
            } else {
                return '';
            }
        }

        if (len == 3) {
            //FOR Min of 1000
            if (parseInt(ar[0] + ar[1]) == 0) {
                let_stack.push(persian[0][ar[2]]);
            } else {
                for (var i = 0; i < ar.length; i++) {
                    if (ar[i] != 0) {
                        // Sadgan
                        if (i == 0)
                            let_stack.push(persian[2][ar[i]]);
                        //Dahgan
                        if (i == 1) {
                            var baghi = parseInt(ar[i] + ar[i + 1]);
                            //console.log(baghi);
                            if (baghi > 19)
                                let_stack.push(persian[1][ar[i]]);
                            else
                                let_stack.push(persian[4][ar[i + 1]]);
                        }
                        //Yekan
                        if (i == 2 && ar[i] != 0) {
                            let_stack.push(persian[0][ar[i]]);
                        }
                    }
                }
            }
        } else if (len == 2) {
            if (ar[0] != 0 && ar[1] == 0) {
                let_stack.push(persian[1][ar[0]]);
            } else if (ar[1] != 0 && ar[0] != 0 && parseInt(ar[0] + ar[1]) > 20) {
                let_stack.push(persian[1][ar[0]]);
                let_stack.push(persian[0][ar[1]]);
            } else if (parseInt(ar[0] + ar[1]) < 20) {
                let_stack.push(persian[4][ar[1]]);
            } else {
                return '';
            }
        } else if (len == 1) {
            let_stack.push(persian[0][ar[0]]);
        }
        if (tt === 0)
            return let_stack.join(andd);
    }
    return let_stack;
}
String.prototype.toPersian = function () {
    return NumToPersian(this,0);
};
