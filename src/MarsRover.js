'use strict';

const Rover = ({
    x,
    y,
    direction,
    grid
}) => {
    let _direction = direction;
    let _x = x;
    let _y = y;
    const directions = {
        N: { left: 'W', right: 'E', move: () => _y++ },
        S: { left: 'E', right: 'W', move: () => _y-- },
        E: { left: 'N', right: 'S', move: () => _x++ },
        W: { left: 'S', right: 'N', move: () => _x-- }
    };

    const getDirection = () => _direction;
    const turnLeft = () => _direction = directions[_direction].left
    const turnRight = () => _direction = directions[_direction].right;
    const moveForward = () => directions[_direction].move.call(this);
    const validateRover = (x, y) => x <= grid.width && y <= grid.height && x >= 0 && y >= 0

    const getPosition = () => {
        return {
            x: _x, y: _y
        }
    };

    const projectMove = () => {
        var x = _x;
        var y = _y;
        directions[_direction].move;
        var projectedPosition = getPosition();
        _x = x;
        _y = y;
        return projectedPosition;
    };

    const move = (action) => {
        if (action === 'L') {
            turnLeft();
        } else if (action === 'R') {
            turnRight();
        } else if (action === 'M') {
            var projectedMove = projectMove();
            if (validateRover(projectedMove.x, projectedMove.y)) {
                moveForward();
            } else {
                throw new Error('invalid Position of rover');
            }
        }
    };

    return {
        move: move,
        getPosition: getPosition,
        getDirection: getDirection
    }
}

module.exports = {
    Rover: Rover
}
