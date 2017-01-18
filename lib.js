var REP1='^([2-9]{1}[a-zA-Z]{3}[2-9]{1})([0-9a-zA-Z]*)([a-zA-Z]{1}[2-9]{1}[a-zA-Z]{1}[2-9]{1}[a-zA-Z]{1})$';
var REP2='^([a-zA-Z]{3}[2-9]{2})([0-9a-zA-Z]*)([2-9]{3}[a-zA-Z]{2})$';
var REP3='^([a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[0-9]{1})([0-9a-zA-Z]*)([a-zA-Z]{1}[0-9]{1}[a-zA-Z]{2})$';
var REP4='^([a-zA-Z]{8}[0-9]{1})([0-9a-zA-Z]*)([0-9]{1})$';
var REP5='^([0-9a-zA-Z]*)([0-9]{1}[a-zA-Z]{2}[0-9]{2}[a-zA-Z]{2}[0-9]{1})$';
var NUM2CHECK   ='^[0-1 ]+$';
var PHONECHECK  ='^[2-9 ]+$';
var NUM3CHECK   ='^[0-2 ]+$';
var NUM8CHECK   ='^[0-7 ]+$';
var NUM10CHECK  ='^[0-9 ]+$';
var NUM16CHECK  ='^[0-9a-fA-F ]+$';
var AZCHECK     ='^[a-zA-Z ]+$';

var SYMBOLS = [
    'H',   'He',  'Li',  'Be',  'B',   'C',   'N',   'O',   'F',   'Ne',
    'Na',  'Mg',  'Al',  'Si',  'P',   'S',   'Cl',  'Ar',  'K',   'Ca',
    'Sc',  'Ti',  'V',   'Cr',  'Mn',  'Fe',  'Co',  'Ni',  'Cu',  'Zn',
    'Ga',  'Ge',  'As',  'Se',  'Br',  'Kr',  'Rb',  'Sr',  'Y',   'Zr',
    'Nb',  'Mo',  'Tc',  'Ru',  'Rh',  'Pd',  'Ag',  'Cd',  'In',  'Sn',
    'Sb',  'Te',  'I',   'Xe',  'Cs',  'Ba',  'La',  'Ce',  'Pr',  'Nd',
    'Pm',  'Sm',  'Eu',  'Gd',  'Tb',  'Dy',  'Ho',  'Er',  'Tm',  'Yb',
    'Lu',  'Hf',  'Ta',  'W',   'Re',  'Os',  'Ir',  'Pt',  'Au',  'Hg',
    'Tl',  'Pb',  'Bi',  'Po',  'At',  'Rn',  'Fr',  'Ra',  'Ac',  'Th',
    'Pa',  'U',   'Np',  'Pu',  'Am',  'Cm',  'Bk',  'Cf',  'Es',  'Fm',
    'Md',  'No',  'Lr',  'Rf',  'Db',  'Sg',  'Bh',  'Hs',  'Mt',  'Ds',
    'Rg',  'Cn',  'Uut', 'Fl',  'Uup', 'Lv',  'Uus', 'Uuo',

    // Extended periodic table:
    'Uue', 'Ubn', 'Ubu', 'Ubb', 'Ubt', 'Ubq', 'Ubp', 'Ubh', 'Ubs', 'Ubo',
    'Ube', 'Utn', 'Utu', 'Utb', 'Utt', 'Utq', 'Utp', 'Uth', 'Uts', 'Uto',
    'Ute', 'Uqn', 'Uqu', 'Uqb', 'Uqt', 'Uqq', 'Uqp', 'Uqh', 'Uqs', 'Uqo',
    'Uqe', 'Upn', 'Upu', 'Upb', 'Upt', 'Upq', 'Upp', 'Uph', 'Ups', 'Upo',
    'Upe', 'Uhn', 'Uhu', 'Uhb', 'Uht', 'Uhq', 'Uhp', 'Uhh', 'Uhs', 'Uho',
    'Uhe', 'Usn', 'Usu', 'Usb'
].map(function(x) { return x.toLowerCase(); });




var SYMBOLS2 = [
    'XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX',
    'XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX',
    'XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX',
    'XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX',
    'XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','XXXX','Cd',  'In',  'Sn',
    'Sb',  'Te',  'I',   'Xe',  'Cs',  'Ba',  'La',  'Ce',  'Pr',  'Nd',
    'Pm',  'Sm',  'Eu',  'Gd',  'Tb',  'Dy',  'Ho',  'Er',  'Tm',  'Yb',
    'Lu',  'Hf',  'Ta',  'W',   'Re',  'Os',  'Ir',  'Pt',  'Au',  'Hg',
    'Tl',  'Pb',  'Bi',  'Po',  'At',  'Rn',  'Fr',  'Ra',  'Ac',  'Th',
    'Pa',  'U',   'Np',  'Pu',  'Am',  'Cm',  'Bk',  'Cf',  'Es',  'Fm',
    'Md',  'No',  'Lr',  'Rf',  'Db',  'Sg',  'Bh',  'Hs',  'Mt',  'Ds',
    'Rg',  'Cn',  'Uut', 'Fl',  'Uup', 'Lv',  'Uus', 'Uuo',

    // Extended periodic table:
    'Uue', 'Ubn', 'Ubu', 'Ubb', 'Ubt', 'Ubq', 'Ubp', 'Ubh', 'Ubs', 'Ubo',
    'Ube', 'Utn', 'Utu', 'Utb', 'Utt', 'Utq', 'Utp', 'Uth', 'Uts', 'Uto',
    'Ute', 'Uqn', 'Uqu', 'Uqb', 'Uqt', 'Uqq', 'Uqp', 'Uqh', 'Uqs', 'Uqo',
    'Uqe', 'Upn', 'Upu', 'Upb', 'Upt', 'Upq', 'Upp', 'Uph', 'Ups', 'Upo',
    'Upe', 'Uhn', 'Uhu', 'Uhb', 'Uht', 'Uhq', 'Uhp', 'Uhh', 'Uhs', 'Uho',
    'Uhe', 'Usn', 'Usu', 'Usb'
].map(function(x) { return x.toLowerCase(); });
var MAX_SYMBOL_LENGTH = 3;


function encipherAtomicNumbers(message) {
  message = message.toLowerCase().replace(/[^a-z]/g, '');
  var result = [];
  while (message.length) {
    var element = chooseBestElement(message);
    if (element) {
      result.push(element.number);
      message = message.slice(element.symbol.length);
    } else {
      result.push(message.charAt(0));
      message = message.slice(1);
    }
  }
  return result.join(' ');
}


