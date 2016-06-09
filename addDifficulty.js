var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'prideboy41',
    database: 'typeGameDatabase'
});

var easyChars =   ['a','s','d','f','g','h','j','k','l',';','\''];
var easyCharsUp = ['A','S','D','F','G','H','J','K','L',':','\"'];

var harderChars =   ['z','x','c','v','b','n','m',',','.','/','q','w','e','r','t','y','u','i','o','p','[',']','\\'];
var harderCharsUp = ['Z','X','C','V','B','N','M','<','>','?','Q','W','E','R','T','Y','U','I','O','P','{','}','|'];

var hardestChars =   ['`','1','2','3','4','5','6','7','8','9','0','-','='];
var hardestCharsUp = ['~','!','@','#','$','%','^','&','*','(',')','_','+'];

connection.connect();

connection.query('SELECT * FROM Quotes', function (err, rows, fields) {
    if (err) {
	console.log(err);
    }
    else {
	var arr = [];
	var count = 0;
	rows.forEach(function(row){
	    var difTotal = 0;
	    var str = row.quote.replace(/\s+/g, '');
	    for(var i = 0; i < str.length; i++){
		var ch = str.charAt(i);

		if(easyChars.indexOf(ch) != -1){
		    difTotal += 1;
		}
		else if(easyCharsUp.indexOf(ch) != -1){
		    difTotal += 1.5;
		}
		else if(harderChars.indexOf(ch) != -1){
		    difTotal += 2;
		}
		else if(harderCharsUp.indexOf(ch) != -1){
		    difTotal += 2.5;
		}
		else if(hardestChars.indexOf(ch) != -1){
		    difTotal += 3;
				}
		else if(hardestCharsUp.indexOf(ch) != -1){
		    difTotal += 3.5;
		}
	    }
	    var difficulty = "";
	    if(difTotal <= 100){
		difficulty = "'easy'";
	    }
	    else if(difTotal < 400){
		difficulty = "'intermediate'";
	    }
	    else{
		difficulty = "'hard'";	
	    }
	    console.log("UPDATE Quotes SET difficulty=" + difficulty + " WHERE id=" + row.id);
	    connection.query("UPDATE Quotes SET difficulty=" + difficulty + " WHERE id=" + row.id, function(err){
		if(err){
		    console.log(err);
		}
		else{
		    console.log("updated " + row.id + " to diff " + row.difficulty);
		}
		if(++count == rows.length){
		    connection.end();
		}
	    });
	});
    }
});
