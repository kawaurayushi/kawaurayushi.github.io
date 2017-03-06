var target="";
var num=0;
var KeyMap = new Array();
var KeyMapJoJo = new Array();
var checknum ="(three|seven|eight|thre|four|five|seve|eigh|nine|two|thr|fou|fiv|six|sev|eig|nin|tw|th|fo|fi|si|se|ei|ni|hree|even|ight|ree|our|ive|ven|ght|ine|wo|ee|ur|ve|en|ht|ne|2|3|4|5|6|7|8|9|iii|ii|viii|vii|iv|vi|ix|v)";
var checknum2 ="(three|seven|eight|zero|thre|four|five|seve|eigh|nine|zer|one|two|thr|fou|fiv|six|sev|eig|nin|ze|on|tw|th|fo|fi|si|se|ei|ni|0|1|2|3|4|5|6|7|8|9|iii|ii|i|viii|vii|iv|vi|ix|v)";
var checknum3 ="(three|seven|eight|thre|four|five|seve|eigh|nine|two|thr|fou|fiv|six|sev|eig|nin|tw|th|fo|fi|si|se|ei|ni|2|3|4|5|6|7|8|9|hree|even|ight|ree|our|ive|ven|ght|ine|wo|ee|ur|ve|ix|en|ht|ne|due|tre|qua|quat|quatt|quattr|quattrocin|cinq|cinqu|cinque|sei|set|sett|sette|ott|otto|nov|nove|deu|deux|tro|troi|trois|quatr|quatre|sep|sept|hui|huit|neu|neuf)";
var TELCHECK    ='^[1-9]+$';
var NUM2CHECK   ='^[0-1 ]+$';
var NUM3CHECK   ='^[0-2 ]+$';
var NUM8CHECK   ='^[0-7 ]+$';
var NUM10CHECK  ='^[0-9 ]+$';
var NUM16CHECK  ='^[0-9a-fA-F ]+$';

var StringCHECK  ='^[0-9a-zA-z]+$';

var numbercheckold1 ='^'+checknum+'([a-z]{3})'+checknum+'([0-9a-z]*?)'+'([a-z])'+checknum+'([a-z])'+checknum+'([a-z])$';
var numbercheckold2 ='^'+checknum+'(...)'+checknum+'([0-9a-z]*?)'+'(.)'+checknum+'(.)'+checknum+'(.)$';
var numbercheckinv1 ='^([a-z]{3})'+checknum+checknum+'([0-9a-z]*?)'+checknum+checknum+checknum+'([a-z]{2})$';
var numbercheckinv2 ='^(...)'+checknum+checknum+'([0-9a-z]*?)'+checknum+checknum+checknum+'(..)$';
var numbercheckjoj1 ='^([a-z])'+checknum2+'([a-z])'+checknum2+'([0-9a-z]*?)'+'([a-z])'+checknum2+'([a-z]{2})$';
var numbercheckjoj2 ='^(.)'+checknum2+'(.)'+checknum2+'([0-9a-z]*?)'+'(.)'+checknum2+'(..)$';
var numbercheckano1 ='^([a-z]{8})'+checknum+'([0-9a-z]*?)'+checknum+'$';
var numbercheckano2 ='^(........)'+checknum+'([0-9a-z]*?)'+checknum+'$';
var numberchecknot1 ='^([0-9a-z]*?)'+checknum+'([a-z]{2})'+checknum+checknum+'([a-z]{2})'+checknum+'$';
var numberchecknot2 ='^([0-9a-z]*?)'+checknum+'(..)'+checknum+checknum+'(..)'+checknum+'$';
var numbercheckinv3 ='^([a-z]{3})'+checknum+checknum+'([0-9a-z]*?)'+checknum+checknum+checknum+'([a-z]{2})'+'([a-z]{3})'+checknum+checknum+'([0-9a-z]*?)'+checknum+checknum+checknum+'([a-z]{2})$'
var numbercheckinv4 ='^([a-z]{3})'+checknum+checknum+'([0-9a-z]*?)'+checknum+checknum+checknum+'([a-z]{2})'+'([a-z]{3})'+checknum+checknum+'([0-9a-z]*?)'+checknum+checknum+checknum+'([a-z]{2})'+'([a-z]{3})'+checknum+checknum+'([0-9a-z]*?)'+checknum+checknum+checknum+'([a-z]{2})$';

var numeric1 ={
					"0" : "0",	"ze" : "0" ,	"zer" : "0" ,	"zero" : "0" ,
	"i" : "1" ,		"1" : "1",	"on" : "1" ,	"one" : "1" ,	
	"ii" : "2" ,	"2" : "2",	"tw" : "2" ,	"two" : "2" ,									"wo" : "2" ,
	"iii" : "3" ,	"3" : "3",	"th" : "3" ,	"thr" : "3" ,	"thre" : "3" ,	"three" : "3" ,	"ee" : "3" ,	"ree" : "3" ,	"hree" :"3" ,
	"iv" : "4" ,	"4" : "4",	"fo" : "4" ,	"fou" : "4" ,	"four" : "4" ,					"ur" : "4" ,	"our" : "4" ,
	"v" : "5" ,		"5" : "5",	"fi" : "5" ,	"fiv" : "5" ,	"five" : "5" ,					"ve" : "5" ,	"ive" : "5" ,
	"vi" : "6" ,	"6" : "6",	"si" : "6" ,	"six" : "6" ,
	"vii" : "7" ,	"7" : "7",	"se" : "7" ,	"sev" : "7" ,	"seve" : "7" ,	"seven" : "7" ,	"en" : "7" ,	"ven" : "7" ,	"even" : "7" ,
	"viii" : "8" ,	"8" : "8",	"ei" : "8" ,	"eig" : "8" ,	"eigh" : "8" ,	"eight" : "8" ,	"ht" : "8" ,	"ght" : "8" ,	"ight" : "8" ,
	"ix" : "9" ,	"9" : "9",	"ni" : "9" ,	"nin" : "9" ,	"nine" : "9" ,					"ne" : "9" ,	"ine" : "9" ,	
};

var numeric2 ={
	 "0" : "0" ,	 "ze" : "0" ,	"zer" : "0" ,	"zero" : "0" ,
	 "1" : "1" ,	 "on" : "1" ,	"one" : "1" ,	
	 "2" : "2" ,	 "tw" : "2" ,	"two" : "2" ,									"wo" : "2" ,
	 "3" : "3" ,	 "th" : "3" ,	"thr" : "3" ,	"thre" : "3" ,	"three" : "3" ,	"ee" : "3" ,	"ree" : "3" ,	"hree" :"3" ,
	 "4" : "4" ,	 "fo" : "4" ,	"fou" : "4" ,	"four" : "4" ,					"ur" : "4" ,	"our" : "4" ,
	 "5" : "5" ,	 "fi" : "5" ,	"fiv" : "5" ,	"five" : "5" ,					"ve" : "5" ,	"ive" : "5" ,
	 "6" : "6" ,	 "si" : "6" ,	"six" : "6" ,									"ix" : "6" ,
	 "7" : "7" ,	 "se" : "7" ,	"sev" : "7" ,	"seve" : "7" ,	"seven" : "7" ,	"en" : "7" ,	"ven" : "7" ,	"even" : "7" ,
	 "8" : "8" ,	 "ei" : "8" ,	"eig" : "8" ,	"eigh" : "8" ,	"eight" : "8" ,	"ht" : "8" ,	"ght" : "8" ,	"ight" : "8" ,
	 "9" : "9" ,	 "ni" : "9" ,	"nin" : "9" ,	"nine" : "9" ,					"ne" : "9" ,	"ine" : "9" ,	
	"du" : "2" ,	"due" : "2" ,	 "de" : "2" ,	 "deu" : "2" ,	 "deux" : "2" ,
	"tr" : "3" ,	"tre" : "3" ,	"tro" : "3" ,	"troi" : "3" ,	"trois" : "3" ,
	"qu" : "4" ,	"qua" : "4" ,	"quat": "4" ,	"quatt": "4" ,	"quattr": "4" ,"quattro" : "4" ,
	"ci" : "5" ,	"cin" : "5" ,	"cinq": "5" ,	"quatr": "4" ,	"quatre": "4" ,
	"sei": "6" ,	"set" : "7" ,	"sett": "7" ,	"sette": "7" ,	"sep"   : "7" ,	"sept" : "7" ,
	"ot" : "8" ,	"ott" : "8" ,	"otto": "8" ,	"hu"   : "8" ,	"hui"   : "8" ,	"huit" : "8" ,
	"no" : "9" ,	"nov" : "9" ,	"nove" : "9" ,					"neu"   : "9" ,	"neuf" : "9" ,	
};

var numeric = numeric1;

function cleartextarea(){
	$( "textarea" ).each(function(index){ $( this ).val(""); }); 
}
function echotext(){
	$( "textarea" ).each(function(index){ console.log( index + ": " + $( this ).val() ); }); 
}
function trimspace(str){
	return str.replace(/ /g,"");
}
function trimCRLF(str){
	return str.replace(/[\n\r]/g,"");
}
var SYMBOLS = [
    'H',   'He',  'Li',  'Be',  'B',   'C',   'N',   'O',   'F',   'Ne',
    'Na',  'Mg',  'Al',  'Si',  'P',   'S',   'Cl',  'Ar',  'K',   'Ca',
    'Sc',  'Ti',  'V',   'Cr',  'Mn',  'Fe',  'Co',  'Ni',  'Cu',  'Zn',
    'Ga',  'Ge',  'As',  'Se',  'Br',  'Kr',  'Rb',  'Sr',  'Y',   'Zr',
    'Nb',  'Mo',  'Tc',  'Ru',  'Rh',  'Pd',  'Ag',  'Cd',  'In',  'Sn',
    'Sb',  'Te',  'I',   'Xe',  'Cs',  'Ba',  'La',  'Ce',  'Pr',  'Nd',
    'Pm',  'Sm',  'Eu',  'Gd',  'Tb',  'Dy',  'Ho',  'Er',  'Tm',  'Yb',
    'Lu',  'Hf',  'Ta',  'W',   'Re',  'Os',  'Ir',  'Pt',  'Au',  'Hg',
    'Tl',  'Pb',  'Bi',  'Po',  'At',  'Rn',  'Fr',  'Ra',  'Ac',  'Th',
    'Pa',  'U',   'Np',  'Pu',  'Am',  'Cm',  'Bk',  'Cf',  'Es',  'Fm',
    'Md',  'No',  'Lr',  'Rf',  'Db',  'Sg',  'Bh',  'Hs',  'Mt',  'Ds',
    'Rg',  'Cn',  'Nh',  'Fl',  'Mc',  'Lv',  'Ts',  'Og',
    'Uue', 'Ubn', 'Ubu', 'Ubb', 'Ubt', 'Ubq', 'Ubp', 'Ubh', 'Ubs', 'Ubo',
    'Ube', 'Utn', 'Utu', 'Utb', 'Utt', 'Utq', 'Utp', 'Uth', 'Uts', 'Uto',
    'Ute', 'Uqn', 'Uqu', 'Uqb', 'Uqt', 'Uqq', 'Uqp', 'Uqh', 'Uqs', 'Uqo',
    'Uqe', 'Upn', 'Upu', 'Upb', 'Upt', 'Upq', 'Upp', 'Uph', 'Ups', 'Upo',
    'Upe', 'Uhn', 'Uhu', 'Uhb', 'Uht', 'Uhq', 'Uhp', 'Uhh', 'Uhs', 'Uho',
    'Uhe', 'Usn', 'Usu', 'Usb'
].map(function(x) { return x.toLowerCase(); });
var SYMBOLS2 = [
    'XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX',
    'XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX',
    'XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX',
    'XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX',
    'XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','Cd',  'In',  'Sn',
    'Sb',  'Te',  'I',   'Xe',  'Cs',  'Ba',  'La',  'Ce',  'Pr',  'Nd',
    'Pm',  'Sm',  'Eu',  'Gd',  'Tb',  'Dy',  'Ho',  'Er',  'Tm',  'Yb',
    'Lu',  'Hf',  'Ta',  'W',   'Re',  'Os',  'Ir',  'Pt',  'Au',  'Hg',
    'Tl',  'Pb',  'Bi',  'Po',  'At',  'Rn',  'Fr',  'Ra',  'Ac',  'Th',
    'Pa',  'U',   'Np',  'Pu',  'Am',  'Cm',  'Bk',  'Cf',  'Es',  'Fm',
    'Md',  'No',  'Lr',  'Rf',  'Db',  'Sg',  'Bh',  'Hs',  'Mt',  'Ds',
    'Rg',  'Cn',  'Nh',  'Fl',  'Mc',  'Lv',  'Ts',  'Og',
    'Uue', 'Ubn', 'Ubu', 'Ubb', 'Ubt', 'Ubq', 'Ubp', 'Ubh', 'Ubs', 'Ubo',
    'Ube', 'Utn', 'Utu', 'Utb', 'Utt', 'Utq', 'Utp', 'Uth', 'Uts', 'Uto',
    'Ute', 'Uqn', 'Uqu', 'Uqb', 'Uqt', 'Uqq', 'Uqp', 'Uqh', 'Uqs', 'Uqo',
    'Uqe', 'Upn', 'Upu', 'Upb', 'Upt', 'Upq', 'Upp', 'Uph', 'Ups', 'Upo',
    'Upe', 'Uhn', 'Uhu', 'Uhb', 'Uht', 'Uhq', 'Uhp', 'Uhh', 'Uhs', 'Uho',
    'Uhe', 'Usn', 'Usu', 'Usb'
].map(function(x) { return x.toLowerCase(); });
var MAX_SYMBOL_LENGTH = 3;


