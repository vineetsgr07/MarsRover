'use strict';
var { processInput } = require('./utils');

describe('Test file input', function () {
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