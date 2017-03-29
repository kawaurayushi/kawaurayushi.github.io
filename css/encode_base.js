var colors;
var webcolors;
var flag=1;

$( ".Numeric"    ).change(function() { 
  if ($(".Numeric").is(':checked')) {
	 numbercheckold1 ='^'+checknum3+'([a-z]{3})'+checknum3+'([0-9a-z]*?)'+'([a-z])'+checknum3+'([a-z])'+checknum3+'([a-z])$';
	 numbercheckold2 ='^'+checknum3+'(...)'+checknum3+'([0-9a-z]*?)'+'(.)'+checknum3+'(.)'+checknum3+'(.)$';
	 numbercheckinv1 ='^([a-z]{3})'+checknum3+checknum3+'([0-9a-z]*?)'+checknum3+checknum3+checknum3+'([a-z]{2})$';
	 numbercheckinv2 ='^(...)'+checknum3+checknum3+'([0-9a-z]*?)'+checknum3+checknum3+checknum3+'(..)$';
	 numbercheckano1 ='^([a-z]{8})'+checknum3+'([0-9a-z]*?)'+checknum3+'$';
	 numbercheckano2 ='^(........)'+checknum3+'([0-9a-z]*?)'+checknum3+'$';
	 numberchecknot1 ='^([0-9a-z]*?)'+checknum3+'([a-z]{2})'+checknum3+checknum3+'([a-z]{2})'+checknum3+'$';
	 numberchecknot2 ='^([0-9a-z]*?)'+checknum3+'(..)'+checknum3+checknum3+'(..)'+checknum3+'$';
	 numbercheckinv3 ='^([a-z]{3})'+checknum3+checknum3+'([0-9a-z]*?)'+checknum3+checknum3+checknum3+'([a-z]{2})'+'([a-z]{3})'+checknum3+checknum3+'([0-9a-z]*?)'+checknum3+checknum3+checknum3+'([a-z]{2})$'
	 numbercheckinv4 ='^([a-z]{3})'+checknum3+checknum3+'([0-9a-z]*?)'+checknum3+checknum3+checknum3+'([a-z]{2})'+'([a-z]{3})'+checknum3+checknum3+'([0-9a-z]*?)'+checknum3+checknum3+checknum3+'([a-z]{2})'+'([a-z]{3})'+checknum3+checknum3+'([0-9a-z]*?)'+checknum3+checknum3+checknum3+'([a-z]{2})$';
	 numeric = numeric2;
  }else{
	 numbercheckold1 ='^'+checknum+'([a-z]{3})'+checknum+'([0-9a-z]*?)'+'([a-z])'+checknum+'([a-z])'+checknum+'([a-z])$';
	 numbercheckold2 ='^'+checknum+'(...)'+checknum+'([0-9a-z]*?)'+'(.)'+checknum+'(.)'+checknum+'(.)$';
	 numbercheckinv1 ='^([a-z]{3})'+checknum+checknum+'([0-9a-z]*?)'+checknum+checknum+checknum+'([a-z]{2})$';
	 numbercheckinv2 ='^(...)'+checknum+checknum+'([0-9a-z]*?)'+checknum+checknum+checknum+'(..)$';
	 numbercheckjoj1 ='^([a-z])'+checknum2+'([a-z])'+checknum2+'([0-9a-z]*?)'+'([a-z])'+checknum2+'([a-z]{2})$';
	 numbercheckjoj2 ='^(.)'+checknum2+'(.)'+checknum2+'([0-9a-z]*?)'+'(.)'+checknum2+'(..)$';
	 numbercheckano1 ='^([a-z]{8})'+checknum+'([0-9a-z]*?)'+checknum+'$';
	 numbercheckano2 ='^(........)'+checknum+'([0-9a-z]*?)'+checknum+'$';
	 numberchecknot1 ='^([0-9a-z]*?)'+checknum+'([a-z]{2})'+checknum+checknum+'([a-z]{2})'+checknum+'$';
	 numberchecknot2 ='^([0-9a-z]*?)'+checknum+'(..)'+checknum+checknum+'(..)'+checknum+'$';
	 numbercheckinv3 ='^([a-z]{3})'+checknum+checknum+'([0-9a-z]*?)'+checknum+checknum+checknum+'([a-z]{2})'+'([a-z]{3})'+checknum+checknum+'([0-9a-z]*?)'+checknum+checknum+checknum+'([a-z]{2})$'
	 numbercheckinv4 ='^([a-z]{3})'+checknum+checknum+'([0-9a-z]*?)'+checknum+checknum+checknum+'([a-z]{2})'+'([a-z]{3})'+checknum+checknum+'([0-9a-z]*?)'+checknum+checknum+checknum+'([a-z]{2})'+'([a-z]{3})'+checknum+checknum+'([0-9a-z]*?)'+checknum+checknum+checknum+'([a-z]{2})$';
	numeric = numeric1;
	}
	check_default(); 
});