function chooseBestElement(string) {
  var elements = symbolsToPotentialElements(string);
  for (var i = 0; i < elements.length; i++) {
    var after = string.slice(elements[i].symbol.length);
    if (!after.length || symbolsToPotentialElements(after).length)
      return elements[i];
  }
  return elements.length ? elements[0] : null;
}

function chooseBestElement2(string) {
  var elements = symbolsToPotentialElements(string);
  for (var i = 0; i < elements.length; i++) {
    var after = string.slice(elements[i].symbol.length);
    if (!after.length || symbolsToPotentialElements2(after).length)
      return elements[i];
  }
  return elements.length ? elements[0] : null;
}

function encipherAtomicNumbers(message) {
  message = message.toLowerCase().replace(/[^a-z]/g, '');
  var result = [];
  while (message.length) {
    var element = chooseBestElement(message);
    if (element) {
      result.push(("000"+element.number.toString(10)).slice(-3));
      message = message.slice(element.symbol.length);
    } else {
      result.push(message.charAt(0));
      message = message.slice(1);
    }
  }
  return result.join(' ');
}

function encipherAtomicNumbers2(message) {
  message = message.toLowerCase().replace(/[^a-z]/g, '');
  var result = [];
  while (message.length) {
    var element = chooseBestElement2(message);
    if (element) {
      result.push(("000"+element.number.toString(10)).slice(-3));
      message = message.slice(element.symbol.length);
    } else {
      result.push(message.charAt(0));
      message = message.slice(1);
    }
  }
  return result.join(' ');
}

function decipherAtomicNumbers(message) {
  return message.split(' ').map(function(token) {
    return ("000" + SYMBOLS[token - 1].toString(10)).slice(-3) || token;
  }).join('');
}

function symbolsToPotentialElements(string) {
  var elements = [];
  for (var i = MAX_SYMBOL_LENGTH; i > 0; i--) {
    var index = SYMBOLS.indexOf(string.slice(0, i));
    if (index != -1)
      elements.push({number: index + 1, symbol: SYMBOLS[index]});
  }
  return elements;
}
function symbolsToPotentialElements2(string) {
  var elements = [];
  for (var i = MAX_SYMBOL_LENGTH; i > 0; i--) {
    var index = SYMBOLS2.indexOf(string.slice(0, i));
    if (index != -1)
      elements.push({number: index + 1, symbol: SYMBOLS2[index]});
  }
  return elements;
}

function Symbols2Numeric(text) {
	var KEYFROM = "!@#$%^&*()1234567890";
	var KEYTO   = "12345678901234567890";
	var decoded_text="";
	text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO.charAt(KEYFROM.indexOf(val));  });
	$( ".formNumeric"   ).val(decoded_text);
	Numeric2Polybius( $( ".formNumeric"  ).val());
}

function Numeric2Polybius(text) {
	var PolybiusMap = {
		"11"	: "a",	"12"	: "b",	"13"	: "c",	"14"	: "d",	"15"	: "e",
		"21"	: "f",	"22"	: "g",	"23"	: "h",	"24"	: "i",	"25"	: "k",
		"31"	: "l",	"32"	: "m",	"33"	: "n",	"34"	: "o",	"35"	: "p",
		"41"	: "q",	"42"	: "r",	"43"	: "s",	"44"	: "t",	"45"	: "u",
		"51"	: "v",	"52"	: "w",	"53"	: "x",	"54"	: "y",	"55"	: "z",
	};
	var decoded_text="";
	text=trimspace(text);
	for (var i=0; i< text.length; i+=2){
		decoded_text += PolybiusMap[text.substr(i, 2)] || '';
	}
	$( ".formPolybius"   ).val(decoded_text);
}

function Polybius2Numeric(text) {
	var RePolybiusMap = {
		"a"	: "11" ,	"b"	: "12" ,	"c"	: "13" ,	"d"	: "14" ,	"e"	: "15",
		"f"	: "21" ,	"g"	: "22" ,	"h"	: "23" ,	"i"	: "24" ,	"k"	: "25",
		"l"	: "31" ,	"m"	: "32" ,	"n"	: "33" ,	"o"	: "34" ,	"p"	: "35",
		"q"	: "41" ,	"r"	: "42" ,	"s"	: "43" ,	"t"	: "44" ,	"u"	: "45",
		"v"	: "51" ,	"w"	: "52" ,	"x"	: "53" ,	"y"	: "54" ,	"z"	: "55",
	};
	text=trimspace(text);
	var decoded_text="";
	for (var i=0; i< text.length; i++){
		decoded_text += RePolybiusMap[text.substr(i, 1)] || '';
	}
	$( ".formNumeric"   ).val(decoded_text);
}

function atbashof(text){
  var alphabet = "0123456789abcdef ";
  var tebahpla = "fedcba9876543210 ";
  var str = "";
  for (k = 0; k < text.length; k++) {
     var coded_letter = text.charAt(k);
     var letter_index = alphabet.indexOf(coded_letter);
         str += tebahpla.charAt(letter_index);
     }
  return str;
}


function GetHexbyXX(text) {
	var tebahpla = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var alphabet = "+-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`";
	var str = "";
	for (k = 1; k < text.length; k++) {
		var coded_letter = text.charAt(k);
		var letter_index = alphabet.indexOf(coded_letter);
		str += tebahpla.charAt(letter_index);
	}
	return GetHexbyBase64(str);

}

function GetHexbyUU(text) {
	var tebahpla = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var alphabet = ' !"#$%&'+"'"+'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`';
	var str = "";
	for (k = 1; k < text.length; k++) {
		var coded_letter = text.charAt(k);
		var letter_index = alphabet.indexOf(coded_letter);
		str += tebahpla.charAt(letter_index);
	}
	return GetHexbyBase64(str);

}


function DecodeBase85(a) {
  var c, d, e, f, g, h = String, l = "length", w = 255, x = "charCodeAt", y = "slice", z = "replace";
  for ("<~" === a[y](0, 2) && "~>" === a[y](-2), a = a[y](2, -2)[z](/\s/g, "")[z]("z", "!!!!!"), 
  c = "uuuuu"[y](a[l] % 5 || 5), a += c, e = [], f = 0, g = a[l]; g > f; f += 5) d = 52200625 * (a[x](f) - 33) + 614125 * (a[x](f + 1) - 33) + 7225 * (a[x](f + 2) - 33) + 85 * (a[x](f + 3) - 33) + (a[x](f + 4) - 33), 
  e.push(w & d >> 24, w & d >> 16, w & d >> 8, w & d);
  return function(a, b) {
    for (var c = b; c > 0; c--) a.pop();
  }(e, c[l]), h.fromCharCode.apply(h, e);
}

function GetHexbyBase85(str) {
	return GetHexbyText(DecodeBase85("<~"+str+"~>"));
}

function GetHexbyBase64(str){
	var ret="";
	var res=Base64a.decode(str);
	for(var i=0;i<res.length;i++){
		ret += String.fromCharCode(res[i]);
	}
	return ret;
}

function GetHexbyBase32(str){
	var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=";
	var buffer = 0;
	var bitsLeft = 0;    
	var output = new Array();
	var ret="";
	var i = 0;
	var count = 0;
	while (i < str.length) {
		var val = keyStr.indexOf(str.charAt(i++).toUpperCase());
		if (val >= 0 && val < 32) {
			buffer <<= 5;
			buffer |= val;
			bitsLeft += 5;
			if (bitsLeft >= 8) {
				output[count++] = (buffer >> (bitsLeft - 8)) & 0xFF;
				ret += ("00"+((buffer >> (bitsLeft - 8)) & 0xFF).toString(16)).slice( -2 );
				ret += " ";
				bitsLeft -= 8;
			}
		}
	}
	return ret;
}


function GetHexbyBase36(str){
	var keyStr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var ret="";
	var i = 0;
	while (i < str.length) {
		var val1 = keyStr.indexOf(str.charAt(i++).toUpperCase());
		var val2 = keyStr.indexOf(str.charAt(i++).toUpperCase());
		if ( (val1 >= 0 && val1 < 36) &&(val2 >= 0 && val2 < 36)) {
			ret += ("00"+(val1*36+val2).toString(16)).slice( -2 );
			ret += " ";
		}
	}
	return ret;
}

/* for Morse Bifid */

function GetHexbyMorse(str){
	return GetHexbyText(Morse2Str(str));
}

function GetHexbyBifid(str){
	var ret="";
	str = Bifid(-1,str,"J","I","",0);
	for (var i = 0; i < str.length; i += 1){
		ret += ("00"+str.charCodeAt(i).toString(16)).slice( -2 );
		ret += " ";
	}
	return ret;
}

function GetHexbyPlayfair(str){
	var ret="";
	str = Playfair(-1,str,"J","I","",0);
	for (var i = 0; i < str.length; i += 1){
		ret += ("00"+str.charCodeAt(i).toString(16)).slice( -2 );
		ret += " ";
	}
	return ret;
}


function Playfair(encdec, text, skip, skipto, key, flags){
	var enc, out, bet, otemp, c;
	if (typeof(skip) != 'string' || skip.length != 1 || skip.toUpperCase() < 'A' || skip.toUpperCase() > 'Z')		 skip = "J";
	skip = skip.toUpperCase();
	if (typeof(skipto) != 'string' || skipto.length != 1 || skipto.toUpperCase() < 'A' || skipto.toUpperCase() > 'Z')		skipto = "I";
	skipto = skipto.toUpperCase();
	if (skip == skipto) {
		skipto = String.fromCharCode(skip.charCodeAt(0) + 1);
		if (skipto > 'Z')	  skipto = 'A';
	}
	if (typeof(key) != 'string')	 key = "";
	key = MakeKeyedAlphabet(skip + key);
	key = key.slice(1, key.length);
	enc = '';
	out = '';
	bet = '';
	for (var i = 0; i < text.length; i ++) {
		c = text.charAt(i).toUpperCase();
		if (c == skip)			c = skipto;
		if (key.indexOf(c) >= 0)	 {
			if (text.charAt(i) != text.charAt(i).toUpperCase()){
				enc += c.toLowerCase();
			}else{
				enc += c;
			}
			if (enc.length == 2) {
				otemp = Playfair_Lookup(encdec, enc, key, flags);
				out += otemp.charAt(0) + bet + otemp.charAt(1);
				bet = '';
				enc = '';
			}
		} else {
			if (enc.length > 0) {
				bet += text.charAt(i);
			} else {
				out += text.charAt(i);
			}
		}
	}
	if (enc.length > 0) {
		otemp = Playfair_Lookup(encdec, enc + 'X', key);
		out += otemp.charAt(0) + bet + otemp.charAt(1);
	}
	return out;
}


