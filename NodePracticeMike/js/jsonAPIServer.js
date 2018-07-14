//http server that returns json

var http = require('http');
var url = require('url');
var moment = require('moment');

var server = http.createServer(function(req, res){

    var urlDeets = url.parse(req.url, true);
    var iso = urlDeets.query.iso;
    var pathName = urlDeets.pathname;
    if(pathName == '/api/parsetime'){
        var time = moment(iso);
        var retObj = {
            "hour": time.hour(),
            "minute": time.minute(),
            "second": time.second()
        };
        res.writeHead(200, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify(retObj));
    } else if(pathName == '/api/unixtime'){
        var time = moment(iso).valueOf();
        var retObj = {
            "unixtime": time
        };
        res.writeHead(200, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify(retObj));
    }
    return res.end(pathName);
})

server.listen(process.argv[2]);


//test