$( ".AllKey "     ).change(function() { check_default4(); });
$( ".TypeRect"    ).change(function() { check_default4(); });
$( ".TypeRot"     ).change(function() { check_default4(); });
$( ".inputvalue1" ).change(function() { check_default4(); });
$( ".inputvalue2" ).change(function() { check_default4(); });
$( ".inputvalue3" ).change(function() { check_default4(); });
$( ".TypeO"       ).change(function() { check_default4(); });
$( ".TypeN"       ).change(function() { check_default4(); });
$( ".TypeJ"       ).change(function() { check_default4(); });
$( ".TypeA"       ).change(function() { check_default4(); });
$( ".TypeE"       ).change(function() { check_default4(); });
$( ".TypeSet2"    ).change(function() { check_default4(); });
$( ".TypeSet3"    ).change(function() { check_default4(); });
$( ".LogOut "     ).change(function() { check_default4(); });

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
  $( ".step1" ).html('Step 1 :  code check ...<br>');
  $( ".step2" ).html('...<br>');
}
function check_default1(){
	var startTime = new Date();
	$( ".inputvalue" ).val($( ".inputvalue1" ).val());
	check_default();
	var endTime = new Date();
	$( ".LapTime").html( (endTime - startTime) + "ms");
}

function check_default2(){
	var startTime = new Date();
	$( ".inputvalue" ).val($( ".inputvalue1" ).val() + $( ".inputvalue2" ).val());
	check_default();
	var endTime = new Date();
	$( ".LapTime").html( (endTime - startTime) + "ms");
}
function check_default3(){
	var startTime = new Date();
	$( ".inputvalue" ).val($( ".inputvalue1" ).val() + $( ".inputvalue2" ).val()+ $( ".inputvalue3" ).val());
	check_default();

	$( ".inputvalue" ).val(Skip_Decode2($( ".inputvalue" ).val(),3,0) );
	check_default();

	$( ".inputvalue" ).val($( ".inputvalue1" ).val() + $( ".inputvalue3" ).val()+ $( ".inputvalue2" ).val());
	check_default();

	$( ".inputvalue" ).val(Skip_Decode2($( ".inputvalue" ).val(),3,0) );
	check_default();

	$( ".inputvalue" ).val($( ".inputvalue2" ).val() + $( ".inputvalue1" ).val()+ $( ".inputvalue3" ).val());
	check_default();

	$( ".inputvalue" ).val(Skip_Decode2($( ".inputvalue" ).val(),3,0) );
	check_default();




	if(    ($( ".inputvalue1" ).val().length == $( ".inputvalue2" ).val().length)
		&& ($( ".inputvalue2" ).val().length == $( ".inputvalue3" ).val().length)  
		&& ( ($( ".inputvalue1" ).val().length %3) ==0 ) ){
		var i=0;
		var str11="",str12="",str13="";
		var str21="",str22="",str23="";
		var str31="",str32="",str33="";
		while (i<$( ".inputvalue1" ).val().length){
			str11 += $( ".inputvalue1" ).val().charAt(i);
			str11 += $( ".inputvalue2" ).val().charAt(i);
			str11 += $( ".inputvalue3" ).val().charAt(i);
			str21 += $( ".inputvalue1" ).val().charAt(i);
			str21 += $( ".inputvalue3" ).val().charAt(i);
			str21 += $( ".inputvalue2" ).val().charAt(i);
			str31 += $( ".inputvalue2" ).val().charAt(i);
			str31 += $( ".inputvalue1" ).val().charAt(i);
			str31 += $( ".inputvalue3" ).val().charAt(i);
			i++;
			str12 += $( ".inputvalue1" ).val().charAt(i);
			str12 += $( ".inputvalue2" ).val().charAt(i);
			str12 += $( ".inputvalue3" ).val().charAt(i);
			str22 += $( ".inputvalue1" ).val().charAt(i);
			str22 += $( ".inputvalue3" ).val().charAt(i);
			str22 += $( ".inputvalue2" ).val().charAt(i);
			str32 += $( ".inputvalue2" ).val().charAt(i);
			str32 += $( ".inputvalue1" ).val().charAt(i);
			str32 += $( ".inputvalue3" ).val().charAt(i);
			i++;
			str13 += $( ".inputvalue1" ).val().charAt(i);
			str13 += $( ".inputvalue2" ).val().charAt(i);
			str13 += $( ".inputvalue3" ).val().charAt(i);
			str23 += $( ".inputvalue1" ).val().charAt(i);
			str23 += $( ".inputvalue3" ).val().charAt(i);
			str23 += $( ".inputvalue2" ).val().charAt(i);
			str33 += $( ".inputvalue2" ).val().charAt(i);
			str33 += $( ".inputvalue1" ).val().charAt(i);
			str33 += $( ".inputvalue3" ).val().charAt(i);
			i++;

		}
		$( ".inputvalue" ).val(str11+str12+str13);
		check_default();
		$( ".inputvalue" ).val(str21+str22+str23);
		check_default();
		$( ".inputvalue" ).val(str31+str32+str33);
		check_default();
	}

	if( (($( ".inputvalue1" ).val().length + $( ".inputvalue2" ).val().length + $( ".inputvalue3" ).val().length)) %6 ==0) { 
		var original1 = $( ".inputvalue1" ).val() + $( ".inputvalue2" ).val() + $( ".inputvalue3" ).val();
		var original2 = $( ".inputvalue1" ).val() + $( ".inputvalue3" ).val() + $( ".inputvalue2" ).val();
		var original3 = $( ".inputvalue2" ).val() + $( ".inputvalue1" ).val() + $( ".inputvalue3" ).val();
		var i=0;
		var str11="",str12="",str13="";
		var str21="",str22="",str23="";
		var str31="",str32="",str33="";
		while (i<original1.length){
			str11 += original1.substr(i   ,2);
			str21 += original2.substr(i   ,2);
			str31 += original3.substr(i   ,2);
			str12 += original1.substr(i+2 ,2);
			str22 += original2.substr(i+2 ,2);
			str32 += original3.substr(i+2 ,2);
			str13 += original1.substr(i+4 ,2);
			str23 += original2.substr(i+4 ,2);
			str33 += original2.substr(i+4 ,2);
			i+=6;
		}
		$( ".inputvalue" ).val(str11);
		check_default();
		$( ".inputvalue" ).val(str21);
		check_default();
		$( ".inputvalue" ).val(str31);
		check_default();
		$( ".inputvalue" ).val(str12);
		check_default();
		$( ".inputvalue" ).val(str22);
		check_default();
		$( ".inputvalue" ).val(str32);
		check_default();
		$( ".inputvalue" ).val(str13);
		check_default();
		$( ".inputvalue" ).val(str23);
		check_default();
		$( ".inputvalue" ).val(str33);
		check_default();
	}

	var Rectangles = $( ".inputvalue1" ).val() + $( ".inputvalue2" ).val()+ $( ".inputvalue3" ).val();
	if( Rectangles.length %3 ==0){
		h= Rectangles.length / 3;
		var rect = ["","","","","","","","","","","","","","","","","","","","","",""];
		for(j=0;j<h;j++){
			rect[0] += Rectangles.charAt(0+j*3);
			rect[1] += Rectangles.charAt(1+j*3);
			rect[2] += Rectangles.charAt(2+j*3);
		}
		$( ".inputvalue" ).val(rect[0]);
		check_default();
		$( ".inputvalue" ).val(rect[1]);
		check_default();
		$( ".inputvalue" ).val(rect[2]);
		check_default();
	}

	Rectangles = $( ".inputvalue1" ).val() + $( ".inputvalue3" ).val()+ $( ".inputvalue2" ).val();
	if( Rectangles.length %3 ==0){
		h= Rectangles.length / 3;
		var rect = ["","","","","","","","","","","","","","","","","","","","","",""];
		for(j=0;j<h;j++){
			rect[0] += Rectangles.charAt(0+j*3);
			rect[1] += Rectangles.charAt(1+j*3);
			rect[2] += Rectangles.charAt(2+j*3);
		}
		$( ".inputvalue" ).val(rect[0]);
		check_default();
		$( ".inputvalue" ).val(rect[1]);
		check_default();
		$( ".inputvalue" ).val(rect[2]);
		check_default();
	}

	Rectangles = $( ".inputvalue2" ).val() + $( ".inputvalue1" ).val()+ $( ".inputvalue3" ).val();
	if( Rectangles.length %3 ==0){
		h= Rectangles.length / 3;
		var rect = ["","","","","","","","","","","","","","","","","","","","","",""];
		for(j=0;j<h;j++){
			rect[0] += Rectangles.charAt(0+j*3);
			rect[1] += Rectangles.charAt(1+j*3);
			rect[2] += Rectangles.charAt(2+j*3);
		}
		$( ".inputvalue" ).val(rect[0]);
		check_default();
		$( ".inputvalue" ).val(rect[1]);
		check_default();
		$( ".inputvalue" ).val(rect[2]);
		check_default();
	}


	var endTime = new Date();
	$( ".LapTime").html( (endTime - startTime) + "ms");

}