// Performs the substitution of a single letter pair block
function Playfair_Lookup(encdec, chars, key, flags) {
	var t1, t2, u1, u2, r1, r2, c1, c2;
	t1 = chars.charAt(0);
	t2 = chars.charAt(1);
	u1 = 0;
	if (t1 != t1.toUpperCase())  {
		t1 = t1.toUpperCase();
		u1 = 1;
	}
	u2 = 0;
	if (t2 != t2.toUpperCase()) {
		t2 = t2.toUpperCase();
		u2 = 1;
	}
	c1 = key.indexOf(t1);
	r1 = Math.floor(c1 / 5);
	c1 = c1 % 5;
	c2 = key.indexOf(t2);
	r2 = Math.floor(c2 / 5);
	c2 = c2 % 5;
	if (r1 == r2 && c1 == c2) {
		// Same letter
		if ((flags & 0x01) == 0) {
			r1 += encdec;
			r2 += encdec;
			c1 += encdec;
			c2 += encdec;
		}
	} else if (r1 == r2) {
		// Same row
		c1 += encdec;
		c2 += encdec;
	} else if (c1 == c2) {
		// Same column
		r1 += encdec;
		r2 += encdec;
	} else {
		// Rectangle
		var a;
		a = c1;
		c1 = c2;
		c2 = a;
	}
	r1 = (r1 + 5) % 5;
	r2 = (r2 + 5) % 5;
	c1 = (c1 + 5) % 5;
	c2 = (c2 + 5) % 5;
	t1 = key.charAt(r1 * 5 + c1);
	t2 = key.charAt(r2 * 5 + c2);
	if (u1)		t1 = t1.toLowerCase();
	if (u2)		t2 = t2.toLowerCase();
	return t1 + t2;
}


function MakeKeyedAlphabet(key, alphabet) {
	var out = "";
	if (typeof(alphabet) != 'string'){
		alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}else{
		alphabet = alphabet.toUpperCase();
	}
	if (typeof(key) != 'string'){
		return alphabet;
	}
	key = key.toUpperCase() + alphabet;
	for (var i = 0; i < key.length; i ++)  {
		if (out.indexOf(key.charAt(i)) < 0 &&  alphabet.indexOf(key.charAt(i)) >= 0) {
			out += key.charAt(i);
		}
	}
	return out;
}

function Bifid(encdec, text, skip, skipto, key){
	var enc, out, bet, otemp, c;
	if (typeof(skip) != 'string' || skip.length != 1 || skip.toUpperCase() < 'A' || skip.toUpperCase() > 'Z')	skip = "J";
	skip = skip.toUpperCase();
	if (typeof(skipto) != 'string' || skipto.length != 1 || skipto.toUpperCase() < 'A' || skipto.toUpperCase() > 'Z') skipto = "I";
	skipto = skipto.toUpperCase();
	if (skip == skipto) {
		skipto = String.fromCharCode(skip.charCodeAt(0) + 1);
		if (skipto > 'Z')			 skipto = 'A';
	}
	if (typeof(key) != 'string')		 key = "";
	key = MakeKeyedAlphabet(skip + key);
	key = key.slice(1, key.length);
	enc = '';
	out = '';
	bet = '';
	for (var i = 0; i < text.length; i ++) {
		c = text.charAt(i).toUpperCase();
		if (c == skip)			c = skipto;
		if (key.indexOf(c) >= 0)  {
			enc += c;
		}
	}
	enc = Bifid_Mangle(encdec, enc, key);
	
	for (var i = 0, j = 0; i < text.length; i ++) {
		c = text.charAt(i).toUpperCase();
		if (c == skip){
			c = skipto;
		}
		if (key.indexOf(c) >= 0){
			if (text.charAt(i) != text.charAt(i).toUpperCase()){
				out += enc.charAt(j).toLowerCase();
			} else {
				out += enc.charAt(j);
			}
			j ++;
		} else {
			out += text.charAt(i);
		}
	}
	return out;
}
function Bifid_Mangle(encdec, chars, key) {
	var pos, line1, line2;
	line1 = '';
	line2 = '';
	for (var i = 0; i < chars.length; i ++) {
		var row, col;
		pos = key.indexOf(chars.charAt(i));
		row = Math.floor(pos / 5);
		col = pos % 5;
		line1 += row;
		if (encdec > 0) {
			line2 += col;
		} else {
			line1 += col;
		}
	}
	line1 += line2;
	if (encdec < 0) {
		line2 = '';
		for (var i = 0; i < line1.length / 2; i ++)  {
			line2 += line1.charAt(i);
			line2 += line1.charAt(line1.length / 2 + i);
		}
		window.status = line1 + " " + line2;
		line1 = line2;
	}
	chars = '';
	for (var i = 0; i < line1.length; i += 2) {
		chars += key.charAt(line1.charAt(i) * 5 + line1.charAt(i + 1) * 1);
	}
	return chars;
}


/* for octal,ascii,hex*/

function GetHexbyASCII(str){
	var ret="";
	str=trimCRLF(trimspace(str));
	for (var i = 0; i < str.length; ){

		if(parseInt(str.substr(i,3)) < 256){
			ret += ("00"+parseInt(str.substr(i, 3),10).toString(16)).slice( -2 );
			i+=3;
		}else{
			ret += ("00"+parseInt(str.substr(i, 2),10).toString(16)).slice( -2 );
			i+=2;
		}
		ret += " ";
	}
	return ret;
}

function GetHexbyHex(str){
	var ret="";
	str=trimCRLF(trimspace(str));
	for (var i = 0; i < str.length; i += 2){
		ret +=  ("00"+str.substr(i, 2)).slice( -2 );
		ret += " ";
	}
	return ret;
}

function GetHexbyText(str){
	var ret="";
	for (var i = 0; i < str.length; i += 1){
		ret += ("00"+str.charCodeAt(i).toString(16)).slice( -2 );
		ret += " ";
	}
	return ret;
}

function GetHexbyAtbash(str){
	var ret="";
	str = Atbash(str);
	for (var i = 0; i < str.length; i += 1){
		ret += ("00"+str.charCodeAt(i).toString(16)).slice( -2 );
		ret += " ";
	}
	return ret;
}



function GetHexbyBinary(str){
	str=trimCRLF(trimspace(str));
	var ret="";
	for (var i = 0; i < str.length; i += 8){
		ret += ("00"+parseInt(str.substr(i, 8), 2).toString(16)).slice( -2 );
		ret += " ";
	}
	return ret;
}

function GetHexbyOctal(str){
	str=trimCRLF(trimspace(str));
	var ret="";
	for (var i = 0; i < str.length; ){

		if(parseInt(str.substr(i,2),8) <256){
			ret += ("00"+parseInt(str.substr(i, 3),8).toString(16)).slice( -2 );
			i+=3;
		}else{
			ret += ("00"+parseInt(str.substr(i, 2),8).toString(16)).slice( -2 );
			i+=2;
		}
		ret += " ";
	}
	return ret;
}

function Hex2Dec(str){
	var ret="";
	str=trimCRLF(trimspace(str));
	for (var i = 0; i < str.length; i += 2){
		ret +=  ("000" + parseInt(str.substr(i, 2), 16)).slice( -3 );
		ret += " ";
	}
	return ret;
}


function Hex2Bin(str){
	var ret="";
	str=trimCRLF(trimspace(str));
	for (var i = 0; i < str.length; i += 2){
		ret += ("00000000" +parseInt(str.substr(i, 2), 16).toString(2)).slice( -8 );
		ret += " ";
	}
	return ret;
}
function Hex2Oct(str){
	var ret="";
	str=trimCRLF(trimspace(str));
	for (var i = 0; i < str.length; i += 2){
		ret += ("000" + parseInt(str.substr(i, 2), 16).toString(8) ).slice( -3 );
		ret += " ";
	}
	return ret;
}
function Hex2String(str){
	var ret="";
	str=trimCRLF(trimspace(str));
	for (var i = 0; i < str.length; i += 2){
		ret +=  String.fromCharCode(parseInt(str.substr(i, 2), 16).toString(10));
	}
	return ret;
}

function Hex2Atbash(str){
	var ret="";
	str=Hex2String(str);
	for (var i = 0; i < str.length; i += 2){
		ret +=  String.fromCharCode(parseInt(str.substr(i, 2), 16).toString(10));
	}
	return Atbash(ret);
}
function Atbash(text){
	var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	var tebahpla = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA9876543210";
	var str = "";
	for (k = 0; k < text.length; k++) {
		var coded_letter = text.charAt(k);
		var letter_index = alphabet.indexOf(coded_letter);
			str += tebahpla.charAt(letter_index);
		}
	return str;
}

function Atbash2(text){
	var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	var tebahpla = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA0987654321";
	var str = "";
	for (k = 0; k < text.length; k++) {
		var coded_letter = text.charAt(k);
		var letter_index = alphabet.indexOf(coded_letter);
			str += tebahpla.charAt(letter_index);
		}
	return str;
}

function atnum2(){
	var text=$( ".formtext"    ).val().trim();
	var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	var tebahpla = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA9876543210";
	var str = "";
	for (k = 0; k < text.length; k++) {
		var coded_letter = text.charAt(k);
		var letter_index = alphabet.indexOf(coded_letter);
			str += tebahpla.charAt(letter_index);
		}
	$( ".formatbash"    ).val(str);
}

function atnum1(){
	var text=$( ".formtext"    ).val().trim();
	var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	var tebahpla = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA0987654321";
	var str = "";
	for (k = 0; k < text.length; k++) {
		var coded_letter = text.charAt(k);
		var letter_index = alphabet.indexOf(coded_letter);
			str += tebahpla.charAt(letter_index);
		}
	$( ".formatbash"    ).val(str);
}

function Base32(str) {
	str=trimspace(str);
	var base32_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"
	var ret = new Array();
	var ret_len = 0;
	var i = 0;
	var binary = new Array();

	for (var i=0; i<str.length/2; i++) {
		var h = str.substr(i*2, 2);
		binary[i] = parseInt(h,16);
	}
	var unpadded_length = binary.length;

	while (binary.length % 5) {
		binary[binary.length] = 0;
	}
	for(i=0; i<binary.length; i+=5) {
		ret += base32_chars.charAt((binary[i] >> 3));
		ret += base32_chars.charAt(((binary[i] & 0x07) << 2) | ((binary[i+1] & 0xc0) >> 6));
		if (i+1 >= unpadded_length) {
			ret += "======";
			break;
		}
		ret += base32_chars.charAt(((binary[i+1] & 0x3e) >> 1));       
		ret += base32_chars.charAt(((binary[i+1] & 0x01) << 4) | ((binary[i+2] & 0xf0) >> 4));
		if (i+2 >= unpadded_length) {
			ret += "====";
			break;
		}
		ret += base32_chars.charAt(((binary[i+2] & 0x0f) << 1) | ((binary[i+3] & 0x80) >> 7));
		if (i+3 >= unpadded_length) {
			ret += "===";
			break;
		}
		ret += base32_chars.charAt(((binary[i+3] & 0x7c) >> 2));
		ret += base32_chars.charAt(((binary[i+3] & 0x03) << 3) | ((binary[i+4] & 0xe0) >> 5));
		if (i+4 >= unpadded_length) {
			ret += "=";
			break;
		}
		ret += base32_chars.charAt(((binary[i+4] & 0x1f)));
	}
	return ret;
}

function Base64(str) {
	return btoa(Hex2String(str));
}

function Base85(a) {
	a=Hex2String(a);
	var b, c, d, e, f, g, h, i, j, k;
	for (!/[^\x00-\xFF]/.test(a), b = "\x00\x00\x00\x00".slice(a.length % 4 || 4), a += b, c = [], d = 0, e = a.length; e > d; d += 4){
//		f = (a.charCodeAt(d) << 24) + (a.charCodeAt(d + 1) << 16) + (a.charCodeAt(d + 2) << 8) + a.charCodeAt(d + 3);
		f = (a.charCodeAt(d) * 16777216) + (a.charCodeAt(d + 1) * 65536) + (a.charCodeAt(d + 2) * 256) + a.charCodeAt(d + 3);
		0 !== f ? (k = f % 85, f = (f - k) / 85, j = f % 85, f = (f - j) / 85, i = f % 85, f = (f - i) / 85, h = f % 85, f = (f - h) / 85, g = f % 85, c.push(g + 33, h + 33, i + 33, j + 33, k + 33)) :c.push(122);
	}
	return function(a, b) {
		for (var c = b; c > 0; c--) a.pop();
	}(c, b.length), String.fromCharCode.apply(String, c) ;
}