function encipherAtomicNumbers2(message) {
  message = message.toLowerCase().replace(/[^a-z]/g, '');
  var result = [];
  while (message.length) {
    var element = chooseBestElement(message);
    if (element) {
      result.push(element.number);
      message = message.slice(element.symbol.length);
    } else {
      result.push(message.charAt(0));
      message = message.slice(1);
    }
  }
  return result.join(' ');
}

function decipherAtomicNumbers(message) {
  return message.split(' ').map(function(token) {
    return SYMBOLS[token - 1] || token;
  }).join('');
}

function symbolsToPotentialElements(string) {
  var elements = [];
  for (var i = MAX_SYMBOL_LENGTH; i > 0; i--) {
    var index = SYMBOLS.indexOf(string.slice(0, i));
    if (index != -1)
      elements.push({number: index + 1, symbol: SYMBOLS[index]});
  }
  return elements;
}


function chooseBestElement(string) {
  var elements = symbolsToPotentialElements(string);
  for (var i = 0; i < elements.length; i++) {
    var after = string.slice(elements[i].symbol.length);
    if (!after.length || symbolsToPotentialElements(after).length)
      return elements[i];
  }
  return elements.length ? elements[0] : null;
}

function keyboard2morse(text){
   var KEYFROM1    ="qwertyuiopasdfghjkl;zxcvbnm,./";
   var KEYFROM2    ="',.pyfgcrlaoeuidhtns;qjkxbmwvz";
   var KEYFROM3    ="qwfpgjluy;arstdhneiozxcvbkm,./";
   var KEYFROM4    ="qdrwbjfup;ashtgyneoizxmcvkl,./";
   var KEYFROM5    ="qwprfyukl;asdtghnioezxcvbjm,./";
   var KEYFROM6    ="azertyuiopqsdfghjklm<wxcvbn,;:";
   var KEYTO       ="00000000001111111111          ";
   var decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO.charAt(KEYFROM1.indexOf(val));  });
   var decoded_string = morsecode(decoded_text);
   var decoded_string2 = morsecode(decoded_text.split("").reverse().join(""));
   checkprint("keyboard2morse qwerty  : ", decoded_string);
   checkprint("keyboard2morse qwerty X: ", decoded_string2);
   $( '<li> Keyboard(qwerty) to Morse -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));

   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO.charAt(KEYFROM2.indexOf(val));  });
   decoded_string = morsecode(decoded_text);
   decoded_string2 = morsecode(decoded_text.split("").reverse().join(""));
   checkprint("keyboard2morse Dvorak  : ", decoded_string);
   checkprint("keyboard2morse Dvorak X: ", decoded_string2);
   $( '<li> Keyboard(Dvorak) to Morse -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));

   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO.charAt(KEYFROM3.indexOf(val));  });
   decoded_string = morsecode(decoded_text);
   decoded_string2 = morsecode(decoded_text.split("").reverse().join(""));
   checkprint("keyboard2morse Colemak  : ", decoded_string);
   checkprint("keyboard2morse Colemak X: ", decoded_string2);
   $( '<li> Keyboard(Colemak) to Morse -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));

   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO.charAt(KEYFROM4.indexOf(val));  });
   decoded_string = morsecode(decoded_text);
   decoded_string2 = morsecode(decoded_text.split("").reverse().join(""));
   checkprint("keyboard2morse Workman  : ", decoded_string);
   checkprint("keyboard2morse Workman X: ", decoded_string2);
   $( '<li> Keyboard(Workman) to Morse -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));

   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO.charAt(KEYFROM5.indexOf(val));  });
   decoded_string = morsecode(decoded_text);
   decoded_string2 = morsecode(decoded_text.split("").reverse().join(""));
   checkprint("keyboard2morse Qwpr  : ", decoded_string);
   checkprint("keyboard2morse Qwpr X: ", decoded_string2);
   $( '<li> Keyboard(Qwpr) to Morse -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));

   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO.charAt(KEYFROM6.indexOf(val));  });
   decoded_string = morsecode(decoded_text);
   decoded_string2 = morsecode(decoded_text.split("").reverse().join(""));
   checkprint("keyboard2morse AZERTY  : ", decoded_string);
   checkprint("keyboard2morse AZERTY X: ", decoded_string2);
   $( '<li> Keyboard(AZERTY) to Morse -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));


}

