class GuessNumberGame {
    constructor() {
        this.answer = '1 2 3 4';
    }

    compare(input) {
        const inputs = input.split(' ');
        const answers = this.answer.split(' ');

        const position = inputs.filter((item, index) => answers[index] === item).length;
        const includeNumber = inputs.filter(item => answers.includes(item)).length

        return `${position}A${includeNumber - position}B`;
    }

    checkInput(string) {
        const array = string.split(' ');
        const charCodes = array.filter(a => a.charCodeAt(0) > 57 || a.charCodeAt(0) < 48)
        return array.length === 4 && charCodes.length === 0;
    }
}

module.exports = GuessNumberGame;