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
	//console.log(req.data);

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
				connection.query('SELECT * FROM Records WHERE id =\'' + usr + '\' ORDER BY timecompleted', function (err, rows, fields) {
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
		else if(req.url.toString() == '/') {
			connection.query('SELECT quote, author, difficulty FROM Quotes ORDER BY RAND() LIMIT 1', function (err, rows, fields) {
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

			var queryStr = 'INSERT INTO Records VALUES (\'' + data.id + '\',' + data.raw + ',' + data.corrected + ',\'' + new Date(data.time).toMysqlFormat() + '\',\'' + data.difficulty + '\')';
			console.log(queryStr);

			connection.query(queryStr,function (err, rows, fields) {
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
