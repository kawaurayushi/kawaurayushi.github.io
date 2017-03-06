var BASE, CANDIDATES, COLS, GRID, Key, ROWS, SIZE, Solver, Square;

GRID = "4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......";
BASE = 9;
SIZE = BASE * BASE;
ROWS = 'ABCDEFGHI';
COLS = '123456789';
CANDIDATES = '123456789';
function trimStr(str){
	return str.replace(/[\n\r\t\s]/g,"");
}


$('#solve').click(function(){
   Solver.run(trimStr($('#lines').val()));
});
$('#sample1').click(function(){
   $('#lines').val("400000805030000000000700000020000060000080400000010000000603070500200000104000000");
   $('#size').val('3');
   BASE = 9;
   SIZE = BASE * BASE;
   ROWS = 'ABCDEFGHI';
   COLS = '123456789';
   CANDIDATES = '123456789';});

$('#sample2').click(function(){
   $('#lines').val("B0E786G4590000000100CB20FA3E060D50C030F90B6800003F20D005001G897B68900530B040C0G7D070040B1E8000090B020C00AG000413000000700602A080104F07C02000500000500080000C03FE000E201005D400B00680A05G0000972000D060B0C009750FG7040001000A0D000CB0E040D8003106A0600F003251004G");
   $('#size').val('4');
   BASE = 16;
   SIZE = BASE * BASE;
   ROWS = 'ABCDEFGHIJKLMNOP';
   COLS = '123456789ABCDEFG';
   CANDIDATES = '123456789ABCDEFG';});
$('#sample3').click(function(){
   $('#lines').val("851900000060020DEC4000000080007F0D0G8B000100A00000F002C0300D0019DB0005380GF00904000E00400000030C4000G000009005000028B01CD0307000000AF00703004021080D0300000000G0000096E000CF00009004005100D0B600G080D060204000000000070090000000000200G0070064C0F0730C0010E00002");
   $('#size').val('4');
   BASE = 16;
   SIZE = BASE * BASE;
   ROWS = 'ABCDEFGHIJKLMNOP';
   COLS = '123456789ABCDEFG';
   CANDIDATES = '123456789ABCDEFG';});
$('#sample4').click(function(){
   $('#lines').val("00J02000CF05E00000800K00P0N4D000J00600C0900000EL008HEP00K027000J300010400G09B000080MLP0FA40G60J0H0020670000P549MD00O03HF0N0BADLA800000M0GP400900K00007E09C03N00JI00060A007200007M0N3P000E000K0000C00000100050C0G7009L0J8020I0P00B00B4J01A0O700N0000600L3IG050000DC0K0000F00BNM0J00IC900F078005000D00I000104E03K0000O000806000900002A04J01000H00C000E00K20D0076H00O0FBI00L0000C0GJ0000N0J7LH00A0000C00PF04M0G6N00A00F0E0B08205G00NJ0L070003000002000040001000EBI0LF0000G100N08000MK009D0OE04I0000L00900EJF0H00000DM53LC070G3M0I0092BNJ50000KD0K00B0A05D0NFO0IL6070000PM0P00M09000DL0004E0O00AC3N005200000H0300C0080004710600300C000004P02H00050800");
   $('#size').val('5');
   BASE = 25;
   SIZE = BASE * BASE;
   ROWS = 'ABCDEFGHIJKLMNOOPQSTUVWXY';
   COLS = '123456789ABCDEFFHIJKLMNOP';
   CANDIDATES = '123456789ABCDEFFHIJKLMNOP';});


$('#size').change(function() {
  switch( $('#size').val() ){
    case '3':
        BASE = 9;
        SIZE = BASE * BASE;
        ROWS = 'ABCDEFGHI';
        COLS = '123456789';
        CANDIDATES = '123456789';
        break;
    case '4':
        BASE = 16;
        SIZE = BASE * BASE;
        ROWS = 'ABCDEFGHIJKLMNOP';
        COLS = '123456789ABCDEFG';
        CANDIDATES = '123456789ABCDEFG';
        break;
    case '5':
        BASE = 25;
        SIZE = BASE * BASE;
        ROWS = 'ABCDEFGHIJKLMNOOPQSTUVWXY';
        COLS = '123456789ABCDEFFHIJKLMNOP';
        CANDIDATES = '123456789ABCDEFFHIJKLMNOP';
        break;
  }
});

