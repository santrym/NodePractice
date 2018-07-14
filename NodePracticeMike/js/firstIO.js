var fs = require('fs');

var file =  fs.readFileSync(process.argv[2]);
var fileString = file.toString();
var number = fileString.split('\n');

console.log(number.length - 1);