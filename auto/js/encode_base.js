
var ASCNUM = ['three','seven','eight','thre','four','five','seve','eigh','nine','two','thr','fou','fiv','six','sev','eig','nin','tw','th','fo','fi','si','se','ei','ni','viii','vii','iii','ii','vi','iv','v','ix'];
var NUMNUM = ['3','7','8','3','4','5','7','8','9','2','3','4','5','6','7','8','9','2','3','4','5','6','7','8','9','8','7','3','2','6','4','5','9'];
var colors;
var webcolors;

$( ".inputvalue"  ).change(function() { check_default(); });
$( ".RomanNumber" ).change(function() { check_default();});
$( ".TypeO"       ).change(function() { check_default(); });
$( ".TypeN"       ).change(function() { check_default(); });
$( ".TypeJ"       ).change(function() { check_default(); });
$( ".TypeA"       ).change(function() { check_default(); });
$( ".TypeE"       ).change(function() { check_default(); });

$(document).ready(function() {
  $.getJSON( "https://raw.githubusercontent.com/ingresscodes/keywords/master/keywords.json", function( json ) {
    for(var index in json.keywords) {
       KeyMap.push( String(json.keywords[index].word).trim() );
    }
 });
  $.getJSON( "https://raw.githubusercontent.com/ingresscodes/keywords/master/jojowotd.json", function( json ) {
    for(var index in json.wotds) {
       KeyMapJoJo.push( String(json.wotds[index].wotd).trim() );
    }
 });

  $.getJSON( "https://kawaurayushi.github.io/newjs/color.json", function( json ) {
    colors = json;
  });
  $.getJSON( "https://kawaurayushi.github.io/newjs/webcolor.json", function( json ) {
    webcolors = json;
  });
});

function init(){
  $( "#demo").html("");
  $( ".result").html("");
  $( ".result2").html("");
}



