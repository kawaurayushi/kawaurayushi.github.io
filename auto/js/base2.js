
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


/* for Symbol / Numeric / Polybius */
function trimspace(str){
	return str.replace(/ /g,"");
}

function trimCRLF(str){
	return str.replace(/[\n\r]/g,"");
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
		'010101': '.',	'110011': ',',	'001100': '?',
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

function Hex2String(str){
	var ret="";
	for (var i = 0; i < str.length; i += 2){
		ret +=  String.fromCharCode(parseInt(str.substr(i, 2), 16).toString(10));
	}
	return ret;
}

function Dec2String(str){
	var ret="";
	for (var i = 0; i < str.length; i += 2){
		ret +=  String.fromCharCode(parseInt(str.substr(i, 2), 10).toString(10));
	}
	return ret;
}

function baconian(text){
	var result="";
	for (var i=0; i< text.length; i+=5){
		result += String.fromCharCode(65 + parseInt(text.substr(i, 5),2)) || ' ';
	}
	return result;
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


function baudot(str){
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
	PrintAlltext(            $( ".formmorse").val() );
}


function ReverseMorse(){
	var s = $( ".formmorse"   ).val();
	$( ".formmorse"   ).val(s.split('').reverse().join(''));
	PrintAlltext(            $( ".formmorse").val() );

}


function braille(str){
	var result="<span><code>braille 2xN(=3m)</code><pre>";
	str=str.replace(/\-/g,"1");
	str=str.replace(/\./g,'0');
	var original=str;
	var a="",b="",c="";
	for(var i=0;i<str.length;i+=6){
		a += str.charAt(i);
		a += str.charAt(i+1);
		b += str.charAt(i+2);
		b += str.charAt(i+3);
		c += str.charAt(i+4);
		c += str.charAt(i+5);
		a+=" ";
		b+=" ";
		c+=" ";
	}
	result += a+"\n";
	result += b+"\n";
	result += c+"\n";
	result += escapeHTML(code2braille(str));
	str="";
	result += "</pre></span><code>braille 3xN(=2m)</code><pre>";
	for( var k=0 ; k<original.length ; k+=6){
        str+=original.charAt(k+3);
        str+=original.charAt(k  );
        str+=original.charAt(k+4);
        str+=original.charAt(k+1);
        str+=original.charAt(k+5);
        str+=original.charAt(k+2);
	}
	a="";b="";c="";
	for(var i=0;i<str.length;i+=6){
		a += str.charAt(i);
		a += str.charAt(i+1);
		b += str.charAt(i+2);
		b += str.charAt(i+3);
		c += str.charAt(i+4);
		c += str.charAt(i+5);
		a+=" ";
		b+=" ";
		c+=" ";
	}
	result += a+"\n";
	result += b+"\n";
	result += c+"\n";
	result += escapeHTML(code2braille(str));
	result += "</pre></span>";



	str = "";
	result += "</pre></span><code>braille 3xN(=2m)</code><pre>";

	for( var k=0 ; k<original.length ; k+=6){
		str+=original.charAt(k  );
		str+=original.charAt(k+3);
		str+=original.charAt(k+1);
		str+=original.charAt(k+4);
		str+=original.charAt(k+2);
		str+=original.charAt(k+5);
	}

	a="";b="";c="";
	for(var i=0;i<str.length;i+=6){
		a += str.charAt(i);
		a += str.charAt(i+1);
		b += str.charAt(i+2);
		b += str.charAt(i+3);
		c += str.charAt(i+4);
		c += str.charAt(i+5);
		a+=" ";
		b+=" ";
		c+=" ";
	}
	result += a+"\n";
	result += b+"\n";
	result += c+"\n";
	result += escapeHTML(code2braille(str));
	result += "</pre></span>";








	result += "</pre></span><code>braille Nx3(=2m)</code><pre>";
	var maxline=original.length / 3;
	str="";

	for( var k=0 ; k<maxline ; k+=2){
		str+=original.charAt(k  );
		str+=original.charAt(k+1);
		str+=original.charAt(k  +maxline);
		str+=original.charAt(k+1+maxline);
		str+=original.charAt(k  +maxline*2);
		str+=original.charAt(k+1+maxline*2);
	}
	a="";b="";c="";
	for(var i=0;i<str.length;i+=6){
		a += str.charAt(i);
		a += str.charAt(i+1);
		b += str.charAt(i+2);
		b += str.charAt(i+3);
		c += str.charAt(i+4);
		c += str.charAt(i+5);
		a+=" ";
		b+=" ";
		c+=" ";
	}
	result += a+"\n";
	result += b+"\n";
	result += c+"\n";
	result += escapeHTML(code2braille(str));
	result += "</pre></span>";

	return result;
}

function telephone(str){
	result="";
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


	return result;
}
function tel2(str){
	result="";
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

function PrintAlltext(str){
	cleartextarea();
//	console.log(str);
	$( ".formtext"   ).val(Morse2Str(str));
	$( ".formmorse"  ).val(str);
	str=trimCRLF(trimspace(str));
	if((str.length % 6 ) ==0){
		$("#bra").html('<a data-toggle="modal" href="#braille">braille</a>');
		$("#brailledata").html(braille( str ));
	}else{
		$("#bra").html('braille');
	}
	$( ".formnt"     ).val(Bin2Str(str));

	$( ".formrle"    ).val(Bin2RLE(str));
	$( ".form7seg"   ).val(sevendigit(str) );
	$( ".form7sega"  ).val(Hex2String(sevendigit(str)) );
	$( ".form7seg0"  ).val(Dec2String(sevendigit(str)) );
//	$( ".form14seg"  ).val(Dec2String(sevendigit(trimCRLF(trimspace(str)))) );
	$( ".form16seg"  ).val(sixteendigit(str) );
	$( ".baudot"     ).val( baudot(str) );
	$( ".baudot2"    ).val( baudot2(str) );
	$( ".baconian"   ).val( baconian(str) );
	$( ".ibm80"      ).val(  ibm80(str) );
	$( ".code93"     ).val( code93(str) );
	$( ".code128"    ).val(code128(str) );

}