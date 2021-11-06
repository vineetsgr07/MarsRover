const { Rover } = require('./MarsRover')
const { readFromText, printToConsole, transformArguments } = require('./utils')

readFromText().then((data) => {
    const result = new Map()

    for (let i = 0; i < data.length; i++) {
        const { grid, position, instruction } = transformArguments(data[i])

        const rover = Rover({
            x: position.x,
            y: position.y,
            direction: position.direction,
            grid: {
                width: grid.width,
                height: grid.height
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

