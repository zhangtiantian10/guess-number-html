const Validate = require('./validate');

class GuessNumberGame {
    constructor(generator) {
        this.answer = generator.generate();
        this.count = 0;
    }

    test(input) {
        if (new Validate().validateInput(input)) {
            const {position, includeNumber} = this.compare(input);
            let str = `${position}A${includeNumber - position}B`;
            if (this.count >= 5) {
                str += '\ngame over';
            }

            this.count++;
            return str;
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