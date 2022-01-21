var path = require('path');
var fs = require('fs');
var directoryPath = path.join(__dirname, 'dist');
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) {
        require(file)
    });
});