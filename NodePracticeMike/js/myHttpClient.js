var http = require('http');

http.get(process.argv[2], function(response){
    response.on("error", function(data){
        console.log(data.toString());
    });
    response.on("data", function(data){
        console.log(data.toString());
    });
    response.on("end", function(data){
        console.log(data.toString());
    });

});
