var test = require('test');
test.setup();

describe('a sample case', () => {
    var name;

    before(() => {
        name = "FIBOS";
    });

    it('check name', () => {
        assert.equal(name, "FIBOS");
    });
});

test.run();