function check_default(){
  init();
  $( ".step1" ).html('Step 1 :  code check ...<br>');
  $( ".step2" ).html('...<br>');
  code_exchange($( ".inputvalue" ).val().toLowerCase().trim());
  key_exchange($( ".inputvalue" ).val().toLowerCase().trim());
  keyboard2morse($( ".inputvalue" ).val().toLowerCase().trim());


  $( ".step1" ).append('Step 2 :  ROT(+-)/Reverse/Atbash start ...<br>');
  basic("Normal",$( ".inputvalue" ).val().toLowerCase().trim());
  text = $( ".inputvalue" ).val().toLowerCase().trim();
  var from = "10.- ";
  var to   = ".-.- ";
  decoded_string = "";
  for (var i = 0; i < text.length; i++) {
    var coded_letter = text.charAt(i);
    var letter_index = from.indexOf(coded_letter);
    var decoded_letter = to.charAt(letter_index);
    decoded_string = decoded_string + decoded_letter;
  }
  decoded_string = Morse2Str(decoded_string);
  var decoded_string2 = Morse2Str(decoded_string.split("").reverse().join(""));
  checkprint("Normal Morse : ", decoded_string);
  checkprint("Normal Morse : ", decoded_string2);

  from = "10.- ";
  to   = "-.-. ";
  decoded_string = "";
  for (var i = 0; i < text.length; i++) {
    var coded_letter = text.charAt(i);
    var letter_index = from.indexOf(coded_letter);
    var decoded_letter = to.charAt(letter_index);
    decoded_string = decoded_string + decoded_letter;
  }
  decoded_string = Morse2Str(decoded_string);
  decoded_string2 = Morse2Str(decoded_string.split("").reverse().join(""));
  checkprint("Normal Morse X: ", decoded_string);
  checkprint("Normal Morse X: ", decoded_string2);

  $( ".step1" ).append('Step 3 : Rectangles  start...<br>');

  var Rectangles = $( ".inputvalue" ).val().toLowerCase().trim();
  var results = [];
  for(var i=2; i<(Rectangles.length); i++) {
    if( (Rectangles.length%i == 0) ) {
       results.push(i);
    }
  }
  if(results.length <1 ){
    $( ".step1" ).append("No matrix <br>");
  }
  for(i=0;i<results.length;i++){
    var matrix = new Array();
    var w = results[i];
    var h = Rectangles.length / results[i];
    var text="";
    $( ".step1" ).append("matrix ->" + w +"x"+h +"<br>");
    for(j=0;j<h;j++){
      matrix[j] = new Array();
      for(k=0;k<w;k++){
        matrix[j][k]=Rectangles.charAt(k+j*w);
      }
    }
    /* 04 03 02 01 00 14 13 12 11 10 ...*/
    for(j=0;j<h;j++){
      for(k=w-1;k>=0;k--){
        text+=matrix[j][k];
      }
    }
     var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     var tebahpla = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA0123456789";
     var decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);

    /* 40 41 42 43 44 30 31 32 33 34 ... */
    text="";
    for(j=h-1;j>=0;j--){
      for(k=0;k<w;k++){
        text+=matrix[j][k];
      }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);

    /* 44 43 42 41 40 34 33 32 31 30 ... */
    text="";
    for(j=h-1;j>=0;j--){
      for(k=w-1;k>=0;k--){
        text+=matrix[j][k];
      }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);


    /* 04 03 02 01 00 10 11 12 13 14 ... */
    text="";
    for(j=0;j<h;j++){
      if( (j % 2 )==0 ) {
         for(k=w-1;k>=0;k--){
            text+=matrix[j][k];
         }
      }else{
         for(k=0;k<w;k++){
            text+=matrix[j][k];
         }
      }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);

    /* 00 01 02 03 04 14 13 12 11 10 ... */
    text="";
    for(j=0;j<h;j++){
      if( (j % 2 )==1 ) {
         for(k=w-1;k>=0;k--){
            text+=matrix[j][k];
         }
      }else{
         for(k=0;k<w;k++){
            text+=matrix[j][k];
         }
      }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);


    /* 44 43 42 41 40 30 31 32 33 34 ... */
    text="";
    for(j=h-1;j>=0;j--){
      if( (j % 2 )==0 ) {
         for(k=w-1;k>=0;k--){
            text+=matrix[j][k];
         }
      }else{
         for(k=0;k<w;k++){
            text+=matrix[j][k];
         }
      }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);

    /* 40 41 42 43 44 34 33 32 31 30 ... */
    text="";
    for(j=h-1;j>=0;j--){
      if( (j % 2 )==1 ) {
         for(k=w-1;k>=0;k--){
            text+=matrix[j][k];
         }
      }else{
         for(k=0;k<w;k++){
            text+=matrix[j][k];
         }
      }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);

    /* 40 30 20 10 00 41 31 21 11 01 ... */
    text="";
    for(k=w-1;k>=0;k--){
      for(j=0;j<h;j++){
        text+=matrix[j][k];
      }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);

    /* 44 34 24 14 04 43 33 23 13 03 ... */
    text="";
    for(k=w-1;k>=0;k--){
      for(j=h-1;j>=0;j--){
        text+=matrix[j][k];
      }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);

    /* 00 10 20 30 40 01 11 21 31 41 ... */
    text="";
    for(k=0;k<w;k++){
      for(j=0;j<h;j++){
        text+=matrix[j][k];
      }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);

    /* 04 14 24 34 44 03 13 23 33 43 ... */
    text="";
    for(k=0;k<w;k++){
      for(j=h-1;j>=0;j--){
        text+=matrix[j][k];
      }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);

    /* 04 14 24 34 44 43 33 23 13 03 ... */
    text="";
    for(k=w-1;k>=0;k--){
      if( (k % 2 )==1 ) {
         for(j=h-1;j>=0;j--){
           text+=matrix[j][k];
         }
      }else{
         for(j=0;j<h;j++){
           text+=matrix[j][k];
         }
      }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);


    /* 44 34 24 14 04 03 13 23 33 43 ... */
    text="";
    for(k=w-1;k>=0;k--){
      if( (k % 2 )==0 ) {
         for(j=h-1;j>=0;j--){
           text+=matrix[j][k];
         }
      }else{
         for(j=0;j<h;j++){
           text+=matrix[j][k];
         }
      }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);

    /* 00 10 20 30 40 41 31 21 11 01 ... */
    text="";
    for(k=0;k<w;k++){
      if( (k % 2 )==1 ) {
         for(j=h-1;j>=0;j--){
           text+=matrix[j][k];
         }
      }else{
         for(j=0;j<h;j++){
           text+=matrix[j][k];
         }
      }

    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);


    /* 40 30 20 10 00 01 11 21 31 41 ... */
    text="";
    for(k=0;k<w;k++){
      if( (k % 2 )==0 ) {
         for(j=h-1;j>=0;j--){
           text+=matrix[j][k];
         }
      }else{
         for(j=0;j<h;j++){
           text+=matrix[j][k];
         }
      }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);

    /* 40 30 20 10 00 41 31 21 11 01 ... */
    text="";
    for(k=0;k<w;k++){
         for(j=h-1;j>=0;j--){
           text+=matrix[j][k];
         }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);


    /* 44 43 42 41 40 30 31 32 33 34 ... */
    text="";
    for(j=h-1;j>=0;j--){
       for(k=w-1;k>0;k--){
           text+=matrix[j][k];
        }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);


    /* 00 14 20 34 40 01 13 21 33 41 ... */
    text="";
    for(k=0;k<w;k++){
       for(j=0;j<h;j++){
           if( (j%2)==0){
               text+=matrix[j][k];
           }else{
               text+=matrix[j][w-k-1];
           }
        }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);

    /*04 10 24 30 44 03 11 23 31 43 ...*/
    text="";
    for(k=w-1;k>=0;k--){
       for(j=0;j<h;j++){
           if( (j%2)==0){
               text+=matrix[j][k];
           }else{
               text+=matrix[j][w-k-1];
           }
        }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);


    /*40 34 20 14 00 41 33 21 13 01 ...*/
    text="";
    for(k=0;k<w;k++){
       for(j=h-1;j>=0;j--){
           if( (j%2)==0){
               text+=matrix[j][k];
           }else{
               text+=matrix[j][w-k-1];
           }
        }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);


    /*44 30 24 10 04 43 31 23 11 03 ...*/
    text="";
    for(k=0;k<w;k++){
       for(j=h-1;j>=0;j--){
           if( (j%2)==1){
               text+=matrix[j][k];
           }else{
               text+=matrix[j][w-k-1];
           }
        }
    }
     decoded_string_at = "";
     for (k = 0; k < text.length; k++) {
         var coded_letter = text.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
    checkprint("Rectangle : ", text);
    checkprint("Rectangle/Atbash : ", decoded_string_at);
  }


  $( ".step1" ).append('Step 4 : morse 2 Ascii & Braille_ASCII start...</br>');

  text = $( ".inputvalue" ).val().trim();
  var original= "";
  if(!text.match(NUM2CHECK)){
    original = Str2Morse(text);
  }else{
    original=text;
  }
  str = original;
  code_exchange(str);
  $( ".step1" ).append('--> ' + str +'<br>' );

  if( (str.length % 7 ) ==0 ){
     $( ".step1" ).append('sevendigit<br>' );
     code_exchange(sevendigit(str));
  }else{
     $( ".step1" ).append('Not 7Seg <br>' );
  }

  if( (str.length % 5 ) ==0 ){
     $( ".step1" ).append('Baudot<br>' );
     var baudot = baudot(str);
     checkprint("baudot : ", baudot);

     baudot = baudot2(str);
     checkprint("baudot : ", baudot);

  }else{
     $( ".step1" ).append('Not baudot <br>' );
  }


  if( (str.length % 12 ) ==0 ){
     $( ".step1" ).append('ibm80<br>' );
     var ibm = ibm80(str);
     checkprint("ibm80 : ", ibm);
  }else{
     $( ".step1" ).append('Not ibm80 <br>' );
  }

  if( (str.length % 11 ) ==2 ){
     $( ".step1" ).append('code128<br>' );
     var co28 = code128(str);
     checkprint("code128 : ", co28);
     var checkstr = co28;
     $( ".step1" ).append('code128--->'+co28+'<br>' );

  }else{
     $( ".step1" ).append('Not code128 <br>' );
  }

  str=trimspace(str);
  str=trimCRLF(str);

  original=trimspace(original);
  original=trimCRLF(original);

  if( (str.length % 6 ) ==0 ){
     $( ".step1" ).append('braille<br>' );
     var braille = code2braille(str);
     checkprint("braille 2xN : ", braille);
     str = braille;
     $( ".step1" ).append('--2xN--> ' + braille +'<br>' );
     str = "";
     for( var k=0 ; k<original.length ; k+=6){
        str = str + original.charAt(k+2);
        str = str + original.charAt(k+5);
        str = str + original.charAt(k  );
        str = str + original.charAt(k+4);
        str = str + original.charAt(k+0);
        str = str + original.charAt(k+3);
     }
     braille = code2braille(str);
     checkprint("braille 2xN : ", braille);
     $( ".step1" ).append('--2xN--> ' + braille +'<br>' );
     str = "";
     for( var k=0 ; k<original.length ; k+=6){
        str+=original.charAt(k+3);
        str+=original.charAt(k  );
        str+=original.charAt(k+4);
        str+=original.charAt(k+1);
        str+=original.charAt(k+5);
        str+=original.charAt(k+2);
     }
     braille = code2braille(str);
     checkprint("braille 3xN : ", braille);
     $( ".step1" ).append('--3xN--> ' + braille +'<br>' );
     str = "";
     for( var k=0 ; k<original.length ; k+=6){
        str+=original.charAt(k  );
        str+=original.charAt(k+3);
        str+=original.charAt(k+1);
        str+=original.charAt(k+4);
        str+=original.charAt(k+2);
        str+=original.charAt(k+5);
     }

     braille = code2braille(str);
     checkprint("braille 3xN : ", braille);
     $( ".step1" ).append('--3xN--> ' + braille +'<br>' );

     str = "";
     maxline=original.length / 3;
     for( var k=0 ; k<maxline ; k+=2){
        str+=original.charAt(k  );
        str+=original.charAt(k+1);
        str+=original.charAt(k  +maxline);
        str+=original.charAt(k+1+maxline);
        str+=original.charAt(k  +maxline*2);
        str+=original.charAt(k+1+maxline*2);
     }
     braille = code2braille(str);
     checkprint("braille Nx3 : ", braille);
     $( ".step1" ).append('--Nx3--> ' + braille +'<br>' );
  }else{
     $( ".step1" ).append('Not Braille <br>' );
  }


  $( ".step1" ).append('Step 5 : Base64/32  start...');
  text = $( ".inputvalue" ).val().trim();
    var base= Hex2String(GetHexbyBase64($( ".inputvalue" ).val().trim()));
    $( '<li> DecodeBase64->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());
 
    var array = $( ".inputvalue" ).val().trim().split("");
    str = array.reverse().join("");
    base= Hex2String(GetHexbyBase64(str));
    $( '<li> DecodeBase64->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());
 
    str="";
    for(var i=0; i<text.length;i++){
       ch = text.charCodeAt(i);
       if(ch>96 && ch <123) str +=  String.fromCharCode(ch-32);
       if(ch>64 && ch <91) str +=  String.fromCharCode(ch+32);
       if(ch>40 && ch <63) str +=  String.fromCharCode(ch);
    }
    base= Hex2String(GetHexbyBase64(str));
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());
    $( '<li> DecodeBase64->' +base+'</li>' ).appendTo($( ".step1" ));

    array = str.split("");
    str = array.reverse().join("");
    base=  Hex2String(GetHexbyBase64(str));
    $( '<li> DecodeBase64->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());
    checkprint("Base64: ", base);

    base= Hex2String(GetHexbyBase32(str.toUpperCase()));
    $( '<li> DecodeBase32->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base32: ", base.toLowerCase());
    checkprint("Base32: ", base.split("").reverse().join("").toLowerCase());

    array = str.split("");
    str = array.reverse().join("");
    base= Hex2String(GetHexbyBase32(str.toUpperCase()));
    $( '<li> DecodeBase32->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base32: ", base.toLowerCase());
    checkprint("Base32: ", base.split("").reverse().join("").toLowerCase());


  base= Base64($( ".inputvalue" ).val().trim());
  $( '<li> Base64->' +base+'</li>' ).appendTo($( ".step1" ));
  checkprint("Base64: ", base);
  checkprint("Base64: ", base.split("").reverse().join(""));
    base=base.toLowerCase();
  decode_string=base;

//  checkprint("Base64: ", base);
//  checkprint("Base64: ", base.split("").reverse().join(""));
  base= Hex2String(GetHexbyBase85( $( ".inputvalue" ).val().trim() ));
  $( '<li> Base85->' +base+'</li>' ).appendTo($( ".step1" ));
  checkprint("Base85: ", base.toLowerCase());
  checkprint("Base85: ", base.split("").reverse().join("").toLowerCase());

  base= Hex2String(GetHexbyBase85( $( ".inputvalue" ).val().split("").reverse().join("").trim() ));
  $( '<li> Base85->' +base+'</li>' ).appendTo($( ".step1" ));
  checkprint("Base85: ", base.toLowerCase());
  checkprint("Base85: ", base.split("").reverse().join("").toLowerCase());

  base= Hex2String(GetHexbyUU($( ".inputvalue" ).val().trim().toUpperCase() ));
  $( '<li> uudecode->' +base+'</li>' ).appendTo($( ".step1" ));
  base=base.toLowerCase();
  checkprint("uudecode: ", base);
  checkprint("uudecode: ", base.split("").reverse().join(""));

  base= Hex2String(GetHexbyUU($( ".inputvalue" ).val().split("").reverse().join("").trim().toUpperCase() ));
  $( '<li> uudecode->' +base+'</li>' ).appendTo($( ".step1" ));
  base=base.toLowerCase();
  checkprint("uudecode: ", base);
  checkprint("uudecode: ", base.split("").reverse().join(""));

  base=  Hex2String(GetHexbyXX($( ".inputvalue" ).val().trim() ));

  $( '<li> xxdecode->' +base+'</li>' ).appendTo($( ".step1" ));
  base=base.toLowerCase();
  checkprint("xxdecode: ", base);
  checkprint("xxdecode: ", base.split("").reverse().join(""));

  base=  Hex2String(GetHexbyXX($( ".inputvalue" ).val().split("").reverse().join("").trim() ));
  $( '<li> xxdecode->' +base+'</li>' ).appendTo($( ".step1" ));
  base=base.toLowerCase();
  checkprint("xxdecode: ", base);
  checkprint("xxdecode: ", base.split("").reverse().join(""));

  $( ".step1" ).append('Step 6 : Playfair/Bifid/Skip/Vigenere  start...');
  var pf =Playfair(1,$( ".inputvalue" ).val().toLowerCase().trim(),"J","I","",0);
  $( '<li> Playfair->' +pf+'</li>' ).appendTo($( ".step1" ));
  checkprint("Playfair: ", pf);
  str = text.split("").reverse().join("");
  checkprint("Playfair: ", str);

  pf =Playfair(-1,$( ".inputvalue" ).val().toLowerCase().trim(),"J","I","",0);
  $( '<li> Playfair->' +pf+'</li>' ).appendTo($( ".step1" ));
  checkprint("Playfair: ", pf);
  pf = text.split("").reverse().join("");
  checkprint("Playfair: ", str);

  var pf =Bifid(1,$( ".inputvalue" ).val().toLowerCase().trim(),"J","I","",0);
  $( '<li> Bifid ->' +pf+'</li>' ).appendTo($( ".step1" ));
  checkprint("Bifid: ", pf);

  str = pf.split("").reverse().join("");
  checkprint("Playfair: ", str);
  pf =Bifid(-1,$( ".inputvalue" ).val().toLowerCase().trim(),"J","I","",0);
  $( '<li> Bifid ->' +pf+'</li>' ).appendTo($( ".step1" ));
  checkprint("Bifid: ", pf);
  str = pf.split("").reverse().join("");
  checkprint("Playfair: ", str);

  $( '<li> Bifid ->' +pf+'</li>' ).appendTo($( ".step1" ));

  str = $( ".inputvalue" ).val().toLowerCase().trim();
  for (var i=1; i<str.length;i++){
      var str2 = Skip_Decode(str, i, 0);
      checkprint("Skip:", str2);
      $( '<li> Skip'+i+' ->' +str2+'</li>' ).appendTo($( ".step1" ));
  }

  var key=["a","ab","abc","bz","z","zy","zyx"];
  for (var i=0; i<key.length;i++){
    var vig=vigeneredecrypt(str,key[i]);
    checkprint("Vigenere:", vig);
    $( '<li> Vigenere'+key[i]+' ->' +vig+'</li>' ).appendTo($( ".step1" ));
    var key2=key[i];
    vig="";
    var j=0;
    while(j< str.length ){
       var temp=vigeneredecrypt(str.substr(j,key2.length),key2);
       key2=temp;
       vig += temp;
       j+=key2.length;
    }
    checkprint("Vigenere Auto:", vig);
    $( '<li> Vigenere Auto '+key[i]+' ->' +vig+'</li>' ).appendTo($( ".step1" ));
  }


  $( ".step1" ).append('Step 7 : Element  start...');
  var an =encipherAtomicNumbers ($( ".inputvalue" ).val().toLowerCase().trim());
  $( '<li> Element->' +an+'</li>' ).appendTo($( ".step1" ));
  str=code_exchange(an);
  an =encipherAtomicNumbers ($( ".inputvalue" ).val().toLowerCase().trim().split("").reverse().join(""));
  $( '<li> Element->' +an+'</li>' ).appendTo($( ".step1" ));
  str=code_exchange(an);
  an =encipherAtomicNumbers2($( ".inputvalue" ).val().toLowerCase().trim());
  $( '<li> Element->' +an+'</li>' ).appendTo($( ".step1" ));
  str=code_exchange(an);
  an =encipherAtomicNumbers2($( ".inputvalue" ).val().toLowerCase().trim().split("").reverse().join(""));
  $( '<li> Element->' +an+'</li>' ).appendTo($( ".step1" ));
  str=code_exchange(an);

  $( ".step1" ).append('Step 8 : Color Index  start...');
  an =colordecode ($( ".inputvalue" ).val().toLowerCase().trim().split("").join(""));
  str=an;
  $( '<li> Colors->' +an+'</li>' ).appendTo($( ".step1" ));
  an =colordecode ($( ".inputvalue" ).val().toLowerCase().trim().split("").reverse().join(""));
  $( '<li> Colors->' +an+'</li>' ).appendTo($( ".step1" ));
  checkprint("Colors: ", an);
  an =colordecode2 ($( ".inputvalue" ).val().toLowerCase().trim().split("").join(""));
  $( '<li> Colors->' +an+'</li>' ).appendTo($( ".step1" ));
  checkprint("Colors: ", an);
  an =colordecode2 ($( ".inputvalue" ).val().toLowerCase().trim().split("").reverse().join(""));
  $( '<li> Colors->' +an+'</li>' ).appendTo($( ".step1" ));
  checkprint("Colors: ", an);

};

function basic(mode,text){
  $( '<li> Input -> <font color="green">' +text+'</font></li>' ).appendTo($( ".step1" ));
  checkprint(mode+"/NORMAL                 : ", text);
  var str = text;
  str = text;
  var array   = str.split("");
  str = array.reverse().join("");
  if(mode =="Normal"){
      $( '<li> Reverse -> ' +str+'</li>' ).appendTo($( ".step1" ));
  }
  checkprint(mode+"/Reverse                : ", str);
  var decoded_string_at = str;
  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var tebahpla = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA0123456789";
  decoded_string_at = "";
  for (k = 0; k < text.length; k++) {
     var coded_letter = text.charAt(k);
     var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
  if(mode =="Normal"){
     $( '<li> atbash -> ' +decoded_string_at+'</li>' ).appendTo($( ".step1" ));
  }
  code_exchange(decoded_string_at);
  code_exchange(decoded_string_at.split("").reverse().join(""));
  checkprint(mode+"/Atbash                : ", decoded_string_at);
  checkprint(mode+"/Atbash                : ", decoded_string_at.split("").reverse().join(""));

  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var tebahpla = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA9876543210";
  decoded_string_at = "";
  for (k = 0; k < text.length; k++) {
     var coded_letter = text.charAt(k);
     var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
  if(mode =="Normal"){
     $( '<li> atbash2 -> ' +decoded_string_at+'</li>' ).appendTo($( ".step1" ));
  }
  code_exchange(decoded_string_at);
  code_exchange(decoded_string_at.split("").reverse().join(""));
  checkprint(mode+"/Atbash2                : ", decoded_string_at);
  checkprint(mode+"/Atbash2                : ", decoded_string_at.split("").reverse().join(""));

  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var tebahpla = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA0987654321";
  decoded_string_at = "";
  for (k = 0; k < text.length; k++) {
     var coded_letter = text.charAt(k);
     var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
  if(mode =="Normal"){
     $( '<li> atbash3 -> ' +decoded_string_at+'</li>' ).appendTo($( ".step1" ));
  }
  code_exchange(decoded_string_at);
  code_exchange(decoded_string_at.split("").reverse().join(""));
  checkprint(mode+"/Atbash3                : ", decoded_string_at);
  checkprint(mode+"/Atbash3                : ", decoded_string_at.split("").reverse().join(""));

  var morse  = "0123456789abcdefghijklmnopqrstuvwxyz";
  var esrom  = "5678901234nj?wtqu?mbryiasxfkoeg?dpl?";
  var esrom2 = "0987654321nv?uelwhi?kfmaopyrstdbgxq?";
  var esromX = "5432109876a?cgtyd?mvrqinsxlkoewjupfz";

  var decoded_string_at = "";
  var decoded_string_at2 = "";
  var decoded_string_at3 = "";
  for (k = 0; k < text.length; k++) {
     var coded_letter = text.charAt(k);
     var letter_index = morse.indexOf(coded_letter);
     decoded_string_at += esrom.charAt(letter_index);
     decoded_string_at2 += esrom2.charAt(letter_index);
     decoded_string_at3 += esromX.charAt(letter_index);
  }
  if(mode =="Normal"){
     $( '<li> Morse R -> ' +decoded_string_at+'</li>' ).appendTo($( ".step1" ));
     $( '<li> Morse X -> ' +decoded_string_at2+'</li>' ).appendTo($( ".step1" ));
     $( '<li> Morse XR-> ' +decoded_string_at3+'</li>' ).appendTo($( ".step1" ));
  }
  checkprint(mode+"/Morse R               : ", decoded_string_at);
  checkprint(mode+"/Morse X               : ", decoded_string_at2);
  checkprint(mode+"/Morse XR              : ", decoded_string_at3);
  code_exchange(decoded_string_at);
  code_exchange(decoded_string_at2);
  code_exchange(decoded_string_at3);
  str = decoded_string_at;
  var str2 = decoded_string_at2;
  var str3 = decoded_string_at3;
  array   = decoded_string_at.split("");
  str = array.reverse().join("");
  array   = decoded_string_at2.split("");
  str2 = array.reverse().join("");
  array   = decoded_string_at3.split("");
  str3 = array.reverse().join("");
  decoded_string_at=str;
  decoded_string_at2=str2;
  decoded_string_at3=str3;
  checkprint(mode+"/Morse R /R : ", decoded_string_at);
  checkprint(mode+"/Morse X /R : ", decoded_string_at2);
  checkprint(mode+"/Morse XR/R : ", decoded_string_at3);
  code_exchange(decoded_string_at);
  code_exchange(decoded_string_at2);
  code_exchange(decoded_string_at3);

  if(mode =="Normal"){
     $( '<li> Morse R/R -> ' +decoded_string_at +'</li>' ).appendTo($( ".step1" ));
     $( '<li> Morse X/R -> ' +decoded_string_at2+'</li>' ).appendTo($( ".step1" ));
     $( '<li> Morse XR/R-> ' +decoded_string_at3+'</li>' ).appendTo($( ".step1" ));
  }

  for (i = 1 ; i < 26; i++) {
    var decoded_string = "";
    for (j = 0; j < text.length; j++) {
		var coded_letter = text.charCodeAt(j);
		if( (coded_letter > 96) && (coded_letter <123) ){ //小文字
			if(coded_letter + i > 122 ){
			   decoded_string += String.fromCharCode(coded_letter + i -26);
			}else{
			   decoded_string += String.fromCharCode(coded_letter + i);
			}
		}else if( (coded_letter > 64) && (coded_letter <91) ){ //大文字{
			if(coded_letter + i > 90 ){
			   decoded_string +=  String.fromCharCode(coded_letter + i -26);
			}else{
			   decoded_string += String.fromCharCode(coded_letter + i);
			}
		}else if( (coded_letter > 47) && (coded_letter <58) ){ //数字{
			if(coded_letter + i > 77 ){
			   decoded_string +=  String.fromCharCode(coded_letter + i -30);
			}else if(coded_letter + i > 67 ){
			   decoded_string +=  String.fromCharCode(coded_letter + i -20);
			}else if(coded_letter + i > 57 ){
			   decoded_string +=  String.fromCharCode(coded_letter + i -10);
			}else{
			   decoded_string += String.fromCharCode(coded_letter + i);
			}
		}else{
		   decoded_string += String.fromCharCode(coded_letter);
		}
	}
	checkprint(mode+"/Rot                "+i+": ", decoded_string);
	str = decoded_string;
	if(i==13 && mode =="Normal")         $( '<li> ROT13 -> ' +decoded_string+'</li>' ).appendTo($( ".step1" ));
	var array   = decoded_string.split("");
	str = array.reverse().join("");
	checkprint(mode+"Rot&Reverse        "+i+": ",str);
     decoded_string_at = "";
     for (k = 0; k < decoded_string.length; k++) {
         var coded_letter = decoded_string.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
     if(i==0 && mode =="Normal"){
         $( '<li> atbash -> ' +decoded_string_at+'</li>' ).appendTo($( ".step1" ));
     }
     checkprint(mode+"Rot&Atbash         "+i+": ",decoded_string_at);
     var str = decoded_string_at;
     array   = decoded_string_at.split("");
     str     = array.reverse().join("");
     decoded_string_at = str ;
     checkprint(mode+"Rot&Atbash&Reverse "+i+": ",str);
  }
  for (i = -1 ; i > -26; i--) {
     var decoded_string = "";
     for (j = 0; j < text.length; j++) {
	var coded_letter = text.charCodeAt(j);
	if( (coded_letter > 96) && (coded_letter <123) ){ //小文字
		if(coded_letter + i < 97 ){
		   decoded_string +=  String.fromCharCode(coded_letter + i +26);
		}else{
		   decoded_string += String.fromCharCode(coded_letter + i);
		}
	}else if( (coded_letter > 64) && (coded_letter <91) ){ //大文字{
		if(coded_letter + i < 65 ){
		   decoded_string +=  String.fromCharCode(coded_letter + i +26);
		}else{
		   decoded_string += String.fromCharCode(coded_letter + i);
		}
	}else if( (coded_letter > 47) && (coded_letter <58) ){ //数字{
		if(coded_letter + i < 28 ){
		   decoded_string +=  String.fromCharCode(coded_letter + i +30);
		}else if(coded_letter + i < 38 ){
		   decoded_string +=  String.fromCharCode(coded_letter + i +20);
		}else if(coded_letter + i < 48 ){
		   decoded_string +=  String.fromCharCode(coded_letter + i +10);
		}else{
		   decoded_string += String.fromCharCode(coded_letter + i);
		}
	}else{
	   decoded_string += String.fromCharCode(coded_letter);
	}
     }
     checkprint(mode+"Rot(-)             "+i+": ", decoded_string);

     str = decoded_string.split("").reverse().join("");
     checkprint(mode+"Rot&Reverse        "+i+": ",str);
//     var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     var tebahpla = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA0123456789";
     var decoded_string_at = "";
     for (k = 0; k < decoded_string.length; k++) {
         var coded_letter = decoded_string.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
     checkprint(mode+"Rot&Atbash         "+i+": ",decoded_string_at);

     array   = decoded_string_at.split("");
     str     = array.reverse().join("");
     checkprint(mode+"Rot&Atbash&Reverse "+i+": ",str);
  }

}
