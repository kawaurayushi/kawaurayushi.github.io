var KeyMap = {};

$( document ).ready( function(){
    $.getJSON( "https://raw.githubusercontent.com/ingresscodes/keywords/master/keywords.json", function( json ) {
      for(var index in json.keywords) {
         KeyMap[ String(json.keywords[index].word).trim() ] = String(json.keywords[index].atbash).trim() ;
      }
   });
} );

$( ".keyword"    ).change(function(){  check (trimspace( $( ".keyword"   ).val()) ); });
$( ".search"  ).change(function(){  check2(trimspace( $( ".search").val())  ); });

function trimspace(str){
	return str.replace(/ /g,"").toLowerCase().trim();
}

function wordprint(str){
   $.each( KeyMap, function(  key, value ) {
      if(str==String(key)){
        $( ".search" ).val(String(value));
      }
   });

}

function wordprint2(str){
   var output ="";
   $.each( KeyMap, function(  key, value ) {
      if(key!=="null"){
        value.split(",").forEach(function (item) {
           if(str==item){
               output = output + key +" ";
           }
        });
      }
   });
   $( ".keyword" ).val(output);

}




function cleartextarea(){
	$( "textarea" ).each(function(index){ $( this ).val(""); }); 
}

function check(str){
	cleartextarea();
	$( ".keyword"    ).val(str);
	wordprint(str);

}
function check2(str){
	cleartextarea();
	$( ".search"    ).val(str);
	wordprint2(str);

}
