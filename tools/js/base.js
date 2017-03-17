var target="";
var num=0;
var KeyMap = new Array();
var KeyMapJoJo = new Array();
$( ".formtext"    ).change(function() { num=1; PrintAlltext( GetHexbyText(    $( ".formtext"    ).val().trim())); });
$( ".formbinary"  ).change(function() { num=2; PrintAlltext( GetHexbyBinary(  $( ".formbinary"  ).val().trim())); });
$( ".formoctal"   ).change(function() { num=3; PrintAlltext( GetHexbyOctal(   $( ".formoctal"   ).val().trim())); });
$( ".formhex"     ).change(function() { num=4; PrintAlltext( GetHexbyHex  (   $( ".formhex"     ).val().trim())); });
$( ".formascii"   ).change(function() { num=5; PrintAlltext( GetHexbyASCII(   $( ".formascii"   ).val().trim())); });
$( ".formbase32"  ).change(function() { num=6; PrintAlltext( GetHexbyBase32(  $( ".formbase32"  ).val().trim())); });
$( ".formbase36"  ).change(function() { num=7; PrintAlltext( GetHexbyBase36(  $( ".formbase36"  ).val().trim())); });
$( ".formbase64"  ).change(function() { num=8; PrintAlltext( GetHexbyBase64(  $( ".formbase64"  ).val().trim())); });
$( ".formbase85"  ).change(function() { num=9; PrintAlltext( GetHexbyBase85(  $( ".formbase85"  ).val().trim())); });
$( ".formuu"      ).change(function() { num=10; PrintAlltext( GetHexbyUU(      $( ".formuu"      ).val())); });
$( ".formxx"      ).change(function() { num=11; PrintAlltext( GetHexbyXX(      $( ".formxx"      ).val().trim())); });
$( ".formmorse"   ).change(function() { num=12; PrintAlltext( GetHexbyMorse(   $( ".formmorse"   ).val().trim())); });
$( ".formatbash"  ).change(function() { num=13; PrintAlltext( GetHexbyAtbash(  $( ".formatbash"  ).val().trim())); });
$( ".formpfair"   ).change(function() { num=14; PrintAlltext( GetHexbyPlayfair($( ".formpfair"   ).val().trim())); });
$( ".formbifid"   ).change(function() { num=15; PrintAlltext( GetHexbyBifid(   $( ".formbifid"   ).val().trim())); });
$( ".formSymbols" ).change(function() { num=16; Symbols2Numeric ( $( ".formSymbols"  ).val()); });
$( ".formNumeric" ).change(function() { num=17; Numeric2Polybius( $( ".formNumeric"  ).val()); });
$( ".formPolybius").change(function() { num=18; Polybius2Numeric( $( ".formPolybius" ).val()); });

function cleartextarea(){
	$( "textarea" ).each(function(index){ $( this ).val(""); }); 
}

/* for Debug */
function echotext(){
	$( "textarea" ).each(function(index){ console.log( index + ": " + $( this ).val() ); }); 
}

/* for Symbol / Numeric / Polybius */
function trimspace(str){
	return str.replace(/ /g,"");
}

function trimCRLF(str){
	return str.replace(/[\n\r]/g,"");
}

var num2al = {
	"0"	: "a",	"1"	: "b",	"2"	: "c",	"3"	: "d",	"4"	: "e",
	"5"	: "f",	"6"	: "g",	"7"	: "h",	"8"	: "i",	"9"	: "j",
};

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

    // Extended periodic table:
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

    // Extended periodic table:
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

var abc2num ={
	"a" : "0",	"b" : "1",	"c" : "2",	"d" : "3",	"e" : "4",
	"f" : "5",	"g" : "6",	"h" : "7",	"i" : "8",	"j" : "9",
};

var num2abc ={
	"0" : "a",	"1" : "b",	"2" : "c",	"3" : "d",	"4" : "e",
	"5" : "f",	"2" : "g",	"7" : "h",	"8" : "i",	"9" : "j",
};

function toNum() {
	var memo = $("#LeetText").html().toString().toLowerCase();
	var selObj  = window.getSelection().toString().toLowerCase();
	if ( memo.indexOf(selObj) != -1) {
		var temp="";
		for (var i=0; i< selObj.length; i++){
			temp += abc2num[selObj.charAt(i)] || selObj.charAt(i);
		}
		memo=memo.replace(selObj,temp);
		$("#LeetResult").html(memo);
	}
}

function toABC () {
	var memo = $("#LeetText").html().toString().toLowerCase();
	var selObj  = window.getSelection().toString().toLowerCase();
	if ( memo.indexOf(selObj) != -1) {
		var temp="";
		for (var i=0; i< selObj.length; i++){
			temp += num2abc[selObj.charAt(i)] || selObj.charAt(i);
		}
		memo=memo.replace(selObj,temp);
		$("#LeetResult").html(memo);
	}
}


function Symbols2Numeric(text) {
	var KEYFROM = "!@#$%^&*()1234567890";
	var KEYTO   = "12345678901234567890";
	var decoded_text="";
	text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO.charAt(KEYFROM.indexOf(val)) || val;  });
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

/* for Base */

function SwapMorse(){
	var s = $( ".formmorse"   ).val();
	var o = '';
	for (var i = 0; i < s.length; i ++)	{
		var c = s.charAt(i);
		if (c == '-'){
			o += '.';
		}else if (c == '.'){
			o += '-';
		}else if (c == "\n"){
			o += ' ';
		}else if (c == '1'){
			o += '0';
		}else if (c == "0"){
			o += '1';
		}else if (c == '_'){
			o += '>';
		}else if (c == ">"){
			o += '_';
		}else{
			o += c;
		}
	}
	$( ".formmorse"   ).val(o);
	str = GetHexbyMorse(   $( ".formmorse"   ).val());
	UpdateModal(str);
	$( "#text"        ).html(OddEven(Hex2String(str)));
	$( ".formtext"    ).val(Hex2String(str));
	$( ".formreverse" ).val(Hex2String(str).split('').reverse().join(''));
	$( ".formbinary"  ).val(Hex2Bin(str)   );
	$( ".formoctal"   ).val(Hex2Oct(str)   );
	$( ".formhex"     ).val(str            );
	$( ".formascii"   ).val(Hex2Dec(str)   );
	$( ".formbase32"  ).val(Base32(str.toUpperCase()) );
	$( ".formbase36"  ).val(Base36(str.toUpperCase()) );
	$( ".formbase64"  ).val(Base64(str)    );
	$( ".formbase85"  ).val(Base85(str)    );
	$( ".formuu"      ).val(UUencode(str)  );
	$( ".formxx"      ).val(XXencode(str)  );
	$( ".formatbash"  ).val(Atbash(Hex2String(str)));
	$( ".formpfair"   ).val(Playfair(1,Hex2String(str),"J","I","",0));
	$( ".formbifid"   ).val(Bifid(1,Hex2String(str),"J","I","",0));
}