Key = {
  make: function(row, col) {
    return "" + row + col;
  },
  cross: function(rows, cols) {
    var c, j, keys, l, len, len1, r;
    keys = [];
    for (j = 0, len = rows.length; j < len; j++) {
      r = rows[j];
      for (l = 0, len1 = cols.length; l < len1; l++) {
        c = cols[l];
        keys.push(this.make(r, c));
      }
    }
    return keys;
  },
  listAll: function() {
    return this.cross(ROWS, COLS);
  },
  listInRow: function(row) {
    return this.cross(row, COLS);
  },
  listInCol: function(col) {
    return this.cross(ROWS, col);
  },
  listInBlock: function(row, col) {
    var col_units, cols, i, j, keys, l, len, len1, row_units, rows, unit;
    keys = [];
    unit = Math.sqrt(BASE);
    row_units = (function() {
      var j, ref, ref1, results;
      results = [];
      for (i = j = 0, ref = BASE - 1, ref1 = unit; ref1 > 0 ? j <= ref : j >= ref; i = j += ref1) {
        results.push(ROWS.substr(i, unit));
      }
      return results;
    })();
    col_units = (function() {
      var j, ref, ref1, results;
      results = [];
      for (i = j = 0, ref = BASE - 1, ref1 = unit; ref1 > 0 ? j <= ref : j >= ref; i = j += ref1) {
        results.push(COLS.substr(i, unit));
      }
      return results;
    })();
    for (j = 0, len = row_units.length; j < len; j++) {
      rows = row_units[j];
      if (!rows.includes(row)) {
        continue;
      }
      for (l = 0, len1 = col_units.length; l < len1; l++) {
        cols = col_units[l];
        if (!cols.includes(col)) {
          continue;
        }
        keys = keys.concat(this.cross(rows, cols));
      }
    }
    return keys;
  },
  units: function() {
    var col, j, key, l, len, len1, row, unit_map;
    unit_map = {};
    for (j = 0, len = ROWS.length; j < len; j++) {
      row = ROWS[j];
      for (l = 0, len1 = COLS.length; l < len1; l++) {
        col = COLS[l];
        key = this.make(row, col);
        unit_map[key] = [this.listInRow(row), this.listInCol(col), this.listInBlock(row, col)];
      }
    }
    return unit_map;
  },
  peers: function() {
    var block_list, col, col_list, j, key, l, len, len1, peer, peer_map, row, row_list;
    peer_map = {};
    for (j = 0, len = ROWS.length; j < len; j++) {
      row = ROWS[j];
      for (l = 0, len1 = COLS.length; l < len1; l++) {
        col = COLS[l];
        key = this.make(row, col);
        row_list = this.listInRow(row).filter(function(k) {
          return k !== key;
        });
        col_list = this.listInCol(col).filter(function(k) {
          return k !== key;
        });
        peer = row_list.concat(col_list);
        block_list = this.listInBlock(row, col).filter(function(k) {
          return k !== key && !peer.includes(k);
        });
        peer_map[key] = peer.concat(block_list);
      }
    }
    return peer_map;
  }
};

Square = (function() {
  Square.Units = Key.units();

  Square.Peers = Key.peers();

  Square.prototype.serial = null;

  function Square() {
    var j, key, len, ref;
    this.elements = {};
    ref = Key.listAll();
    for (j = 0, len = ref.length; j < len; j++) {
      key = ref[j];
      this.elements[key] = CANDIDATES;
    }
    this.serial = 1;
  }

  Square.refreshKeys = function() {
    Square.Units = Key.units();
    Square.Peers = Key.peers();
  };


  Square.prototype.clone = function() {
    var candidates, key, ref, square;
    square = new Square();
    square.elements = {};
    ref = this.elements;
    for (key in ref) {
      candidates = ref[key];
      square.elements[key] = candidates;
    }
    square.serial = this.serial + 1;
    return square;
  };

  Square.prototype.assign = function(key, value) {
    var exclude_value, j, len, results, to_exclude;
    to_exclude = this.elements[key].replace(value, "");
    results = [];
    for (j = 0, len = to_exclude.length; j < len; j++) {
      exclude_value = to_exclude[j];
      results.push(this.exclude(key, exclude_value));
    }
    return results;
  };

  Square.prototype.exclude = function(focus_key, value) {
    var j, key, key_list, l, len, len1, ref, ref1, results, unit_keys;
    if (!this.elements[focus_key].includes(value)) {
      return;
    }
    this.elements[focus_key] = this.elements[focus_key].replace(value, "");
    if (this.elements[focus_key].length == 1) {
      ref = Square.Peers[focus_key];
      for (j = 0, len = ref.length; j < len; j++) {
        key = ref[j];
        this.exclude(key, this.elements[focus_key]);
      }
    }
    ref1 = Square.Units[focus_key];
    results = [];
    for (l = 0, len1 = ref1.length; l < len1; l++) {
      unit_keys = ref1[l];
      key_list = unit_keys.filter((function(key) {
        return this.map[key].includes(value);
      }), {
        map: this.elements
      });
      switch (key_list.length) {
        case 0:
          throw {
            message: "no place for value:" + value + " in " + unit_keys
          };
          break;
        case 1:
          results.push(this.assign(key_list[0], value));
          break;
        default:
          results.push(void 0);
      }
    }
    return results;
  };

  Square.prototype.isSolved = function() {
    var candidates, key, ref;
    ref = this.elements;
    for (key in ref) {
      candidates = ref[key];
      if (candidates.length !== 1) {
        return false;
      }
    }
    return true;
  };

  Square.prototype.findStart = function() {
    var candidates, count, j, key, ref, ref1;
    for (count = j = 2, ref = BASE; 2 <= ref ? j <= ref : j >= ref; count = 2 <= ref ? ++j : --j) {
      ref1 = this.elements;
      for (key in ref1) {
        candidates = ref1[key];
        if (candidates.length === count) {
          return {
            key: key,
            candidates: candidates
          };
        }
      }
    }
  };

  return Square;

})();

