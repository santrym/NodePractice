var fs = require('fs');
var path = require('path');

module.exports = function(files, fileType, callback){
    // return a list of file names
    var retList = [];
    fs.readdir(files, function(err, data){
        if(err){return callback(err)};
        for(var i=0; i < data.length; i++){
            if(path.extname(data[i]) == ('.' + fileType)){
                retList.push(data[i]);
            }
        }
        return callback(err, retList);

    });
};