function ReverseMorse(){
	var s = $( ".formmorse"   ).val();
	$( ".formmorse"   ).val(s.split('').reverse().join(''));
	str = GetHexbyMorse(   $( ".formmorse"   ).val());
	UpdateModal(str);
	$( "#text"        ).html(OddEven(Hex2String(str)));
	$( ".formtext"    ).val(Hex2String(str));
	$( ".formreverse" ).val(Hex2String(str).split('').reverse().join(''));
	$( ".formbinary"  ).val(Hex2Bin(str)   );
	$( ".formoctal"   ).val(Hex2Oct(str)   );
	$( ".formhex"     ).val(str            );
	$( ".formascii"   ).val(Hex2Dec(str)   );
	$( ".formbase32"  ).val(Base32(str.toUpperCase()) );
	$( ".formbase36"  ).val(Base36(str.toUpperCase()) );
	$( ".formbase64"  ).val(Base64(str)    );
	$( ".formbase85"  ).val(Base85(str)    );
	$( ".formuu"      ).val(UUencode(str)  );
	$( ".formxx"      ).val(XXencode(str)  );
	$( ".formatbash"  ).val(Atbash(Hex2String(str)));
	$( ".formpfair"   ).val(Playfair(1,Hex2String(str),"J","I","",0));
	$( ".formbifid"   ).val(Bifid(1,Hex2String(str),"J","I","",0));
}


function Swap64(){
	var text = $( ".formbase64"   ).val();
	var tebahpla = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
	var str = "";
	for (k = 0; k < text.length; k++) {
		var coded_letter = text.charAt(k);
		var letter_index = alphabet.indexOf(coded_letter);
		str += tebahpla.charAt(letter_index);
	}
	$( ".formbase64"   ).val(str);

	str = GetHexbyBase64(   $( ".formbase64"   ).val());
	UpdateModal(str);
	$( "#text"        ).html(OddEven(Hex2String(str)));
	$( ".formtext"    ).val(Hex2String(str));
	$( ".formreverse" ).val(Hex2String(str).split('').reverse().join(''));
	$( ".formbinary"  ).val(Hex2Bin(str)   );
	$( ".formoctal"   ).val(Hex2Oct(str)   );
	$( ".formhex"     ).val(str            );
	$( ".formascii"   ).val(Hex2Dec(str)   );
	$( ".formbase32"  ).val(Base32(str.toUpperCase()) );
	$( ".formbase36"  ).val(Base36(str.toUpperCase()) );
	$( ".formmorse"   ).val(Str2Morse(Hex2String(str)));
	$( ".formbase85"  ).val(Base85(str)    );
	$( ".formuu"      ).val(UUencode(str)  );
	$( ".formxx"      ).val(XXencode(str)  );
	$( ".formatbash"  ).val(Atbash(Hex2String(str)));
	$( ".formpfair"   ).val(Playfair(1,Hex2String(str),"J","I","",0));
	$( ".formbifid"   ).val(Bifid(1,Hex2String(str),"J","I","",0));
}


function Reverse64(){
	var s = $( ".formbase64"   ).val();
	$( ".formbase64"   ).val(s.split('').reverse().join(''));
	str = GetHexbyBase64(   $( ".formbase64"   ).val());
	UpdateModal(str);
	$( "#text"        ).html(OddEven(Hex2String(str)));
	$( ".formtext"    ).val(Hex2String(str));
	$( ".formreverse" ).val(Hex2String(str).split('').reverse().join(''));
	$( ".formbinary"  ).val(Hex2Bin(str)   );
	$( ".formoctal"   ).val(Hex2Oct(str)   );
	$( ".formhex"     ).val(str            );
	$( ".formascii"   ).val(Hex2Dec(str)   );
	$( ".formbase32"  ).val(Base32(str.toUpperCase()) );
	$( ".formbase36"  ).val(Base36(str.toUpperCase()) );
	$( ".formmorse"   ).val(Str2Morse(Hex2String(str)));
	$( ".formbase85"  ).val(Base85(str)    );
	$( ".formuu"      ).val(UUencode(str)  );
	$( ".formxx"      ).val(XXencode(str)  );
	$( ".formatbash"  ).val(Atbash(Hex2String(str)));
	$( ".formpfair"   ).val(Playfair(1,Hex2String(str),"J","I","",0));
	$( ".formbifid"   ).val(Bifid(1,Hex2String(str),"J","I","",0));
}

function Reverse85(){
	var s = $( ".formbase85"   ).val();
	$( ".formbase85"   ).val(s.split('').reverse().join(''));
	str = GetHexbyBase85(   $( ".formbase85"   ).val());
	UpdateModal(str);
	$( "#text"        ).html(OddEven(Hex2String(str)));
	$( ".formtext"    ).val(Hex2String(str));
	$( ".formreverse" ).val(Hex2String(str).split('').reverse().join(''));
	$( ".formbinary"  ).val(Hex2Bin(str)   );
	$( ".formoctal"   ).val(Hex2Oct(str)   );
	$( ".formhex"     ).val(str            );
	$( ".formascii"   ).val(Hex2Dec(str)   );
	$( ".formbase32"  ).val(Base32(str.toUpperCase()) );
	$( ".formbase36"  ).val(Base36(str.toUpperCase()) );
	$( ".formmorse"   ).val(Str2Morse(Hex2String(str)));
	$( ".formbase64"  ).val(Base64(str)    );
	$( ".formuu"      ).val(UUencode(str)  );
	$( ".formxx"      ).val(XXencode(str)  );
	$( ".formatbash"  ).val(Atbash(Hex2String(str)));
	$( ".formpfair"   ).val(Playfair(1,Hex2String(str),"J","I","",0));
	$( ".formbifid"   ).val(Bifid(1,Hex2String(str),"J","I","",0));
}

