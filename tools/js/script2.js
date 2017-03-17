var regex;
var colors;
var allcolors;
var x11colors;
var webcolors;

$(document).ready(function() {
  $.getJSON( "js/color.json", function( json ) {
    allcolors = json;
    colors = JSON.parse(JSON.stringify(allcolors));;
    $.getJSON( "js/webcolor.json", function( json ) {
      webcolors = json;
      $.getJSON( "js/x11color.json", function( json ) {
        x11colors = json;
        $.extend(colors, webcolors, x11colors, allcolors);
      });
    });
  });
});

  $('#regex-query').keyup(function() {
    if ($('#regex-query').val().length >= 2) {
      dolookup();
    }
  });

  $('#web-color').on( 'click', function() {
    colors=JSON.parse(JSON.stringify(webcolors));
  });
  $('#x11-color').on( 'click', function() {
    colors=JSON.parse(JSON.stringify(x11colors));
  });
  $('#all-color').on( 'click', function() {
    $.extend(colors, webcolors, x11colors, allcolors);
  });
/*
  $('#web-color', '#x11-color', '#all-color').change(function () {
    if ($("#web-color").is(":checked")) {
       colors=JSON.parse(JSON.stringify(webcolors));
    }else if ($("#x11-color").is(":checked")) {
       colors=JSON.parse(JSON.stringify(x11colors));
    }else {
       $.extend(colors, webcolors, x11colors, allcolors);
    }
  });
*/

  $('#regex-form').submit(function(e) {
    e.preventDefault();
    dolookup();
  });
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
      if(typeof colors === "undefined"){
          $.extend(colors, webcolors, x11colors, allcolors);
      }
      var match = [];
      match.push('<table class="table table-striped table-bordered table-hover">');
      $.each(colors.colors, function(index, value) {
        if (regex.test(value.color) ) {
          match.push('<tr><td>');
          match.push(value.color);
          match.push(' / ');
          match.push(value.name);
          match.push(' / ');
          match.push(value.rgb);
          match.push(' / ');
          match.push(value.cmyk);
          match.push('</td></tr>');
        }
      });
      match.push('</table>');
      $('#match').html(match.join(''));
    }
  } 

