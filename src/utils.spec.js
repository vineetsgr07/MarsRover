'use strict';
const { transformArguments, processInput } = require('./utils');
describe('Test utility functions', function () {
    it('Should test transformArguments', function () {
        const input = transformArguments({
            grid: '5 5',
            instructions: 'LMLMLMLMM',
            position: '1 2 N'
        })

        const expected = {
            grid: { width: 5, height: 5 },
            instruction: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'],
            position: { x: 1, y: 2, direction: 'N' }
        }

        expect(input).toEqual(expected);
    });

    it('Should transform test input)', function () {
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