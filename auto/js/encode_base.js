
var ASCNUM = ['three','seven','eight','thre','four','five','seve','eigh','nine','two','thr','fou','fiv','six','sev','eig','nin','tw','th','fo','fi','si','se','ei','ni','viii','vii','iii','ii','vi','iv','v','ix'];
var NUMNUM = ['3','7','8','3','4','5','7','8','9','2','3','4','5','6','7','8','9','2','3','4','5','6','7','8','9','8','7','3','2','6','4','5','9'];
var colors;
var webcolors;

$( ".TypeRect"    ).change(function() { check_default(); });
$( ".TypeRot"     ).change(function() { check_default(); });
$( ".inputvalue"  ).change(function() { check_default(); });
$( ".TypeO"       ).change(function() { check_default(); });
$( ".TypeN"       ).change(function() { check_default(); });
$( ".TypeJ"       ).change(function() { check_default(); });
$( ".TypeA"       ).change(function() { check_default(); });
$( ".TypeE"       ).change(function() { check_default(); });
$( ".TypeSet2"    ).change(function() { check_default(); });
$( ".TypeSet3"    ).change(function() { check_default(); });

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

  var Rectangles = trimCRLF(trimspace($( ".inputvalue" ).val().toLowerCase().trim()));
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
              /*0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 */
    var rect = ["","","","","","","","","","","","","","","","","","","","","",""];

    for(j=0;j<h;j++){  /* 横読み */
      for(k=0;k<w;k++){
        rect[0] += matrix[j][w-k-1];
        rect[1] += matrix[h-j-1][w-k-1];
        if(j%2 ==0){
           rect[2] += matrix[j][w-k-1];
           rect[3] += matrix[j][k];
        }else{
           rect[2] += matrix[j][k];
           rect[3] += matrix[j][w-k-1];
        }
        if(k%2 ==0){
           rect[4] += matrix[h-j-1][w-k-1];
           rect[5] += matrix[j][w-k-1];
        }else{
           rect[4] += matrix[j][w-k-1];
           rect[5] += matrix[h-j-1][w-k-1];
        }
      }
    }

    for(k=0;k<w;k++){ /* 縦読み */
      for(j=0;j<h;j++){
        rect[6] += matrix[j][k];
        rect[7] += matrix[j][w-k-1];
        rect[8] += matrix[h-j-1][k];
        rect[9] += matrix[h-j-1][w-k-1];

        if(j%2 ==0){
           rect[10] += matrix[j][w-k-1];
           rect[11] += matrix[j][k];
        }else{
           rect[10] += matrix[j][k];
           rect[11] += matrix[j][w-k-1];
        }
        if(k%2 ==0){
           rect[12] += matrix[h-j-1][w-k-1];
           rect[13] += matrix[j][w-k-1];
        }else{
           rect[12] += matrix[j][w-k-1];
           rect[13] += matrix[h-j-1][w-k-1];
        }
      }
    }

    var startw=w-1;
    var starth=h-1;
    var spin=0;
    var maxspin= (((startw<starth)?startw:starth ) /2 ).toFixed(0) ;
    while(spin <= maxspin && rect[14].length < Rectangles.length){  /* ぐるぐる横から */
      if(startw >0){
        for(k=0;k<startw;k++){
            rect[14] += matrix[spin][k+spin];
            rect[15] += matrix[spin][w-k-1-spin];
            rect[16] += matrix[h-spin-1][k+spin];
            rect[17] += matrix[h-spin-1][w-k-1-spin];
        }
      }
      if(starth >0){
        for(k=0;k<starth;k++){
            rect[14] += matrix[spin+starth-k][spin];
            rect[15] += matrix[spin+starth-k][w-1-spin];
            rect[16] += matrix[h-spin-starth+k-1][spin];
            rect[17] += matrix[h-spin-starth+k-1][w-1-spin];
        }
      }
      if(startw >0){
        for(k=0;k<startw;k++){
            rect[14] += matrix[spin+starth][startw-k+spin];
            rect[15] += matrix[spin+starth][w-startw-1-spin+k];
            rect[16] += matrix[h-spin-1-starth][startw-k+spin];
            rect[17] += matrix[h-spin-1-starth][w-startw-1-spin+k];
        }
      }
      if(starth >0){
        for(k=0;k<starth;k++){
            rect[14] += matrix[spin+k][startw+spin];
            rect[15] += matrix[spin+k][w-startw-1-spin];
            rect[16] += matrix[h-spin-1-k][startw+spin];
            rect[17] += matrix[spin+k][w-startw-1-spin];
        }
      }

      starth -=2;
      startw -=2;
      spin++;
    }
    startw=w-1;
    starth=h-1;
    spin=0;
    while(spin <= maxspin && rect[18].length < Rectangles.length){  /* ぐるぐる縦から */
      if(starth >0){
        for(k=0;k<starth;k++){
            rect[18] += matrix[spin+k][spin];
            rect[19] += matrix[spin+k][startw+spin-1];
            rect[20] += matrix[spin+starth-k][spin];
            rect[21] += matrix[spin+starth-k][w-spin-1];
        }
      }
      if(startw >0){
        for(k=0;k<startw;k++){
            rect[18] += matrix[spin+starth][spin+k];
            rect[19] += matrix[spin+starth][startw+spin-1-k];
            rect[20] += matrix[spin][spin+k];
            rect[21] += matrix[spin][w-spin-1-k];
        }
      }
      if(starth >0){
        for(k=0;k<starth;k++){
            rect[18] += matrix[spin+starth-k][startw+spin];
            rect[19] += matrix[spin+starth-k][spin];
            rect[20] += matrix[spin+k][startw+spin];
            rect[21] += matrix[spin+k][w-spin-1-startw];
        }
      }
      if(startw >0){
        for(k=0;k<startw;k++){
            rect[18] += matrix[spin][startw+spin-k];
            rect[19] += matrix[spin][spin+k];
            rect[20] += matrix[spin+starth][startw+spin-k];
            rect[21] += matrix[spin+starth][w-spin-1-startw+k];
        }
      }
      starth -=2;
      startw -=2;
      spin++;
    }
    for (j=0;j<rect.length;j++){
       checkprint("Rectangle : ", rect[j]);
       checkprint("Rectangle/Atbash : ",Atbash(rect[j]));
       checkprint("Rectangle : ", rect[j].split("").reverse().join(""));
       checkprint("Rectangle/Atbash : ",Atbash(rect[j].split("").reverse().join("")));
       if($( ".TypeRect").prop( "checked" ) ){
          code_exchange(rect[j]);
       }
     }
  }


  $( ".step1" ).append('Step 4 : morse 2 Ascii & Braille_ASCII start...</br>');

  text = $( ".inputvalue" ).val().trim();
  var original= "";
  if(!text.match(NUM2CHECK)){
    original = Str2Morse(text).split(" ").join("");
  }else{
    original=text.split(" ").join();
  }
  str = original;
  $( ".step1" ).append('--> ' + str +'<br>' );
  code_exchange(str);

  if( (str.length % 7 ) ==0 ){
     $( ".step1" ).append('sevendigit<br>' );
     code_exchange(sevendigit(str));
  }else{
     $( ".step1" ).append('Not 7Seg <br>' );
  }

  if( (str.length % 5 ) ==0 ){
     $( ".step1" ).append('Baudot<br>' );
     var baudot = baudot1(str);
     checkprint("baudot : ", baudot);
     baudot = baudot1(str.split("").reverse().join(""));
     checkprint("baudot : ", baudot);


     baudot = baudot2(str);
     checkprint("baudot : ", baudot);
     baudot = baudot2(str.split("").reverse().join(""));
     checkprint("baudot : ", baudot);

     baudot = baconian(str);
     checkprint("baconian : ", baudot);
     baudot = baconian(str.split("").reverse().join(""));
     checkprint("baconian : ", baudot);
  }else{
     $( ".step1" ).append('Not baudot / baconian<br>' );
  }


  if( (str.length % 12 ) ==0 ){
     $( ".step1" ).append('ibm80<br>' );
     var ibm = ibm80(str);
     checkprint("ibm80 : ", ibm);
     ibm = ibm80(str.split("").reverse().join(""));
     checkprint("ibm80 : ", ibm);
  }else{
     $( ".step1" ).append('Not ibm80 <br>' );
  }

  if( (str.length % 11 ) ==2 ){
     $( ".step1" ).append('code128<br>' );
     var co28 = code128(str);
     checkprint("code128 : ", co28);
     var checkstr = code128(str.split("").reverse().join(""));
     checkprint("code128 : ", checkstr);
     $( ".step1" ).append('code128--->'+co28+':'+checkstr+'<br>' );
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
     braille = code2braille(str.split("").reverse().join(""));
     checkprint("braille 2xN(R) : ", braille);
     $( ".step1" ).append('--2xN(R)--> ' + braille +'<br>' );
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
     braille = code2braille(str.split("").reverse().join(""));
     checkprint("braille 3xN(R) : ", braille);
     $( ".step1" ).append('--3xN(R)--> ' + braille +'<br>' );
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
     braille = code2braille(str.split("").reverse().join(""));
     checkprint("braille 3xN(R) : ", braille);
     $( ".step1" ).append('--3xN(R)--> ' + braille +'<br>' );

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
     braille = code2braille(str.split("").reverse().join(""));
     checkprint("braille Nx3(R) : ", braille);
     $( ".step1" ).append('--Nx3(R)--> ' + braille +'<br>' );
  }else{
     $( ".step1" ).append('Not Braille <br>' );
  }


  $( ".step1" ).append('Step 5 : Base64/32  start...');
  text = $( ".inputvalue" ).val().trim();
    var base= Hex2String(GetHexbyBase64($( ".inputvalue" ).val().trim()));
    $( '<li> DecodeBase64->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());
 
    str = text.split("").reverse().join("");
    base= Hex2String(GetHexbyBase64(str));
    $( '<li> DecodeBase64->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());
 
    str=""; /* 大文字小文字変換 */
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
    str = str.split("").reverse().join("");
    base=  Hex2String(GetHexbyBase64(str));
    $( '<li> DecodeBase64->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());
    checkprint("Base64: ", base);



    str=text;
    base= Hex2String(GetHexbyBase32(str.toUpperCase()));
    $( '<li> DecodeBase32->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base32: ", base.toLowerCase());
    checkprint("Base32: ", base.split("").reverse().join("").toLowerCase());

    str = text.split("").reverse().join("");
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
  if(str.match(StringCHECK)){
    for (var i=1; i<str.length;i++){
        var str2 = Skip_Decode(str, i, 0);
        checkprint("Skip:", str2);
        $( '<li> Skip'+i+' ->' +str2+'</li>' ).appendTo($( ".step1" ));
    }
  }else{
        $( '<li> Skip not alphabet' ).appendTo($( ".step1" ));
  }

  str = $( ".inputvalue" ).val().toLowerCase().trim();
  if(str.match(StringCHECK)){
    for(var j=2;j<str.length;j++){
      var str2 =  rail_decode(str,j,0);
        checkprint("rail:", str2);
        $( '<li> rail'+i+' ->' +str2+'</li>' ).appendTo($( ".step1" ));
    }
  }else{
        $( '<li> rail not alphabet' ).appendTo($( ".step1" ));
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

  $( ".step1" ).append('Step 8 : telephone  start...');
  var text =$( ".inputvalue" ).val().toLowerCase().trim();
  if(!text.match(TELCHECK)){
     str = tel1(text);
     checkprint("telephone:", str);
     $( '<li> telephone->' +str+'</li>' ).appendTo($( ".step1" ));
     checkprint("telephone:", str.split("").reverse().join(""));
     str = tel1(text.split("").reverse().join(""));
     checkprint("telephone:", str);
     $( '<li> telephone->' +str+'</li>' ).appendTo($( ".step1" ));
     checkprint("telephone:", str.split("").reverse().join(""));
     str = tel2(text);
     checkprint("telephone:", str);
     $( '<li> telephone->' +str+'</li>' ).appendTo($( ".step1" ));
     checkprint("telephone:", str.split("").reverse().join(""));
     str = tel2(text.split("").reverse().join(""));
     checkprint("telephone:", str);
     $( '<li> telephone->' +str+'</li>' ).appendTo($( ".step1" ));
     checkprint("telephone:", str.split("").reverse().join(""));
  }else{
     $( ".step1" ).append('Not telephone <br>' );
  }

  $( ".step1" ).append('Step 10 : Color Index  start...');
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
	checkprint(mode+"/Rot&Atbash         "+i+": ", Atbash(decoded_string));
	checkprint(mode+"/Rot&Atbash         "+i+": ", Atbash2(decoded_string));
	checkprint(mode+"/Rot&Reverse        "+i+": ", decoded_string.split("").reverse().join(''));
	checkprint(mode+"/Rot&Atbash&Reverse "+i+": ", Atbash(decoded_string.split("").reverse().join('')));
	checkprint(mode+"/Rot&Atbash&Reverse "+i+": ", Atbash2(decoded_string.split("").reverse().join('')));


	if($( ".TypeRot").prop( "checked" ) ){
		code_exchange(decoded_string);
		code_exchange(Atbash(decoded_string));
		code_exchange(Atbash2(decoded_string));
	}
//	str = decoded_string;
	if(i==13 && mode =="Normal")         $( '<li> ROT13 -> ' +decoded_string+'</li>' ).appendTo($( ".step1" ));
/*	var array   = decoded_string.split("");
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
*/
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
	checkprint(mode+"/Rot(-)                "+i+": ", decoded_string);
	checkprint(mode+"/Rot(-)&Atbash         "+i+": ", Atbash(decoded_string));
	checkprint(mode+"/Rot(-)&Atbash         "+i+": ", Atbash2(decoded_string));
	checkprint(mode+"/Rot(-)&Reverse        "+i+": ", decoded_string.split("").reverse().join(''));
	checkprint(mode+"/Rot(-)&Atbash&Reverse "+i+": ", Atbash(decoded_string.split("").reverse().join('')));
	checkprint(mode+"/Rot(-)&Atbash&Reverse "+i+": ", Atbash2(decoded_string.split("").reverse().join('')));

	if($( ".TypeRot").prop( "checked" ) ){
		code_exchange(decoded_string);
		code_exchange(Atbash(decoded_string));
		code_exchange(Atbash2(decoded_string));
	}

//     checkprint(mode+"Rot(-)             "+i+": ", decoded_string);
	if(i==-13 && mode =="Normal")         $( '<li> ROT-13 -> ' +decoded_string+'</li>' ).appendTo($( ".step1" ));

/*     str = decoded_string.split("").reverse().join("");
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
*/
  }
}
