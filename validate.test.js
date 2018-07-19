const Validate = require('./validate');

describe('Validate', () => {
    it('should return true when validateInput is 4 digit number ', function () {
        expect(new Validate().validateInput('1 2 3 4')).toEqual(true);
    });

    it('should return false when validateInput include char', function () {
        expect(new Validate().validateInput('1 a 3 4')).toEqual(false);
    });
})