function ReverseUU(){
	var s = $( ".formuu"   ).val();
	$( ".formuu"   ).val(s.split('').reverse().join(''));
	str = GetHexbyUU(   $( ".formuu"   ).val());
	UpdateModal(str);
	$( "#text"        ).html(OddEven(Hex2String(str)));
	$( ".formtext"    ).val(Hex2String(str));
	$( ".formreverse" ).val(Hex2String(str).split('').reverse().join(''));
	$( ".formbinary"  ).val(Hex2Bin(str)   );
	$( ".formoctal"   ).val(Hex2Oct(str)   );
	$( ".formhex"     ).val(str            );
	$( ".formascii"   ).val(Hex2Dec(str)   );
	$( ".formbase32"  ).val(Base32(str.toUpperCase()) );
	$( ".formbase36"  ).val(Base36(str.toUpperCase()) );
	$( ".formmorse"   ).val(Str2Morse(Hex2String(str)));
	$( ".formbase64"  ).val(Base64(str)    );
	$( ".formxx"      ).val(XXencode(str)  );
	$( ".formbase85"  ).val(Base85(str)    );
	$( ".formatbash"  ).val(Atbash(Hex2String(str)));
	$( ".formpfair"   ).val(Playfair(1,Hex2String(str),"J","I","",0));
	$( ".formbifid"   ).val(Bifid(1,Hex2String(str),"J","I","",0));
}
function ReverseXX(){
	var s = $( ".formxx"   ).val();
	$( ".formxx"   ).val(s.split('').reverse().join(''));
	str = GetHexbyXX(   $( ".formxx"   ).val());
	UpdateModal(str);
	$( "#text"        ).html(OddEven(Hex2String(str)));
	$( ".formtext"    ).val(Hex2String(str));
	$( ".formreverse" ).val(Hex2String(str).split('').reverse().join(''));
	$( ".formbinary"  ).val(Hex2Bin(str)   );
	$( ".formoctal"   ).val(Hex2Oct(str)   );
	$( ".formhex"     ).val(str            );
	$( ".formascii"   ).val(Hex2Dec(str)   );
	$( ".formbase32"  ).val(Base32(str.toUpperCase()) );
	$( ".formbase36"  ).val(Base36(str.toUpperCase()) );
	$( ".formmorse"   ).val(Str2Morse(Hex2String(str)));
	$( ".formbase64"  ).val(Base64(str)    );
	$( ".formuu"      ).val(UUencode(str)  );
	$( ".formbase85"  ).val(Base85(str)    );
	$( ".formatbash"  ).val(Atbash(Hex2String(str)));
	$( ".formpfair"   ).val(Playfair(1,Hex2String(str),"J","I","",0));
	$( ".formbifid"   ).val(Bifid(1,Hex2String(str),"J","I","",0));
}
function Reverse32(){
	var s = $( ".formbase32"   ).val();
	$( ".formbase32"   ).val(s.split('').reverse().join(''));
	str = GetHexbyBase32(   $( ".formbase32"   ).val());
	UpdateModal(str);
	$( "#text"        ).html(OddEven(Hex2String(str)));
	$( ".formtext"    ).val(Hex2String(str));
	$( ".formreverse" ).val(Hex2String(str).split('').reverse().join(''));
	$( ".formbinary"  ).val(Hex2Bin(str)   );
	$( ".formoctal"   ).val(Hex2Oct(str)   );
	$( ".formhex"     ).val(str            );
	$( ".formascii"   ).val(Hex2Dec(str)   );
	$( ".formbase64"  ).val(Base64(str) );
	$( ".formbase36"  ).val(Base36(str.toUpperCase()) );
	$( ".formmorse"   ).val(Str2Morse(Hex2String(str)));
	$( ".formbase85"  ).val(Base85(str)    );
	$( ".formuu"      ).val(UUencode(str)  );
	$( ".formxx"      ).val(XXencode(str)  );
	$( ".formatbash"  ).val(Atbash(Hex2String(str)));
	$( ".formpfair"   ).val(Playfair(1,Hex2String(str),"J","I","",0));
	$( ".formbifid"   ).val(Bifid(1,Hex2String(str),"J","I","",0));
}

function Reverse36(){
	var s = $( ".formbase36"   ).val();
	$( ".formbase36"   ).val(s.split('').reverse().join(''));
	str = GetHexbyBase36(   $( ".formbase36"   ).val());
	UpdateModal(str);
	$( "#text"        ).html(OddEven(Hex2String(str)));
	$( ".formtext"    ).val(Hex2String(str));
	$( ".formreverse" ).val(Hex2String(str).split('').reverse().join(''));
	$( ".formbinary"  ).val(Hex2Bin(str)   );
	$( ".formoctal"   ).val(Hex2Oct(str)   );
	$( ".formhex"     ).val(str            );
	$( ".formascii"   ).val(Hex2Dec(str)   );
	$( ".formbase64"  ).val(Base64(str) );
	$( ".formbase32"  ).val(Base32(str.toUpperCase()) );
	$( ".formmorse"   ).val(Str2Morse(Hex2String(str)));
	$( ".formbase85"  ).val(Base85(str)    );
	$( ".formuu"      ).val(UUencode(str)  );
	$( ".formxx"      ).val(XXencode(str)  );
	$( ".formatbash"  ).val(Atbash(Hex2String(str)));
	$( ".formpfair"   ).val(Playfair(1,Hex2String(str),"J","I","",0));
	$( ".formbifid"   ).val(Bifid(1,Hex2String(str),"J","I","",0));
}

