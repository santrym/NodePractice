var fs = require('fs');
var path = require('path');

var directory = fs.readdir(process.argv[2], function(err, data){
    if(err){
        console.log('an error occurred my dude');
    } else{
        //var typeSelect = process.argv[3];
        //console.log(typeSelect);
        for(var i = 0; i < data.length; i++){
            //console.log(path.extname(data[i]));
            if(path.extname(data[i]) == ( '.' + process.argv[3])){
                console.log(data[i]);
            }
        }
        //console.log('hello');

    }
});



