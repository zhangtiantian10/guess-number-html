class Validate {
    constructor() {

    }

    validateInput(input) {
        const inputs = input.split(' ');
        const charCodes = inputs.filter(a => a.charCodeAt(0) > 57 || a.charCodeAt(0) < 48)
        return inputs.length === 4 && charCodes.length === 0;
    }
}

if (typeof module !== "undefined") {

    module.exports = Validate;
}

if (typeof window !== "undefined") {
    window.Validate = Validate
}