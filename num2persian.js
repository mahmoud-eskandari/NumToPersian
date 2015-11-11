/**
	Name:Javascript Number To Persian Convertor.
	Author:Mahmoud Eskanadri.
	Copyright:2015 http://Webafrooz.com.
	Licence: GNU Licence 2.4
	version:1.0.2
	Email:info@webafrooz.com,sbs8@yahoo.com
	Programming With love in Webafrooz.
**/
	var andd = " و " ;
	var zero = "صفر" ;
	var persian   = [];
	persian.push([ "","یك", "دو", "سه", "چهار", "پنج" , "شش", "هفت", "هشت", "نه"]);
	persian.push([ "","ده", "بیست", "سی", "چهل", "پنجاه" , "شصت", "هفتاد", "هشتاد","نود"]);
	persian.push(["","یكصد", "دویست", "سیصد", "چهارصد", "پانصد", "ششصد","هفتصد","هشتصد","نهصد"]);
	persian.push(['',''," هزار "," میلیون "," میلیارد "," تریلیون "]);
	persian.push([ "ده", "یازده", "دوازده", "سیزده", "چهارده", "پانزده", "شانزده","هفده", "هجده", "نوزده"]);
function NumToPersian(num,tt){
	if (typeof(tt)==='undefined'){
		tt = 0;
	}
	var sstack = [];
	num = num.toString();
	var len   = num.length;
	var level = 1;
	var chars = [];
	if(len > 3){
		/** Split To 3 chars **/
		var carry = len%3;
		var jc = 0;
		if(carry > 0){
			chars.push(num.substring(0, carry));
		}
		for(var j = carry;len > j;j++ ){
			if(jc%3 == 0)
				chars.push(num.substring(j, j+3));
			jc++;
		}
		/** End Of Split **/
		var len   = chars.length;
		var  t = [];
		for(i = 0; len > i;i++){
		
			var nn  = NumToPersian(chars[i],2);
		
			if(Object.prototype.toString.call( nn ) === '[object Array]'){
				k = nn.join(andd);
				if(persian[3][len-i] != '')
					k+=persian[3][len-i];
				
				t.push(k);
			}
			
		}
		return (t.join(andd));
	}else{
		var ar = num.split('');
		if(parseInt(num) == 0 ){
			if(tt == 0)
				return zero;
			else
				return "";
		}
		
		if(len == 3){
			//FOR Min of 1000
			for(var i = 0;i < ar.length;i++){
				if(ar[i] != 0){
					// Sadgan
					if(i == 0)
						sstack.push(persian[2][ar[i]]);
					//Dahgan
					if(i == 1){
						var baghi = parseInt(ar[i]+ar[i+1]);
						//console.log(baghi);
						if(baghi > 19)
							sstack.push(persian[1][ar[i]]);
						else
							sstack.push(persian[4][ar[i+1]]);
					}
					//Yekan
					if(i == 2 && ar[i] != 0 && parseInt(ar[i-1]) > 1){
						sstack.push(persian[0][ar[i]]);
					}
				}
			}
		}else if(len == 2){
			if(ar[0] != 0 && ar[1] == 0 ){
				sstack.push(persian[1][ar[0]]);
			}else if(ar[1] != 0 && ar[0] != 0 && parseInt(ar[0]+ar[1]) > 20){
				sstack.push(persian[1][ar[0]]);
				sstack.push(persian[0][ar[1]]);
			}else if(parseInt(ar[0]+ar[1]) < 20){
				sstack.push(persian[4][ar[1]]);
			}else
				return '';
				
		}else if(len == 1){
			sstack.push(persian[0][ar[0]]);
		}
		if(tt === 0)
			return sstack.join(andd);
	}
	return sstack;
}
