// print the data in the order they are given as arguments
var http = require('http');

var resultList = [];
var completed = 0;

for(var i = 0; i < 3; i++){
    getSite(process.argv[2+i], i);
}



function getSite(url, place){
    var site = '';
    http.get(url, function(response){
        response.on('error', function(data){
            return 'error: ' + data;
        })
        response.on('data', function(data){
            site += data.toString();
        })
        response.on('end', function(data){
            resultList[place] = site;
            completed++;
            if(completed == 3){
                for(var i = 0; i < 3; i++){
                    console.log(resultList[i]);
                }
            }
            return;
        })
    });
}

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//     for (var i = 0; i < 3; i++) {
//         console.log(results[i])
//     }
// }
//
// function httpGet (index) {
//     http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//             if (err) {
//                 return console.error(err)
//             }
//
//             results[index] = data.toString()
//             count++
//
//             if (count === 3) {
//                 printResults()
//             }
//         }))
//     })
// }
//
// for (var i = 0; i < 3; i++) {
//     httpGet(i)
// }

