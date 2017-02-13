
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
  if($( ".RomanNumber").prop( "checked" ) ){
    ASCNUM = ["three","seven","eight","thre","four","five","seve","eigh","nine","two","thr","fou","fiv","six","sev","eig","nin","tw","th","fo","fi","si","se","ei","ni","viii","vii","iii","ii","vi","iv","v","ix"];
    NUMNUM = ["3","7","8","3","4","5","7","8","9","2","3","4","5","6","7","8","9","2","3","4","5","6","7","8","9","8","7","3","2","6","4","5","9"];
  }else{
    ASCNUM = ["three","seven","eight","thre","four","five","seve","eigh","nine","two","thr","fou","fiv","six","sev","eig","nin","tw","th","fo","fi","si","se","ei","ni"];
    NUMNUM = ["3","7","8","3","4","5","7","8","9","2","3","4","5","6","7","8","9","2","3","4","5","6","7","8","9"];
  }
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
  decoded_string = morsecode(decoded_string);
  var decoded_string2 = morsecode(decoded_string.split("").reverse().join(""));
  checkprint("Normal Morse : ", decoded_string);
  checkprint("Normal Morse : ", decoded_string2);

  var original=decoded_string;
  var original2=decoded_string2;
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     decoded_string = decoded_string.replace(ASCNUM[k], NUMNUM[k], "g");
     decoded_string = decoded_string.replace(ASCNUM[k], NUMNUM[k], "g");
     decoded_string = decoded_string.replace(ASCNUM[k], NUMNUM[k], "g");
     decoded_string = decoded_string.replace(ASCNUM[k], NUMNUM[k], "g");
     decoded_string = decoded_string.replace(ASCNUM[k], NUMNUM[k], "g");
     decoded_string2 = decoded_string2.replace(ASCNUM[k], NUMNUM[k], "g");
     decoded_string2 = decoded_string2.replace(ASCNUM[k], NUMNUM[k], "g");
     decoded_string2 = decoded_string2.replace(ASCNUM[k], NUMNUM[k], "g");
     decoded_string2 = decoded_string2.replace(ASCNUM[k], NUMNUM[k], "g");
     decoded_string2 = decoded_string2.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(decoded_string != original){ checkprint("Normal Morse : ", decoded_string);  }
  if(decoded_string2 != original2){ checkprint("Normal Morse : ", decoded_string);  }


  from = "10.- ";
  to   = "-.-. ";
  decoded_string = "";
  for (var i = 0; i < text.length; i++) {
    var coded_letter = text.charAt(i);
    var letter_index = from.indexOf(coded_letter);
    var decoded_letter = to.charAt(letter_index);
    decoded_string = decoded_string + decoded_letter;
  }
  decoded_string = morsecode(decoded_string);
  decoded_string2 = morsecode(decoded_string.split("").reverse().join(""));
  checkprint("Normal Morse X: ", decoded_string);
  checkprint("Normal Morse X: ", decoded_string2);

  original=decoded_string;
  original2=decoded_string2;
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     decoded_string = decoded_string.replace(ASCNUM[k], NUMNUM[k], "g");
     decoded_string = decoded_string.replace(ASCNUM[k], NUMNUM[k], "g");
     decoded_string = decoded_string.replace(ASCNUM[k], NUMNUM[k], "g");
     decoded_string = decoded_string.replace(ASCNUM[k], NUMNUM[k], "g");
     decoded_string = decoded_string.replace(ASCNUM[k], NUMNUM[k], "g");
     decoded_string2 = decoded_string2.replace(ASCNUM[k], NUMNUM[k], "g");
     decoded_string2 = decoded_string2.replace(ASCNUM[k], NUMNUM[k], "g");
     decoded_string2 = decoded_string2.replace(ASCNUM[k], NUMNUM[k], "g");
     decoded_string2 = decoded_string2.replace(ASCNUM[k], NUMNUM[k], "g");
     decoded_string2 = decoded_string2.replace(ASCNUM[k], NUMNUM[k], "g");

  }
  if(decoded_string != original){ checkprint("Normal Morse : ", decoded_string);  }
  if(decoded_string2 != original2){ checkprint("Normal Morse : ", decoded_string);  }

