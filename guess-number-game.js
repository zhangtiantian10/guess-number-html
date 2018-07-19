class GuessNumberGame {
    constructor() {
        this.answer = this.generateAnswer();
    }

    test(input) {
        const {position, includeNumber} = this.compare(input)

        return `${position}A${includeNumber - position}B`;
    }

    compare(input) {
        const inputs = input.split(' ');
        const answers = this.answer.split(' ');
        const position = inputs.filter((item, index) => answers[index] === item).length;
        const includeNumber = inputs.filter(item => answers.includes(item)).length

        return {position, includeNumber};
    }

    generateAnswer() {
        const answers = [];
        while (answers.length < 4) {
            const random = Math.floor(Math.random() * 10);
            if (!answers.includes(random)) {
                answers.push(random);
            }
        }

        return answers.join(' ');
    }
}

module.exports = GuessNumberGame;