function key_exchange(text){
   var KEYFROM     ="1234567890qwertyuiopasdfghjkl;zxcvbnm,./";
   var KEYTO1      ="1234567890123456789012345678901234567890";
   var KEYTO2      ="0987654321poiuytrewq;lkjhgfdsa/.,mnbvcxz";
   var KEYTO3      ="0123456789pqwertyuio;asdfghjkl/zxcvbnm,.";
   var KEYTO4      ="2345678901wertyuiopqsdfghjkl;axcvbnm,./z";
   var KEYTO5      ="1234567890/.,mnbvcxz;lkjhgfdsapoiuytrewq";
   var KEYTO6      ="/.,mnbvcxz;lkjhgfdsapoiuytrewq0987654321";
   var KEYTO7      ="zxcvbnm,./asdfghjkl;qwertyuiop1234567890";
   var decoded_text="";
   var str="";
/*   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO1.charAt(KEYFROM.indexOf(val));  });
   code_exchange(decoded_text);
   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO2.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   checkprint("Keyboard:",decoded_text.split("").reverse().join(""));
   $( '<li> Keyboard1 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));
   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO3.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   checkprint("Keyboard:",decoded_text.split("").reverse().join(""));
   $( '<li> Keyboard1 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));
   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO4.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   checkprint("Keyboard:",decoded_text.split("").reverse().join(""));
   $( '<li> Keyboard1 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));
   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO5.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   checkprint("Keyboard:",decoded_text.split("").reverse().join(""));
   $( '<li> Keyboard1 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));
   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO6.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   checkprint("Keyboard:",decoded_text.split("").reverse().join(""));
   $( '<li> Keyboard1 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));
*/
   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO1.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   str = decoded_text;
   for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
   }
   if(str != decoded_text)     checkprint("Keyboard: str2num :", str);
   str = decoded_text.split("").reverse().join("");
   decoded_text=str;
   checkprint("Keyboard:",str);
   for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
   }
   if(str != decoded_text)     checkprint("Keyboard: str2num :", str);
   $( '<li> Keyboard1 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));

   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO2.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   str = decoded_text;
   for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
   }
   if(str != decoded_text)     checkprint("Keyboard: str2num :", str);
   str = decoded_text.split("").reverse().join("");
   decoded_text=str;
   checkprint("Keyboard:",str);
   for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
   }
   if(str != decoded_text)     checkprint("Keyboard: str2num :", str);
   $( '<li> Keyboard2 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));
   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO3.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   str = decoded_text;
   for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
   }
   if(str != decoded_text)     checkprint("Keyboard: str2num :", str);
   str = decoded_text.split("").reverse().join("");
   decoded_text=str;
   checkprint("Keyboard:",str);
   for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
   }
   if(str != decoded_text)     checkprint("Keyboard: str2num :", str);
   $( '<li> Keyboard3 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));
   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO4.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   str = decoded_text;
   for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
   }
   if(str != decoded_text)     checkprint("Keyboard: str2num :", str);
   str = decoded_text.split("").reverse().join("");
   decoded_text=str;
   checkprint("Keyboard:",str);
   for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
   }
   if(str != decoded_text)     checkprint("Keyboard: str2num :", str);
   $( '<li> Keyboard4 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));
   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO5.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   str = decoded_text;
   for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
   }
   if(str != decoded_text)     checkprint("Keyboard: str2num :", str);
   str = decoded_text.split("").reverse().join("");
   decoded_text=str;
   checkprint("Keyboard:",str);
   for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
   }
   if(str != decoded_text)     checkprint("Keyboard: str2num :", str);
   $( '<li> Keyboard5 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));
   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO6.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   str = decoded_text;
   for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
   }
   if(str != decoded_text)     checkprint("Keyboard: str2num :", str);
   str = decoded_text.split("").reverse().join("");
   decoded_text=str;
   checkprint("Keyboard:",str);
   for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
   }
   if(str != decoded_text)     checkprint("Keyboard: str2num :", str);
   $( '<li> Keyboard6 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));
   decoded_text="";
   text.split("").forEach(function(val,index,ar){ decoded_text +=KEYTO7.charAt(KEYFROM.indexOf(val));  });
   checkprint("Keyboard:",decoded_text);
   str = decoded_text;
   for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
   }
   if(str != decoded_text)     checkprint("Keyboard: str2num :", str);
   str = decoded_text.split("").reverse().join("");
   decoded_text=str;
   checkprint("Keyboard:",str);
   for(var k=0, len=ASCNUM.length; k<len; k++){ 
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
     str = str.replace(ASCNUM[k], NUMNUM[k], "g");
   }
   if(str != decoded_text)     checkprint("Keyboard: str2num :", str);
   $( '<li> Keyboard7 -> ' +decoded_text+'</li>' ).appendTo($( ".step1" ));


}

function checkprint(name,decoded_string){
  var code="";
  decoded_string=decoded_string.toLowerCase().trim();
  if($( ".TypeO").prop( "checked" ) ){
    if( code  = decoded_string.match(REP1) ){
       if($.inArray(code[2], keyworddata) >= 0){
         $('<li>'+name+'-old -  '+code[1]+'<font color="red">'+code[2]+'</font>'+code[3]+'</li>').appendTo($( ".result" ));
       }else{
         $('<li>'+name+'-old -  '+code[1]+'<font color="green">'+code[2]+'</font>'+code[3]+'</li>').appendTo($( ".result2" ));
       }
    }
  }
  if($( ".TypeN").prop( "checked" ) ){
    if( code  = decoded_string.match(REP2) ){
       if($.inArray(code[2], keyworddata) >= 0){
         $('<li>'+name+'-new -  '+code[1]+'<font color="red">'+code[2]+'</font>'+code[3]+'</li>').appendTo($( ".result" ));
       }else{
         $('<li>'+name+'-new -  '+code[1]+'<font color="green"><b>'+code[2]+'</B></font>'+code[3]+'</li>').appendTo($( ".result2" ));
       }
    }
  }
  if($( ".TypeJ").prop( "checked" ) ){
    if( code  = decoded_string.match(REP3) ){
       if($.inArray(code[2], jojodata) >= 0){
         $('<li>'+name+'-JoJo -  '+code[1]+'<font color="red">'+code[2]+'</font>'+code[3]+'</li>').appendTo($( ".result" ));
       }else{
         $('<li>'+name+'-JoJo -  '+code[1]+'<font color="green"><b>'+code[2]+'</B></font>'+code[3]+'</li>').appendTo($( ".result2" ));
       }
    }
  }
  console.log(decoded_string);

  if($( ".TypeA").prop( "checked" ) ){
    if( code  = decoded_string.match(REP4) ){
     console.log(code[1] +":" +code[2]+":"+code[3]);
       if($.inArray(code[2], keyworddata) >= 0){
         $('<li>'+name+'-Anomary -  '+code[1]+'<font color="red">'+code[2]+'</font>'+code[3]+'</li>').appendTo($( ".result" ));
       }else{
         $('<li>'+name+'-Anomary -  '+code[1]+'<font color="green"><b>'+code[2]+'</B></font>'+code[3]+'</li>').appendTo($( ".result2" ));
       }
    }
  }
  if($( ".TypeE").prop( "checked" ) ){
    if( code  = decoded_string.match(REP5) ){
       if($.inArray(code[1], keyworddata) >= 0){
         $('<li>'+name+'--  <font color="red">'+code[1]+'</font>'+code[2]+'</li>').appendTo($( ".result" ));
       }else{
         $('<li>'+name+'--  <font color="green"><b>'+code[1]+'</B></font>'+code[2]+'</li>').appendTo($( ".result2" ));
       }
    }
  }


}

