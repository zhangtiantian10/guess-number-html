const Validate = require('./validate');

class GuessNumberGame {
    constructor(generator) {
        this.answer = generator.generate();
    }

    test(input) {
        if (new Validate().validateInput(input)) {
            const {position, includeNumber} = this.compare(input);
            return `${position}A${includeNumber - position}B`;
        } else {
            return 'wrong input';
        }
    }

    compare(input) {
        const inputs = input.split(' ');
        const answers = this.answer.split(' ');
        const position = inputs.filter((item, index) => answers[index] === item).length;
        const includeNumber = inputs.filter(item => answers.includes(item)).length

        return {position, includeNumber};
    }
}

module.exports = GuessNumberGame;