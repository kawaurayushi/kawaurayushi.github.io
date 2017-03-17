var KeyMap = {};

$( document ).ready( function(){
    $.getJSON( "https://raw.githubusercontent.com/ingresscodes/keywords/master/keywords.json", function( json ) {
      for(var index in json.keywords) {
         KeyMap[ String(json.keywords[index].word).trim() ] = String(json.keywords[index].atbash).trim() ;
      }
   });
} );

$( ".formtext"    ).change(function(){  check (trimspace( $( ".formtext"   ).val()) ); });
$( ".formatbash"  ).change(function(){  check2(trimspace( $( ".formatbash").val())  ); });

function trimspace(str){
	return str.replace(/ /g,"").toLowerCase().trim();
}

function wordprint(str){
//   $( ".step1" ).html('<table>');
//   $( ".step1" ).append('<tbody><tr><th>Key</th><th>Atbash</th></tr>');
   $.each( KeyMap, function(  key, value ) {
//      $( ".step1" ).append("<tr><th>"+key+"</th><th>"+value+"</th></tr>");
      if(str==String(key)){
        $( ".formatbash" ).val(String(value));
      }
   });
//   $( ".step1" ).append('</tbody></table>');

}

function wordprint2(str){
//  $( ".step1" ).html('<table>');
//   $( ".step1" ).append('<tbody><tr><th>Key</th><th>Atbash</th></tr>');
   var output ="";
   $.each( KeyMap, function(  key, value ) {
//      $( ".step1" ).append("<tr><th>"+key+"</th><th>"+value+"</th></tr>");
      if(key!=="null"){
        value.split(",").forEach(function (item) {
           if(str==item){
               output = output + key +" ";
           }
        });
      }
   });
//   $( ".step1" ).append('</tbody></table>');
   $( ".formtext" ).val(output);

}




function cleartextarea(){
	$( "textarea" ).each(function(index){ $( this ).val(""); }); 
}

function check(str){
	cleartextarea();
	$( ".formtext"    ).val(str);
	wordprint(str);

}
function check2(str){
	cleartextarea();
	$( ".formatbash"    ).val(str);
	wordprint2(str);

}
