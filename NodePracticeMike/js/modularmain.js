var dirReader = require('./directoryReader.js');

dirReader(process.argv[2], process.argv[3], function(err, data){
    if(err){return "error occurred";}
    for(var f in data){
        console.log(data[f]);
    }
});
