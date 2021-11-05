const {readFromText} = require('./utils')
const { MarsRover } = require('./marsRover')

readFromText().then((data) => {
    console.log(data)
})

module.exports = {
    processInput
}