function code_exchange(text){
  var str="";
  var str2="";
  var str3="";
  var str4="";
  var str5="";
  var isnum2  = text.match(NUM2CHECK) ;
  var isnum3  = text.match(NUM3CHECK);
  var isnum8  = text.match(NUM8CHECK);
  var isnum10 = text.match(NUM10CHECK);
  var isnum16 = text.match(NUM16CHECK);
  if (isnum2){ //bit
    str  = bin_ascii(text.split(" ").join(""));
    str2 = bin_ascii(text.split("").reverse().join("").split(" ").join(""));
    text.split(" ").join("").split("").forEach(function(val,index,ar){ str5 += (val=="0")? "1":"0"; });
//    console.log(str5);
    str3 = bin_ascii(str5);
    str4 = bin_ascii(str5.split("").reverse().join(""));
    str5="";
    $( ".step1" ).append('bin ->' + str +' / ' + str2 +' / ' + str3+' / ' + str4+ '<br>');
    checkprint("Bin : ", str );
    checkprint("Bin : ", str2);
    checkprint("Bin : ", str3);
    checkprint("Bin : ", str4);
    checkprint("Bin : ", str.split("").reverse().join(""));
    checkprint("Bin : ", str2.split("").reverse().join(""));
    checkprint("Bin : ", str3.split("").reverse().join(""));
    checkprint("Bin : ", str4.split("").reverse().join(""));
  }

  if( isnum8 ){ // oct
    str  = oct_ascii(text);
    str2 = oct3a(text);
    str3 = oct_ascii(text.split("").reverse().join(""));
    str4 = oct3a(text.split("").reverse().join(""));
    $( ".step1" ).append('Oct ->' + str +' / ' + str2 +' / ' + str3+' / ' + str4+ '<br>');
    checkprint("Oct : ", str );
    checkprint("Oct : ", str2);
    checkprint("Oct : ", str3);
    checkprint("Oct : ", str4);
    checkprint("Oct : ", str.split("").reverse().join(""));
    checkprint("Oct : ", str2.split("").reverse().join(""));
    checkprint("Oct : ", str3.split("").reverse().join(""));
    checkprint("Oct : ", str4.split("").reverse().join(""));
 }
  if( isnum10 ){ // numeric
    str  = dectoabc(text);
//    str  = dec_ascii(text);
//    str2 = dec3a(text);
    str2 = dectoabc(text);
//    str3 = dec_ascii(text.split("").reverse().join(""));
    str3 = dectoabc(text.split("").reverse().join(""));
//    str4 = dec3a(text.split("").reverse().join(""));
    str4 = dectoabc(text.split("").reverse().join(""));
    $( ".step1" ).append('Dec ->' + str +' / ' + str2 +' / ' + str3+' / ' + str4+ '<br>');
    checkprint("Dec : ", str);
    checkprint("Dec : ", str2);
    checkprint("Dec : ", str3);
    checkprint("Dec : ", str4);
    checkprint("Dec : ", str.split("").reverse().join(""));
    checkprint("Dec : ", str2.split("").reverse().join(""));
    checkprint("Dec : ", str3.split("").reverse().join(""));
    checkprint("Dec : ", str4.split("").reverse().join(""));
  }

  if( isnum16 ){ //hex
    str = hex_ascii(text);
    str2 = hex_ascii(text.split("").reverse().join(""));
    str3= hex_ascii(atbashof(text.toLowerCase().trim()));
    str4 = hex_ascii(atbashof(text.split("").reverse().join("").toLowerCase().trim()));
    $( ".step1" ).append('Hex ->' + str +' / ' + str2 +' / ' + str3+' / ' + str4+ '<br>');
    checkprint("Hex : ", str);
    checkprint("Hex : ", str2);
    checkprint("Hex : ", str3);
    checkprint("Hex : ", str4);
    checkprint("Hex : ", str.split("").reverse().join(""));
    checkprint("Hex : ", str2.split("").reverse().join(""));
    checkprint("Hex : ", str3.split("").reverse().join(""));
    checkprint("Hex : ", str4.split("").reverse().join(""));
  }
}


function Playfair(encdec, text, skip, skipto, key, flags){
   var enc, out, bet, otemp, c;
   if (typeof(skip) != 'string' || skip.length != 1 || skip.toUpperCase() < 'A' || skip.toUpperCase() > 'Z')       skip = "J";
   skip = skip.toUpperCase();
   if (typeof(skipto) != 'string' || skipto.length != 1 || skipto.toUpperCase() < 'A' || skipto.toUpperCase() > 'Z')      skipto = "I";
   skipto = skipto.toUpperCase();
   if (skip == skipto) {
      skipto = String.fromCharCode(skip.charCodeAt(0) + 1);
      if (skipto > 'Z')     skipto = 'A';
   }
   if (typeof(key) != 'string')    key = "";
   key = MakeKeyedAlphabet(skip + key);
   key = key.slice(1, key.length);
   enc = '';
   out = '';
   bet = '';
   for (var i = 0; i < text.length; i ++)   {
      c = text.charAt(i).toUpperCase();
      if (c == skip)         c = skipto;
      if (key.indexOf(c) >= 0)    {
         if (text.charAt(i) != text.charAt(i).toUpperCase())        enc += c.toLowerCase();
     else        enc += c;
     if (enc.length == 2)     {
        otemp = Playfair_Lookup(encdec, enc, key, flags);
        out += otemp.charAt(0) + bet + otemp.charAt(1);
        bet = '';
        enc = '';
     }
      } else {
         if (enc.length > 0) {
        bet += text.charAt(i);
     } else {
        out += text.charAt(i);
     }
      }
   }
   if (enc.length > 0) {
      otemp = Playfair_Lookup(encdec, enc + 'X', key);
      out += otemp.charAt(0) + bet + otemp.charAt(1);
   }
   return out;
}


// Performs the substitution of a single letter pair block
function Playfair_Lookup(encdec, chars, key, flags) {
   var t1, t2, u1, u2, r1, r2, c1, c2;
   t1 = chars.charAt(0);
   t2 = chars.charAt(1);
   u1 = 0;
   if (t1 != t1.toUpperCase())  {
      t1 = t1.toUpperCase();
      u1 = 1;
   }
   u2 = 0;
   if (t2 != t2.toUpperCase()) {
      t2 = t2.toUpperCase();
      u2 = 1;
   }
   c1 = key.indexOf(t1);
   r1 = Math.floor(c1 / 5);
   c1 = c1 % 5;
   c2 = key.indexOf(t2);
   r2 = Math.floor(c2 / 5);
   c2 = c2 % 5;
   if (r1 == r2 && c1 == c2)   {
      // Same letter
      if ((flags & 0x01) == 0)      {
         r1 += encdec;
         r2 += encdec;
         c1 += encdec;
         c2 += encdec;
      }
   } else if (r1 == r2) {
      // Same row
      c1 += encdec;
      c2 += encdec;
   } else if (c1 == c2) {
      // Same column
      r1 += encdec;
      r2 += encdec;
   } else {
      // Rectangle
      var a;
      a = c1;
      c1 = c2;
      c2 = a;
   }
   r1 = (r1 + 5) % 5;
   r2 = (r2 + 5) % 5;
   c1 = (c1 + 5) % 5;
   c2 = (c2 + 5) % 5;
   t1 = key.charAt(r1 * 5 + c1);
   t2 = key.charAt(r2 * 5 + c2);
   if (u1)      t1 = t1.toLowerCase();
   if (u2)      t2 = t2.toLowerCase();
   return t1 + t2;
}