function UUencode(str) {
  var startbit=Hex2String(str).length;
  var text=Base64(str);
  var tebahpla = ' !"#$%&'+"'"+'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_';
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  str = "";
  for (k = 0; k < text.length; k++) {
     var coded_letter = text.charAt(k);
     var letter_index = alphabet.indexOf(coded_letter);
         str += tebahpla.charAt(letter_index);
     }
  return String.fromCharCode(startbit + 32)+str;
}

function XXencode(str) {
  var startbit=Hex2String(str).length;
  var text=Base64(str);
  var tebahpla = "+-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  str = "";
  for (k = 0; k < text.length; k++) {
     var coded_letter = text.charAt(k);
     var letter_index = alphabet.indexOf(coded_letter);
         str += tebahpla.charAt(letter_index);
     }
  return tebahpla.charAt(startbit)+str;
}

function Base36(str) {
  str=trimspace(str);
  var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var ret="";
  for (var i = 0; i < str.length; i += 2){
    ret +=  alphabet.charAt( Math.floor(parseInt(str.substr(i, 2), 16).toString(10)/36 ) );
    ret +=  alphabet.charAt( (parseInt(str.substr(i, 2), 16).toString(10)) % 36);
  }
  return ret;
}

function Str2Morse(str) {
	var alphabet = {
		"a"	 : "01",		"b"	 : "1000",		"c"	 : "1010",		"d"	 : "100",
		"e"	 : "0",			"f"	 : "0010",		"g"	 : "110",		"h"	 : "0000",
		"i"	 : "00",		"j"	 : "0111",		"k"	 : "101",		"l"	 : "0100",
		"m"	 : "11",		"n"	 : "10",		"o"	 : "111",		"p"	 : "0110",
		"q"	 : "1101",		"r"	 : "010",		"s"	 : "000",		"t"	 : "1",
		"u"	 : "001",		"v"	 : "0001",		"w"	 : "011",		"x"	 : "1001",
		"y"	 : "1011",		"z"	 : "1100",		"0"	 : "11111",		"1"	 : "01111",
		"2"	 : "00111",		"3"	 : "00011",		"4"	 : "00001",		"5"	 : "00000",
		"6"	 : "10000",		"7"	 : "11000",		"8"	 : "11100",		"9"	 : "11110",
		"."	 : "010101",	","	 : "110011",	"?"	 : "001100",	"'"	 : "011110",
		"!"	 : "101011",	"-"	 : "100001",	"/"	 : "10010",		"@"	 : "011010",
		"("	 : "10110",		")"	 : "101101",	":"	 : "111000",	";"	 : "101010",
		"="	 : "10001",		"+"	 : "01010",		"&"	 : "01000",		"_"	 : "001101",
		'"'	 : "010010",	"$"	 : "0001001",	"イ" : "01",		"ロ" : "0101",
		"ハ" : "1000",		"ニ" : "1010",		"ホ" : "100",		"ヘ" : "0",
		"ト" : "00100",		"チ" : "0010",		"リ" : "110",		"ヌ" : "0000",
		"ル" : "10110",		"ヲ" : "0111",		"ワ" : "101",		"カ" : "0100",
		"ヨ" : "11",		"タ" : "10",		"レ" : "111",		"ソ" : "1110",
		"ツ" : "0110",		"ネ" : "1101",		"ナ" : "010",		"ラ" : "000",
		"ム" : "1",			"ウ" : "001",		"ヰ" : "01001",		"ノ" : "0011",
		"オ" : "01000",		"ク" : "0001",		"ヤ" : "011",		"マ" : "1001",
		"ケ" : "1011",		"フ" : "1100",		"コ" : "1111",		"エ" : "10111",
		"テ" : "01011",		"ア" : "11011",		"サ" : "10101",		"キ" : "10100",
		"ユ" : "10011",		"メ" : "10001",		"ミ" : "00101",		"シ" : "11010",
		"ヱ" : "01100",		"ヒ" : "11001",		"モ" : "10010",		"セ" : "01110",
		"ス" : "11101",		"ン" : "01010",		"い" : "01",		"ろ" : "0101",
		"は" : "1000",		"に" : "1010",		"ほ" : "100",		"へ" : "0",
		"と" : "00100",		"ち" : "0010",		"り" : "110",		"ぬ" : "0000",
		"る" : "10110",		"を" : "0111",		"わ" : "101",		"か" : "0100",
		"よ" : "11",		"た" : "10",		"れ" : "111",		"そ" : "1110",
		"つ" : "0110",		"ね" : "1101",		"な" : "010",		"ら" : "000",
		"む" : "1",			"う" : "001",		"ゐ" : "01001",		"の" : "0011",
		"お" : "01000",		"く" : "0001",		"や" : "011",		"ま" : "1001",
		"け" : "1011",		"ふ" : "1100",		"こ" : "1111",		"え" : "10111",
		"て" : "01011",		"あ" : "11011",		"さ" : "10101",		"き" : "10100",
		"ゆ" : "10011",		"め" : "10001",		"み" : "00101",		"し" : "11010",
		"ゑ" : "01100",		"ひ" : "11001",		"も" : "10010",		"せ" : "01110",
		"す" : "11101",		"ん" : "01010",		"゛" : "00",		"゜" : "00110",
		"ー" : "01101",		"、" : "010101",	"」" : "010100",	"（" : "101101",
		"）" : "010010",	"１" : "01111",		"２" : "00111",		"３" : "00011",
		"４" : "00001",		"５" : "00000",		"６" : "10000",		"７" : "11000",
		"８" : "11100",		"９" : "11110",		"０" : "11111",
		"一" : "01111",		"二" : "00111",		"三" : "00011",		"四" : "00001",
		"五" : "00000",		"六" : "10000",		"七" : "11000",		"八" : "11100",
		"九" : "11110",		"零" : "11111",
		"ａ" : "01",		"ｂ" : "1000",		"ｃ" : "1010",		"ｄ" : "100",
		"ｅ" : "0",			"ｆ" : "0010",		"ｇ" : "110",		"ｈ" : "0000",
		"ｉ" : "00",		"ｊ" : "0111",		"ｋ" : "101",		"ｌ" : "0100",
		"ｍ" : "11",		"ｎ" : "10",		"ｏ" : "111",		"ｐ" : "0110",
		"ｑ" : "1101",		"ｒ" : "010",		"ｓ" : "000",		"ｔ" : "1",
		"ｕ" : "001",		"ｖ" : "0001",		"ｗ" : "011",		"ｘ" : "1001",
		"ｙ" : "1011",		"ｚ" : "1100",		"Ａ" : "01",		"Ｂ" : "1000",
		"Ｃ" : "1010",		"Ｄ" : "100",		"Ｅ" : "0",			"Ｆ" : "0010",
		"Ｇ" : "110",		"Ｈ" : "0000",		"Ｉ" : "00",		"Ｊ" : "0111",
		"Ｋ" : "101",		"Ｌ" : "0100",		"Ｍ" : "11",		"Ｎ" : "10",
		"Ｏ" : "111",		"Ｐ" : "0110",		"Ｑ" : "1101",		"Ｒ" : "010",
		"Ｓ" : "000",		"Ｔ" : "1",			"Ｕ" : "001",		"Ｖ" : "0001",
		"Ｗ" : "011",		"Ｘ" : "1001",		"Ｙ" : "1011",		"Ｚ" : "1100",
		"．" : "010101",	"，" : "110011",	"？" : "001100",	"’" : "011110",
		"！" : "101011",	"－" : "100001",	"／" : "10010",		"＠" : "011010",
		"：" : "111000",	"；" : "101010",
		"＝" : "10001",		"＋" : "01010",		"＆" : "01000",		"＿" : "001101",
		'”' : "010010",	"＄" : "0001001",
	};
	return str.split('').map(function(e){ return alphabet[e.toLowerCase()] || '';}).join(' '); 
}


function Morse2Str(str) {
	var alphabet = {
		"01"	: "a",	"1000"	: "b",	"1010"	: "c",
		"100"	: "d",	"0" 	: "e",	"0010"	: "f",
		"110"	: "g",	"0000"	: "h",	"00"	: "i",
		"0111"	: "j",	"101"	: "k",	"0100"	: "l",
		"11"	: "m",	"10"	: "n",	"111"	: "o",
		"0110"	: "p",	"1101"	: "q",	"010"	: "r",
		"000"	: "s",	"1" 	: "t",	"001"	: "u",
		"0001"	: "v",	"011"	: "w",	"1001"	: "x",
		"1011"	: "y",	"1100"	: "z",	"11111"	: "0",
		"01111"	: "1",	"00111"	: "2",	"00011"	: "3",
		"00001"	: "4",	"00000"	: "5",	"10000"	: "6",
		"11000"	: "7",	"11100"	: "8",	"11110"	: "9",
		'010101': '0',	'110011': ',',	'001100': '?',
		'100001': '1',	'10001'	: '=',	'111000': ':',
		'101010': ';',	'10110'	: '(',	'101101': ')',
		'10010'	: '/',	'010010': '"',	'0001001': '$',
		'011110': "'",	'010100': '¶',	'001101': '_',
		'011010': '@',	'1110'	: '!',	'101011': '!',
		'01010'	: '+',	'01000'	: '~',	'000101': '#',
		'01000'	: '&',	'10010'	: '⁄',

		".-"	: "A",	"-..."	: "B",	"-.-."	: "C",
		"-.."	: "D",	"." 	: "E",	"..-."	: "F",
		"--."	: "G",	"...."	: "H",	".."	: "I",
		".---"	: "J",	"-.-"	: "K",	".-.."	: "L",
		"--"	: "M",	"-."	: "N",	"---"	: "O",
		".--."	: "P",	"--.-"	: "Q",	".-."	: "R",
		"..."	: "S",	"-" 	: "T",	"..-"	: "U",
		"...-"	: "V",	".--"	: "W",	"-..-"	: "X",
		"-.--"	: "Y",	"--.."	: "Z",	"-----"	: "0",
		".----"	: "1",	"..---"	: "2",	"...--"	: "3",
		"....-"	: "4",	"....."	: "5",	"-...."	: "6",
		"--..."	: "7",	"---.."	: "8",	"----."	: "9",
		'.-.-.-': '.',	'--..--': ',',	'..--..': '?',
		'-....-': '-',	'-...-'	: '=',	'---...': ':',
		'-.-.-.': ';',	'-.--.'	: '(',	'-.--.-': ')',
		'-..-.'	: '/',	'.-..-.': '"',	'...-..-': '$',
		'.----.': "'",	'.-.-..': '¶',	'..--.-': '_',
		'.--.-.': '@',	'---.'	: '!',	'-.-.--': '!',
		'.-.-.'	: '+',	'.-...'	: '~',	'...-.-': '#',
		'.-...'	: '&',	'-..-.'	: '⁄',

		">_"	: "a",	"_>>>"	: "b",	"_>_>"	: "c",
		"_>>"	: "d",	">" 	: "e",	">>_>"	: "f",
		"__>"	: "g",	">>>>"	: "h",	">>"	: "i",
		">___"	: "j",	"_>_"	: "k",	">_>>"	: "l",
		"__"	: "m",	"_>"	: "n",	"___"	: "o",
		">__>"	: "p",	"__>_"	: "q",	">_>"	: "r",
		">>>"	: "s",	"_" 	: "t",	">>_"	: "u",
		">>>_"	: "v",	">__"	: "w",	"_>>_"	: "x",
		"_>__"	: "y",	"__>>"	: "z",	"_____"	: "0",
		">____"	: "1",	">>___"	: "2",	">>>__"	: "3",
		">>>>_"	: "4",	">>>>>"	: "5",	"_>>>>"	: "6",
		"__>>>"	: "7",	"___>>"	: "8",	"____>"	: "9",
		'>_>_>_': '>',	'__>>__': ',',	'>>__>>': '?',
		'_>>>>_': '_',	'_>>>_'	: '=',	'___>>>': ':',
		'_>_>_>': ';',	'_>__>'	: '(',	'_>__>_': ')',
		'_>>_>'	: '/',	'>_>>_>': '"',	'>>>_>>_': '$',
		'>____>': "'",	'>_>_>>': '¶',	'>>__>_': '_',
		'>__>_>': '@',	'___>'	: '!',	'_>_>__': '!',
		'>_>_>'	: '+',	'>_>>>'	: '~',	'>>>_>_': '#',
		'>_>>>'	: '&',	'_>>_>'	: '⁄',

	};
	return str.replace(/[2-9a-zA-Z=]/g," ").split(' ').map(function(e){ return alphabet[e.toLowerCase()] || '';}).join(''); 
}

