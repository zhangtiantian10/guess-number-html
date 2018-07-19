class GuessNumberGame {
    constructor() {
        this.answer = '1 2 3 4';
    }

    start(input) {
        const inputs = input.split(' ');
        const answers = this.answer.split(' ');

        const position = inputs.filter((item, index) => answers[index] === item).length;
        const includeNumber = inputs.filter(item => answers.includes(item)).length

        return `${position}A${includeNumber - position}B`;
    }

    input(string) {
        return string.split(' ').length === 4;
    }
}

module.exports = GuessNumberGame;