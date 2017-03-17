var target="";
$( ".formtext"    ).change(function() {  PrintAlltext( GetHexbyText(    $( ".formtext"    ).val())); });
$( ".formreverse" ).change(function() {  PrintAlltext( GetHexbyText(    $( ".formreverse" ).val().split('').reverse().join(''))); });
$( ".formbinary"  ).change(function() {  PrintAlltext( GetHexbyBinary(  $( ".formbinary"  ).val())); });
$( ".formoctal"   ).change(function() {  PrintAlltext( GetHexbyOctal(   $( ".formoctal"   ).val())); });
$( ".formhex"     ).change(function() {  PrintAlltext( GetHexbyHex  (   $( ".formhex"     ).val())); });
$( ".formascii"   ).change(function() {  PrintAlltext( GetHexbyASCII(   $( ".formascii"   ).val())); });
$( ".formbase32"  ).change(function() {  PrintAlltext( GetHexbyBase32(  $( ".formbase32"  ).val())); });
$( ".formbase64"  ).change(function() {  PrintAlltext( GetHexbyBase64(  $( ".formbase64"  ).val())); });
$( ".formbase85"  ).change(function() {  PrintAlltext( GetHexbyBase85(  $( ".formbase85"  ).val())); });
$( ".formuu"      ).change(function() {  PrintAlltext( GetHexbyUU(      $( ".formuu"      ).val())); });
$( ".formxx"      ).change(function() {  PrintAlltext( GetHexbyXX(      $( ".formxx"      ).val())); });
$( ".formmorse"   ).change(function() {  PrintAlltext( GetHexbyMorse(   $( ".formmorse"   ).val())); });
$( ".formatbash"  ).change(function() {  PrintAlltext( GetHexbyAtbash(  $( ".formatbash"  ).val())); });
$( ".formpfair"   ).change(function() {  PrintAlltext( GetHexbyPlayfair($( ".formpfair"   ).val())); });
$( ".formbifid"   ).change(function() {  PrintAlltext( GetHexbyBifid(   $( ".formbifid"   ).val())); });
$( ".formSymbols" ).change(function() {  Symbols2Numeric ( $( ".formSymbols"  ).val()); });
$( ".formNumeric" ).change(function() {  Numeric2Polybius( $( ".formNumeric"  ).val()); });
$( ".formPolybius").change(function() {  Polybius2Numeric( $( ".formPolybius" ).val()); });

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

function Symbols2Numeric(text) {
	var KEYFROM = "!@#$%^&*()";
	var KEYTO   = "1234567890";
	var decoded_text="";
	text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO.charAt(KEYFROM.indexOf(val));  });
	$( ".formNumeric"   ).val(decoded_text);
	Numeric2Polybius( $( ".formNumeric"  ).val());
}

function Numeric2Polybius(text) {
	var PolybiusMap = {
		"11"	: "a",	"12"	: "b",	"13"	: "c",	"14"	: "d",	"15"	: "e",
		"21"	: "f",	"22"	: "g",	"23"	: "h",	"24"	: "j",	"25"	: "k",
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
		"f"	: "21" ,	"g"	: "22" ,	"h"	: "23" ,	"j"	: "24" ,	"k"	: "25",
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
/*	var e={},i,b=0,c,x,l=0,a,ret='',L=str.length;
	var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	for(i=0;i<64;i++){e[A.charAt(i)]=i;}
	for(x=0;x<L;x++){
		c=e[str.charAt(x)];
		b=(b<<6)+c;
		l+=6;
		while(l>=8){
			((a=(b>>>(l-=8))&0xff)||(x<(L-2)))&&(ret+=("00"+a.toString(16)).slice( -2 )+" ");
		}
	}
	return ret;
*/
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

/* for Output */


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
	var tebahpla = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA9876543210";
	var str = "";
	for (k = 0; k < text.length; k++) {
		var coded_letter = text.charAt(k);
		var letter_index = alphabet.indexOf(coded_letter);
			str += tebahpla.charAt(letter_index);
		}
	return str;
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
/*
	var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
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
	return ret;
*/
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
		'"'	 : "010010",	"$"	 : "0001001",
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
		'0 000'	: '&',	'10010'	: '⁄',
	};
	return str.split(' ').map(function(e){ return alphabet[e.toLowerCase()] || '';}).join(''); 
}


function OddEven(str){
	var a="",b="",c=0;
	while(c<str.length){
		a+=str.charAt(c++);
		b+=str.charAt(c++);
	}
	return "&nbsp; Odd/Even-> "+a+" : "+b;
}

function PrintAlltext(str){
	cleartextarea();
	$( "#text"        ).html(OddEven(Hex2String(str)));
	$( ".formtext"    ).val(Hex2String(str));
	$( ".formreverse" ).val(Hex2String(str).split('').reverse().join(''));
	$( ".formbinary"  ).val(Hex2Bin(str)   );
	$( ".formoctal"   ).val(Hex2Oct(str)   );
	$( ".formhex"     ).val(str            );
	$( ".formascii"   ).val(Hex2Dec(str)   );
	$( ".formbase32"  ).val(Base32(str.toUpperCase())    );
	$( ".formbase64"  ).val(Base64(str)    );
	$( ".formbase85"  ).val(Base85(str)    );
	$( ".formuu"      ).val(UUencode(str)  );
	$( ".formxx"      ).val(XXencode(str)  );
	$( ".formmorse"   ).val(Str2Morse(Hex2String(str)));
	$( ".formatbash"  ).val(Atbash(Hex2String(str)));
	$( ".formpfair"   ).val(Playfair(1,Hex2String(str),"J","I","",0));
	$( ".formbifid"   ).val(Bifid(1,Hex2String(str),"J","I","",0));
}