function MakeKeyedAlphabet(key, alphabet) {
   var out = "";
   if (typeof(alphabet) != 'string')     alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       else      alphabet = alphabet.toUpperCase();
   if (typeof(key) != 'string')          return alphabet;

   key = key.toUpperCase() + alphabet;
   for (var i = 0; i < key.length; i ++)  {
      if (out.indexOf(key.charAt(i)) < 0 &&  alphabet.indexOf(key.charAt(i)) >= 0) {
         out += key.charAt(i);
      }
   }
   return out;
}

function Bifid(encdec, text, skip, skipto, key){
   var enc, out, bet, otemp, c;
   if (typeof(skip) != 'string' || skip.length != 1 || skip.toUpperCase() < 'A' || skip.toUpperCase() > 'Z')   skip = "J";
   skip = skip.toUpperCase();
   if (typeof(skipto) != 'string' || skipto.length != 1 || skipto.toUpperCase() < 'A' || skipto.toUpperCase() > 'Z') skipto = "I";
   skipto = skipto.toUpperCase();
   if (skip == skipto) {
      skipto = String.fromCharCode(skip.charCodeAt(0) + 1);
      if (skipto > 'Z')          skipto = 'A';
   }
   if (typeof(key) != 'string')       key = "";
   key = MakeKeyedAlphabet(skip + key);
   key = key.slice(1, key.length);
   enc = '';
   out = '';
   bet = '';
   for (var i = 0; i < text.length; i ++) {
      c = text.charAt(i).toUpperCase();
      if (c == skip)         c = skipto;
      if (key.indexOf(c) >= 0)  {
         enc += c;
      }
   }
   enc = Bifid_Mangle(encdec, enc, key);
   
   for (var i = 0, j = 0; i < text.length; i ++) {
      c = text.charAt(i).toUpperCase();
      if (c == skip)         c = skipto;
      
      if (key.indexOf(c) >= 0)    {
         if (text.charAt(i) != text.charAt(i).toUpperCase())  {
            out += enc.charAt(j).toLowerCase();
     } else {
        out += enc.charAt(j);
     }
     j ++;
      } else {
         out += text.charAt(i);
      }
   }
   return out;
}


// Performs the actual encoding/decoding of the text
// Chars must only contain characters in 'key', case sensitive
// Key must be the letters from a 5x5 grid.
function Bifid_Mangle(encdec, chars, key) {
   var pos, line1, line2;
   line1 = '';
   line2 = '';
   for (var i = 0; i < chars.length; i ++) {
      var row, col;
      pos = key.indexOf(chars.charAt(i));
      row = Math.floor(pos / 5);
      col = pos % 5;
      line1 += row;
      if (encdec > 0) {
     line2 += col;
      } else {
         line1 += col;
      }
   }
   line1 += line2;
   if (encdec < 0) {
      line2 = '';
      for (var i = 0; i < line1.length / 2; i ++)  {
         line2 += line1.charAt(i);
     line2 += line1.charAt(line1.length / 2 + i);
      }
      window.status = line1 + " " + line2;
      line1 = line2;
   }
   chars = '';
   for (var i = 0; i < line1.length; i += 2) {
      chars += key.charAt(line1.charAt(i) * 5 + line1.charAt(i + 1) * 1);
   }
   return chars;
}

function encodeBase64 (input) {
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }
        output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }
    return output;
}

function decodeBase64 (s) {
    var e={},i,b=0,c,x,l=0,a,r='',w=String.fromCharCode,L=s.length;
    var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for(i=0;i<64;i++){e[A.charAt(i)]=i;}
    for(x=0;x<L;x++){
        c=e[s.charAt(x)];b=(b<<6)+c;l+=6;
        while(l>=8){((a=(b>>>(l-=8))&0xff)||(x<(L-2)))&&(r+=w(a));}
    }
    return r;
}

function base32_decode(input) {
  var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=";
  var buffer = 0;
  var bitsLeft = 0;    
  var output = new Array();
  var result="";
  var i = 0;
  var count = 0;
  while (i < input.length) {
    var val = keyStr.indexOf(input.charAt(i++));
    if (val >= 0 && val < 32) {
      buffer <<= 5;
      buffer |= val;
      bitsLeft += 5;
      if (bitsLeft >= 8) {
        output[count++] = (buffer >> (bitsLeft - 8)) & 0xFF;
        result += String.fromCharCode((buffer >> (bitsLeft - 8)) & 0xFF);
        bitsLeft -= 8;
      }
    }
  }
  return result;
}

function bin_ascii (hexx) {
  var hex = hexx.toString();//force conversion
  var str = '';
  for (var i = 0; i < hex.length; i += 8)      str += String.fromCharCode(parseInt(hex.substr(i, 8), 2));
  return str;
}


function hex_ascii (hexx) {
  var hex = hexx.toString();//force conversion
  var str = '';
  for (var i = 0; i < hex.length; i += 2)      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}

function dec_ascii(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)        str += String.fromCharCode(parseInt(hex.substr(i, 2)));
    return str;
}

function dec3a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 3)        str += String.fromCharCode(parseInt(hex.substr(i, 3)));
    return str;
}

function dectoabc(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length;){
       if(parseInt("0"+hex.substr(i,2)) > 26){
        str += String.fromCharCode(parseInt(hex.substr(i, 2)));
        i+=2;
       }else{
        str += String.fromCharCode(parseInt(hex.substr(i, 3)));
        i+=3;
       }
    }
    return str;
}

function oct3a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 3)        str += String.fromCharCode(parseInt(hex.substr(i, 3),8));
    return str;
}
function oct_ascii(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)        str += String.fromCharCode(parseInt(hex.substr(i, 2),8));
    return str;
}

function atbashof(text){
  var alphabet = "0123456789abcdef";
  var tebahpla = "fedcba9876543210";
  var str = "";
  for (k = 0; k < text.length; k++) {
     var coded_letter = text.charAt(k);
     var letter_index = alphabet.indexOf(coded_letter);
         str += tebahpla.charAt(letter_index);
     }
  return str;
}

