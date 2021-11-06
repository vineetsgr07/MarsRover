const { readFromText } = require('./utils')
const { Rover } = require('./MarsRover')

readFromText().then((data) => {
    const result = new Map()

    for (let i = 0; i < data.length; i++) {
        const { grid, position, instruction } = transformArguments(data[i])
        const rover = Rover({
            x: position[0],
            y: position[1],
            direction: position[2],
            grid: {
                width: grid[0],
                height: grid[1]
            }
        })

        instruction.forEach((action) => rover.move(action));
        result.set(i, {
            position: rover.getPosition(),
            direction: rover.getDirection()
        })
    }

    printToConsole(result)
})

const transformArguments = (data) => {
    return {
        grid: data.grid
            .split(" ")
            .map((item) => parseInt(item)),
        position: data.position
            .split(" ")
            .map((item, index) => [0, 1]
                .includes(index) ? parseInt(item) : item),
        instruction: data.instructions.split("")
    }
}


const printToConsole = (result) => {
    for (let index = 0; index < result.size; index++) {
        console.log(`Rover${index + 1}:${result.get(index).position.x} ${result.get(index).position.y} ${result.get(index).direction}`)
    }
}