function check_default4(){
	init();
	if( $(".TypeSet2").is(':checked') ){
		$(".TypeSet3").prop("checked",false);
		flag=2;
	}else if ($(".TypeSet3").is(':checked') ){
		$(".TypeSet2").prop("checked",false);
		flag=3;
	}else{
		flag=1;
	}

	if(flag==1){
		check_default1();
	}else if(flag ==2){
		check_default2();
	}else if(flag ==3){
		check_default3();
	}
}

function check_default(){
  code_exchange($( ".inputvalue" ).val().toLowerCase().trim());
  key_exchange($( ".inputvalue" ).val().toLowerCase().trim());
  keyboard2morse($( ".inputvalue" ).val().toLowerCase().trim());
  var text = $( ".inputvalue" ).val().toLowerCase().trim();
  if(text.match('^[a-z]+$')){
    var decoded_string="";
    var from = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < text.length; i++) {
      decoded_string = decoded_string + from.indexOf(text.charAt(i)).toString(10);
    }
    code_exchange(decoded_string);
  }

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
  var original2= "";
  if(!text.match(NUM2CHECK)){
    original = Str2Morse(text).split(" ").join("");
    original2 = Str2Morse(text.split("").reverse().join("")).split(" ").join("");
  }else{
    original=text.split(" ").join();
    original2=text.split(" ").reverse().join();
  }
  str = original;
  str2 = original2;
  $( ".step1" ).append('--> ' + str +'<br>' );
  $( ".step1" ).append('--> ' + str2 +'<br>' );
  code_exchange(str);
  code_exchange(str2);

  if( (str.length % 7 ) ==0 ){
     $( ".step1" ).append('sevendigit<br>' );
     code_exchange(sevendigit(str));
     code_exchange(sevendigit(str2));
  }else{
     $( ".step1" ).append('Not 7Seg <br>' );
  }

  if( (str.length % 5 ) ==0 ){
     $( ".step1" ).append('Baudot<br>' );
     var baudot = baudot1(str);
     var baudota = baudot1(str2);
     checkprint("baudot : ", baudot);
     checkprint("baudot : ", baudota);
     baudot = baudot1(str.split("").reverse().join(""));
     baudota = baudot1(str2.split("").reverse().join(""));
     checkprint("baudot : ", baudot);
     checkprint("baudot : ", baudota);

     baudot = baudot2(str);
     baudota = baudot2(str2);
     checkprint("baudot : ", baudot);
     checkprint("baudot : ", baudota);
     baudot = baudot2(str.split("").reverse().join(""));
     baudota = baudot2(str2.split("").reverse().join(""));
     checkprint("baudot : ", baudot);
     checkprint("baudot : ", baudota);

     baudot = baconian(str);
     baudota = baconian(str2);
     checkprint("baconian : ", baudot);
     checkprint("baconian : ", baudota);
     baudot = baconian(str.split("").reverse().join(""));
     baudota = baconian(str2.split("").reverse().join(""));
     checkprint("baconian : ", baudot);
     checkprint("baconian : ", baudota);
  }else{
     $( ".step1" ).append('Not baudot / baconian<br>' );
  }

  if( (str.length % 12 ) ==0 ){
     $( ".step1" ).append('ibm80<br>' );
     var ibm = ibm80(str);
     var ibm2 = ibm80(str2);
     checkprint("ibm80 : ", ibm);
     checkprint("ibm80 : ", ibm2);
     ibm = ibm80(str.split("").reverse().join(""));
     ibm2 = ibm80(str2.split("").reverse().join(""));
     checkprint("ibm80 : ", ibm);
     checkprint("ibm80 : ", ibm2);
  }else{
     $( ".step1" ).append('Not ibm80 <br>' );
  }

  if( (str.length % 11 ) ==2 ){
     $( ".step1" ).append('code128<br>' );
     var co28 = code128(str);
     var co282 = code128(str2);
     checkprint("code128 : ", co28);
     checkprint("code128 : ", co282);
     var checkstr = code128(str.split("").reverse().join(""));
     var checkstr2 = code128(str2.split("").reverse().join(""));
     checkprint("code128 : ", checkstr);
     checkprint("code128 : ", checkstr2);
     $( ".step1" ).append('code128--->'+co28+':'+checkstr+'<br>' );
     $( ".step1" ).append('code128--->'+co282+':'+checkstr2+'<br>' );
  }else{
     $( ".step1" ).append('Not code128 <br>' );
  }

  str=trimspace(str);
  str=trimCRLF(str);

  str2=trimspace(str2);
  str2=trimCRLF(str2);

  original=trimspace(original);
  original=trimCRLF(original);

  original2=trimspace(original2);
  original2=trimCRLF(original2);



  if( (str.length % 6 ) ==0 ){
     $( ".step1" ).append('braille<br>' );
     var braille = code2braille(str);
     var braille2 = code2braille(str2);
     checkprint("braille 2xN : ", braille);
     checkprint("braille 2xN : ", braille2);
     str = braille;
     str2 = braille2;
     $( ".step1" ).append('--2xN--> ' + braille +'<br>' );
     $( ".step1" ).append('--2xN--> ' + braille2 +'<br>' );
     str = "";
     for( var k=0 ; k<original.length ; k+=6){
        str = str + original.charAt(k+2); str2 = str2 + original2.charAt(k+2);
        str = str + original.charAt(k+5); str2 = str2 + original2.charAt(k+5);
        str = str + original.charAt(k  ); str2 = str2 + original2.charAt(k  );
        str = str + original.charAt(k+4); str2 = str2 + original2.charAt(k+4);
        str = str + original.charAt(k+0); str2 = str2 + original2.charAt(k+0);
        str = str + original.charAt(k+3); str2 = str2 + original2.charAt(k+3);
     }
     braille = code2braille(str);
     braille2 = code2braille(str2);
     checkprint("braille 2xN : ", braille);
     checkprint("braille 2xN : ", braille2);
     $( ".step1" ).append('--2xN--> ' + braille +'<br>' );
     $( ".step1" ).append('--2xN--> ' + braille2 +'<br>' );
     braille = code2braille(str.split("").reverse().join(""));
     braille2 = code2braille(str2.split("").reverse().join(""));
     checkprint("braille 2xN(R) : ", braille);
     checkprint("braille 2xN(R) : ", braille2);
     $( ".step1" ).append('--2xN(R)--> ' + braille +'<br>' );
     $( ".step1" ).append('--2xN(R)--> ' + braille2 +'<br>' );
     str = ""; str2="";
     for( var k=0 ; k<original.length ; k+=6){
        str+=original.charAt(k+3); str2+=original2.charAt(k+3);
        str+=original.charAt(k  ); str2+=original2.charAt(k  );
        str+=original.charAt(k+4); str2+=original2.charAt(k+4);
        str+=original.charAt(k+1); str2+=original2.charAt(k+1);
        str+=original.charAt(k+5); str2+=original2.charAt(k+5);
        str+=original.charAt(k+2); str2+=original2.charAt(k+2);
     }
     braille = code2braille(str);
     braille2 = code2braille(str2);
     checkprint("braille 3xN : ", braille);
     checkprint("braille 3xN : ", braille2);
     $( ".step1" ).append('--3xN--> ' + braille +'<br>' );
     $( ".step1" ).append('--3xN--> ' + braille2 +'<br>' );
     braille = code2braille(str.split("").reverse().join(""));
     braille2 = code2braille(str2.split("").reverse().join(""));
     checkprint("braille 3xN(R) : ", braille);
     checkprint("braille 3xN(R) : ", braille2);
     $( ".step1" ).append('--3xN(R)--> ' + braille +'<br>' );
     $( ".step1" ).append('--3xN(R)--> ' + braille2 +'<br>' );
     str = ""; str2="";
     for( var k=0 ; k<original.length ; k+=6){
        str+=original.charAt(k  ); str2+=original2.charAt(k  );
        str+=original.charAt(k+3); str2+=original2.charAt(k+3);
        str+=original.charAt(k+1); str2+=original2.charAt(k+1);
        str+=original.charAt(k+4); str2+=original2.charAt(k+4);
        str+=original.charAt(k+2); str2+=original2.charAt(k+2);
        str+=original.charAt(k+5); str2+=original2.charAt(k+5);
     }

     braille = code2braille(str);
     braille = code2braille(str2);
     checkprint("braille 3xN : ", braille);
     checkprint("braille 3xN : ", braille2);
     $( ".step1" ).append('--3xN--> ' + braille +'<br>' );
     $( ".step1" ).append('--3xN--> ' + braille2 +'<br>' );
     braille = code2braille(str.split("").reverse().join(""));
     braille2 = code2braille(str2.split("").reverse().join(""));
     checkprint("braille 3xN(R) : ", braille);
     checkprint("braille 3xN(R) : ", braille2);
     $( ".step1" ).append('--3xN(R)--> ' + braille +'<br>' );
     $( ".step1" ).append('--3xN(R)--> ' + braille2 +'<br>' );

     str = ""; str2="";
     maxline=original.length / 3;
     for( var k=0 ; k<maxline ; k+=2){
        str+=original.charAt(k  );            str2+=original2.charAt(k  );           
        str+=original.charAt(k+1);            str2+=original2.charAt(k+1);           
        str+=original.charAt(k  +maxline);    str2+=original2.charAt(k  +maxline);   
        str+=original.charAt(k+1+maxline);    str2+=original2.charAt(k+1+maxline);   
        str+=original.charAt(k  +maxline*2);  str2+=original2.charAt(k  +maxline*2); 
        str+=original.charAt(k+1+maxline*2);  str2+=original2.charAt(k+1+maxline*2); 
     }
     braille = code2braille(str);
     braille2 = code2braille(str2);
     checkprint("braille Nx3 : ", braille);
     checkprint("braille Nx3 : ", braille2);
     $( ".step1" ).append('--Nx3--> ' + braille +'<br>' );
     $( ".step1" ).append('--Nx3--> ' + braille2 +'<br>' );
     braille = code2braille(str.split("").reverse().join(""));
     braille2 = code2braille(str2.split("").reverse().join(""));
     checkprint("braille Nx3(R) : ", braille);
     checkprint("braille Nx3(R) : ", braille2);
     $( ".step1" ).append('--Nx3(R)--> ' + braille +'<br>' );
     $( ".step1" ).append('--Nx3(R)--> ' + braille2 +'<br>' );
  }else{
     $( ".step1" ).append('Not Braille <br>' );
  }


  $( ".step1" ).append('Step 5 : Base64/32  start...');
  text = $( ".inputvalue" ).val().trim();
    var base= GetHexbyBase64(text);
    $( '<li> DecodeBase64->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());

    base=GetHexbyBase64(Atbash(text));
    $( '<li> DecodeBase64(A)->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());
    base=GetHexbyBase64(Atbash2(text));
    $( '<li> DecodeBase64(A)->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());

    str = text.split("").reverse().join("");
    base= GetHexbyBase64(str);
    $( '<li> DecodeBase64->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());
 
    base=GetHexbyBase64(Atbash(str));
    $( '<li> DecodeBase64(A)->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());
    base=GetHexbyBase64(Atbash2(str));
    $( '<li> DecodeBase64(A)->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());


    str=""; /* 大文字小文字変換 */
    for(var i=0; i<text.length;i++){
       ch = text.charCodeAt(i);
       if(ch>96 && ch <123) str +=  String.fromCharCode(ch-32);
       if(ch>64 && ch <91) str +=  String.fromCharCode(ch+32);
       if(ch>40 && ch <63) str +=  String.fromCharCode(ch);
    }
    base= GetHexbyBase64(str);
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());
    $( '<li> DecodeBase64->' +base+'</li>' ).appendTo($( ".step1" ));

    base=GetHexbyBase64(Atbash(text));
    $( '<li> DecodeBase64(A)->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());
    base=GetHexbyBase64(Atbash2(text));
    $( '<li> DecodeBase64(A)->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());


    str = str.split("").reverse().join("");
    base=  GetHexbyBase64(str);
    $( '<li> DecodeBase64->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());
    checkprint("Base64: ", base);
    base=GetHexbyBase64(Atbash(str));
    $( '<li> DecodeBase64(A)->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());
    base=GetHexbyBase64(Atbash2(str));
    $( '<li> DecodeBase64(A)->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base64: ", base.toLowerCase());
    checkprint("Base64: ", base.split("").reverse().join("").toLowerCase());


    original=""; /* 英数字以外けす */
    for(var i=0; i<text.length;i++){
       ch = text.charCodeAt(i);
       if(ch>96 && ch <123){
           original +=  String.fromCharCode(ch);
       }else if(ch>64 && ch <91){
           original +=  String.fromCharCode(ch);
       }else if(ch>47 && ch <68){
           original +=  String.fromCharCode(ch);
       }else {
           i++;
           ch = text.charCodeAt(i);
           if(ch>96 && ch <123) original +=  String.fromCharCode(ch-32);
           if(ch>64 && ch <91) original +=  String.fromCharCode(ch+32);
           if(ch>40 && ch <63) original +=  String.fromCharCode(ch);
       }
    }
    console.log(original);
    base= GetHexbyBase64(original);
    checkprint("Base64++: ", base.toLowerCase());
    checkprint("Base64++: ", base.split("").reverse().join("").toLowerCase());
    $( '<li> DecodeBase64++->' +base+'</li>' ).appendTo($( ".step1" ));

    str=""; /* 大文字小文字変換 */
    for(var i=0; i<original.length;i++){
       ch = original.charCodeAt(i);
       if(ch>96 && ch <123) str +=  String.fromCharCode(ch-32);
       if(ch>64 && ch <91) str +=  String.fromCharCode(ch+32);
       if(ch>40 && ch <63) str +=  String.fromCharCode(ch);
    }
    base= GetHexbyBase64(str);
    checkprint("Base64++: ", base.toLowerCase());
    checkprint("Base64++: ", base.split("").reverse().join("").toLowerCase());
    $( '<li> DecodeBase64++->' +base+'</li>' ).appendTo($( ".step1" ));





    str=text;
    base= Hex2String(GetHexbyBase32(str.toUpperCase()));
    $( '<li> DecodeBase32->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base32: ", base.toLowerCase());
    checkprint("Base32: ", base.split("").reverse().join("").toLowerCase());
    base= Hex2String(GetHexbyBase32(Atbash(str.toUpperCase())));
    $( '<li> DecodeBase32->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base32: ", base.toLowerCase());
    checkprint("Base32: ", base.split("").reverse().join("").toLowerCase());

    str = text.split("").reverse().join("");
    base= Hex2String(GetHexbyBase32(str.toUpperCase()));
    $( '<li> DecodeBase32->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base32: ", base.toLowerCase());
    checkprint("Base32: ", base.split("").reverse().join("").toLowerCase());
    base= Hex2String(GetHexbyBase32(Atbash(str.toUpperCase())));
    $( '<li> DecodeBase32->' +base+'</li>' ).appendTo($( ".step1" ));
    checkprint("Base32: ", base.toLowerCase());
    checkprint("Base32: ", base.split("").reverse().join("").toLowerCase());


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


 if(str.length > 9){
  var key=["a","aa","ab","aaa","abc","bz","z","zy","zyx"];
  for (var i=0; i<key.length;i++){
    var vig=vigeneredecrypt(str,key[i]);
    var vig2=vigeneredecrypt(str.split('').reverse().join(''),key[i]);
    checkprint("Vigenere:", vig);
    checkprint("Vigenere:", vig2);
    checkprint("Vigenere:", vig.split('').reverse().join(''));
    checkprint("Vigenere:", vig2.split('').reverse().join(''));
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
  if($( ".AllKey").prop( "checked" )){
  $.each(KeyMap, function(key,value){
    var vig=vigeneredecrypt(str,value);
    var str2=str.split('').reverse().join('');
    var vig2=vigeneredecrypt(str2,value);
    checkprint("Vigenere:"+value+":", vig);
    checkprint("Vigenere:"+value+":", vig2);
    checkprint("Vigenere:"+value+":", vig.split('').reverse().join(''));
    checkprint("Vigenere:"+value+":", vig2.split('').reverse().join(''));

    var key2=value;
    var key3=value;
    vig="";
    vig2="";
    var j=0;
    while(j< str.length ){
       var temp=vigeneredecrypt(str.substr(j,value.length),key2);
       var temp2=vigeneredecrypt(str2.substr(j,value.length),key3);
       key2=temp;
       key3=temp2;
       vig += temp;
       vig2 += temp2;
       j+=key2.length;
    }
    checkprint("Vigenere: Auto :"+value+":", vig);
    checkprint("Vigenere: Auto :"+value+":", vig2);
    checkprint("Vigenere: Auto :"+value+":", vig.split('').reverse().join(''));
    checkprint("Vigenere: Auto :"+value+":", vig2.split('').reverse().join(''));
  });
  if($( ".TypeJ").prop( "checked" ) ){
  $.each(KeyMapJoJo, function(key,value){
    var vig=vigeneredecrypt(str,value);
    checkprint("Vigenere:"+value+":", vig);
    var key2=value;
    vig="";
    var j=0;
    while(j< str.length ){
       var temp=vigeneredecrypt(str.substr(j,value.length),key2);
       key2=temp;
       vig += temp;
       j+=key2.length;
    }
    checkprint("Vigenere Auto:"+value+":", vig);
  });
  }
  }
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
  if(text.match(TELCHECK)){
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
  var decoded_string_at = "";
  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var tebahpla = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA0123456789";
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
/*
  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var tebahpla = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA9876543210";
  decoded_string_at = "";
  for (k = 0; k < text.length; k++) {
     var coded_letter = text.charAt(k);
     var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
*/
  decoded_string_at = Atbash(str);
  if(mode =="Normal"){
     $( '<li> atbash2 -> ' +decoded_string_at+'</li>' ).appendTo($( ".step1" ));
  }
  code_exchange(decoded_string_at);
  code_exchange(decoded_string_at.split("").reverse().join(""));
  checkprint(mode+"/Atbash2                : ", decoded_string_at);
  checkprint(mode+"/Atbash2                : ", decoded_string_at.split("").reverse().join(""));
/*
  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var tebahpla = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA0987654321";
  decoded_string_at = "";
  for (k = 0; k < text.length; k++) {
     var coded_letter = text.charAt(k);
     var letter_index = alphabet.indexOf(coded_letter);
         decoded_string_at += tebahpla.charAt(letter_index);
     }
*/
  decoded_string_at = Atbash2(str);

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

  decoded_string_at=Morse2Str(Str2Morse(text));
  if ( decoded_string_at != text){
     checkprint(mode+"/Morse Extra : ", decoded_string_at);
     $( '<li> Morse Extra-> ' +decoded_string_at+'</li>' ).appendTo($( ".step1" ));
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
