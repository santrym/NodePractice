var http = require('http');
var bl = require('bl');

var allData = '';

// http.get(process.argv[2], function(response){
//
//    response.on('error', function(data){
//        console.log('error: ' + data);
//    });
//    response.on('data', function(data){
//        allData += data.toString();
//    })
//     response.on('end', function(data){
//         console.log(allData.length);
//         console.log(allData);
//     })
//
// });


http.get(process.argv[2], function(response){
    response.pipe(bl(function(err, data){
        if(err){
            return console.error(err);
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }))
});







