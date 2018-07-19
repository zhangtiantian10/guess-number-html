const Generator = require('./generator');

describe('Generator', () => {
    it('should return 4 digits number', function () {
        let number = 0;
        jest.spyOn(Math, "random")
            .mockImplementation(() => number += 0.1)
        expect(new Generator().generate()).toEqual('1 2 3 4');
    });
})