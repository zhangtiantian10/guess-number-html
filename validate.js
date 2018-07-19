class Validate {
    constructor() {

    }

    validateInput(input) {
        const inputs = input.split(' ');
        const charCodes = inputs.filter(a => a.charCodeAt(0) > 57 || a.charCodeAt(0) < 48)
        return inputs.length === 4 && charCodes.length === 0;
    }
}

module.exports = Validate;