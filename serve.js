var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'prideboy41',
    database: 'typeGameDatabase'
});

connection.connect();

http.createServer(function(req, res) {    
    console.log(req.method);

    if(req.method == 'GET') {
	console.log(req.url);
	if(req.url.toString().indexOf('/stats') != -1) {
	    var idx;
	    if ((idx = req.url.toString().indexOf('user=')) != -1) {
		var usr = req.url.substring(idx + 5);
		console.log("searching for records pertaining to " + usr);
		res.writeHead(200, {
		    'Content-Type': 'text/plain',
		    'Access-Control-Allow-Origin': '*'
		});
		var queryStr = 'SELECT * FROM Records WHERE id = ? ORDER BY timecompleted';
		connection.query(queryStr, [usr], function (err, rows, fields) {
		    if (err) {
			console.log(err);
			res.writeHead(500, {'Content-Type': 'text/plain'});
			res.end(err);
		    }
		    else {
			res.writeHead(200, {
			    'Content-Type': 'text/plain',
			    'Access-Control-Allow-Origin': '*'
			});
			res.end(JSON.stringify(rows));
		    }
		});
	    }
	}
	else if(req.url.toString().indexOf('/quote') != -1) {
	    var queryStr = 'SELECT quote, author, difficulty, id FROM Quotes ORDER BY RAND() LIMIT 1';
	    var idx = 0;
	    var diff = undefined, not = undefined;

	    if((idx = req.url.toString().indexOf('?difficulty=')) != -1){
		var index = req.url.toString().indexOf("&");
		if(index == -1) index = req.url.toString.length;
		diff = req.url.toString().substring(idx + 12, index);
	    }
	    if((idx=req.url.toString().indexOf('&not=')) != -1){
		not = req.url.toString().substring(idx + 5);
	    }

	    queryStr = 'SELECT quote, author, difficulty, id FROM Quotes ';
	    if( diff || not){
		queryStr += "WHERE ";
		if(diff){
		    queryStr += 'difficulty = ' + connection.escape(diff);
		    if(not) queryStr += ' AND ';
		}
		if(not){
		    queryStr += 'id != ' + connection.escape(not);
		}
	    }
	    queryStr += ' ORDER BY RAND() LIMIT 1';
	    console.log(queryStr);
	    connection.query(queryStr, function (err, rows, fields) {
		if (err) {
		    console.log(err);
		    res.writeHead(500, {'Content-Type': 'text/plain'});
		    res.end(err);
		}
		else {

		    var arr = [];
		    if (rows.length) {
			res.writeHead(200, {
			    'Content-Type': 'text/plain',
			    'Access-Control-Allow-Origin': '*'
			});
			res.end(JSON.stringify(rows[0]));
		    }
		    else {
			res.writeHead(500, {'Content-Type': 'text/plain'});
			res.end("server error");
		    }
		}
	    });
	}
	else {
	    res.writeHead(404, {'Content-Type': 'text/plain'});
	    res.end("url not valid");
	}
    }
    else if(req.method == 'POST') {
	var data;
	req.on('data', function(chunk) {
	    console.log("Received body data:");
	    console.log(chunk.toString());
	    data = JSON.parse(chunk.toString());
	    console.log(data.id);
	    console.log(data.raw);
	    console.log(data.corrected);
	    console.log(data.time);
	});

	req.on('end', function() {
	    // empty 200 OK response for now
	    res.writeHead(200, {
		'Content-Type': 'text/plain',
		'Access-Control-Allow-Origin': '*'
	    });
	    res.end();

	    var queryStr = 'INSERT INTO Records VALUES (?,?,?,?,?)';
	    console.log(queryStr);

	    connection.query(queryStr,[data.id, data.raw, data.corrected, new Date(data.time).toMysqlFormat(), data.difficulty], function (err, rows, fields) {
		if (err) {
		    console.log(err);
		}
		else {
		    console.log("success");
		}
	    });
	});

    }
}).listen(8080);//, '52.36.156.222');
console.log('Server is running at http://172.31.30.240:5000/');

function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}

Date.prototype.toMysqlFormat = function() {
    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};
