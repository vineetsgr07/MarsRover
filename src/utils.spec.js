'use strict';
const { transformArguments, processInput } = require('./utils');
describe('Test utility functions', function () {
    it('Should return default configuration for Rover', function () {
        const input = transformArguments({
            grid: '5 5',
            instructions: 'LMLMLMLMM',
            position: '1 2 N'
        })

        const expected = {
            grid: [5, 5],
            instruction: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'],
            position: [1, 2, 'N']
        }

        expect(input).toEqual(expected);
    });

    it('Should Transform Test input, processInput()', function () {
        const input = 'Plateau:5 5\nRover1 Landing:1 2 N\nRover1 Instructions:LMLMLMLMM';
        const expected = [{
            grid: '5 5',
            instructions: 'LMLMLMLMM',
            position: '1 2 N',
        }];

        processInput(input, thenTest);

        function thenTest(result) {
            expect(result).toEqual(expected);
        }
    });
});