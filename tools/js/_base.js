
var checknum ="(three|seven|eight|thre|four|five|seve|eigh|nine|two|thr|fou|fiv|six|sev|eig|nin|tw|th|fo|fi|si|se|ei|ni|2|3|4|5|6|7|8|9|ii|iii|iv|v|vi|vii|viii|ix)";
var checknum2 ="(three|seven|eight|zero|thre|four|five|seve|eigh|nine|zer|one|two|thr|fou|fiv|six|sev|eig|nin|ze|on|tw|th|fo|fi|si|se|ei|ni|0|1|2|3|4|5|6|7|8|9|i|ii|iii|iv|v|vi|vii|viii|ix)";

var numbercheckinv1 ='^([a-z]{3})'+checknum+checknum+'([0-9a-z]+)'+checknum+checknum+checknum+'([a-z]{2})$';
var numbercheckinv2 ='^(...)'+checknum+checknum+'([0-9a-z]+)'+checknum+checknum+checknum+'(..)$';
var numbercheckjoj1 ='^([a-z])'+checknum2+'([a-z])'+checknum2+'([0-9a-z]+)'+'([a-z])'+checknum2+'([a-z]{2})$';
var numbercheckjoj2 ='^(.)'+checknum2+'(.)'+checknum2+'([0-9a-z]+)'+'(.)'+checknum2+'(..)$';
var numbercheckano1 ='^([a-z]{8})'+checknum+'([0-9a-z]+)'+checknum+'$';
var numbercheckano2 ='^(........)'+checknum+'([0-9a-z]+)'+checknum+'$';
var numeric ={
					"0" : "0",	"ze" : "0" ,	"zer" : "0" ,	"zero" : "0" ,
	"i" : "1" ,		"1" : "1",	"on" : "1" ,	"one" : "1" ,	
	"ii" : "2" ,	"2" : "2",	"tw" : "2" ,	"two" : "2" ,	
	"iii" : "3" ,	"3" : "3",	"th" : "3" ,	"thr" : "3" ,	"thre" : "3" ,	"three" : "3" ,
	"iv" : "4" ,	"4" : "4",	"fo" : "4" ,	"fou" : "4" ,	"four" : "4" ,
	"v" : "5" ,		"5" : "5",	"fi" : "5" ,	"fiv" : "5" ,	"five" : "5" ,
	"vi" : "6" ,	"6" : "6",	"si" : "6" ,	"six" : "6" ,
	"vii" : "7" ,	"7" : "7",	"se" : "7" ,	"sev" : "7" ,	"seve" : "7" ,	"seven" : "7" ,
	"viii" : "8" ,	"8" : "8",	"ei" : "8" ,	"eig" : "8" ,	"eigh" : "8" ,	"eight" : "8" ,
	"ix" : "9" ,	"9" : "9",	"ni" : "9" ,	"nin" : "9" ,	"nine" : "9" ,
};




function NumericChange(str){
	var res="";
	str=str.toLowerCase();
	res="Investigate Passcode.<br>";
	if( code  = str.match(numbercheckinv1) ){
		if($.inArray(code[4], KeyMap) >= 0){
			res += code[1]+numeric[code[2]]+numeric[code[3]]+'<font color="red">'+code[4]+'</font>'+numeric[code[5]]+numeric[code[6]]+numeric[code[7]]+code[8];
		}else{
			res += code[1]+numeric[code[2]]+numeric[code[3]]+'<font color="green">'+code[4]+'</font>'+numeric[code[5]]+numeric[code[6]]+numeric[code[7]]+code[8];
		}
	}else if( code  = str.match(numbercheckinv2) ){
		if($.inArray(code[4], KeyMap) >= 0){
			res += code[1]+numeric[code[2]]+numeric[code[3]]+'<font color="red">'+code[4]+'</font>'+numeric[code[5]]+numeric[code[6]]+numeric[code[7]]+code[8];
		}else{
			res += code[1]+numeric[code[2]]+numeric[code[3]]+'<font color="green">'+code[4]+'</font>'+numeric[code[5]]+numeric[code[6]]+numeric[code[7]]+code[8];
		}
	}else{
		res+="none";
	}
	res+="<br><br>";

	res+="JoJo Passcode.<br>";

	if( code  = str.match(numbercheckjoj1) ){
		if($.inArray(code[5], KeyMapJoJo) >= 0){
			res += code[1]+numeric[code[2]]+code[3]+numeric[code[4]]+'<font color="red">'+code[5]+'</font>'+code[6]+numeric[code[7]]+code[8];
		}else{
			res += code[1]+numeric[code[2]]+code[3]+numeric[code[4]]+'<font color="green">'+code[5]+'</font>'+code[6]+numeric[code[7]]+code[8];
		}
	}else if( code  = str.match(numbercheckjoj2) ){
		if($.inArray(code[5], KeyMapJoJo) >= 0){
			res += code[1]+numeric[code[2]]+code[3]+numeric[code[4]]+'<font color="red">'+code[5]+'</font>'+code[6]+numeric[code[7]]+code[8];
		}else{
			res += code[1]+numeric[code[2]]+code[3]+numeric[code[4]]+'<font color="green">'+code[5]+'</font>'+code[6]+numeric[code[7]]+code[8];
		}
	}else{
		res+="none";
	}

	res+="<br><br>";
	res+="Anomary Passcode.<br>";

	if( code  = str.match(numbercheckano1) ){
		if($.inArray(code[3], KeyMap) >= 0){
			res += code[1]+numeric[code[2]]+'<font color="red">'+code[3]+'</font>'+numeric[code[4]];
		}else{
			res += code[1]+numeric[code[2]]+'<font color="green">'+code[3]+'</font>'+numeric[code[4]];
		}
	}else if( code  = str.match(numbercheckano2) ){
		if($.inArray(code[3], KeyMap) >= 0){
			res += code[1]+numeric[code[2]]+'<font color="red">'+code[3]+'</font>'+numeric[code[4]];
		}else{
			res += code[1]+numeric[code[2]]+'<font color="green">'+code[3]+'</font>'+numeric[code[4]];
		}
	}else{
		res+="none";
	}



	return res;
}
