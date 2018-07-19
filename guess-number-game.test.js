const GuessNumberGame = require('./guess-number-game');

describe('GuessNumberGame', function() {
    it('should return 4A0B for checkInput 1 2 3 4 when answer is 1 2 3 4', function () {
        expect(new GuessNumberGame().test('1 2 3 4')).toEqual('4A0B');
    });

    it('should return 3A0B for checkInput 1 2 3 5 when answer is 1 2 3 4', function () {
        expect(new GuessNumberGame().test('1 2 3 5')).toEqual('3A0B')
    });

    it('should return 0A3B for checkInput 5 1 2 3 when answer is 1 2 3 4', function () {
        expect(new GuessNumberGame().test('5 1 2 3')).toEqual('0A3B');
    });

    it('should return 2A2B for checkInput 1 2 4 3 when answer is 1 2 3 4', function () {
        expect(new GuessNumberGame().test('1 2 4 3')).toEqual('2A2B');
    });

    it('should console game over info when input 6 times', function () {

    });
})