function morsecode(input){
    var alphabet = {
        ".-"        : "a",
        "-..."        : "b",
        "-.-."        : "c",
        "-.."        : "d",
        "."            : "e",
        "..-."        : "f",
        "--."        : "g",
        "...."        : "h",
        ".."        : "i",
        ".---"        : "j",
        "-.-"        : "k",
        ".-.."        : "l",
        "--"        : "m",
        "-."        : "n",
        "---"        : "o",
        ".--."        : "p",
        "--.-"        : "q",
        ".-."        : "r",
        "..."        : "s",
        "-"            : "t",
        "..-"        : "u",
        "...-"        : "v",
        ".--"        : "w",
        "-..-"        : "x",
        "-.--"        : "y",
        "--.."        : "z",
        "-----"        : "0",
        ".----"        : "1",
        "..---"        : "2",
        "...--"        : "3",
        "....-"        : "4",
        "....."        : "5",
        "-...."        : "6",
        "--..."        : "7",
        "---.."        : "8",
        "----."        : "9",
        '.-.-.-'    : '.',
        '--..--'    : ',',
        '..--..'    : '?',
        '-....-'    : '-',
        '-...-'        : '=',
        '---...'    : ':',
        '-.-.-.'    : ';',
        '-.--.'        : '(',
        '-.--.-'    : ')',
        '-..-.'        : '/',
        '.-..-.'    : '"',
        '...-..-'    : '$',
        '.----.'    : "'",
         '.-.-..'    : '¶',
        '..--.-'    : '_',
        '.--.-.'    : '@',
        '---.'        : '!',
        '-.-.--'    : '!',
        '.-.-.'        : '+',
        '.-...'        : '~',
        '...-.-'    : '#',
        '. ...'        : '&',
        '-..-.'        : '⁄',
        "01"        : "a",
        "1000"        : "b",
        "1010"        : "c",
        "100"        : "d",
        "0"            : "e",
        "0010"        : "f",
        "110"        : "g",
        "0000"        : "h",
        "00"        : "i",
        "0111"        : "j",
        "101"        : "k",
        "0100"        : "l",
        "11"        : "m",
        "10"        : "n",
        "111"        : "o",
        "0110"        : "p",
        "1101"        : "q",
        "010"        : "r",
        "000"        : "s",
        "1"            : "t",
        "001"        : "u",
        "0001"        : "v",
        "011"        : "w",
        "1001"        : "x",
        "1011"        : "y",
        "1100"        : "z",
        "11111"        : "0",
        "01111"        : "1",
        "00111"        : "2",
        "00011"        : "3",
        "00001"        : "4",
        "00000"        : "5",
        "10000"        : "6",
        "11000"        : "7",
        "11100"        : "8",
        "11110"        : "9",
        '010101'    : '0',
        '110011'    : ',',
        '001100'    : '?',
        '100001'    : '1',
        '10001'        : '=',
        '111000'    : ':',
        '101010'    : ';',
        '10110'        : '(',
        '101101'    : ')',
        '10010'        : '/',
        '010010'    : '"',
        '0001001'    : '$',
        '011110'    : "'",
         '010100'    : '¶',
        '001101'    : '_',
        '011010'    : '@',
        '1110'        : '!',
        '101011'    : '!',
        '01010'        : '+',
        '01000'        : '~',
        '000101'    : '#',
        '0 000'        : '&',
        '10010'        : '⁄',
    };
    return input.split(' ').map(function(e){ return alphabet[e.toLowerCase()] || '';}).join(''); 
}

function morse2code(input){
    var alphabet = {
    "a"    :"01"    ,
    "b"    :"1000"    ,
    "c"    :"1010"    ,
    "d"    :"100"    ,
    "e"    :"0"    ,
    "f"    :"0010"    ,
    "g"    :"110"    ,
    "h"    :"0000"    ,
    "i"    :"00"    ,
    "j"    :"0111"    ,
    "k"    :"101"    ,
    "l"    :"0100"    ,
    "m"    :"11"    ,
    "n"    :"10"    ,
    "o"    :"111"    ,
    "p"    :"0110"    ,
    "q"    :"1101"    ,
    "r"    :"010"    ,
    "s"    :"000"    ,
    "t"    :"1"    ,
    "u"    :"001"    ,
    "v"    :"0001"    ,
    "w"    :"011"    ,
    "x"    :"1001"    ,
    "y"    :"1011"    ,
    "z"    :"1100"    ,
    "0"    :"11111"    ,
    "1"    :"01111"    ,
    "2"    :"00111"    ,
    "3"    :"00011"    ,
    "4"    :"00001"    ,
    "5"    :"00000"    ,
    "6"    :"10000"    ,
    "7"    :"11000"    ,
    "8"    :"11100"    ,
    "9"    :"11110"    ,
    "."    :"010101"    ,
    ","    :"110011"    ,
    "?"    :"001100"    ,
    "'"    :"011110"    ,
    "!"    :"101011"    ,
    "-"    :"100001"    ,
    "/"    :"10010"    ,
    "@"    :"011010"    ,
    "("    :"10110"    ,
    ")"    :"101101"    ,
    ":"    :"111000"    ,
    ";"    :"101010"    ,
    "="    :"10001"    ,
    "+"    :"01010"    ,
    "&"    :"01000"    ,
    "_"    :"001101"    ,
    '"'    :"010010"    ,
    "$"    :"0001001"    ,
    "イ"    :"01"  ,
    "ロ"    :"0101"  ,
    "ハ"    :"1000"  ,
    "ニ"    :"1010"  ,
    "ホ"    :"100"  ,
    "ヘ"    :"0"  ,
    "ト"    :"00100"  ,
    "チ"    :"0010"  ,
    "リ"    :"110"  ,
    "ヌ"    :"0000"  ,
    "ル"    :"10110"  ,
    "ヲ"    :"0111"  ,
    "ワ"    :"101"  ,
    "カ"    :"0100"  ,
    "ヨ"    :"11"  ,
    "タ"    :"10"  ,
    "レ"    :"111"  ,
    "ソ"    :"1110"  ,
    "ツ"    :"0110"  ,
    "ネ"    :"1101"  ,
    "ナ"    :"010"  ,
    "ラ"    :"000"  ,
    "ム"    :"1"  ,
    "ウ"    :"001"  ,
    "ヰ"    :"01001"  ,
    "ノ"    :"0011"  ,
    "オ"    :"01000"  ,
    "ク"    :"0001"  ,
    "ヤ"    :"011"  ,
    "マ"    :"1001"  ,
    "ケ"    :"1011"  ,
    "フ"    :"1100"  ,
    "コ"    :"1111"  ,
    "エ"    :"10111"  ,
    "テ"    :"01011"  ,
    "ア"    :"11011"  ,
    "サ"    :"10101"  ,
    "キ"    :"10100"  ,
    "ユ"    :"10011"  ,
    "メ"    :"10001"  ,
    "ミ"    :"00101"  ,
    "シ"    :"11010"  ,
    "ヱ"    :"01100"  ,
    "ヒ"    :"11001"  ,
    "モ"    :"10010"  ,
    "セ"    :"01110"  ,
    "ス"    :"11101"  ,
    "ン"    :"01010"  ,
    "゛"    :"00"  ,
    "゜"    :"00110"  ,
    "ー"    :"01101"  ,
    "、"    :"010101"  ,
    "」"    :"010100"  ,
    "（"    :"101101"  ,
    "）"    :"010010"  ,
    "１"    :"01111"  ,
    "２"    :"00111"  ,
    "３"    :"00011"  ,
    "４"    :"00001"  ,
    "５"    :"00000"  ,
    "６"    :"10000"  ,
    "７"    :"11000"  ,
    "８"    :"11100"  ,
    "９"    :"11110"  ,
    "０"    :"11111"  
    };
    return input.split('').map(function(e){ return alphabet[e.toLowerCase()] || '';}).join(''); 
}

