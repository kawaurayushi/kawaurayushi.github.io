var X_MAX=9;
var Y_MAX=9;
var point={};
point["x"]=0;
point["y"]=0;

var field = [
	0, 0, 0, 0, 2, 7, 0, 0, 8,
	0, 0, 1, 0, 0, 0, 0, 0, 7,
	0, 6, 4, 0, 0, 5, 0, 1, 9,
	2, 7, 0, 9, 6, 3, 1, 5, 4,
	4, 0, 0, 2, 7, 0, 6, 8, 3,
	6, 1, 3, 0, 0, 4, 0, 0, 0,
	0, 8, 7, 6, 3, 2, 0, 4, 1,
	0, 9, 0, 0, 4, 8, 0, 0, 5,
	3, 4, 2, 5, 1, 9, 8, 7, 0 
];


function sudoku(field, point) {

	var temp={};
	temp = findEmptyPoint(field);

	if(temp["x"]*temp["y"] == X_MAX*Y_MAX){
		if(checkField(field)){
//			printField(field);
			console.log("OK!");
		}
		return;
	}
	for(num=1; num<=9; num++){
		if(putJudge( field, temp["x"],temp["y"], num)){
			field[X_MAX * temp["y"] + temp["x"]] = num;
			console.log("x:"+temp["x"]+"  y:"+temp["y"]+"  NUM:"+num);
			sudoku(field, temp);
		}
		console.log("koko?");
	}
}

function findEmptyPoint(field){
	var x=0;
	var y=0;
	while ( y < Y_MAX ) {
		while ( x < X_MAX ) {
//			console.log("x:"+x+"  y:"+y+"  value:"+field [X_MAX * y + x]);
			if (field [X_MAX * y + x] == 0) {
				return {"x":x,"y":y};
			}
			x++;
		}
		x=0;
		y++;
	}
	x=X_MAX;
	return {"x":x,"y":y};
}


function putJudge(field, x,y, num) {
	numlist = Array(X_MAX).fill( 0 );

	for(i = 0; i < 9; i++) {
		numlist[field [X_MAX * y + i]] = 1;
	}
	for(i = 0; i < 9; i++) {
		numlist[field [X_MAX * i + x]] = 1;
	}
	for(i = 0; i < 3; i++) {
		for(j = 0; j < 3; j ++) {
			numlist[field [X_MAX * (Math.floor ( y / 3 ) * 3 + i) + Math.floor ( x / 3 ) * 3 + j]] = 1;
		}
	}
	var log="";
	for(i = 0; i < 9; i++) {
		log += numlist[i];
	}
	console.log("x:"+x+"  y:"+y+"  value:"+log);

	if(numlist[num]!=1){
		return true;
	}
	return false;
}

function checkField(field){
	for(i=0; i<Y_MAX; i++){
		for(j=0; j<X_MAX; j++){
//			if(putJudge(field, {"x":j, "y":i}, field [X_MAX * i + j])){
			if(putJudge(field, j,x, field [X_MAX * i + j])){
				return false;
			}
		}
	}
	return true;
}

function printField(field){
	for(i = 0; i < 9; i ++) {
		for(j = 0; j < 9; j ++) {
			$( ".result" ).append(field [X_MAX * i + j] + "&nbsp;");
		}
			$( ".result" ).append("<br />");
	}
	$( ".result" ).append("<br />");
}


$( ".result" ).html('Start <br>');
printField(field);
sudoku(field, point);
$( ".result" ).append('Result <br>');
printField(field);