function sevendigit(text){
	var alphabet = {
		"1111110"   :   "0",
		"0110000"   :   "1",
		"1101101"   :   "2",
		"1111001"   :   "3",
		"0110011"   :   "4",
		"1011011"   :   "5",
		"1011111"   :   "6",
		"1110000"   :   "7",
		"1111111"   :   "8",
		"1111011"   :   "9",
		"1110111"   :   "a",
		"0011111"   :   "b",
		"1001110"   :   "c",
		"0111101"   :   "d",
		"1001111"   :   "e",
		"1000111"   :   "f"
	};
	var result="";
	for (var i=0; i< text.length; i+=7){
		result += alphabet[text.substr(i, 7)] || '';
	}
	return result;
}

function baconian(text){
	var result="";
	for (var i=0; i< text.length; i+=5){
		result += String.fromCharCode(65 + parseInt(text.substr(i, 5),2)) || ' ';
	}
	return result;
}

function OddEven(str){
	var a="",b="",c=0;
	var modal="";
	while(c<str.length){
		a+=str.charAt(c++);
		b+=str.charAt(c++);
	}
	return a+b;
}



function baudot2(str){
  var result="";
  var let ={
    "00000" : "",   "00100" : " ",  "10111" : "q",  "10011" : "w",  "00001" : "e",
    "01010" : "r",  "10000" : "t",  "10101" : "y",  "00111" : "u",  "00110" : "i",
    "11000" : "o",  "10110" : "p",  "00011" : "a",  "00101" : "s",  "01001" : "d",
    "01101" : "f",  "11010" : "g",  "10100" : "h",  "01011" : "j",  "01111" : "k",
    "10010" : "l",  "10001" : "z",  "11101" : "x",  "01110" : "c",  "11110" : "v",
    "11001" : "b",  "01100" : "n",  "11100" : "m",  "01000" : "\n", "00010" : "\r"
  };

  var fig ={
    "10111" : "1",  "10011" : "2",  "00001" : "3",  "01010" : "4",  "10000" : "5",
    "10101" : "6",  "00111" : "7",  "00110" : "8",  "11000" : "9",  "10110" : "0",
    "00011" : "-",  "01101" : "!",  "11010" : "&",  "10100" : "#",  "01011" : "'",
    "01111" : "(",  "10010" : ")",  "10001" : "\"", "11101" : "/",  "01110" : ":",
    "11110" : ";",  "11001" : "?",  "01100" : ",",  "11100" : "."           
  };

  var tables = {
    'figure': fig,  'letter': let,
  };
  var c="";
  var mode="letter";
  for (var i=0; i< str.length; i+=5){
    c=str.substr(i, 5);
    if(c==='11011'){
       mode="figure";
    }else if(c==='11111'){
       mode="letter";
    }else{
       result += tables[mode][c] || '';
    }
  }
  return result;
}

function ibm80(text){
	var result="";
	var alphabet = {
		"100000000000"   :   "&",
		"010000000000"   :   "-",
		"001000000000"   :   "0",
		"000100000000"   :   "1",
		"000010000000"   :   "2",
		"000001000000"   :   "3",
		"000000100000"   :   "4",
		"000000010000"   :   "5",
		"000000001000"   :   "6",
		"000000000100"   :   "7",
		"000000000010"   :   "8",
		"000000000001"   :   "9",
		"100100000000"   :   "A",
		"100010000000"   :   "B",
		"100001000000"   :   "C",
		"100000100000"   :   "D",
		"100000010000"   :   "E",
		"100000001000"   :   "F",
		"100000000100"   :   "G",
		"100000000010"   :   "H",
		"100000000001"   :   "I",
		"010100000000"   :   "J",
		"010010000000"   :   "K",
		"010001000000"   :   "L",
		"010000100000"   :   "M",
		"010000010000"   :   "N",
		"010000001000"   :   "O",
		"010000000100"   :   "P",
		"010000000010"   :   "Q",
		"010000000001"   :   "R",
		"001100000000"   :   "/",
		"001010000000"   :   "S",
		"001001000000"   :   "T",
		"001000100000"   :   "U",
		"001000010000"   :   "V",
		"001000001000"   :   "W",
		"001000000100"   :   "X",
		"001000000010"   :   "Y",
		"001000000001"   :   "Z"
	};
	for (var i=0; i< text.length; i+=12){
		result += alphabet[text.substr(i, 12)] || '';
	}
	return result;

}
function code128(text){
	var result="";
	var alphabet = {
		"11011001100"   :   "[SP]",
		"11001101100"   :   " !",
		"11001100110"   :   '"',
		"10010011000"   :   "#",
		"10010001100"   :   "$",
		"10001001100"   :   " %",
		"10011001000"   :   "&",
		"10011000100"   :   "'",
		"10001100100"   :   "(",
		"11001001000"   :   ")",
		"11001000100"   :   "*",
		"11000100100"   :   "+",
		"10110011100"   :   ",",
		"10011011100"   :   "-",
		"10011001110"   :   ".",
		"10111001100"   :   "/",
		"10011101100"   :   "0",
		"10011100110"   :   "1",
		"11001110010"   :   "2",
		"11001011100"   :   "3",
		"11001001110"   :   "4",
		"11011100100"   :   "5",
		"11001110100"   :   "6",
		"11101101110"   :   "7",
		"11101001100"   :   "8",
		"11100101100"   :   "9",
		"11100100110"   :   ":",
		"11101100100"   :   ";",
		"11100110100"   :   "<",
		"11100110010"   :   "=",
		"11011011000"   :   ">",
		"11011000110"   :   " ?",
		"11000110110"   :   "@",
		"10100011000"   :   "A",
		"10001011000"   :   "B",
		"10001000110"   :   "C",
		"10110001000"   :   "D",
		"10001101000"   :   "E",
		"10001100010"   :   "F",
		"11010001000"   :   "G",
		"11000101000"   :   "H",
		"11000100010"   :   "I",
		"10110111000"   :   "J",
		"10110001110"   :   "K",
		"10001101110"   :   "L",
		"10111011000"   :   "M",
		"10111000110"   :   "N",
		"10001110110"   :   "O",
		"11101110110"   :   "P",
		"11010001110"   :   "Q",
		"11000101110"   :   "R",
		"11011101000"   :   "S",
		"11011100010"   :   "T",
		"11011101110"   :   "U",
		"11101011000"   :   "V",
		"11101000110"   :   "W",
		"11100010110"   :   "X",
		"11101101000"   :   "Y",
		"11101100010"   :   "Z",
		"11100011010"   :   "[",
		"11101111010"   :   '\\',
		"11001000010"   :   "]",
		"11110001010"   :   "^",
		"10100110000"   :   "_",
		"10100001100"   :   "`",
		"10010110000"   :   "a",
		"10010000110"   :   "b",
		"10000101100"   :   "c",
		"10000100110"   :   "d",
		"10110010000"   :   "e",
		"10110000100"   :   "f",
		"10011010000"   :   "g",
		"10011000010"   :   "h",
		"10000110100"   :   "i",
		"10000110010"   :   "j",
		"11000010010"   :   "k",
		"11001010000"   :   "l",
		"11110111010"   :   "m",
		"11000010100"   :   "n",
		"10001111010"   :   "o",
		"10100111100"   :   "p",
		"10010111100"   :   "q",
		"10010011110"   :   "r",
		"10111100100"   :   "s",
		"10011110100"   :   "t",
		"10011110010"   :   "u",
		"11110100100"   :   "v",
		"11110010100"   :   "w",
		"11110010010"   :   "x",
		"11011011110"   :   "y",
		"11011110110"   :   "z",
		"11110110110"   :   "{",
		"10101111000"   :   "|",
		"10100011110"   :   "}",
		"10001011110"   :   "~",
		"10111101000"   :   "[US]",
		"10111100010"   :   "[FNC3]",
		"11110101000"   :   "[FNC2]",
		"11110100010"   :   "[ShiftB]",
		"10111011110"   :   "[CodeC]",
		"10111101110"   :   "[CodeB]",
		"11101011110"   :   "[FNC4]",
		"11110101110"   :   "[FNC1]",
		"11010000100"   :   "[Start Code A]",
		"11010010000"   :   "[Start Code B]",
		"11010011100"   :   "[Start Code C]",
		"1100011101011"   :   "[Stop (7 bars/spaces)]",
		"11010111000"   :   "[reading right to left]"

	};
	for (var i=0; i< text.length; i+=11){
		result += alphabet[text.substr(i, 11)] || '';
		if (text.substr(i, 11) == "11000111010"){
			result += alphabet[text.substr(i, 13)] || '';
			i+=2;
		}
	}
	return result;

}


function sixteendigit(text){
	var result="";
	var alphabet = {
		"1111111100001001" : '0',	"0011000000001000" : '1',	"1110111011000000" : '2',	"1111110001000000" : '3',
		"0011000111000000" : '4',	"1101110111000000" : '5',	"1101111111000000" : '6',	"1111000000000000" : '7',
		"1111111111000000" : '8',	"1111000111000000" : '9',	"1111001111000000" : 'A',	"1111110001010010" : 'B',
		"1100111100000000" : 'C',	"1111110000010010" : 'D',	"1100111111000000" : 'E',	"1100001110000000" : 'F',
		"1101111101000000" : 'G',	"0011001111000000" : 'H',	"1100110000010010" : 'I',	"0011111000000000" : 'J',
		"0000001110001100" : 'K',	"0000111100000000" : 'L',	"0011001100101000" : 'M',	"0011001100100100" : 'N',
		"1111111100000000" : 'O',	"1110001111000000" : 'P',	"1111111100000100" : 'Q',	"1110001111000100" : 'R',
		"1101110111000000" : 'S',	"1100000000010010" : 'T',	"0011111100000000" : 'U',	"0000001100001001" : 'V',
		"0011001100000101" : 'W',	"0000000000101101" : 'X',	"0010000111000010" : 'Y',	"1100110000001001" : 'Z',
		"0000000011000000" : '-',	"1110000001000010" : '?',	"0000000011010010" : '+',	"0000000011111111" : '*'
	};
	for (var i=0; i< text.length; i+=16){
		result += alphabet[text.substr(i, 16)] || '';
	}
	return result;

}

