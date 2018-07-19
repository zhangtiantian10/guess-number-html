class GuessNumberGame {
    constructor() {
        this.answer = '1 2 3 4';
    }

    start(input) {
        const position = this.getPositionIsCorrect(input);
        return `${position}A0B`;
    }

    getPositionIsCorrect(input) {
        const inputs = input.split(' ');
        const answers = this.answer.split(' ');

        return inputs.filter((item, index) => answers[index] === item).length;
    }
}

module.exports = GuessNumberGame;