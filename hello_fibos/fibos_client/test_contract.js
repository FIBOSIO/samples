var test = require('test');
test.setup();

var FIBOS = require('fibos.js')
var contractName = "hello";
var fs = require("fs");
var config = {
	"chainId": "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",
	"producer-name": "eosio",
	"public-key": "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
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

	it('get code', () => {
		var js_code = fs.readTextFile("./hello/hello.js");
		var code = fibos.getCodeSync(contractName, true);
		assert.equal(code.wast, fibos.compileCode(js_code).hex());
	});

	it('setabi', () => {
		var abi = JSON.parse(fs.readTextFile("./hello/hello.abi"));
		fibos.setabiSync(contractName, abi);
	});
});

require.main === module && test.run(console.DEBUG);