function code93(text){
	var result="";
	var alphabet = {
		"100010100"   :   "0",	"101001000"   :   "1",	"101000100"   :   "2",
		"101000010"   :   "3",	"100101000"   :   "4",	"100100100"   :   "5",
		"100100010"   :   "6",	"101010000"   :   "7",	"100010010"   :   "8",
		"100001010"   :   "9",	"110101000"   :   "A",	"110100100"   :   "B",
		"110100010"   :   "C",	"110010100"   :   "D",	"110010010"   :   "E",
		"110001010"   :   "F",	"101101000"   :   "G",	"101100100"   :   "H",
		"101100010"   :   "I",	"100110100"   :   "J",	"100011010"   :   "K",
		"101011000"   :   "L",	"101001100"   :   "M",	"101000110"   :   "N",
		"100101100"   :   "O",	"100010110"   :   "P",	"110110100"   :   "Q",
		"110110010"   :   "R",	"110101100"   :   "S",	"110100110"   :   "T",
		"110010110"   :   "U",	"110011010"   :   "V",	"101101100"   :   "W",
		"101100110"   :   "X",	"100110110"   :   "Y",	"100111010"   :   "Z",
		"100101110"   :   "-",	"111010100"   :   ".",	"111010010"   :   "[SP]",
		"111001010"   :   "$",	"101101110"   :   "/",	"101110110"   :   "+",
		"110101110"   :   " %",	"100100110"   :   "($)",	"111011010"   :   "(%)",
		"111010110"   :   "(/)",	"100110010"   :   "(+)",	"101011110"   :   "Start/Stop",
		"101111010"   :   "(Reverse stop)",
	};
	for (var i=0; i< text.length; i+=9){
		result += alphabet[text.substr(i, 9)] || '';
	}
	return result;
}
function code2braille(text){
  var brailleMap = {
    "000000"    :" "  ,    "011011"    :"!"  ,    "000100"    :'"'  ,    "010111"    :"#"  ,
    "111001"    :"$"  ,    "110001"    :"%"  ,    "111011"    :"&"  ,    "000010"    :"'"  ,
    "101111"    :"("  ,    "011111"    :")"  ,    "100001"    :"*"  ,    "010011"    :"+"  ,
    "000001"    :","  ,    "000011"    :"-"  ,    "010001"    :"."  ,    "010010"    :"/"  ,
    "000111"    :"0"  ,    "001000"    :"1"  ,    "001010"    :"2"  ,    "001100"    :"3"  ,
    "001101"    :"4"  ,    "001001"    :"5"  ,    "001110"    :"6"  ,    "001111"    :"7"  ,
    "001011"    :"8"  ,    "000110"    :"9"  ,    "100101"    :":"  ,    "000101"    :";"  ,
    "101001"    :"<"  ,    "111111"    :"="  ,    "010110"    :">"  ,    "110101"    :"?"  ,
    "010000"    :"@"  ,    "100000"    :"a"  ,    "101000"    :"b"  ,    "110000"    :"c"  ,
    "110100"    :"d"  ,    "100100"    :"e"  ,    "111000"    :"f"  ,    "111100"    :"g"  ,
    "101100"    :"h"  ,    "011000"    :"i"  ,    "011100"    :"j"  ,    "100010"    :"k"  ,
    "101010"    :"l"  ,    "110010"    :"m"  ,    "110110"    :"n"  ,    "100110"    :"o"  ,
    "111010"    :"p"  ,    "111110"    :"q"  ,    "101110"    :"r"  ,    "011010"    :"s"  ,
    "011110"    :"t"  ,    "100011"    :"u"  ,    "101011"    :"v"  ,    "011101"    :"w"  ,
    "110011"    :"x"  ,    "110111"    :"y"  ,    "100111"    :"z"  ,    "011001"    :'['  ,
    "101101"    :'\\' ,    "111101"    :']'  ,    "010100"    :"^"  ,    "010101"    :"_"  
  };
  var result="";
  for (var i=0; i< text.length; i+=6){
    result += brailleMap[text.substr(i, 6)] || '';
  }
  return result;
}


function baudot1(str){
	let f = s=>s.replace(/.{5}/g,s=>(n='0b'+s-1)<2?m-n?(m^=1,''):' ':"? !YSBREXGMIWFNA-JKUTCQ/ZHLOVDP? ?!3 8-2 7) ?  1.6(4 9/ : =5'0+"[n+m*32],m=0).replace(/.!/g,'');
	return f(str);
}

function Rle2Bin(str){
	var result="";
	var c="0";
	for(var i=0;i<str.length;i++){
		result +=Array(parseInt(str.charAt(i),16)+1).join(c);
		c = (c == "0" ) ? "1":"0";
	}
	return result;
}

function Bin2RLE(str){
	var result="";
	var c="";
	var j=0;
	var i=1;
	if(str.length >1){
		c=str.charAt(0);
		while(i<str.length){
			if(str.charAt(i)==c){
				j++;
			}else{
				result += (j+1).toString(16);
				c=str.charAt(i);
				j=0;
			}
			i++;
		}
		result += (j+1).toString(16);
	}
	return result;
}


function tel1(str){
	var telephoneMap = {
		"2" : "a" , "22" : "b" , "222" : 'c' ,
		"3" : "d" , "33" : "e" , "333" : "f" ,
		"4" : "g" , "44" : "h" , "444" : "i" ,
		"5" : "j" , "55" : "k" , "555" : "l" ,
		"6" : "m" , "66" : "n" , "666" : "o" ,
		"7" : "p" , "77" : "q" , "777" : "r" , "7777" : "s" ,
		"8" : "t" , "88" : "u" , "888" : "v" ,
		"9" : "w" , "99" : "x" , "999" : "y" , "9999" : "x" ,
	};
	var decoded_text="";
	str=trimspace(str);
	var i=0;
	var c="";
	var s="";
	while( i<= str.length){
		if( c.length <1 ){
			c = str.charAt(i);
			s = str.charAt(i);
		}else{
			if(s == str.charAt(i) ){
				c += s;
			}else{
				decoded_text += telephoneMap[c] || '';
				c = str.charAt(i);
				s = str.charAt(i);
			}
		}
		i++;
	}
	return decoded_text;
}
function tel2(str){
	var telephoneMap = {
		"21" : "a" , "22" : "b" , "23" : 'c' ,
		"31" : "d" , "32" : "e" , "33" : "f" ,
		"41" : "g" , "42" : "h" , "43" : "i" ,
		"51" : "j" , "52" : "k" , "53" : "l" ,
		"61" : "m" , "62" : "n" , "63" : "o" ,
		"71" : "p" , "72" : "q" , "73" : "r" , "74" : "s" ,
		"81" : "t" , "82" : "u" , "83" : "v" ,
		"91" : "w" , "92" : "x" , "93" : "y" , "94" : "x" ,
	};
	var decoded_text="";
	str=trimspace(str);
	for (var i=0; i<= str.length; i+=2){
		decoded_text += telephoneMap[str.substr(i, 2)] || '';
	}
	return decoded_text;
}

function Skip_Decode(t, sk, st){
   var i, pos, o = "";
   for (i = 0, pos = st; i < t.length; i ++){
      o += t.charAt(pos);
      pos += sk;
      pos = pos % t.length;
   }
   return o;
}



var escapeHTML = function(unsafe) {
  return unsafe.replace(/[&<"']/g, function(m) {
    switch (m) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '"':
        return '&quot;';
      default:
        return '&#039;';
    }
  });
};

function checkprint(name,str){
//function NumericChange(str){
	var res1="";
	var res2="";

	str=str.toLowerCase();
  if($( ".TypeO").prop( "checked" ) ){
	if( code  = str.match(numbercheckold1) ){
		if($.inArray(code[4], KeyMap) >= 0){
			res1 += "Old Passcode: " + numeric[code[1]]+code[2]+numeric[code[3]]+'<font color="red">'+code[4]+'</font>'+code[5]+numeric[code[6]]+code[7]+numeric[code[8]]+code[9];
		}else{
			res2 += "Old Passcode: " + numeric[code[1]]+code[2]+numeric[code[3]]+'<font color="green">'+code[4]+'</font>'+code[5]+numeric[code[6]]+code[7]+numeric[code[8]]+code[9];
		}
	}else if( code  = str.match(numbercheckold2) ){
		if($.inArray(code[4], KeyMap) >= 0){
			res1 += "Old Passcode: " + numeric[code[1]]+code[2]+numeric[code[3]]+'<font color="red">'+code[4]+'</font>'+code[5]+numeric[code[6]]+code[7]+numeric[code[8]]+code[9];
		}else{
			res2 += "Old Passcode: " + numeric[code[1]]+code[2]+numeric[code[3]]+'<font color="green">'+code[4]+'</font>'+code[5]+numeric[code[6]]+code[7]+numeric[code[8]]+code[9];
		}
	}
  }


  if($( ".TypeE").prop( "checked" ) ){
	if( code  = str.match(numberchecknot1) ){
		if($.inArray(code[1], KeyMap) >= 0){
			res1 += "Not FR Passcode: " +'<font color="red">'+code[1]+'</font>'+  numeric[code[2]]+code[3]+numeric[code[4]]+numeric[code[5]]+code[6]+numeric[code[7]];
		}else{
			res2 += "Not FR Passcode: " +'<font color="green">'+code[1]+'</font>'+  numeric[code[2]]+code[3]+numeric[code[4]]+numeric[code[5]]+code[6]+numeric[code[7]];
		}
	}else if( code  = str.match(numbercheckold2) ){
		if($.inArray(code[1], KeyMap) >= 0){
			res1 += "Not FR Passcode: " +'<font color="red">'+code[1]+'</font>'+  numeric[code[2]]+code[3]+numeric[code[4]]+numeric[code[5]]+code[6]+numeric[code[7]];
		}else{
			res2 += "Not FR Passcode: " +'<font color="green">'+code[1]+'</font>'+  numeric[code[2]]+code[3]+numeric[code[4]]+numeric[code[5]]+code[6]+numeric[code[7]];
		}
	}
  }


  if($( ".TypeSet2").prop( "checked" ) ){
	var setflag=0;
	var checkstr="";
	if( code  = str.match(numbercheckinv3) ){
		if($.inArray(code[4], KeyMap) >= 0){
			checkstr += "2 Set Passcode: " + code[1]+numeric[code[2]]+numeric[code[3]]+'<font color="red">'+code[4]+'</font>'+numeric[code[5]]+numeric[code[6]]+numeric[code[7]]+code[8];
			setflag ++;
		}else{
			checkstr += "2 Set Passcode: " + code[1]+numeric[code[2]]+numeric[code[3]]+'<font color="green">'+code[4]+'</font>'+numeric[code[5]]+numeric[code[6]]+numeric[code[7]]+code[8];
		}
		if($.inArray(code[12], KeyMap) >= 0){
			checkstr +=  code[9]+numeric[code[10]]+numeric[code[11]]+'<font color="red">'+code[12]+'</font>'+numeric[code[13]]+numeric[code[14]]+numeric[code[15]]+code[16];
			setflag ++;
		}else{
			checkstr +=  code[9]+numeric[code[10]]+numeric[code[11]]+'<font color="green">'+code[12]+'</font>'+numeric[code[13]]+numeric[code[14]]+numeric[code[15]]+code[16];
		}
		if(setflag ==2){
			res1 +=checkstr+"<br>";
		}else{
			res2 +=checkstr+"<br>";
		}
	}
  }

  if($( ".TypeSet3").prop( "checked" ) ){
	var setflag=0;
	var checkstr="";

	if( code  = str.match(numbercheckinv4) ){
		if($.inArray(code[4], KeyMap) >= 0){
			checkstr += "3 Set Passcode: " + code[1]+numeric[code[2]]+numeric[code[3]]+'<font color="red">'+code[4]+'</font>'+numeric[code[5]]+numeric[code[6]]+numeric[code[7]]+code[8];
			setflag++;
		}else{
			checkstr += "3 Set Passcode: " + code[1]+numeric[code[2]]+numeric[code[3]]+'<font color="green">'+code[4]+'</font>'+numeric[code[5]]+numeric[code[6]]+numeric[code[7]]+code[8];
		}

		if($.inArray(code[12], KeyMap) >= 0){
			checkstr += ' : '+ code[9]+numeric[code[10]]+numeric[code[11]]+'<font color="red">'+code[12]+'</font>'+numeric[code[13]]+numeric[code[14]]+numeric[code[15]]+code[16];
			setflag++;
		}else{
			checkstr += ' : '+ code[9]+numeric[code[10]]+numeric[code[11]]+'<font color="green">'+code[12]+'</font>'+numeric[code[13]]+numeric[code[14]]+numeric[code[15]]+code[16];
		}

		if($.inArray(code[20], KeyMap) >= 0){
			checkstr += ' : '+ code[17]+numeric[code[18]]+numeric[code[19]]+'<font color="red">'+code[20]+'</font>'+numeric[code[21]]+numeric[code[22]]+numeric[code[23]]+code[24];
			setflag++;
		}else{
			checkstr += ' : '+ code[17]+numeric[code[18]]+numeric[code[19]]+'<font color="green">'+code[20]+'</font>'+numeric[code[21]]+numeric[code[22]]+numeric[code[23]]+code[24];
		}

		if(setflag ==3){
			res1 +=checkstr+"<br>";
		}else{
			res2 +=checkstr+"<br>";
		}
	}
  }

  if($( ".TypeN").prop( "checked" ) ){
	if( code  = str.match(numbercheckinv1) ){
		if($.inArray(code[4], KeyMap) >= 0){
			res1 += "Investigate Passcode: " + code[1]+numeric[code[2]]+numeric[code[3]]+'<font color="red">'+code[4]+'</font>'+numeric[code[5]]+numeric[code[6]]+numeric[code[7]]+code[8];
		}else{
			res2 += "Investigate Passcode: " +code[1]+numeric[code[2]]+numeric[code[3]]+'<font color="green">'+code[4]+'</font>'+numeric[code[5]]+numeric[code[6]]+numeric[code[7]]+code[8];
		}
	}else if( code  = str.match(numbercheckinv2) ){
		if($.inArray(code[4], KeyMap) >= 0){
			res1 += "Investigate Passcode: " +code[1]+numeric[code[2]]+numeric[code[3]]+'<font color="red">'+code[4]+'</font>'+numeric[code[5]]+numeric[code[6]]+numeric[code[7]]+code[8];
		}else{
			res2 += "Investigate Passcode: " +code[1]+numeric[code[2]]+numeric[code[3]]+'<font color="green">'+code[4]+'</font>'+numeric[code[5]]+numeric[code[6]]+numeric[code[7]]+code[8];
		}
	}
  }
  if($( ".TypeJ").prop( "checked" ) ){
	if( code  = str.match(numbercheckjoj1) ){
		if($.inArray(code[5], KeyMapJoJo) >= 0){
			res1 += "JoJo Passcode: " + code[1]+numeric[code[2]]+code[3]+numeric[code[4]]+'<font color="red">'+code[5]+'</font>'+code[6]+numeric[code[7]]+code[8];
		}else{
			res2 += "JoJo Passcode: " + code[1]+numeric[code[2]]+code[3]+numeric[code[4]]+'<font color="green">'+code[5]+'</font>'+code[6]+numeric[code[7]]+code[8];
		}
	}else if( code  = str.match(numbercheckjoj2) ){
		if($.inArray(code[5], KeyMapJoJo) >= 0){
			res1 += "JoJo Passcode: " + code[1]+numeric[code[2]]+code[3]+numeric[code[4]]+'<font color="red">'+code[5]+'</font>'+code[6]+numeric[code[7]]+code[8];
		}else{
			res2 += "JoJo Passcode: " + code[1]+numeric[code[2]]+code[3]+numeric[code[4]]+'<font color="green">'+code[5]+'</font>'+code[6]+numeric[code[7]]+code[8];
		}
	}
  }
  if($( ".TypeA").prop( "checked" ) ){
	if( code  = str.match(numbercheckano1) ){
		if($.inArray(code[3], KeyMap) >= 0){
			res1 += "Anomary Passcode: " + code[1]+numeric[code[2]]+'<font color="red">'+code[3]+'</font>'+numeric[code[4]];
		}else{
			res2 += "Anomary Passcode: " + code[1]+numeric[code[2]]+'<font color="green">'+code[3]+'</font>'+numeric[code[4]];
		}
	}else if( code  = str.match(numbercheckano2) ){
		if($.inArray(code[3], KeyMap) >= 0){
			res1 += "Anomary Passcode: " + code[1]+numeric[code[2]]+'<font color="red">'+code[3]+'</font>'+numeric[code[4]];
		}else{
			res2 += "Anomary Passcode: " + code[1]+numeric[code[2]]+'<font color="green">'+code[3]+'</font>'+numeric[code[4]];
		}
	}
  }
	if(res1.length >1 ){
		$('<li>'+name+'--  '+res1+'</li>').appendTo($( ".result" ));
	}
	if(res2.length >1 ){
		$('<li>'+name+'--  '+res2+'</li>').appendTo($( ".result2" ));
	}
//	return res;
}


