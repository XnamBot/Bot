var path = require('path');
var fs = require('fs');
var directoryPath = path.join(__dirname, 'dist');
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) {
        const filtered = filter(file => file.endsWith('.js'));
        require(filtered)
    });
});