Solver = {
  run: function(grid) {
    var error, solved_square, square;
    Square.refreshKeys();
    square = new Square();
    try {
      this.parseGrid(grid, square);
    } catch (_error) {
      error = _error;
      console.error("parseGrid: " + error.message);
    }
    try {
      solved_square = this.solve(square);
      return this.show(solved_square, "Solved");
    } catch (_error) {
      error = _error;
      $('#message').html=("<pre>"+error.message+"</pre>");
      if (error.hasOwnProperty("square")) {
        return this.show(error.square, "Unable to solve");
      }
    }
  },
  parseGrid: function(grid, square) {
    var c, col, i, j, len, line, lines, origin, results, row;
    origin = grid.replace(/\n/g, "");
    lines = (function() {
      var j, ref, ref1, results;
      results = [];
      for (i = j = 0, ref = SIZE - 1, ref1 = BASE; ref1 > 0 ? j <= ref : j >= ref; i = j += ref1) {
        results.push(origin.substr(i, BASE));
      }
      return results;
    })();
    results = [];
    pattern = new RegExp("^[" + CANDIDATES + "]$")
    for (j = 0, len = ROWS.length; j < len; j++) {
      row = ROWS[j];
      line = lines.shift().split('');
      results.push((function() {
        var l, len1, results1;
        results1 = [];
        for (l = 0, len1 = COLS.length; l < len1; l++) {
          col = COLS[l];
          c = line.shift();
          if (!pattern.test(c)) {
            continue;
          }
          results1.push(square.assign(Key.make(row, col), c));
        }
        return results1;
      })());
    }
    return results;
  },
  round: 0,
  solve: function(square) {
    var candidates, error, j, key, len, ref, sq, value;
    if (square.isSolved()) {
      return square;
    }
    this.round++;
    if (this.round >= 300) {
      throw {
        message: "Round limit",
        square: square
      };
    }
    ref = square.findStart(), key = ref.key, candidates = ref.candidates;
    for (j = 0, len = candidates.length; j < len; j++) {
      value = candidates[j];
      try {
        sq = square.clone();
        sq.assign(key, value);
        return this.solve(sq);
      } catch (_error) {
        error = _error;
        if (error instanceof Error) {
          throw error;
        }
      }
    }
    throw {
      message: "Unable to solve Serial#:" + square.serial
    };
  },
  show: function(square, message) {
    var resultstr="";
    var buffer, c, candidates, col, col_header, col_idx, col_list, col_units, hr, i, j, l, len, len1, len2, m, row, row_idx, unit;
    if (message == null) {
      message = null;
    }
    if (message != null) {
      $('#message').html("<pre>"+message+"</pre>");
    }
    console.log(message);
    unit = Math.sqrt(BASE);
    hr = '--|';
    col_header = [];
    col_units = (function() {
      var j, ref, ref1, results;
      results = [];
      for (i = j = 0, ref = BASE - 1, ref1 = unit; ref1 > 0 ? j <= ref : j >= ref; i = j += ref1) {
        results.push(COLS.substr(i, unit));
      }
      return results;
    })();
    for (j = 0, len = col_units.length; j < len; j++) {
      col_list = col_units[j];
      col_header.push(col_list.split('').join('  '));
      hr += ((function() {
        var l, len1, results;
        results = [];
        for (l = 0, len1 = col_list.length; l < len1; l++) {
          c = col_list[l];
          results.push('---');
        }
        return results;
      })()).join('') + '|';
    }
    resultstr += '--|-' + col_header.join('-|-')+'-|'+"\n";
    row_idx = 0;
    for (l = 0, len1 = ROWS.length; l < len1; l++) {
      row = ROWS[l];
      if (row_idx % unit === 0) {
        resultstr += hr+"\n";;
      }
      buffer = row + " ";
      col_idx = 0;
      for (m = 0, len2 = COLS.length; m < len2; m++) {
        col = COLS[m];
        if (col_idx % unit === 0) {
          buffer += "|";
        }
        candidates = square.elements[Key.make(row, col)];
        buffer += candidates.length === 1 ? " " + candidates + " " : "   ";
        col_idx++;
      }
      buffer += "|";
      resultstr += buffer+"\n";
      row_idx++;
    }
    $('#resultarea').html('<pre>'+resultstr + hr+'</pre>');
    return ;
  }
};
