
const Q = require('q');
const fs = require('fs')
const filename = process.argv[2];

const processInput = (data, callback) => {
    var lines = data.trim().split('\n').map(item => item.split(":")[1]);
    var map = lines.shift()
    var roverSpecifications = [];

    while (lines.length > 0) {
        roverSpecifications.push({
            grid: map,
            position: lines.shift(),
            instructions: lines.shift(),
        })
    }
    callback(roverSpecifications);
}

const readFromText = () => {
    const deferred = Q.defer();
    fs.readFile(filename, 'utf8', function (err, data) {
        if (err) {
            deferred.reject();
            throw err;
        }
        processInput(data, deferred.resolve)
    });

    return deferred.promise;
}


module.exports = {
    readFromText,
    processInput
}