/*
  $( ".step1" ).append('Step 2 : Hex/Dec/Oct Scan  start...<br>');
  text = $( ".inputvalue" ).val().toLowerCase().trim();
  match_pattern = /^[0-9a-z]+$/;
  if( ( ( text.length % 2)==0) && (match_pattern.test(text)) ){
    str = hex_ascii( text );
    checkprint("Hex : ", str.toLowerCase());
    original=str;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != original){    checkprint("Hex str2num : ", str.toLowerCase()); }
    str = original.split("").reverse().join("");
    checkprint("Hex : ",str.toLowerCase());
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != original){    checkprint("Hex str2num : ", str.toLowerCase()); }

    str = dec_ascii(text);
    checkprint("Dec : ", str.toLowerCase());
    original=str;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != original){    checkprint("Dec str2num : ", str.toLowerCase()); }
    str = original.split("").reverse().join("");
    checkprint("Dec : ", str.toLowerCase());
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != original){    checkprint("Dec str2num : ", str.toLowerCase()); }

    str = oct_ascii(text);
    checkprint("Oct : ", str.toLowerCase());
    original=str;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != original){    checkprint("Oct str2num : ", str.toLowerCase()); }
    str = original.split("").reverse().join("");
    checkprint("Oct : ", str.toLowerCase());
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != original){    checkprint("Oct str2num : ", str.toLowerCase()); }


    text=atbashof(text);
    str = hex_ascii(text);
    checkprint("Hex : ", str.toLowerCase());
    original=str;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != original){    checkprint("Hex str2num : ", str.toLowerCase()); }
    str = original.split("").reverse().join("");
    checkprint("Hex : ", str);
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != original){    checkprint("Hex str2num : ", str.toLowerCase()); }

    str = dec_ascii(text);
    checkprint("Dec : ", str.toLowerCase());
    original=str;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != original){    checkprint("Dec str2num : ", str.toLowerCase()); }
    str = original.split("").reverse().join("");
    checkprint("Dec : ", str.toLowerCase());
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != original){    checkprint("Dec str2num : ", str.toLowerCase()); }
    str = oct_ascii(text);
    checkprint("Oct : ", str.toLowerCase());
    original=str;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != original){    checkprint("Oct str2num : ", str.toLowerCase()); }
    str = original.split("").reverse().join("");
    checkprint("Oct : ", str);
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != original){    checkprint("Oct str2num : ", str.toLowerCase()); }
  }

  if( ( ( text.length % 3)==0) && (match_pattern.test(text)) ){
    str = dec3a(text);
    checkprint("Dec : ", str.toLowerCase());
    original=str;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != original){    checkprint("Dec str2num : ", str.toLowerCase()); }
    str = original.split("").reverse().join("");
    checkprint("Dec : ", str);
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != original){    checkprint("Dec str2num : ", str.toLowerCase()); }

    str = oct3a(text);
    checkprint("Oct : ", str.toLowerCase());
    original=str;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != original){    checkprint("Oct str2num : ", str.toLowerCase()); }
    str = original.split("").reverse().join("");
    checkprint("Oct : ", str.toLowerCase());
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != original){    checkprint("Oct str2num : ", str.toLowerCase()); }
  }



*/

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
    str = text;
    var decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }

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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }

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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }


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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }


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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }



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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }


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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }


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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }


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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }


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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }


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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }


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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }


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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }


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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }


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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }


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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }


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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }


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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }


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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }


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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }


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
    str = text;
    decoded_string_at2 = decoded_string_at;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       str = str.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
       decoded_string_at = decoded_string_at.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(str != text){    checkprint("Rectangle str2num : ", str); }
    if(decoded_string_at != decoded_string_at2){    checkprint("Rectangle str2num : ", decoded_string_at); }

  }


  $( ".step1" ).append('Step 4 : morse 2 Ascii & Braille_ASCII start...</br>');

  text = $( ".inputvalue" ).val().trim();
  text = hira2kana(text);
  text = kana2zen(text);
  var original= "";
  if(!text.match(NUM2CHECK)){
    original = morse2code(text);
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
     var baudot = baudot12345(str);
     checkprint("baudot : ", baudot);
     var checkstr = baudot;
     for(var k=0, len=ASCNUM.length; k<len; k++){ 
       baudot = baudot.replace(ASCNUM[k], NUMNUM[k], "g");
       baudot = baudot.replace(ASCNUM[k], NUMNUM[k], "g");
       baudot = baudot.replace(ASCNUM[k], NUMNUM[k], "g");
       baudot = baudot.replace(ASCNUM[k], NUMNUM[k], "g");
       baudot = baudot.replace(ASCNUM[k], NUMNUM[k], "g");
     }
     if(checkstr != baudot)     checkprint("baudot str2num : ", baudot);

     baudot = baudot54321(str);
     checkprint("baudot : ", baudot);
     var checkstr = baudot;
     for(var k=0, len=ASCNUM.length; k<len; k++){ 
       baudot = baudot.replace(ASCNUM[k], NUMNUM[k], "g");
       baudot = baudot.replace(ASCNUM[k], NUMNUM[k], "g");
       baudot = baudot.replace(ASCNUM[k], NUMNUM[k], "g");
       baudot = baudot.replace(ASCNUM[k], NUMNUM[k], "g");
       baudot = baudot.replace(ASCNUM[k], NUMNUM[k], "g");
     }
     if(checkstr != baudot)     checkprint("baudot str2num : ", baudot);

  }else{
     $( ".step1" ).append('Not baudot <br>' );
  }


  if( (str.length % 12 ) ==0 ){
     $( ".step1" ).append('ibm80<br>' );
     var ibm = ibm80(str);
     checkprint("ibm80 : ", ibm);
     var checkstr = ibm;
     for(var k=0, len=ASCNUM.length; k<len; k++){ 
       ibm = ibm.replace(ASCNUM[k], NUMNUM[k], "g");
       ibm = ibm.replace(ASCNUM[k], NUMNUM[k], "g");
       ibm = ibm.replace(ASCNUM[k], NUMNUM[k], "g");
       ibm = ibm.replace(ASCNUM[k], NUMNUM[k], "g");
       ibm = ibm.replace(ASCNUM[k], NUMNUM[k], "g");
     }
     if(checkstr != ibm)     checkprint("ibm80 str2num : ", ibm);

  }else{
     $( ".step1" ).append('Not baudot <br>' );
  }

  if( (str.length % 11 ) ==2 ){
     $( ".step1" ).append('code128<br>' );
     var co28 = code128(str);
     checkprint("code128 : ", co28);
     var checkstr = co28;
     $( ".step1" ).append('code128--->'+co28+'<br>' );
     for(var k=0, len=ASCNUM.length; k<len; k++){ 
       co28 = co28.replace(ASCNUM[k], NUMNUM[k], "g");
       co28 = co28.replace(ASCNUM[k], NUMNUM[k], "g");
       co28 = co28.replace(ASCNUM[k], NUMNUM[k], "g");
       co28 = co28.replace(ASCNUM[k], NUMNUM[k], "g");
       co28 = co28.replace(ASCNUM[k], NUMNUM[k], "g");
     }
     if(checkstr != co28)     checkprint("code128 str2num : ", co28);

  }else{
     $( ".step1" ).append('Not baudot <br>' );
  }

  str=trimspace(str);
  str=trimCRLF(str);

  original=trimspace(original);
  original=trimCRLF(original);

  if( (str.length % 6 ) ==0 ){
     $( ".step1" ).append('braille<br>' );
     var braille = code2braille(str);
//     original=braille;
     checkprint("braille 2xN : ", braille);
     str = braille;
     $( ".step1" ).append('--2xN--> ' + braille +'<br>' );
     for(var k=0, len=ASCNUM.length; k<len; k++){ 
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
     }
     if(str != braille)     checkprint("braille 2xN str2num : ", braille);
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
     str = braille;
     for(var k=0, len=ASCNUM.length; k<len; k++){ 
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
     }
     if(str != braille)     checkprint("braille 2xN str2num : ", braille);
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
     str = braille;
     $( ".step1" ).append('--3xN--> ' + braille +'<br>' );

     for(var k=0, len=ASCNUM.length; k<len; k++){ 
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
     }
     if(str != braille)     checkprint("braille 3xN str2num : ", braille);

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

     str = braille;
     for(var k=0, len=ASCNUM.length; k<len; k++){ 
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
     }
     if(str != braille)     checkprint("braille 3xN str2num : ", braille);



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
     str = braille;
     for(var k=0, len=ASCNUM.length; k<len; k++){ 
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
       braille = braille.replace(ASCNUM[k], NUMNUM[k], "g");
     }
     if(str != braille)     checkprint("braille Nx3 str2num : ", braille);
  }else{
     $( ".step1" ).append('Not Braille <br>' );
  }




  






  $( ".step1" ).append('Step 5 : Base64/32  start...');
  text = $( ".inputvalue" ).val().trim();
    var base= decodeBase64($( ".inputvalue" ).val().trim());
    $( '<li> DecodeBase64->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base);
    checkprint("Base64: ", base.split("").reverse().join(""));
    base=base.toLowerCase();
    var decode_string=base;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
       base = base.replace(ASCNUM[k], NUMNUM[k], "g");
       base = base.replace(ASCNUM[k], NUMNUM[k], "g");
       base = base.replace(ASCNUM[k], NUMNUM[k], "g");
       base = base.replace(ASCNUM[k], NUMNUM[k], "g");
       base = base.replace(ASCNUM[k], NUMNUM[k], "g");
    }

    if(decode_string != base)   checkprint("Base64: ", base);
  
    var array = $( ".inputvalue" ).val().trim().split("");
    str = array.reverse().join("");
    base= decodeBase64(str);
    $( '<li> DecodeBase64->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base);
    checkprint("Base64: ", base.split("").reverse().join(""));
    base=base.toLowerCase();
    var decode_string=base;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(decode_string != base)   checkprint("Base64: ", base);
    str="";
    for(var i=0; i<text.length;i++){
       ch = text.charCodeAt(i);
       if(ch>96 && ch <123) str +=  String.fromCharCode(ch-32);
       if(ch>64 && ch <91) str +=  String.fromCharCode(ch+32);
       if(ch>40 && ch <63) str +=  String.fromCharCode(ch);
    }
    base= decodeBase64(str);
    checkprint("Base64: ", base);
    checkprint("Base64: ", base.split("").reverse().join(""));
    $( '<li> DecodeBase64->' +base+'</li>' ).appendTo($( ".step1" ));
    base=base.toLowerCase();
    var decode_string=base;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
      base = base.replace(ASCNUM[k], NUMNUM[k], "g");
       base = base.replace(ASCNUM[k], NUMNUM[k], "g");
       base = base.replace(ASCNUM[k], NUMNUM[k], "g");
       base = base.replace(ASCNUM[k], NUMNUM[k], "g");
       base = base.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(decode_string != base)   checkprint("Base64: ", base);

    array = str.split("");
    str = array.reverse().join("");
    base= decodeBase64(str);
    checkprint("Base64: ", base.split("").reverse().join(""));
    $( '<li> DecodeBase64->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base);
    base=base.toLowerCase();
    var decode_string=base;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(decode_string != base)   checkprint("Base64: ", base);

    base= base32_decode(str.toUpperCase());
    $( '<li> DecodeBase32->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base32: ", base);
    checkprint("Base32: ", base.split("").reverse().join(""));
    base=base.toLowerCase();
    var decode_string=base;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(decode_string != base)   checkprint("Base64: ", base);

    array = str.split("");
    str = array.reverse().join("");
    base= base32_decode(str.toUpperCase());
    $( '<li> DecodeBase32->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base32: ", base);
    checkprint("Base32: ", base.split("").reverse().join(""));
    base=base.toLowerCase();
    var decode_string=base;
    for(var k=0, len=ASCNUM.length; k<len; k++){ 
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
    }
    if(decode_string != base)   checkprint("Base64: ", base);



/*
  }else{
     $( ".step1" ).append('String cannot decodebase64 ...<br>');
  }
*/
  base= encodeBase64($( ".inputvalue" ).val().trim());
  $( '<li> Base64->' +base+'</li>' ).appendTo($( ".step1" ));
  checkprint("Base64: ", base);
  checkprint("Base64: ", base.split("").reverse().join(""));
    base=base.toLowerCase();
  decode_string=base;
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(decode_string != base)   checkprint("Base64: ", base);
//  checkprint("Base64: ", base);
//  checkprint("Base64: ", base.split("").reverse().join(""));
  base= decode_ascii85("<~" + $( ".inputvalue" ).val().trim() + "~>");
  $( '<li> Base85->' +base+'</li>' ).appendTo($( ".step1" ));
  checkprint("Base85: ", base);
  checkprint("Base85: ", base.split("").reverse().join(""));
    base=base.toLowerCase();
  decode_string=base;
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(decode_string != base)   checkprint("Base85: ", base);

  base= decode_ascii85("<~" + $( ".inputvalue" ).val().split("").reverse().join("").trim() + "~>");
  $( '<li> Base85->' +base+'</li>' ).appendTo($( ".step1" ));
  checkprint("Base85: ", base);
  checkprint("Base85: ", base.split("").reverse().join(""));
    base=base.toLowerCase();
  decode_string=base;
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(decode_string != base)   checkprint("Base85: ", base);


  base= uudecode($( ".inputvalue" ).val().trim() );
  $( '<li> uudecode->' +base+'</li>' ).appendTo($( ".step1" ));
  base=base.toLowerCase();
  checkprint("uudecode: ", base);
  checkprint("uudecode: ", base.split("").reverse().join(""));
  decode_string=base;
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(decode_string != base)   checkprint("uudecode: ", base);

  base= uudecode($( ".inputvalue" ).val().split("").reverse().join("").trim() );
  $( '<li> uudecode->' +base+'</li>' ).appendTo($( ".step1" ));
  checkprint("uudecode: ", base);
  checkprint("uudecode: ", base.split("").reverse().join(""));
    base=base.toLowerCase();
  decode_string=base;
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(decode_string != base)   checkprint("uudecode: ", base);


  base= xxdecode($( ".inputvalue" ).val().trim() );

  $( '<li> xxdecode->' +base+'</li>' ).appendTo($( ".step1" ));
  checkprint("xxdecode: ", base);
  checkprint("xxdecode: ", base.split("").reverse().join(""));
    base=base.toLowerCase();
  decode_string=base;
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
     base = base.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(decode_string != base)   checkprint("xxdecode: ", base);




  $( ".step1" ).append('Step 6 : Playfair/Bifid  start...');
  var pf =Playfair(1,$( ".inputvalue" ).val().toLowerCase().trim(),"J","I","",0);
  $( '<li> Playfair->' +pf+'</li>' ).appendTo($( ".step1" ));
  checkprint("Playfair: ", pf);
//  checkprint("Playfair: ", pf.split("").reverse().join(""));
  text=pf;
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(text != pf)   checkprint("Playfair: ", pf);
 
  array = text.split("");
  str = array.reverse().join("");
  text=str;
  checkprint("Playfair: ", str);
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(text != str)   checkprint("Playfair: ", str);



  pf =Playfair(-1,$( ".inputvalue" ).val().toLowerCase().trim(),"J","I","",0);
  $( '<li> Playfair->' +pf+'</li>' ).appendTo($( ".step1" ));
  checkprint("Playfair: ", pf);
  text=pf;
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(text != pf){   checkprint("Playfair: ", pf); }

  pf = text.split("").reverse().join("");
  checkprint("Playfair: ", str);
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(text != pf){   checkprint("Playfair: ", pf); }

  var pf =Bifid(1,$( ".inputvalue" ).val().toLowerCase().trim(),"J","I","",0);
  $( '<li> Bifid ->' +pf+'</li>' ).appendTo($( ".step1" ));
  text=pf;
  checkprint("Bifid: ", pf);
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(text != pf)   checkprint("Bifid: ", pf);

  array = pf.split("");
  str = array.reverse().join("");
  text=str;
  checkprint("Playfair: ", str);
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(text != str)   checkprint("Bifid: ", str);

  pf =Bifid(-1,$( ".inputvalue" ).val().toLowerCase().trim(),"J","I","",0);
  $( '<li> Bifid ->' +pf+'</li>' ).appendTo($( ".step1" ));
  checkprint("Bifid: ", pf);
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
     pf = pf.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(text != pf)   checkprint("Bifid: ", pf);

  array = pf.split("");
  str = array.reverse().join("");
  text=str;
  checkprint("Playfair: ", str);
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(text != str)   checkprint("Bifid: ", str);

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
  checkprint("Colors: ", an);
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(an != str)   checkprint("Colors: ", an);

  an =colordecode ($( ".inputvalue" ).val().toLowerCase().trim().split("").reverse().join(""));
  $( '<li> Colors->' +an+'</li>' ).appendTo($( ".step1" ));
  checkprint("Colors: ", an);
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(an != str)   checkprint("Colors: ", an);

  an =colordecode2 ($( ".inputvalue" ).val().toLowerCase().trim().split("").join(""));
  str=an;
  $( '<li> Colors->' +an+'</li>' ).appendTo($( ".step1" ));
  checkprint("Colors: ", an);
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(an != str)   checkprint("Colors: ", an);

  an =colordecode2 ($( ".inputvalue" ).val().toLowerCase().trim().split("").reverse().join(""));
  $( '<li> Colors->' +an+'</li>' ).appendTo($( ".step1" ));
  checkprint("Colors: ", an);
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
     an = an.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(an != str)   checkprint("Colors: ", an);

};

/*
function checkprint(name,decoded_string){
     var code="";
    if( code  = decoded_string.match(REP1) ){
       if($.inArray(code[2], keyworddata) >= 0){
         $('<li>'+name+'--  '+code[1]+'<font color="red">'+code[2]+'</font>'+code[3]+'</li>').appendTo($( ".result" ));
       }else{
         $('<li>'+name+'--  '+code[1]+'<font color="green">'+code[2]+'</font>'+code[3]+'</li>').appendTo($( ".result2" ));
       }
    }
    if( code  = decoded_string.match(REP2) ){
       if($.inArray(code[2], keyworddata) >= 0){
         $('<li>'+name+'--  '+code[1]+'<font color="red">'+code[2]+'</font>'+code[3]+'</li>').appendTo($( ".result" ));
       }else{
         $('<li>'+name+'--  '+code[1]+'<font color="green"><b>'+code[2]+'</B></font>'+code[3]+'</li>').appendTo($( ".result2" ));
       }
    }

    if( code  = decoded_string.match(REP3) ){
       if($.inArray(code[2], keyworddata) >= 0){
         $('<li>'+name+'--  '+code[1]+'<font color="red">'+code[2]+'</font>'+code[3]+'</li>').appendTo($( ".result" ));
       }else{
         $('<li>'+name+'--  '+code[1]+'<font color="green"><b>'+code[2]+'</B></font>'+code[3]+'</li>').appendTo($( ".result2" ));
       }
    }
}
*/

function basic(mode,text){
  $( '<li> Input -> <font color="green">' +text+'</font></li>' ).appendTo($( ".step1" ));
  checkprint(mode+"/NORMAL                 : ", text);
  var str = text;
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(str != text){
     checkprint(mode+"/NORMAL str2num         : ", str);
  }
  str = text;
  var array   = str.split("");
  str = array.reverse().join("");
  if(mode =="Normal"){
      $( '<li> Reverse -> ' +str+'</li>' ).appendTo($( ".step1" ));
  }
  checkprint(mode+"/Reverse                : ", str);
  var decoded_string_at = str;
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if (str != decoded_string_at){
      checkprint(mode+"/Reverse str2num        : ", str);
  }
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
  str = decoded_string_at;
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(str != decoded_string_at){
     checkprint(mode+"/Atbash  str2num        : ", str);
     checkprint(mode+"/Atbash  str2num        : ", str.split("").reverse().join(""));
  }

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
  str = decoded_string_at;
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(str != decoded_string_at){
     checkprint(mode+"/Atbash2  str2num        : ", str);
     checkprint(mode+"/Atbash2  str2num        : ", str.split("").reverse().join(""));
  }

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
  str = decoded_string_at;
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
  }
  if(str != decoded_string_at){
     checkprint(mode+"/Atbash3  str2num        : ", str);
     checkprint(mode+"/Atbash3  str2num        : ", str.split("").reverse().join(""));
  }


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
  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str2 = str2.replace(ASCNUM[k], NUMNUM[k], "g");
     str2 = str2.replace(ASCNUM[k], NUMNUM[k], "g");
     str2 = str2.replace(ASCNUM[k], NUMNUM[k], "g");
     str2 = str2.replace(ASCNUM[k], NUMNUM[k], "g");
     str2 = str2.replace(ASCNUM[k], NUMNUM[k], "g");
     str3 = str3.replace(ASCNUM[k], NUMNUM[k], "g");
     str3 = str3.replace(ASCNUM[k], NUMNUM[k], "g");
     str3 = str3.replace(ASCNUM[k], NUMNUM[k], "g");
     str3 = str3.replace(ASCNUM[k], NUMNUM[k], "g");
     str3 = str3.replace(ASCNUM[k], NUMNUM[k], "g");

  }
  if(str != decoded_string_at)      checkprint(mode+"/Morse R  NUM          : ", str);
  if(str2 != decoded_string_at2)    checkprint(mode+"/Morse X  NUM          : ", str2);
  if(str3 != decoded_string_at3)    checkprint(mode+"/Morse XR NUM          : ", str3);
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


  for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str2 = str2.replace(ASCNUM[k], NUMNUM[k], "g");
     str2 = str2.replace(ASCNUM[k], NUMNUM[k], "g");
     str2 = str2.replace(ASCNUM[k], NUMNUM[k], "g");
     str2 = str2.replace(ASCNUM[k], NUMNUM[k], "g");
     str2 = str2.replace(ASCNUM[k], NUMNUM[k], "g");
     str3 = str3.replace(ASCNUM[k], NUMNUM[k], "g");
     str3 = str3.replace(ASCNUM[k], NUMNUM[k], "g");
     str3 = str3.replace(ASCNUM[k], NUMNUM[k], "g");
     str3 = str3.replace(ASCNUM[k], NUMNUM[k], "g");
     str3 = str3.replace(ASCNUM[k], NUMNUM[k], "g");

  }
  if(str != decoded_string_at)      checkprint(mode+"/Morse R  NUM          : ", str);
  if(str2 != decoded_string_at2)    checkprint(mode+"/Morse X  NUM          : ", str2);
  if(str3 != decoded_string_at3)    checkprint(mode+"/Morse XR NUM          : ", str3);

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
	for(var k=0, len=ASCNUM.length; k<len; k++){ 
		str = str.replace(ASCNUM[k], NUMNUM[k], "g");
		str = str.replace(ASCNUM[k], NUMNUM[k], "g");
		str = str.replace(ASCNUM[k], NUMNUM[k], "g");
		str = str.replace(ASCNUM[k], NUMNUM[k], "g");
		str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	}
	if(i==13 && mode =="Normal")         $( '<li> ROT13 -> ' +decoded_string+'</li>' ).appendTo($( ".step1" ));
	if(str != decoded_string)        checkprint(mode+"Rot str2num        "+i+": ", str);
	var array   = decoded_string.split("");
	str = array.reverse().join("");
	checkprint(mode+"Rot&Reverse        "+i+": ",str);
	decoded_string=str;
	for(var k=0, len=ASCNUM.length; k<len; k++){ 
		 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
		 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
		 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
		 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
		 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	}
     if(str != decoded_string)        checkprint(mode+"Rot&Reverse str2num"+i+": ", str);
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
     for(var k=0, len=ASCNUM.length; k<len; k++){ 
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     }
     if(str != decoded_string_at)     checkprint(mode+"Rot&Atbash str2num "+i+": ", str);
     array   = decoded_string_at.split("");
     str     = array.reverse().join("");
     decoded_string_at = str ;
     checkprint(mode+"Rot&Atbash&Reverse "+i+": ",str);
     for(var k=0, len=ASCNUM.length; k<len; k++){ 
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     }
     if(str != decoded_string_at)     checkprint(mode+"Rot&At&Rev str2num"+i+": ", str);
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
     var str = decoded_string;
     for(var k=0, len=ASCNUM.length; k<len; k++){ 
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     }
     if(str != decoded_string)          checkprint(mode+"Rot(-) str2num     "+i+": ", str);

     var array   = decoded_string.split("");
     str = array.reverse().join("");
     checkprint(mode+"Rot&Reverse        "+i+": ",str);
     decoded_string=str;
     for(var k=0, len=ASCNUM.length; k<len; k++){ 
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     }
     if(str != decoded_string)         checkprint(mode+"Rot&Reverse str2num"+j+": ", str);
//     var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     var tebahpla = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA0123456789";
     var decoded_string_at = "";
     for (k = 0; k < decoded_string.length; k++) {
         var coded_letter = decoded_string.charAt(k);
         var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
     checkprint(mode+"Rot&Atbash         "+i+": ",decoded_string_at);

     str = decoded_string_at;
     for(var k=0, len=ASCNUM.length; k<len; k++){ 
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     }
     if(str != decoded_string_at)         checkprint(mode+"Rot&Atbash str2num "+i+": ", str);
     array   = decoded_string_at.split("");
     str     = array.reverse().join("");
     checkprint(mode+"Rot&Atbash&Reverse "+i+": ",str);
     decoded_string_at=str;
     for(var k=0, len=ASCNUM.length; k<len; k++){ 
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
	 str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     }
     if(str != decoded_string_at)     checkprint(mode+"Rot&At&Rev str2num "+i+": ", str);
  }

}