function UpdateModal(str){
	RenderRectangle(Hex2String(str).trim());
	RenderTriangle(Hex2String(str).trim());
	$("#vige").html('<a data-toggle="modal" href="#vigenere">vigenere</a>');
	$("#vigenereword").html("original : " + Hex2String(str));
	$("#rotate").html('<a data-toggle="modal" href="#rot">rotate</a>');
	$("#rotateword").html("original : " + Hex2String(str));
	$("#rotres").html(Rot( Hex2String(str) ));
	$("#rail").html('<a data-toggle="modal" href="#rails">Railfence</a>');
	$("#railword").html("original : " + Hex2String(str));
	$("#Railfences").html(Railfences( Hex2String(str) ));

	$("#tel1").html('<a data-toggle="modal" href="#tel1m">TelPad</a>');
	$("#tel1word").html("original : " + Hex2String(str));
	$("#tel1pad").html(tel1( Hex2String(str) ));
	$("#tel2word").html("original : " + Hex2String(str));
	$("#tel2pad").html(tel2( Hex2String(str) ));

	$("#ski").html('<a data-toggle="modal" href="#skip">skip</a>');
	$("#skipresult").html(skipresult( Hex2String(str) ));

	$("#manipulate").html('<a data-toggle="modal" href="#Manipulater">Manipulate</a>');
	$("#ManipulateText").html(Hex2String(str));
	$("#ManipulateResult").html(Hex2String(str));

	$("#keyb").html('<a data-toggle="modal" href="#keyboard">keyboard</a>');
	$("#keyboardText").html("original : " + Hex2String(str));
	$("#keyboardResult").html(Keyboard(Hex2String(str)));

	$("#atom").html('<a data-toggle="modal" href="#atomic">atomic</a>');
	$("#atomicText").html("original : " + Hex2String(str));
	$("#atomicResult1").html("result 1 :"+encipherAtomicNumbers(Hex2String(str)));
	$("#atomicResult2").html("result 2 :"+encipherAtomicNumbers2(Hex2String(str)));
	$("#atomicResult1text").html("result 1 :"+Hex2String(GetHexbyASCII(encipherAtomicNumbers(Hex2String(str)))));
	$("#atomicResult2text").html("result 2 :"+Hex2String(GetHexbyASCII(encipherAtomicNumbers2(Hex2String(str)))));


	$("#check").html('<a data-toggle="modal" href="#checkpass">Check</a>');
	$("#checkText").html("original : " + Hex2String(str));
	$("#checkResult").html(NumericChange(Hex2String(str)));
}



function PrintAlltext(str){
//	cleartextarea();
	UpdateModal(str);
	OddEven(Hex2String(str));
	if(num != 1  ){ $( ".formtext"    ).val(Hex2String(str)); }
	if(num != 2  ){ $( ".formbinary"  ).val(Hex2Bin(str)   ); }
	if(num != 3  ){ $( ".formoctal"   ).val(Hex2Oct(str)   ); }
	if(num != 4  ){ $( ".formhex"     ).val(str            ); }
	if(num != 5  ){ $( ".formascii"   ).val(Hex2Dec(str)   ); }
	if(num != 6  ){ $( ".formbase32"  ).val(Base32(str.toUpperCase()) ); }
	if(num != 7  ){ $( ".formbase36"  ).val(Base36(str.toUpperCase()) ); }
	if(num != 8  ){ $( ".formbase64"  ).val(Base64(str)    ); }
	if(num != 9  ){ $( ".formbase85"  ).val(Base85(str)    ); }
	if(num != 10 ){ $( ".formuu"      ).val(UUencode(str)  ); }
	if(num != 11 ){ $( ".formxx"      ).val(XXencode(str)  ); }
	if(num != 12 ){ $( ".formmorse"   ).val(Str2Morse($( ".formtext"    ).val().trim())); }
	if(num != 13 ){ $( ".formatbash"  ).val(Atbash(Hex2String(str))); }
	if(num != 14 ){ $( ".formpfair"   ).val(Playfair(1,Hex2String(str),"J","I","",0)); }
	if(num != 15 ){ $( ".formbifid"   ).val(Bifid(1,Hex2String(str),"J","I","",0)); }
}

function vigeneredecrypt(str,keystr) {
	var key = filterKey(keystr);
	for (var i = 0; i < key.length; i++){
		key[i] = (26 - key[i]) % 26;
	}
	return vigenere(str, key);
}

function isLetter(c) {
	return isUppercase(c) || isLowercase(c);
}
function isUppercase(c) {
	return c >= 65 && c <= 90;
}
function isLowercase(c) {
	return c >= 97 && c <= 122;
}
function filterKey(keystr) {
	var result = [];
	for (var i = 0; i < keystr.length; i++) {
		var c = keystr.charCodeAt(i);
		if (isLetter(c))
			result.push((c - 65) % 32);
	}
	return result;
}

function vigenere(input, key) {
	var output = "";
	for (var i = 0, j = 0; i < input.length; i++) {
		var c = input.charCodeAt(i);
		if (isUppercase(c)) {
			output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
			j++;
		} else if (isLowercase(c)) {
			output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
			j++;
		} else {
			output += input.charAt(i);
		}
	}
	return output;
}




function rail_decode(t, r, o){
   var o_idx = new Array((r - 1) * 2);
   var out_a = new Array(r);
   var i, j, k;
   for (i = 0; i < o_idx.length; i ++){
      j = (o + i) % o_idx.length;
      if (j < r){
         o_idx[i] = j;
      } else{
         o_idx[i] = (2 * (r - 1)) - j;
      }
   }

   for (i = 0; i < out_a.length; i ++) {
      out_a[i] = 0;
   }

   for (i = 0; i < t.length; i ++) {
      out_a[o_idx[i % o_idx.length]] ++;
   }

   j = 0;
   for (i = 0; i < out_a.length; i ++) {
      out_a[i] = t.slice(j, j + out_a[i]);
      j += out_a[i].length;
   }

   j = "";
   for (i = 0; i < t.length; i ++) {
      k = o_idx[i % o_idx.length];
      j += out_a[k].charAt(0);
      out_a[k] = out_a[k].slice(1, out_a[k].length);
   }

   return j;
}

