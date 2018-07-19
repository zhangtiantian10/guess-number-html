const GuessNumberGame = require('./guess-number-game');
const Generator = require('./generator');

describe('GuessNumberGame', function() {
    let generator;

    beforeEach(() => {
        jest.spyOn(Generator.prototype, "generate")
            .mockReturnValue('1 2 3 4');
        generator = new Generator();
    });

    it('should return 4A0B for checkInput 1 2 3 4 when answer is 1 2 3 4', function () {
        expect(new GuessNumberGame(generator).test('1 2 3 4')).toEqual('4A0B');
    });

    it('should return 3A0B for checkInput 1 2 3 5 when answer is 1 2 3 4', function () {
        expect(new GuessNumberGame(generator).test('1 2 3 5')).toEqual('3A0B')
    });

    it('should return 0A3B for checkInput 5 1 2 3 when answer is 1 2 3 4', function () {
        expect(new GuessNumberGame(generator).test('5 1 2 3')).toEqual('0A3B');
    });

    it('should return 2A2B for checkInput 1 2 4 3 when answer is 1 2 3 4', function () {
        expect(new GuessNumberGame(generator).test('1 2 4 3')).toEqual('2A2B');
    });

    it('should return wrong input when input is wrong', function () {
        expect(new GuessNumberGame(generator).test('1 2 4 a')).toEqual('wrong input');
    });

    it('should return game over when test 6 times', function () {
        const game = new GuessNumberGame(generator);

        expect(game.test('1 2 4 3')).toEqual('2A2B');
        expect(game.test('1 2 4 3')).toEqual('2A2B');
        expect(game.test('1 2 4 3')).toEqual('2A2B');
        expect(game.test('1 2 4 3')).toEqual('2A2B');
        expect(game.test('1 2 4 3')).toEqual('2A2B');
        expect(game.test('1 2 4 3')).toEqual('2A2B\ngame over');
    });

    it('should return 4A0B you win when input currect number', function () {
        expect(new GuessNumberGame(generator).test('1 2 3 4')).toEqual('4A0B\nyou win');
    });
})