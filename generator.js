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

if (typeof module !== "undefined") {

    module.exports = Generator;
}

if (typeof window !== "undefined") {
    window.Generator = Generator
}