function Reverse(){
	var s = $( ".formtext"   ).val();
	$( ".formtext"   ).val(s.split('').reverse().join(''));
	str = GetHexbyText(   $( ".formtext"   ).val());
	UpdateModal(str);
	$( "#text"        ).html(OddEven(Hex2String(str)));
//	$( ".formtext"    ).val(Hex2String(str));
	$( ".formreverse" ).val(Hex2String(str).split('').reverse().join(''));
	$( ".formbinary"  ).val(Hex2Bin(str)   );
	$( ".formoctal"   ).val(Hex2Oct(str)   );
	$( ".formhex"     ).val(str            );
	$( ".formascii"   ).val(Hex2Dec(str)   );
	$( ".formbase64"  ).val(Base64(str) );
	$( ".formbase36"  ).val(Base36(str.toUpperCase()) );
	$( ".formbase32"  ).val(Base32(str.toUpperCase()) );
	$( ".formmorse"   ).val(Str2Morse(Hex2String(str)));
	$( ".formbase85"  ).val(Base85(str)    );
	$( ".formuu"      ).val(UUencode(str)  );
	$( ".formxx"      ).val(XXencode(str)  );
	$( ".formatbash"  ).val(Atbash(Hex2String(str)));
	$( ".formpfair"   ).val(Playfair(1,Hex2String(str),"J","I","",0));
	$( ".formbifid"   ).val(Bifid(1,Hex2String(str),"J","I","",0));
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

function HexAtbash(){
	var str = atbashof( $( ".formhex"   ).val() );
	
	$( ".formhex"   ).val(str);
//	str = GetHexbyText(   $( ".formhex"   ).val());
	UpdateModal(str);
	$( "#text"        ).html(OddEven(Hex2String(str)));
	$( ".formtext"    ).val(Hex2String(str));
	$( ".formreverse" ).val(Hex2String(str).split('').reverse().join(''));
	$( ".formbinary"  ).val(Hex2Bin(str)   );
	$( ".formoctal"   ).val(Hex2Oct(str)   );
	$( ".formhex"     ).val(str            );
	$( ".formascii"   ).val(Hex2Dec(str)   );
	$( ".formbase64"  ).val(Base64(str) );
	$( ".formbase36"  ).val(Base36(str.toUpperCase()) );
	$( ".formbase32"  ).val(Base32(str.toUpperCase()) );
	$( ".formmorse"   ).val(Str2Morse(Hex2String(str)));
	$( ".formbase85"  ).val(Base85(str)    );
	$( ".formuu"      ).val(UUencode(str)  );
	$( ".formxx"      ).val(XXencode(str)  );
	$( ".formatbash"  ).val(Atbash(Hex2String(str)));
	$( ".formpfair"   ).val(Playfair(1,Hex2String(str),"J","I","",0));
	$( ".formbifid"   ).val(Bifid(1,Hex2String(str),"J","I","",0));
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
	return GetHexbyText(window.atob(str));
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
	str=trimspace(str);
	for (var i = 0; i < str.length; i += 2){
		ret +=  ("000" + parseInt(str.substr(i, 2), 16)).slice( -3 );
		ret += " ";
	}
	return ret;
}


function Hex2Bin(str){
	var ret="";
	str=trimspace(str);
	for (var i = 0; i < str.length; i += 2){
		ret += ("00000000" +parseInt(str.substr(i, 2), 16).toString(2)).slice( -8 );
		ret += " ";
	}
	return ret;
}
function Hex2Oct(str){
	var ret="";
	str=trimspace(str);
	for (var i = 0; i < str.length; i += 2){
		ret += ("000" + parseInt(str.substr(i, 2), 16).toString(8) ).slice( -3 );
		ret += " ";
	}
	return ret;
}
function Hex2String(str){
	var ret="";
	str=trimspace(str);
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
/*	var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var ret = "";
	str=Hex2String(str);
	var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
	var i = 0;
	while (i < str.length) {
		chr1 = str.charCodeAt(i++);
		chr2 = str.charCodeAt(i++);
		chr3 = str.charCodeAt(i++);
		enc1 = chr1 >> 2;
		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
		enc4 = chr3 & 63;
		if (isNaN(chr2)) {
			enc3 = enc4 = 64;
		} else if (isNaN(chr3)) {
			enc4 = 64;
		}
		ret = ret + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
		}
	return ret; */
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
//	console.log(str.replace(/[2-9a-zA-Z=]/g," "));
	return str.replace(/[2-9a-zA-Z=]/g," ").split(' ').map(function(e){ return alphabet[e.toLowerCase()] || '';}).join(''); 
}


function OddEven(str){
	var a="",b="",c=0;
	var modal="";
	while(c<str.length){
		a+=str.charAt(c++);
		b+=str.charAt(c++);
	}
  $( "#oe").html('<a data-toggle="modal" href="#oeven">Odd/Even</a>');
    modal+='<table >';
    modal+="<tr><td><a href=\"#\" onclick=\"Copy2Text('odd'); return false\"> &#169;odd</a></td><td>:</td><td id='odd'>"+escapeHTML(a) + "</td></tr>";
    modal+="<tr><td><a href=\"#\" onclick=\"Copy2Text('even'); return false\"> &#169;even</a></td><td>:</td><td id='even'>"+escapeHTML(b) + "</td></tr>";
    modal+="<tr><td><a href=\"#\" onclick=\"Copy2Text2('even'); return false\"> &#169;Vignere Key</a></td><td>:</td><td id='even'>"+escapeHTML(b) + "</td></tr>";
    modal+="</table>";
  $( "#OEBody").html(modal);

}

function RenderRectangle(str){
  var results = [];
  var modal="";
  for(var i=2; i<(str.length); i++) {
    if( (str.length%i == 0) ) {
       results.push(i);
    }
  }
  if(results.length <1 ){
	$( "#rectangle").html("rectangle");
	return;
  }
  $( "#rectangle").html('<a data-toggle="modal" href="#rect">rectangle</a>');
  for(i=0;i<results.length;i++){
    var w = results[i];
    var h = str.length / results[i];
    var str1="",str2="",str3="",str4="";
    var str5="",str6="",str7="",str8="";
    modal+="<span><code>matrix "+w+"x"+h+"</code>";
    modal+='<table><tr><td>';
    modal+='<pre id=rec'+i+'>';
    for(j=0;j<str.length;j+=w){
       modal += escapeHTML(str.substr(j,w));
       modal += "\n";
       str1=str1+escapeHTML(str.substr(j,w));
       str2=escapeHTML(str.substr(j,w))+str2;
       str3=str3+escapeHTML(str.substr(j,w)).split("").reverse().join("");
       str4=escapeHTML(str.substr(j,w)).split("").reverse().join("")+str4;
    }
    modal+="</pre>";
    modal+='</td>';
    modal+='<td><table>';
    modal+='<tr><td>&nbsp;&nbsp;<a href="#" onclick="Copy2Text('+"'"+'Rect'+w+'-'+h+'-1'+"'"+'); return false"> &#169; </a>&nbsp;&nbsp;</td></tr>';
    modal+='<tr><td>&nbsp;&nbsp;<a href="#" onclick="Copy2Text('+"'"+'Rect'+w+'-'+h+'-2'+"'"+'); return false"> &#169; </a>&nbsp;&nbsp;</td></tr>';
    modal+='<tr><td>&nbsp;&nbsp;<a href="#" onclick="Copy2Text('+"'"+'Rect'+w+'-'+h+'-3'+"'"+'); return false"> &#169; </a>&nbsp;&nbsp;</td></tr>';
    modal+='<tr><td>&nbsp;&nbsp;<a href="#" onclick="Copy2Text('+"'"+'Rect'+w+'-'+h+'-4'+"'"+'); return false"> &#169; </a>&nbsp;&nbsp;</td></tr>';
    modal+='</table>';
    modal+='</td>';
    modal+='<td><table>';
    modal+='<tr><td id="Rect'+w+'-'+h+'-1">'+str1+'</td></tr>';
    modal+='<tr><td id="Rect'+w+'-'+h+'-2">'+str2+'</td></tr>';
    modal+='<tr><td id="Rect'+w+'-'+h+'-3">'+str3+'</td></tr>';
    modal+='<tr><td id="Rect'+w+'-'+h+'-4">'+str4+'</td></tr>';
    modal+='</table>';
    modal+='</td></tr></table>';
    modal+="</span>";
    modal+="<span><code>matrix "+w+"x"+h+" even/odd</code>";
    modal+='<table><tr><td>';
    modal+="<pre>";
    str1="";    str2="";    str3="";    str4="";
    for(j=0;j<str.length;j+=w){
       if((j/w) % 2 == 0){
           modal+=escapeHTML(str.substr(j,w))+"\n";
           str1=str1+escapeHTML(str.substr(j,w));
           str2=escapeHTML(str.substr(j,w))+str2;
           str3=str3+escapeHTML(str.substr(j,w)).split("").reverse().join("");
           str4=escapeHTML(str.substr(j,w)).split("").reverse().join("")+str4;
       }else{
           modal+=escapeHTML(str.substr(j,w).split("").reverse().join(""))+"\n";
           str1=str1+escapeHTML(str.substr(j,w).split("").reverse().join(""));
           str2=escapeHTML(str.substr(j,w).split("").reverse().join(""))+str2;
           str3=str3+escapeHTML(str.substr(j,w));
           str4=escapeHTML(str.substr(j,w))+str4;
       }
    }
    modal+="</pre>";
    modal+='</td>';
    modal+='<td><table>';
    modal+='<tr><td>&nbsp;&nbsp;<a href="#" onclick="Copy2Text('+"'"+'Rect'+w+'-'+h+'-1'+"'"+'); return false"> &#169; </a>&nbsp;&nbsp;</td></tr>';
    modal+='<tr><td>&nbsp;&nbsp;<a href="#" onclick="Copy2Text('+"'"+'Rect'+w+'-'+h+'-2'+"'"+'); return false"> &#169; </a>&nbsp;&nbsp;</td></tr>';
    modal+='<tr><td>&nbsp;&nbsp;<a href="#" onclick="Copy2Text('+"'"+'Rect'+w+'-'+h+'-3'+"'"+'); return false"> &#169; </a>&nbsp;&nbsp;</td></tr>';
    modal+='<tr><td>&nbsp;&nbsp;<a href="#" onclick="Copy2Text('+"'"+'Rect'+w+'-'+h+'-4'+"'"+'); return false"> &#169; </a>&nbsp;&nbsp;</td></tr>';
    modal+='</table>';
    modal+='</td>';
    modal+='<td><table>';
    modal+='<tr><td id="Rect'+w+'-'+h+'-1">'+str1+'</td></tr>';
    modal+='<tr><td id="Rect'+w+'-'+h+'-2">'+str2+'</td></tr>';
    modal+='<tr><td id="Rect'+w+'-'+h+'-3">'+str3+'</td></tr>';
    modal+='<tr><td id="Rect'+w+'-'+h+'-4">'+str4+'</td></tr>';
    modal+='</table>';
    modal+='</td></tr></table>';
    modal+="</span>";

    var text="";
    var matrix = new Array();
    for(var x=0;x<w;x++){
        matrix[x] = new Array();
    }
    var l=0,j=0,x=0,y=0,c=0,k=0;
    while(c < str.length){
      x=j; y=j; k=0;
      while(k<w-j*2){
        if(c<str.length){    matrix[x][y]=str.charAt(c);     }
        x++; c++; k++;
      }
      x--; y++; k=0;
      while(k<h-(j+1)*2){
        if(c<str.length){    matrix[x][y]=str.charAt(c);     }
        y++; c++; k++;
      }
      k=0; 
      while(k<w-j*2){
        if(c<str.length){    matrix[x][y]=str.charAt(c);     }
        x--; c++; k++;
      }
      x++; y--; k=0;
      while(k<h-(j+1)*2){
        if(c<str.length){    matrix[x][y]=str.charAt(c);     }
        y--; c++; k++;
      }
      j++;
    }
       for(k=0;k<h;k++){
    for(j=0;j<w;j++){
          text += escapeHTML(matrix[j][k]);
       }
       text += "\n";
    }
    modal+="<span><code>make @"+w+"x"+h+"</code>";
    modal+="<pre>";
    modal+=text;
    modal+="</pre>";
    modal+="</span>";


  }
  $( "#RectBody").html(modal);
}
function RenderTriangle(str){
  var results = 0;
  var modal=""; /*面倒なので・・・決めうち*/
  if(str.length ==3){
    results=2;
  }
  if(str.length ==6){
    results=3;
  }
  if(str.length ==10){
    results=4;
  }
  if(str.length ==15){
    results=5;
  }
  if(str.length ==21){
    results=6;
  }
  if(str.length ==28){
    results=7;
  }
  if(str.length ==36){
    results=8;
  }
  if(str.length ==45){
    results=9;
  }

  if(results== 0){
	$( "#triangle").html("triangle");
	return;
  }
  $( "#triangle").html('<a data-toggle="modal" href="#tri">triangle</a>');
  var w = 1;
  var h = results;
  var j=0;
  modal+="<span><code>triangle "+w+"x"+h+"</code>";
  modal+="<pre>";
  while(j<str.length){
     modal+=escapeHTML(str.substr(j,w))+"\n";
     j+=w;
     w++;
  }
  modal+="</pre>";
  modal+="</span>";

  w = results;
  h = 1;
  j=0;
  modal+="<span><code>triangle reverse</code>";
  modal+="<pre>";
  while(j<str.length){
     modal+=escapeHTML(str.substr(j,w))+"\n";
     j+=w;
     w--;
  }
  modal+="</pre>";
  modal+="</span>";
  $( "#TriBody").html(modal);
}

function Rot(str){
  var result="<table><tr><td>rot</td><td>:</td><td>result</td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td>rot</td><td>:</td><td>result</td></tr>";
  for( var i=1;i<26;i++){
    result+= "<tr><td>";
    result+= "<a href=\"#\" onclick=\"Copy2Text('Rot"+i+"'); return false\"> &#169;"+i+" </a>";
    result+= "</td><td>:</td><td id=\"Rot"+i+"\">";
    for(var j=0;j<str.length;j++){
       var a = str.charCodeAt(j) ;
       if (a>47 && a<58){ //numeric
          if(a+i > 77){
             a=a+i-30;
          }else if(a+i > 67){
             a=a+i-20;
          }else if(a+i > 57){
             a=a+i-10;
          }else{
             a=a+i;
          }
       }else if(a>64 && a<91){ //capital
          if(a+i > 90){
             a=a+i-26;
          }else{
             a=a+i;
          }
       }else if(a>96 && a<123){ //
          if(a+i > 122){
             a=a+i-26;
          }else{
             a=a+i;
          }
       }else{
          a=32;
       }
       result +=String.fromCharCode(a);
    }
    result+= "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td>";

    result+= "<a href=\"#\" onclick=\"Copy2Text('Rot3"+i+"'); return false\"> &#169;"+(0-i)+" </a>";
    result+= "</td><td>:</td><td id=\"Rot3"+i+"\">";
    for(var j=0;j<str.length;j++){
       var a = str.charCodeAt(j) ;
       if (a>47 && a<58){ //numeric
          if(a-i < 28){
             a=a-i+30;
          }else if(a-i <  38){
             a=a-i+20;
          }else if(a-i <  48){
             a=a-i+10;
          }else{
             a=a-i;
          }
       }else if(a>64 && a<91){ //capital
          if(a-i <  65){
             a=a-i+26;
          }else{
             a=a-i;
          }
       }else if(a>96 && a<123){ //
          if(a-i <  97){
             a=a-i+26;
          }else{
             a=a-i;
          }
       }else{
          a=32;
       }
       result +=String.fromCharCode(a);
    }


    result+= "</td></tr>";
  }
  return result;
}

function Railfences (str){
  var result="<table><tr><td>rails</td><td>:</td><td>result</td></tr>";
  for(var j=2;j<str.length;j++){
    result += "<tr><td><a href=\"#\" onclick=\"Copy2Text('rails"+j+"'); return false\"> &#169;"+j+"</a>";
    result += "</td><td>:</td><td id=\"rails"+j+"\">";
    result += rail_decode(str,j,0);
    result += "</td></tr>";
  }
  result += "</table>";
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

function Skip_Decode2(t, sk, st){
   var i, pos, o = "",temp1=t,temp2="";
   for (i = 0, pos = st; i < t.length; i ++){
      o += temp1.charAt(pos);
      temp2 += temp1.substr(pos+1,sk-1);
      pos += sk;
      if(pos >= temp1.length ){
         pos = 0;
         sk=sk-1;
         temp1=temp2;
         temp2="";
      }
      if(sk<1){
        o +=temp1;
        i= t.length +1;
      }
   }
   return o;
}

function skipresult(str){
	var result ="<table>";
	for (var i=2; i<str.length;i++){
		if(gcd(i,str.length) <2){
			result +="<tr><td><a href=\"#\" onclick=\"Copy2Text('skip-"+i+"'); return false\"> &#169;";
			result += ' V1 ('+i+') </a></td><td>:</td><td id="skip-'+i+'">'+ Skip_Decode(str, i, 0) +"</td></tr>\n";
		}
	}
	for (var i=3; i<str.length;i++){
		result +="<tr><td><a href=\"#\" onclick=\"Copy2Text('skip2-"+i+"'); return false\"> &#169;";
		result += ' V2 ('+i+') </a></td><td>:</td><td id="skip2-'+i+'">'+ Skip_Decode2(str, i, 0) +"</td></tr>\n";
//		result += ' V2 ('+i+') : '+ Skip_Decode2(str, i, 0) +"<br>\n";
	}

	result +="</table>";

	return result;

}

function gcd(x, y) {
	if (y == 0) {
		return x;
	}
	else {
		return gcd(y, x % y);
	}
}

function Keyboard(str){
   var text=str;
   var KEYTO = new Array();
   var TITLE = new Array();
   var KEYFROM
            ="1234567890qwertyuiopasdfghjkl;zxcvbnm,./!@#$%^&*()QWERTYUIOPASDFGHJKL:ZXCVBNM<>?";
   KEYTO[0] ="12345678901234567890123456789012345678901234567890123456789012345678901234567890";
   KEYTO[1] ="0987654321poiuytrewq;lkjhgfdsa/.,mnbvcxz0987654321POIUYTREWQ:LKJHGFDSA?><MNBVCXZ";
   KEYTO[2] ="0123456789pqwertyuio;asdfghjkl/zxcvbnm,.0123456789PQWERTYUIO:ASDFGHJKL?ZXCVBNM<>";
   KEYTO[3] ="2345678901wertyuiopqsdfghjkl;axcvbnm,./z2345678901WERTYUIOPQSDFGHJKL:AXCVBNM<>?Z";
   KEYTO[4] ="1234567890/.,mnbvcxz;lkjhgfdsapoiuytrewq1234567890?><MNBVCXZ:LKJHGFDSAPOIUYTREWQ";
   KEYTO[5] ="/.,mnbvcxz;lkjhgfdsapoiuytrewq0987654321?><MNBVCXZ:LKJHGFDSAPOIUYTREWQ0987654321";
   KEYTO[6] ="zxcvbnm,./asdfghjkl;qwertyuiop1234567890ZXCVBNM<>?ASDFGHJKL:QWERTYUIOP1234567890";
   TITLE[0] ="to numeric";
   TITLE[1] ="line symmetry";
   TITLE[2] ="abc symmetry";
   TITLE[3] ="left shift";
   TITLE[4] ="right shift";
   TITLE[5] ="all symmetry";
   TITLE[6] ="vertically symmetry";

  var result="<table><tr><td>keyboard</td><td>:</td><td>result</td></tr>";
  for(var j=0;j<KEYTO.length;j++){
    result += "<tr><td> <a href=\"#\" onclick=\"Copy2Text('line" +j+"'); return false\"> &#169;";
    result += TITLE[j];
    result += "</a></td><td>:</td><td id=\"line"+j+"\">";
    decoded_text="";
    text.split("").forEach(function(val,index){ decoded_text +=KEYTO[j].charAt(KEYFROM.indexOf(val));  });
    result += escapeHTML(decoded_text);
    result += "</td></tr>";
  }
  result += "</table>";
  return result;
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



var checknum ="(three|seven|eight|thre|four|five|seve|eigh|nine|two|thr|fou|fiv|six|sev|eig|nin|tw|th|fo|fi|si|se|ei|ni|2|3|4|5|6|7|8|9|ii|iii|iv|v|vi|vii|viii|ix)";
var checknum2 ="(three|seven|eight|zero|thre|four|five|seve|eigh|nine|zer|one|two|thr|fou|fiv|six|sev|eig|nin|ze|on|tw|th|fo|fi|si|se|ei|ni|0|1|2|3|4|5|6|7|8|9|i|ii|iii|iv|v|vi|vii|viii|ix)";

var numbercheckinv1 ='^([a-z]{3})'+checknum+checknum+'([0-9a-z]*?)'+checknum+checknum+checknum+'([a-z]{2})$';
var numbercheckinv2 ='^(...)'+checknum+checknum+'([0-9a-z]*?)'+checknum+checknum+checknum+'(..)$';
var numbercheckjoj1 ='^([a-z])'+checknum2+'([a-z])'+checknum2+'([0-9a-z]*?)'+'([a-z])'+checknum2+'([a-z]{2})$';
var numbercheckjoj2 ='^(.)'+checknum2+'(.)'+checknum2+'([0-9a-z]*?)'+'(.)'+checknum2+'(..)$';
var numbercheckano1 ='^([a-z]{8})'+checknum+'([0-9a-z]*?)'+checknum+'$';
var numbercheckano2 ='^(........)'+checknum+'([0-9a-z]*?)'+checknum+'$';
var numbercheckold1 ='^'+checknum+'([a-z]{3})'+checknum+'([0-9a-z]*?)'+'([a-z])'+checknum+'([a-z])'+checknum+'([a-z])$';
var numbercheckold2 ='^'+checknum+'(...)'+checknum+'([0-9a-z]*?)'+'(.)'+checknum+'(.)'+checknum+'(.)$';
var numbercheckar1  ='^([0-9a-z]*?)'+checknum+'([a-z]{2})'+checknum+checknum+'([a-z]{2})'+checknum+'$';
var numbercheckar2  ='^([0-9a-z]*?)'+checknum+'(..)'+checknum+checknum+'(..)'+checknum+'$';

var numeric ={
	"a" : "0",										"ze" : "0" ,	"zer" : "0" ,	"zero" : "0" ,
	"b" : "1",		"i" : "1" ,		"1" : "1",		"on" : "1" ,	"one" : "1" ,	
	"c" : "2",		"ii" : "2" ,	"2" : "2",		"tw" : "2" ,	"two" : "2" ,	
	"d" : "3",		"iii" : "3" ,	"3" : "3",		"th" : "3" ,	"thr" : "3" ,	"thre" : "3" ,	"three" : "3" ,
	"e" : "4",		"iv" : "4" ,	"4" : "4",		"fo" : "4" ,	"fou" : "4" ,	"four" : "4" ,
	"f" : "5",		"v" : "5" ,		"5" : "5",		"fi" : "5" ,	"fiv" : "5" ,	"five" : "5" ,
	"g" : "6",		"vi" : "6" ,	"6" : "6",		"si" : "6" ,	"six" : "6" ,
	"h" : "7",		"vii" : "7" ,	"7" : "7",		"se" : "7" ,	"sev" : "7" ,	"seve" : "7" ,	"seven" : "7" ,
	"i" : "8",		"viii" : "8" ,	"8" : "8",		"ei" : "8" ,	"eig" : "8" ,	"eigh" : "8" ,	"eight" : "8" ,
	"j" : "9",		"ix" : "9" ,	"9" : "9",		"ni" : "9" ,	"nin" : "9" ,	"nine" : "9" ,
};

var roman = {
	"i" : "1",		"v" : "5",		"x" : "10",		"l" : "50",	
	"c" : "100",	"d" : "500",	"m" : "1000",
};

var otoko = {
	"1"   : "i",	"5"   : "v",	"10"   : "x",	"50" : "l",	
	"100" : "c",	"500" : "d",	"1000" : "m",
};

var leet = {
	"1"   : "l",	"2"   : "z",	"3"   : "e",	"4" : "a",	"5" : "s",	
	"6"   : "b",	"7"   : "t",	"8"   : "B",	"9" : "q",	"0" : "o",	
};
var leetn = {
	"a"   : "4",	"b"   : "6",	"e"   : "3",	"g" : "9",	"i" : "1",	
	"l"   : "1",	"o"   : "0",	"q"   : "9",	"s" : "5",	"t" : "7",	
	"v"   : "5",	"z"   : "2",
};


function NumericChange(str){
	var res="";
	str=str.toLowerCase();
	res="Investigate Passcode.<br>";
	var code;

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
	res+="Old Passcode.<br>";

	if( code  = str.match(numbercheckold1) ){
		if($.inArray(code[4], KeyMap) >= 0){
			res += numeric[code[1]]+code[2]+numeric[code[3]]+'<font color="red">'+code[4]+'</font>'+code[5]+numeric[code[6]]+code[7]+numeric[code[8]]+code[9];
		}else{
			res += numeric[code[1]]+code[2]+numeric[code[3]]+'<font color="green">'+code[4]+'</font>'+code[5]+numeric[code[6]]+code[7]+numeric[code[8]]+code[9];
		}
	}else if( code  = str.match(numbercheckold2) ){
		if($.inArray(code[4], KeyMap) >= 0){
			res += numeric[code[1]]+code[2]+numeric[code[3]]+'<font color="red">'+code[4]+'</font>'+code[5]+numeric[code[6]]+code[7]+numeric[code[8]]+code[9];
		}else{
			res += numeric[code[1]]+code[2]+numeric[code[3]]+'<font color="green">'+code[4]+'</font>'+code[5]+numeric[code[6]]+code[7]+numeric[code[8]]+code[9];
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

	res+="<br><br>";
	res+="Not FR Passcode.<br>";

	if( code  = str.match(numbercheckar1) ){
		if($.inArray(code[1], KeyMap) >= 0){
			res += '<font color="red">'+code[1]+'</font>'+numeric[code[2]]+code[3]+numeric[code[4]]+numeric[code[5]]+code[6]+numeric[code[7]];
		}else{
			res += '<font color="green">'+code[1]+'</font>'+numeric[code[2]]+code[3]+numeric[code[4]]+numeric[code[5]]+code[6]+numeric[code[7]];
		}
	}else if( code  = str.match(numbercheckar2) ){
		if($.inArray(code[1], KeyMap) >= 0){
			res += '<font color="red">'+code[1]+'</font>'+numeric[code[2]]+code[3]+numeric[code[4]]+numeric[code[5]]+code[6]+numeric[code[7]];
		}else{
			res += '<font color="green">'+code[1]+'</font>'+numeric[code[2]]+code[3]+numeric[code[4]]+numeric[code[5]]+code[6]+numeric[code[7]];
		}
	}else{
		res+="none";
	}

	return res;
}


function UpdateModal(str){
	RenderRectangle(Hex2String(str).trim());
	RenderTriangle(Hex2String(str).trim());

	

	$("#vige").html('<a data-toggle="modal" href="#vigenere">vigenere</a>');
	$("#vigenereword").html("original : " + Hex2String(str));
	$("#vres").html('');
	$("#bitxorres").html('');
	$("#ManipulateText").html('');
	$("#ManipulateResult").html('');
	$("#Manipulate64Result").html('');

	$("#bitxorword").html("original : " + Hex2String(str));
	$("#rotate").html('<a data-toggle="modal" href="#rot">rotate</a>');
	$("#rotateword").html("original : " + Hex2String(str));
	$("#rotres").html(Rot( Hex2String(str) ));
	$("#rail").html('<a data-toggle="modal" href="#rails">Railfence</a>');
	$("#railword").html("original : " + Hex2String(str));
	$("#Railfences").html(Railfences( Hex2String(str) ));

	$("#tel1").html('<a data-toggle="modal" href="#tel1m">TelPad</a>');
	$("#tel1word").html("original : " + Hex2String(str));
	$("#tel1pad").html(tel1( Hex2String(str) ));
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
	$("#atomicResult1").html(encipherAtomicNumbers(Hex2String(str)));
	$("#atomicResult2").html(encipherAtomicNumbers2(Hex2String(str)));
	$("#atomicResult1text").html(Hex2String(GetHexbyASCII(encipherAtomicNumbers(Hex2String(str)))));
	$("#atomicResult2text").html(Hex2String(GetHexbyASCII(encipherAtomicNumbers2(Hex2String(str)))));

	$("#leet").html('<a data-toggle="modal" href="#Leet">1337</a>');
	$("#LeetText").html( Hex2String(str));

}

function checkcode(str){
	$("#checkText").html("original : " + $(str).val());
	$("#checkResult").html(NumericChange($(str).val()));
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

function Copy2Text(fromstr){
	$( ".formtext"    ).val($("#"+fromstr).html());
	num=1;
	PrintAlltext( GetHexbyText(    $( ".formtext"    ).val().trim()));
}

function Copy2Text2(fromstr){
	$("#vkey").val($("#"+fromstr).html());
}


function Copy2Dec(fromstr){
	$( ".formascii"    ).val($("#"+fromstr).html());
	num=5;
	PrintAlltext( GetHexbyASCII(    $( ".formascii"    ).val().trim()));
}

$(document).ready(function() {
  var key1=0,key2=0,key3=0,key4=0,key5=0,key6=0,key7=0,key8=0,key9=0,key10=0,key11=0;

  $.getJSON( "https://raw.githubusercontent.com/ingresscodes/keywords/master/keywords.json", function( json ) {
    for(var index in json.keywords) {
//       KeyMap[ String(json.keywords[index].word).trim() ] = String(json.keywords[index].atbash).trim() ;
       KeyMap.push( String(json.keywords[index].word).trim() );
    }
 });
  $.getJSON( "https://raw.githubusercontent.com/ingresscodes/keywords/master/jojowotd.json", function( json ) {
    for(var index in json.wotds) {
//       KeyMap[ String(json.keywords[index].word).trim() ] = String(json.keywords[index].atbash).trim() ;
       KeyMapJoJo.push( String(json.wotds[index].wotd).trim() );
    }
 });

  $('#mannu2').change(function() {
    if ($('#mannu2').is(':checked')) {
      key8=1;
      $('#mannu').prop("checked",false);
      $('#mannl').prop("checked",false);
      $('#mannl2').prop("checked",false);
   }else{
      key8=0;
   }
   dochange();
  });
  $('#mannl2').change(function() {
    if ($('#mannl2').is(':checked')) {
      key9=1;
      $('#mannu').prop("checked",false);
      $('#mannu2').prop("checked",false);
      $('#mannl').prop("checked",false);
   }else{
      key9=0;
   }
   dochange();
  });
  $('#manun2').change(function() {
    if ($('#manun2').is(':checked')) {
      key10=1;
      $('#manun').prop("checked",false);
   }else{
      key10=0;
   }
   dochange();
  });
  $('#manln2').change(function() {
    if ($('#manln2').is(':checked')) {
      key11=1;
      $('#manln').prop("checked",false);
   }else{
      key11=0;
   }
   dochange();
  });
  $('#mannu').change(function() {
    if ($('#mannu').is(':checked')) {
      key1=1;
      $('#mannu2').prop("checked",false);
      $('#mannl').prop("checked",false);
      $('#mannl2').prop("checked",false);
   }else{
      key1=0;
   }
   dochange();
  });
  $('#mannl').change(function() {
    if ($('#mannl').is(':checked')) {
      key2=1;
      $('#mannu').prop("checked",false);
      $('#mannu2').prop("checked",false);
      $('#mannl2').prop("checked",false);
   }else{
      key2=0;
   }
   dochange();
  });
  $('#manun').change(function() {
    if ($('#manun').is(':checked')) {
      key3=1;
      $('#manun2').prop("checked",false);
   }else{
      key3=0;
   }
   dochange();
  });
  $('#manln').change(function() {
    if ($('#manln').is(':checked')) {
      key4=1;
      $('#manln2').prop("checked",false);
   }else{
      key4=0;
   }
   dochange();
  });
  $('#manex').change(function() {
    if ($('#manex').is(':checked')) {
      key5=1;
   }else{
      key5=0;
   }
   dochange();
  });
  $('#mansymbol').change(function() {
    if ($('#mansymbol').is(':checked')) {
      key6=1;
   }else{
      key6=0;
   }
   dochange();
  });
  $('#manrev').change(function() {
    if ($('#manrev').is(':checked')) {
      key7=1;
   }else{
      key7=0;
   }
   dochange();
  });
  function dochange() {
    var i=0;
    var result="";
    var s=$('#ManipulateText').text();
    while(i<s.length){
      var c=s.charCodeAt(i);
      if(47<c && c<58){
        var flag=0;
        if(47<s.charCodeAt(i+1) && s.charCodeAt(i+1)<58){ 
           if( (c-48)*10+s.charCodeAt(i+1)-48 <26){
             c=(c-48)*10+s.charCodeAt(i+1)-48;
             i++;
             flag=1;
           }else{
             c=c-48;
           }
        }else{
           c=c-48;
        }
        if(key1==1){
           result += String.fromCharCode(65+c);
        }else if(key2==1){
           result += String.fromCharCode(97+c);
        }else if(key8==1){
           result += String.fromCharCode(64+c);
        }else if(key9==1){
           result += String.fromCharCode(96+c);
        }else{
           if(flag==1){
               result += ("00"+parseInt(c).toString(10)).slice(-2);
           }else{
               result += parseInt(c).toString(10);
           }
        }
      }else if (64<c && c<91){
        if(key3==1){
           result += parseInt(c-65).toString(10);
        }else if(key10==1){
           result += parseInt(c-64).toString(10);
        }else if(key5==1){
           result += String.fromCharCode(c+32);
        }else{
           result +=String.fromCharCode(c);
        }
      }else if (96<c && c<123){
        if(key4==1){
           result += parseInt(c-97).toString(10);
        }else if(key11==1){
           result += parseInt(c-96).toString(10);
        }else if(key5==1){
           result += String.fromCharCode(c-32);
        }else{
           result +=String.fromCharCode(c);
        }
      }else{
        if(key6==1){
          if(c==33){ result += "1";
          }else if(c==33){ result += "1";
          }else if(c==64){ result += "2";
          }else if(c==35){ result += "3";
          }else if(c==36){ result += "4";
          }else if(c==37){ result += "5";
          }else if(c==94){ result += "6";
          }else if(c==38){ result += "7";
          }else if(c==42){ result += "8";
          }else if(c==40){ result += "9";
          }else if(c==41){ result += "0";
          }
        }
      }
      i++;
    }
   if(key7==1){
       result=result.split('').reverse().join('');
   }
   $('#ManipulateResult').text(result);
   $('#Manipulate64Result').text(atob(result));
  }

  $('#vkey').keyup(function() {
    if ($('#vkey').val().length >= 1) {
      dolookup();
   }
  });
  $('#vauto').change(function() {
    if ($('#vkey').val().length >= 1) {
      dolookup();
   }
  });
  $('#gronsfeld').change(function() {
    if ($('#vkey').val().length >= 1) {
      dolookup();
   }
  });

  $('#vrev').change(function() {
    $(".formtext").val($(".formtext").val().split("").reverse().join(""));
    PrintAlltext(GetHexbyText(    $( ".formtext"    ).val().trim()));
    if ($('#vkey').val().length >= 1) {
      dolookup();
   }
  });
  $('#vswap').change(function() {
    var temp = $(".formtext").val();
    $(".formtext").val($('#vkey').val());
    $('#vkey').val(temp);
    PrintAlltext(GetHexbyText(    $( ".formtext"    ).val().trim()));
    if ($('#vkey').val().length >= 1) {
      dolookup();
   }
  });


  function dolookup() {
    $('#vres').empty();
    var orig=$(".formtext").val();
    var key=$('#vkey').val();
    if($('#gronsfeld').is(':checked')){
       key=key.split("").map(function(e){ return num2al[e.toLowerCase()] || '';}).join('');
    }
    if($('#vauto').is(':checked')){
       var res="";
       var i=0;
       var j=key.length;
       while(i< orig.length ){
          var temp=vigeneredecrypt(orig.substr(i,j),key);
          key=temp;
          res += temp;
          i+=j;
       }
       $('#vres').html(res);
    }else{
       $('#vres').html(vigeneredecrypt(orig,key));
    }
  }
  $('#bitxornum').keyup(function() {
    if ($('#bitxornum').val().length >= 1) {
      dolookup2();
   }
  });

  function dolookup2() {
    $('#bitxorres').empty();
    var orig=$(".formtext").val();
    var key=$('#bitxornum').val();
    var result="";
    var i=0;
    var j=0;
    while(i<orig.length){
       if(j==key.length){	j=0;	}
       if($('#numeric').is(':checked')){
          result += String.fromCharCode(orig.charCodeAt(i) ^ parseInt(key.charAt(j),10));
       }else{
         result += String.fromCharCode(orig.charCodeAt(i) ^ key.charCodeAt(j));
       }
       i++;
       j++;
    }
    $('#bitxorres').html(result);
  }

  var leet1=0,leet2=0,leet3=0,leet4=0;

  function doleet() {
    $('#LeetResult').empty();
    var orig=$(".formtext").val().toLowerCase();
    var i=0;
    var c="";
    var result="";
    while(i<orig.length){
      c=orig.charAt(i);
      if(leet1 == 1){
        if (c in leet){
           result = result + leet[c];
        }else{
           result = result + c;
        }
      }else if(leet2 == 1){
        if (c in leetn){
           result = result + leetn[c];
        }else{
           result = result + c;
        }
      }else if(leet3 == 1){
        if (c in roman){
           result = result + roman[c];
        }else{
           result = result + c;
        }
      }else if(leet4 == 1){
        if(c === "1" || c === "5" ){
           while(orig.charAt(i+1) ==="0"){
             c=c+orig.charAt(i+1);
             i++;
           }
           result = result + otoko[c];
        }else{
           result = result + c;
        }
      }else{
         result = result + c;
      }
      i++
    }
    $('#LeetResult').html(result);
  }

  $('#Leet1').change(function() {
    if ($('#Leet1').is(':checked')) {
      leet1=1;
      leet2=0;
      $('#Leet2').prop("checked",false);
   }else{
      leet1=0;
   }
   doleet();
  });
  $('#Leet2').change(function() {
    if ($('#Leet2').is(':checked')) {
      leet2=1;
      leet1=0;
      $('#Leet1').prop("checked",false);
   }else{
      leet2=0;
   }
   doleet();
  });

  $('#Leet3').change(function() {
    if ($('#Leet3').is(':checked')) {
      leet3=1;
      leet4=0;
      $('#Leet4').prop("checked",false);
   }else{
      leet3=0;
   }
   doleet();
  });
  $('#Leet4').change(function() {
    if ($('#Leet4').is(':checked')) {
      leet3=0;
      leet4=1;
      $('#Leet3').prop("checked",false);
   }else{
      leet4=0;
   }
   doleet();
  });
});
