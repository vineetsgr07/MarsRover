'use strict';
const { Rover } = require('./MarsRover');
const myMock = jest.fn();
describe('Test Rover Position', function () {
    it('Should return default configuration for Rover', function () {
        const input = {
            direction: 'N',
            grid: { width: 5, height: 5 },
            x: 1,
            y: 2,
        }
        expect(Rover(input).getPosition()).toEqual({ x: 1, y: 2, });
        expect(Rover(input).getDirection()).toEqual('N');
    });

    it('Turn rover to West', function () {
        const input = {
            direction: 'N',
            grid: { width: 5, height: 5 },
            x: 1,
            y: 2,
        }
        const rover = Rover(input)
        rover.move('L')
        const updatedRoverPosition = rover.getDirection()

        expect(updatedRoverPosition).toEqual('W');
    });

    it('Turn rover to East, and move one step to East', function () {
        const input = {
            direction: 'N',
            grid: { width: 5, height: 5 },
            x: 1,
            y: 2,
        }
        const rover = Rover(input)
        rover.move('R')
        const updatedRoverPosition = rover.getDirection()
        expect(updatedRoverPosition).toEqual('E');
    });

    it('Turn rover to East', function () {
        const input = {
            direction: 'N',
            grid: { width: 5, height: 5 },
            x: 1,
            y: 2,
        }
        let rover = Rover(input)
        rover.move('R')
        let updatedRoverPosition = rover.getDirection()
        expect(updatedRoverPosition).toEqual('E');
    });

    it('Turn rover to East, and move one step', function () {
        const input = {
            direction: 'N',
            grid: { width: 5, height: 5 },
            x: 1,
            y: 2,
        }
        // const expected = 'Rover1:1 3 N'
        const rover = Rover(input)
        rover.move('R')
        rover.move('M')
        const updatedRoverPosition = rover.getDirection()
        const updateRoverCoordinate = rover.getPosition()

        expect(updatedRoverPosition).toEqual('E');
        expect(updateRoverCoordinate).toEqual({
            x: 2,
            y: 2,
        });
    });

    it('Turn rover to East, and move Three step', function () {
        const input = {
            direction: 'N',
            grid: { width: 5, height: 5 },
            x: 1,
            y: 2,
        }
        // const expected = 'Rover1:1 3 N'
        const rover = Rover(input)
        rover.move('R')
        rover.move('M')
        rover.move('M')
        rover.move('M')
        const updatedRoverPosition = rover.getDirection()
        const updateRoverCoordinate = rover.getPosition()

        expect(updatedRoverPosition).toEqual('E');
        expect(updateRoverCoordinate).toEqual({
            x: 4,
            y: 2,
        });
    });
});