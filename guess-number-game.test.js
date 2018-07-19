const GuessNumberGame = require('./guess-number-game');

describe('GuessNumberGame', function() {
    it('should return 4A0B for checkInput 1 2 3 4 when answer is 1 2 3 4', function () {
        expect(new GuessNumberGame().compare('1 2 3 4')).toEqual('4A0B');
    });

    it('should return 3A0B for checkInput 1 2 3 5 when answer is 1 2 3 4', function () {
        expect(new GuessNumberGame().compare('1 2 3 5')).toEqual('3A0B')
    });

    it('should return 0A3B for checkInput 5 1 2 3 when answer is 1 2 3 4', function () {
        expect(new GuessNumberGame().compare('5 1 2 3')).toEqual('0A3B');
    });

    it('should return 2A2B for checkInput 1 2 4 3 when answer is 1 2 3 4', function () {
        expect(new GuessNumberGame().compare('1 2 4 3')).toEqual('2A2B');
    });

    it('should return true when checkInput is 4 digit number ', function () {
        expect(new GuessNumberGame().checkInput('1 2 3 4')).toEqual(true);
    });

    it('should return false when checkInput include char', function () {
        expect(new GuessNumberGame().checkInput('1 a 3 4')).toEqual(false);
    });
})