function morse2code2(input){
    var alphabet = {
    "a"    :"01"    ,
    "b"    :"1000"    ,
    "c"    :"1010"    ,
    "d"    :"100"    ,
    "e"    :"0"    ,
    "f"    :"0010"    ,
    "g"    :"110"    ,
    "h"    :"0000"    ,
    "i"    :"00"    ,
    "j"    :"0111"    ,
    "k"    :"101"    ,
    "l"    :"0100"    ,
    "m"    :"11"    ,
    "n"    :"10"    ,
    "o"    :"111"    ,
    "p"    :"0110"    ,
    "q"    :"1101"    ,
    "r"    :"010"    ,
    "s"    :"000"    ,
    "t"    :"1"    ,
    "u"    :"001"    ,
    "v"    :"0001"    ,
    "w"    :"011"    ,
    "x"    :"1001"    ,
    "y"    :"1011"    ,
    "z"    :"1100"    ,
    "0"    :"11111"    ,
    "1"    :"01111"    ,
    "2"    :"00111"    ,
    "3"    :"00011"    ,
    "4"    :"00001"    ,
    "5"    :"00000"    ,
    "6"    :"10000"    ,
    "7"    :"11000"    ,
    "8"    :"11100"    ,
    "9"    :"11110"    ,
    "."    :"010101"    ,
    ","    :"110011"    ,
    "?"    :"001100"    ,
    "'"    :"011110"    ,
    "!"    :"101011"    ,
    "-"    :"100001"    ,
    "/"    :"10010"    ,
    "@"    :"011010"    ,
    "("    :"10110"    ,
    ")"    :"101101"    ,
    ":"    :"111000"    ,
    ";"    :"101010"    ,
    "="    :"10001"    ,
    "+"    :"01010"    ,
    "&"    :"01000"    ,
    "_"    :"001101"    ,
    '"'    :"010010"    ,
    "$"    :"0001001"    ,
    "イ"    :"01"  ,
    "ロ"    :"0101"  ,
    "ハ"    :"1000"  ,
    "ニ"    :"1010"  ,
    "ホ"    :"100"  ,
    "ヘ"    :"0"  ,
    "ト"    :"00100"  ,
    "チ"    :"0010"  ,
    "リ"    :"110"  ,
    "ヌ"    :"0000"  ,
    "ル"    :"10110"  ,
    "ヲ"    :"0111"  ,
    "ワ"    :"101"  ,
    "カ"    :"0100"  ,
    "ヨ"    :"11"  ,
    "タ"    :"10"  ,
    "レ"    :"111"  ,
    "ソ"    :"1110"  ,
    "ツ"    :"0110"  ,
    "ネ"    :"1101"  ,
    "ナ"    :"010"  ,
    "ラ"    :"000"  ,
    "ム"    :"1"  ,
    "ウ"    :"001"  ,
    "ヰ"    :"01001"  ,
    "ノ"    :"0011"  ,
    "オ"    :"01000"  ,
    "ク"    :"0001"  ,
    "ヤ"    :"011"  ,
    "マ"    :"1001"  ,
    "ケ"    :"1011"  ,
    "フ"    :"1100"  ,
    "コ"    :"1111"  ,
    "エ"    :"10111"  ,
    "テ"    :"01011"  ,
    "ア"    :"11011"  ,
    "サ"    :"10101"  ,
    "キ"    :"10100"  ,
    "ユ"    :"10011"  ,
    "メ"    :"10001"  ,
    "ミ"    :"00101"  ,
    "シ"    :"11010"  ,
    "ヱ"    :"01100"  ,
    "ヒ"    :"11001"  ,
    "モ"    :"10010"  ,
    "セ"    :"01110"  ,
    "ス"    :"11101"  ,
    "ン"    :"01010"  ,
    "゛"    :"00"  ,
    "゜"    :"00110"  ,
    "ー"    :"01101"  ,
    "、"    :"010101"  ,
    "」"    :"010100"  ,
    "（"    :"101101"  ,
    "）"    :"010010"  ,
    "１"    :"01111"  ,
    "２"    :"00111"  ,
    "３"    :"00011"  ,
    "４"    :"00001"  ,
    "５"    :"00000"  ,
    "６"    :"10000"  ,
    "７"    :"11000"  ,
    "８"    :"11100"  ,
    "９"    :"11110"  ,
    "０"    :"11111"  
    };
    return input.split('').map(function(e){ return alphabet[e.toLowerCase()] || '';}).join(' '); 
}


