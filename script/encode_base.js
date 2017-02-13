
var checknum ="(2|3|4|5|6|7|8|9|tw|th|fo|fi|si|se|ei|ni|two|thr|fou|fiv|six|sev|eig|nin|thre|four|five|seve|eigh|nine|three|seven|eight|ii|iii|iv|v|vi|vii|viii|ix)";


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

var colors;
var webcolors;
var keywords;
var jojokeywords;

var numbercheck1 ='^(...)'+checknum+checknum+'([0-9a-z]+)'+checknum+checknum+checknum+'(..)$';

$( ".inputvalue"  ).change(function() { check_default(); });
$( ".RomanNumber" ).change(function() { check_default();});
$( ".TypeO"       ).change(function() { check_default(); });
$( ".TypeN"       ).change(function() { check_default(); });
$( ".TypeJ"       ).change(function() { check_default(); });
$( ".TypeA"       ).change(function() { check_default(); });
$( ".TypeE"       ).change(function() { check_default(); });

$(document).ready(function() {
  $.getJSON( "color.json", function( json ) {    colors = json;  });
  $.getJSON( "webcolor.json", function( json ) {    webcolors = json;  });
  $.getJSON( "https://raw.githubusercontent.com/ingresscodes/keywords/master/jojowotd.json", function( json ) { jojokeywords = json;  });
  $.getJSON( "https://raw.githubusercontent.com/ingresscodes/keywords/master/keywords.json", function( json ) { keywords = json;      });
});

function init(){
  $( "#demo").html("");
  $( ".result").html("");
  $( ".result2").html("");
}

function checkprintSuper(decoded_string){
    if( code  = decoded_string.match(numbercheck1) ){
       if($.inArray(code[4], keyworddata) >= 0){
         $('<li>'+name+'  '+code[1]+numeric[code[2]]+numeric[code[3]]+'<font color="red">'+code[4]+'</font>'+numeric[code[5]]+numeric[code[6]]+numeric[code[7]]+code[8]+'</li>').appendTo($( ".result" ));
       }else{
         $('<li>'+name+'  '+code[1]+numeric[code[2]]+numeric[code[3]]+'<font color="red">'+code[4]+'</font>'+numeric[code[5]]+numeric[code[6]]+numeric[code[7]]+code[8]+'</li>').appendTo($( ".result" ));
       }
    }
}

function check_default(){
  init();
  $( ".step1" ).html('Step 1 :  code check ...<br>');
  $( ".step2" ).html('...<br>');
  checkprintSuper($( ".inputvalue" ).val().toLowerCase().trim());
}
