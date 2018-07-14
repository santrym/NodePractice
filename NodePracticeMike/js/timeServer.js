// Create a TCP server that returns the current date time

var net = require('net');
var moment = require('moment');

var server = net.createServer(function(socket){
    var date = new Date();
    //socket.write('test');
    var time = moment().format('YYYY-MM-DD HH:mm');
    //socket.write();
    socket.end(time + '\n');
})
server.listen(process.argv[2]);