function code2braille(text){
  var brailleMap = {
    "000000"    :" "  ,
    "011011"    :"!"  ,
    "000100"    :'"'  ,
    "010111"    :"#"  ,
    "111001"    :"$"  ,
    "110001"    :"%"  ,
    "111011"    :"&"  ,
    "000010"    :"'"  ,
    "101111"    :"("  ,
    "011111"    :")"  ,
    "100001"    :"*"  ,
    "010011"    :"+"  ,
    "000001"    :","  ,
    "000011"    :"-"  ,
    "010001"    :"."  ,
    "010010"    :"/"  ,
    "000111"    :"0"  ,
    "001000"    :"1"  ,
    "001010"    :"2"  ,
    "001100"    :"3"  ,
    "001101"    :"4"  ,
    "001001"    :"5"  ,
    "001110"    :"6"  ,
    "001111"    :"7"  ,
    "001011"    :"8"  ,
    "000110"    :"9"  ,
    "100101"    :":"  ,
    "000101"    :";"  ,
    "101001"    :"<"  ,
    "111111"    :"="  ,
    "010110"    :">"  ,
    "110101"    :"?"  ,
    "010000"    :"@"  ,
    "100000"    :"a"  ,
    "101000"    :"b"  ,
    "110000"    :"c"  ,
    "110100"    :"d"  ,
    "100100"    :"e"  ,
    "111000"    :"f"  ,
    "111100"    :"g"  ,
    "101100"    :"h"  ,
    "011000"    :"i"  ,
    "011100"    :"j"  ,
    "100010"    :"k"  ,
    "101010"    :"l"  ,
    "110010"    :"m"  ,
    "110110"    :"n"  ,
    "100110"    :"o"  ,
    "111010"    :"p"  ,
    "111110"    :"q"  ,
    "101110"    :"r"  ,
    "011010"    :"s"  ,
    "011110"    :"t"  ,
    "100011"    :"u"  ,
    "101011"    :"v"  ,
    "011101"    :"w"  ,
    "110011"    :"x"  ,
    "110111"    :"y"  ,
    "100111"    :"z"  ,
    "011001"    :'['  ,
    "101101"    :'\\'  ,
    "111101"    :']'  ,
    "010100"    :"^"  ,
    "010101"    :"_"  
  };
  var result="";
  for (var i=0; i< text.length; i+=6){
    result += brailleMap[text.substr(i, 6)] || '';
  }
  return result;
}



function kana2zen(str) {
    var kanaMap = {
        'ガ': 'カ゛', 'ギ': 'キ゛', 'グ': 'ク゛', 'ゲ': 'ケ゛', 'ゴ': 'コ゛',
        'ザ': 'サ゛', 'ジ': 'シ゛', 'ズ': 'ス゛', 'ゼ': 'セ゛', 'ゾ': 'ソ゛',
        'ダ': 'タ゛', 'ヂ': 'チ゛', 'ヅ': 'ツ゛', 'デ': 'テ゛', 'ド': 'ト゛',
        'バ': 'ハ゛', 'ビ': 'ヒ゛', 'ブ': 'フ゛', 'ベ': 'ヘ゛', 'ボ': 'ホ゛',
        'パ': 'ハ゜', 'ピ': 'ヒ゜', 'プ': 'フ゜', 'ペ': 'ヘ゜', 'ポ': 'ホ゜',
        'ヴ': 'ウ゛',
    };
    var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
    return str.replace(reg, function (match) { return kanaMap[match]; });
}


function hira2kana(src) {
	return src.replace(/[\u3041-\u3096]/g, function(match) {
		var chr = match.charCodeAt(0) + 0x60;
		return String.fromCharCode(chr);
	});
}



function encode_ascii85(a) {
  var b, c, d, e, f, g, h, i, j, k;
  for (!/[^\x00-\xFF]/.test(a), b = "\x00\x00\x00\x00".slice(a.length % 4 || 4), a += b, 
  c = [], d = 0, e = a.length; e > d; d += 4) f = (a.charCodeAt(d) << 24) + (a.charCodeAt(d + 1) << 16) + (a.charCodeAt(d + 2) << 8) + a.charCodeAt(d + 3), 
  0 !== f ? (k = f % 85, f = (f - k) / 85, j = f % 85, f = (f - j) / 85, i = f % 85, 
  f = (f - i) / 85, h = f % 85, f = (f - h) / 85, g = f % 85, c.push(g + 33, h + 33, i + 33, j + 33, k + 33)) :c.push(122);
  return function(a, b) {
    for (var c = b; c > 0; c--) a.pop();
  }(c, b.length), String.fromCharCode.apply(String, c) ;
}

function decode_ascii85(a) {
  var c, d, e, f, g, h = String, l = "length", w = 255, x = "charCodeAt", y = "slice", z = "replace";
  for ("<~" === a[y](0, 2) && "~>" === a[y](-2), a = a[y](2, -2)[z](/\s/g, "")[z]("z", "!!!!!"), 
  c = "uuuuu"[y](a[l] % 5 || 5), a += c, e = [], f = 0, g = a[l]; g > f; f += 5) d = 52200625 * (a[x](f) - 33) + 614125 * (a[x](f + 1) - 33) + 7225 * (a[x](f + 2) - 33) + 85 * (a[x](f + 3) - 33) + (a[x](f + 4) - 33), 
  e.push(w & d >> 24, w & d >> 16, w & d >> 8, w & d);
  return function(a, b) {
    for (var c = b; c > 0; c--) a.pop();
  }(e, c[l]), h.fromCharCode.apply(h, e);
}

function uudecode(line) {
	var bytes = (line.charCodeAt(0) - 32);
	var a, b, c, d;
	if (bytes == 64) { // "`" - 32
	    bytes = 0;
	    return "";
	};
	var chunks = Math.ceil(bytes / 3) * 4; // (6 to 8 conversion)
	var j = 1;
	var a, b, c, d, data , retstr;
	retstr="";
	while (j < chunks){
	    a = line.charCodeAt(j++) - 32;
	    b = line.charCodeAt(j++) - 32;
	    c = line.charCodeAt(j++) - 32;
	    d = line.charCodeAt(j++) - 32;
	    data = a << 18;
	    data += b << 12
	    data += c << 6;
	    data += d << 0;
	    a = (data >> 16)& 255;
	    b = (data >> 8)& 255;
	    c = data & 255;
	    if( (a>32) && (a<127) ){
		    retstr+=String.fromCharCode(a);
		    if( (b>32) && (b<127) ){
			    retstr+=String.fromCharCode(b);
			    if( (c>32) && (c<127) ){
				    retstr+=String.fromCharCode(c);
				}
			}
		}
	}
	return retstr.trim();
}
function xxdecode(text) {
  var tebahpla = ' !"#$%&'+"'"+'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_';
  var alphabet = "+-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  var str = "";
  for (k = 0; k < text.length; k++) {
     var coded_letter = text.charAt(k);
     var letter_index = alphabet.indexOf(coded_letter);
         str += tebahpla.charAt(letter_index);
     }
  return uudecode(str);

}
