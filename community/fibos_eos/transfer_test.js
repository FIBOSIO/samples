var test = require('test');
test.setup();
var FIBOS = require('fibos.js');
describe('FIBOS transfer with EOS', () => {
	before(function() {});

	it("FIBOS transfer with EOS", () => {
		let config = {
			chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
			keyProvider: 'your private key',
			httpEndpoint: 'http://45.119.146.189:8888',
			logger: {
				log: null,
				error: null
			}
		}

		let accounta = FIBOS(config);
		let ctx = accounta.contractSync("eosio.token");
		let result = ctx.transferSync("your account name", "transfer to account name", 'amount', 'remark');
		console.warn('result: ', result);
	});
})

test.run(console.DEBUG);
process.exit();