function code_exchange(text){

  var str="";
  var str2="";
  var str3="";
  var str4="";
  var str5="";
  var isnum2  = text.match(NUM2CHECK) ;
  var isnum3  = text.match(NUM3CHECK);
  var isnum8  = text.match(NUM8CHECK);
  var isnum10 = text.match(NUM10CHECK);
  var isnum16 = text.match(NUM16CHECK);
  if (isnum2){ //bit
    str  = Hex2String(GetHexbyBinary(text));
    str2 = Hex2String(GetHexbyBinary(text.split("").reverse().join("")));
    text.split("").forEach(function(val,index,ar){ str5 += (val=="0")? "1":"0"; });
    str3 = Hex2String(GetHexbyBinary(str5));
    str4 = Hex2String(GetHexbyBinary(str5.split("").reverse().join("")));
    str5="";
    $( '<li> Code Bin -> ' + str +' / ' + str2 +' / ' + str3+' / ' + str4 +'</li>' ).appendTo($( ".step1" ))
    checkprint("Code Bin : ", str );
    checkprint("Code Bin : ", str2);
    checkprint("Code Bin : ", str3);
    checkprint("Code Bin : ", str4);
    checkprint("Code Bin : ", str.split("").reverse().join(""));
    checkprint("Code Bin : ", str2.split("").reverse().join(""));
    checkprint("Code Bin : ", str3.split("").reverse().join(""));
    checkprint("Code Bin : ", str4.split("").reverse().join(""));
  }

  if( isnum8 ){ // oct
    str  = Hex2String(GetHexbyOctal(text));
    str3 = Hex2String(GetHexbyOctal(text.split("").reverse().join("")));
    $( '<li> Code Oct -> ' + str +' / ' + str3+'</li>' ).appendTo($( ".step1" ))
    checkprint("Code Oct : ", str );
    checkprint("Code Oct : ", str3);
    checkprint("Code Oct : ", str.split("").reverse().join(""));
    checkprint("Code Oct : ", str3.split("").reverse().join(""));
 }
  if( isnum10 ){ // numeric
    str  = Hex2String(GetHexbyASCII(text));
    str3 = Hex2String(GetHexbyASCII(text.split("").reverse().join("")));
    $( '<li> Code Dec -> ' + str +' / ' + str3+'</li>' ).appendTo($( ".step1" ))
    checkprint("Code Dec : ", str);
    checkprint("Code Dec : ", str3);
    checkprint("Code Dec : ", str.split("").reverse().join(""));
    checkprint("Code Dec : ", str3.split("").reverse().join(""));
  }

  if( isnum16 ){ //hex
    str = Hex2String(text);
    str2 = Hex2String(text.split("").reverse().join(""));
    str3= Hex2String(atbashof(text.toLowerCase().trim()));
    str4 = Hex2String(atbashof(text.split("").reverse().join("").toLowerCase().trim()));
    str5= Hex2String(GetHexbyASCII(atbashof(text.toLowerCase().trim())));
    str6 = Hex2String(GetHexbyASCII(atbashof(text.split("").reverse().join("").toLowerCase().trim())));
    str7= Hex2String(GetHexbyOctal((atbashof(text.toLowerCase().trim()))));
    str8 = Hex2String(GetHexbyOctal((atbashof(text.split("").reverse().join("").toLowerCase().trim()))));
    $( '<li> Code Hex -> ' + str +' / ' + str2 +' / ' + str3+' / ' + str4 +'</li>' ).appendTo($( ".step1" ))
    $( '<li> Code Hex ex-> ' + str5 +' / ' + str6 +' / ' + str7+' / ' + str8 +'</li>' ).appendTo($( ".step1" ))
    checkprint("Code Hex : ", str);
    checkprint("Code Hex : ", str2);
    checkprint("Code Hex : ", str3);
    checkprint("Code Hex : ", str4);
    checkprint("Code Hex : ", str.split("").reverse().join(""));
    checkprint("Code Hex : ", str2.split("").reverse().join(""));
    checkprint("Code Hex : ", str3.split("").reverse().join(""));
    checkprint("Code Hex : ", str4.split("").reverse().join(""));
    checkprint("Code Hex : ", str5);
    checkprint("Code Hex : ", str6);
    checkprint("Code Hex : ", str7);
    checkprint("Code Hex : ", str8);
    checkprint("Code Hex : ", str5.split("").reverse().join(""));
    checkprint("Code Hex : ", str6.split("").reverse().join(""));
    checkprint("Code Hex : ", str7.split("").reverse().join(""));
    checkprint("Code Hex : ", str8.split("").reverse().join(""));
  }
}

function key_exchange(text){
   var KEYFROM     ="1234567890qwertyuiopasdfghjkl;zxcvbnm,./";
   var KEYTO1      ="1234567890123456789012345678901234567890";
   var KEYTO2      ="0987654321poiuytrewq;lkjhgfdsa/.,mnbvcxz";
   var KEYTO3      ="0123456789pqwertyuio;asdfghjkl/zxcvbnm,.";
   var KEYTO4      ="2345678901wertyuiopqsdfghjkl;axcvbnm,./z";
   var KEYTO5      ="1234567890/.,mnbvcxz;lkjhgfdsapoiuytrewq";
   var KEYTO6      ="/.,mnbvcxz;lkjhgfdsapoiuytrewq0987654321";
   var KEYTO7      ="zxcvbnm,./asdfghjkl;qwertyuiop1234567890";
   var decoded_text="";
   var str="";
   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO1.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   str = decoded_text;
   str = decoded_text.split("").reverse().join("");
   decoded_text=str;
   checkprint("Keyboard:",str);
   $( '<li> Keyboard1 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));
   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO2.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   str = decoded_text.split("").reverse().join("");
   decoded_text=str;
   checkprint("Keyboard:",str);
   $( '<li> Keyboard2 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));
   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO3.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   str = decoded_text.split("").reverse().join("");
   decoded_text=str;
   checkprint("Keyboard:",str);
   $( '<li> Keyboard3 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));
   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO4.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   str = decoded_text.split("").reverse().join("");
   decoded_text=str;
   checkprint("Keyboard:",str);
   $( '<li> Keyboard4 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));
   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO5.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   str = decoded_text.split("").reverse().join("");
   decoded_text=str;
   checkprint("Keyboard:",str);
   $( '<li> Keyboard5 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));
   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO6.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   str = decoded_text.split("").reverse().join("");
   decoded_text=str;
   checkprint("Keyboard:",str);
   $( '<li> Keyboard6 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));
   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO7.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   str = decoded_text.split("").reverse().join("");
   decoded_text=str;
   checkprint("Keyboard:",str);
   $( '<li> Keyboard7 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));
}

function keyboard2morse(text){
   var KEYFROM1    ="qwertyuiopasdfghjkl;zxcvbnm,./";
   var KEYFROM2    ="',.pyfgcrlaoeuidhtns;qjkxbmwvz";
   var KEYFROM3    ="qwfpgjluy;arstdhneiozxcvbkm,./";
   var KEYFROM4    ="qdrwbjfup;ashtgyneoizxmcvkl,./";
   var KEYFROM5    ="qwprfyukl;asdtghnioezxcvbjm,./";
   var KEYFROM6    ="azertyuiopqsdfghjklm<wxcvbn,;:";
   var KEYTO       ="00000000001111111111          ";
   var decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO.charAt(KEYFROM1.indexOf(val));  });
   var decoded_string = Morse2Str(decoded_text);
   var decoded_string2 = Morse2Str(decoded_text.split("").reverse().join(""));
   checkprint("keyboard2morse qwerty  : ", decoded_string);
   checkprint("keyboard2morse qwerty X: ", decoded_string2);
   $( '<li> Keyboard(qwerty) to Morse -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));

   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO.charAt(KEYFROM2.indexOf(val));  });
   decoded_string = Morse2Str(decoded_text);
   decoded_string2 = Morse2Str(decoded_text.split("").reverse().join(""));
   checkprint("keyboard2morse Dvorak  : ", decoded_string);
   checkprint("keyboard2morse Dvorak X: ", decoded_string2);
   $( '<li> Keyboard(Dvorak) to Morse -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));

   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO.charAt(KEYFROM3.indexOf(val));  });
   decoded_string = Morse2Str(decoded_text);
   decoded_string2 = Morse2Str(decoded_text.split("").reverse().join(""));
   checkprint("keyboard2morse Colemak  : ", decoded_string);
   checkprint("keyboard2morse Colemak X: ", decoded_string2);
   $( '<li> Keyboard(Colemak) to Morse -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));

   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO.charAt(KEYFROM4.indexOf(val));  });
   decoded_string = Morse2Str(decoded_text);
   decoded_string2 = Morse2Str(decoded_text.split("").reverse().join(""));
   checkprint("keyboard2morse Workman  : ", decoded_string);
   checkprint("keyboard2morse Workman X: ", decoded_string2);
   $( '<li> Keyboard(Workman) to Morse -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));

   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO.charAt(KEYFROM5.indexOf(val));  });
   decoded_string = Morse2Str(decoded_text);
   decoded_string2 = Morse2Str(decoded_text.split("").reverse().join(""));
   checkprint("keyboard2morse Qwpr  : ", decoded_string);
   checkprint("keyboard2morse Qwpr X: ", decoded_string2);
   $( '<li> Keyboard(Qwpr) to Morse -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));

   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO.charAt(KEYFROM6.indexOf(val));  });
   decoded_string = Morse2Str(decoded_text);
   decoded_string2 = Morse2Str(decoded_text.split("").reverse().join(""));
   checkprint("keyboard2morse AZERTY  : ", decoded_string);
   checkprint("keyboard2morse AZERTY X: ", decoded_string2);
   $( '<li> Keyboard(AZERTY) to Morse -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));
}

function colordecode(text) {
  var str = "";
  var result = "";
  $( ".step2" ).append('---------------');
  for (var i=0; i< text.length; i+=6){
    str = text.substr(i, 6);
    $( ".step2" ).append('<br>'+str + ':');
    var regex = new RegExp(str, 'i');
    $.each(colors.colors, function(index, value) {
       if (regex.test(value.color) ) {
           result += value.name.charAt(0).toLowerCase();
           $( ".step2" ).append(value.name);
       }
    });
  }
  $( ".step2" ).append('---------------<br>');
  return result;
}

function colordecode2(text) {
  var str = "";
  var result = "";
  $( ".step2" ).append('---------------');
  for (var i=0; i< text.length; i+=6){
    str = text.substr(i, 6);
    var regex = new RegExp(str, 'i');
    $( ".step2" ).append('<br>'+str + ':');
    $.each(webcolors.colors, function(index, value) {
       if (regex.test(value.color) ) {
           result += value.name.charAt(0).toLowerCase();
           $( ".step2" ).append(value.name);
       }
    });
  }
  $( ".step2" ).append('---------------<br>');
  return result;

}

function Str2bin(str){
	var ret="";
	for (var i = 0; i < str.length; i += 1){
		ret += ("00000000"+str.charCodeAt(i).toString(2)).slice( -8 );
	}
	return ret;
}

function Bin2Str(str){
	var ret="";
	for (var i = 0; i < str.length; i += 8){
		ret += String.fromCharCode( parseInt(str.substr(i, 8), 2).toString(10) );
	}
	return ret;
}

function Railfences (str){
  var result="<table><tr><td>rails</td><td>:</td><td>result</td></tr>";
  for(var j=2;j<str.length;j++){
    result += "<tr><td>";
    result += j;
    result += "</td><td>:</td><td>";
    result += rail_decode(str,j,0);
    result += "</td></tr>";
  }
  result += "</table>";
  return result;
}


function rail_decode(t, r, o){
   var o_idx = new Array((r - 1) * 2);
   var out_a = new Array(r);
   var i, j, k;
   for (i = 0; i < o_idx.length; i ++){
      j = (o + i) % o_idx.length;
      if (j < r){
         o_idx[i] = j;
      } else{
         o_idx[i] = (2 * (r - 1)) - j;
      }
   }

   for (i = 0; i < out_a.length; i ++) {
      out_a[i] = 0;
   }

   for (i = 0; i < t.length; i ++) {
      out_a[o_idx[i % o_idx.length]] ++;
   }

   j = 0;
   for (i = 0; i < out_a.length; i ++) {
      out_a[i] = t.slice(j, j + out_a[i]);
      j += out_a[i].length;
   }

   j = "";
   for (i = 0; i < t.length; i ++) {
      k = o_idx[i % o_idx.length];
      j += out_a[k].charAt(0);
      out_a[k] = out_a[k].slice(1, out_a[k].length);
   }

   return j;
}






var Base64a = {
    encode: (function(i, tbl) {
        for(i=0,tbl={64:61,63:47,62:43}; i<62; i++) {tbl[i]=i<26?i+65:(i<52?i+71:i-4);} //A-Za-z0-9+/=
        return function(arr) {
            var len, str, buf;
            if (!arr || !arr.length) {return "";}
            for(i=0,len=arr.length,buf=[],str=""; i<len; i+=3) { //6+2,4+4,2+6
                str += String.fromCharCode(
                    tbl[arr[i] >>> 2],
                    tbl[(arr[i]&3)<<4 | arr[i+1]>>>4],
                    tbl[i+1<len ? (arr[i+1]&15)<<2 | arr[i+2]>>>6 : 64],
                    tbl[i+2<len ? (arr[i+2]&63) : 64]
                );
            }
            return str;
        };
    }()),
    decode: (function(i, tbl) {
        for(i=0,tbl={61:64,47:63,43:62}; i<62; i++) {tbl[i<26?i+65:(i<52?i+71:i-4)]=i;} //A-Za-z0-9+/=
        return function(str) {
            var j, len, arr, buf;
            if (!str || !str.length) {return [];}
            for(i=0,len=str.length,arr=[],buf=[]; i<len; i+=4) { //6,2+4,4+2,6
                for(j=0; j<4; j++) {buf[j] = tbl[str.charCodeAt(i+j)||0];}
                arr.push(
                    buf[0]<<2|(buf[1]&63)>>>4,
                    (buf[1]&15)<<4|(buf[2]&63)>>>2,
                    (buf[2]&3)<<6|buf[3]&63
                );
            }
            if (buf[3]===64) {arr.pop();if (buf[2]===64) {arr.pop();}}
            return arr;
        };
    }())
};