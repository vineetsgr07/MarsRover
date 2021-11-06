const { Rover } = require('./MarsRover')
const { readFromText, printToConsole, transformArguments } = require('./utils')

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

