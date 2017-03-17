var regex;
var keywords;

$(document).ready(function() {
 $.getJSON( "https://raw.githubusercontent.com/ingresscodes/keywords/master/jojowotd.json", function( json ) {
    keywords = json;
 });
  $('#regex-query').keyup(function() {
    if ($('#regex-query').val().length >= 2) {
      dolookup();
   }
  });
  $('#regex-form').submit(function(e) {
    e.preventDefault();
    dolookup();
  });
});

function Add(str){
	$('#regex-query').val($('#regex-query').val()+str);
	dolookup();
}

function dolookup() {
  $('#match').empty();
  var goodregex = true;
  try {
    var regex = new RegExp($('#regex-query').val(), 'i');
  } catch(err) {
    $('#regex-fg').addClass('has-error');
    goodregex = false;
  }
  if (goodregex) {
    $('#regex-fg').removeClass('has-error');
    var match = [];
    match.push('<table class="table table-striped table-bordered table-hover">');
    $.each(keywords.wotds, function(index, value) {
      if (regex.test(value.wotd)) {
        match.push('<tr><td>');
        match.push(value.wotd);
        match.push('</td><td>');
        match.push(value.definition);
        match.push('</td></tr>');
      }
    });
    match.push('</table>');
    $('#match').html(match.join(''));
  }
} 
