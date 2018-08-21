var test = require('test');
test.setup();

var FIBOS = require('fibos.js')
var config = {
    "chainId": "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",
    "producer-name": "eosio",
    "public-key": "FO6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
    "private-key": "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3",
    "httpEndpoint": "http://127.0.0.1:8888",
};


describe('new account FIBOS', () => {
    var fibos;

    before(() => {
        fibos = FIBOS({
            chainId: config["chainId"],
            keyProvider: config["private-key"],
            httpEndpoint: config["httpEndpoint"],
            logger: {
                log: null,
                error: null
            }
        });
    });

    it('new account', () => {
        fibos.newaccountSync({
            creator: 'eosio',
            name: "hellofibos",
            owner: config["public-key"],
            active: config["public-key"]
        })
    });

    it("get account", () => {
        var c = fibos.getAccountSync('hellofibos');
        assert.equal(c.account_name, "hellofibos");
    });
});

require.main === module && test.run(console.DEBUG);