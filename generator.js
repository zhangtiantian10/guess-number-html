class Generator {
    constructor() {

    }

    generate() {
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

module.exports = Generator;