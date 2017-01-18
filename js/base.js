var target="";
$( ".formtext"    ).change(function() {  PrintAlltext( GetHexbyText(  $( ".formtext"    ).val())); });
$( ".formreverse" ).change(function() {  PrintAlltext( GetHexbyText(  $( ".formreverse" ).val().split('').reverse().join(''))); });
$( ".formbinary"  ).change(function() {  PrintAlltext( GetHexbyBinary($( ".formbinary"  ).val())); });
$( ".formoctal"   ).change(function() {  PrintAlltext( GetHexbyOctal( $( ".formoctal"   ).val())); });
$( ".formhex"     ).change(function() {  PrintAlltext(                $( ".formhex"     ).val());  });
$( ".formascii"   ).change(function() {  PrintAlltext( GetHexbyASCII( $( ".formascii"   ).val())); });
$( ".formbase32"  ).change(function() {  PrintAlltext( GetHexbyBase32($( ".formbase32"  ).val())); });
$( ".formbase64"  ).change(function() {  PrintAlltext( GetHexbyBase64($( ".formbase64"  ).val())); });
$( ".formbase85"  ).change(function() {  PrintAlltext( GetHexbyBase85($( ".formbase85"  ).val())); });
$( ".formuu"      ).change(function() {  PrintAlltext( GetHexbyUU(    $( ".formuu"      ).val())); });
$( ".formxx"      ).change(function() {  PrintAlltext( GetHexbyXX(    $( ".formxx" ).val())); });
$( ".formmorse"   ).change(function() {  PrintAlltext( GetHexbyText($( ".formtext" ).val())); });
$( ".formatbash"  ).change(function() {  PrintAlltext( GetHexbyText($( ".formtext" ).val())); });
$( ".formpfair"   ).change(function() {  PrintAlltext( GetHexbyText($( ".formtext" ).val())); });
$( ".formbifid"   ).change(function() {  PrintAlltext( GetHexbyText($( ".formtext" ).val())); });

function cleartextarea(){
	$( "textarea" ).each(function(index){ $( this ).val(""); }); 
}

/* for Debug */
function echotext(){
	$( "textarea" ).each(function(index){ console.log( index + ": " + $( this ).val() ); }); 
}

/* for octal,ascii,hex*/
function trimspace(str){
	return str.replace(/ /g, '');
}

function GetHexbyXX(text) {
	var tebahpla = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var alphabet = "+-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	var str = "";
	for (k = 1; k < text.length; k++) {
		var coded_letter = text.charAt(k);
		var letter_index = alphabet.indexOf(coded_letter);
		str += tebahpla.charAt(letter_index);
	}
	return GetHexbyBase64(str);

}


function GetHexbyUU(line) {
	var bytes = (line.charCodeAt(0) - 32);
	var a, b, c, d;
	if (bytes == 64) { // "`" - 32
	    bytes = 0;
	    return "";
	};
	var chunks = Math.ceil(bytes / 3) * 4; // (6 to 8 conversion)
	var j = 1;
	var a, b, c, d, data , retstr;
	retstr="";
	while (j < chunks){
		a = line.charCodeAt(j++) - 32;
		b = line.charCodeAt(j++) - 32;
		c = line.charCodeAt(j++) - 32;
		d = line.charCodeAt(j++) - 32;
		data = a << 18;
		data += b << 12
		data += c << 6;
		data += d << 0;
		a = (data >> 16)& 255;
		b = (data >> 8)& 255;
		c = data & 255;
		if( (a>31) && (a<127) ){
			retstr+=("00"+a.toString(16)).slice( -2 )+" ";   //String.fromCharCode(a);
			if( (b>31) && (b<127) ){
				retstr+=("00"+b.toString(16)).slice( -2 )+" "; // String.fromCharCode(b);
				if( (c>31) && (c<127) ){
					retstr+=("00"+c.toString(16)).slice( -2 )+" "; //String.fromCharCode(c);
				}
			}
		}
	}
	return retstr.trim();
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
	var e={},i,b=0,c,x,l=0,a,ret='',L=str.length;
	var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	for(i=0;i<64;i++){e[A.charAt(i)]=i;}
	for(x=0;x<L;x++){
		c=e[str.charAt(x)];b=(b<<6)+c;l+=6;
		while(l>=8){((a=(b>>>(l-=8))&0xff)||(x<(L-2)))&&(ret+=("00"+a.toString(16)).slice( -2 )+" ");}
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
		var val = keyStr.indexOf(str.charAt(i++));
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

function GetHexbyASCII(str){
	var ret="";
	str=trimspace(str);
	for (var i = 0; i < str.length; i += 3){
		ret +=  ("000"+parseInt(str.substr(i, 3), 10).toString(16)).slice( -2 );
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

function GetHexbyBinary(str){
	str=trimspace(str);
	var ret="";
	for (var i = 0; i < str.length; i += 8){
		ret += parseInt(str.substr(i, 8), 2).toString(16);	
		ret += " ";
	}
	return ret;
}

function GetHexbyOctal(str){
	str=trimspace(str);
	var ret="";
	for (var i = 0; i < str.length; i += 3){
		ret += parseInt(str.substr(i, 3), 8).toString(16);	
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
  return String.fromCharCode(startbit + 32)+str;
}



function PrintAlltext(str){
	cleartextarea();
	$( ".formtext"    ).val(Hex2String(str));
	$( ".formreverse" ).val(Hex2String(str).split('').reverse().join(''));
	$( ".formbinary"  ).val(Hex2Bin(str)   );
	$( ".formoctal"   ).val(Hex2Oct(str)   );
	$( ".formhex"     ).val(str            );
	$( ".formascii"   ).val(Hex2Dec(str)   );
	$( ".formbase32"  ).val(Base32(str)    );
	$( ".formbase64"  ).val(Base64(str)    );
	$( ".formbase85"  ).val(Base85(str)    );
	$( ".formuu"      ).val(UUencode(str)  );
	$( ".formxx"      ).val(XXencode(str)  );
	$( ".formmorse"   ).val();
	$( ".formatbash"  ).val();
	$( ".formpfair"   ).val();
	$( ".formbifid"   ).val();
}