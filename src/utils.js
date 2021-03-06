
const Q = require('q');
const fs = require('fs')
const filename = process.argv[2];

const processInput = (data, callback) => {
    let lines = data.trim().split('\n').map(item => item.split(":")[1]);
    let map = lines.shift()
    let roverSpecifications = [];

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

/**
 * 
 * Transform Rover Arguments to redable array
 * @returns {grid, position, instruction}
 */
const transformArguments = (data) => {
    let grid = data.grid
        .split(" ")
        .map((item) => parseInt(item))
    let position = data.position
        .split(" ")
        .map((item, index) => [0, 1]
            .includes(index) ? parseInt(item) : item)

    return {
        grid: {
            width: grid[0],
            height: grid[1]
        },
        position: {
            x: position[0],
            y: position[1],
            direction: position[2]
        },
        instruction: data.instructions.split("")
    }
}


const printToConsole = (result) => {
    for (let index = 0; index < result.size; index++) {
        console.log(`Rover${index + 1}:${result.get(index).position.x} ${result.get(index).position.y} ${result.get(index).direction}`)
    }
}


module.exports = {
    readFromText,
    processInput,
    transformArguments,
    printToConsole
}