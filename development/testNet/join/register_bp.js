var FIBOS = require('fibos.js');
var config = {
	"chainId": "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",
	"producer-name": "producer-name",
	"public-key": "producer public key",
	"private-key": "producer private key",
	"httpEndpoint": "bp network info",
	"url": "http://producer-name.io"
};

var fibos = FIBOS({
	chainId: config["chainId"],
	keyProvider: config["private-key"],
	httpEndpoint: config["httpEndpoint"],
	logger: {
		log: null,
		error: null
	}
});

var ctx = fibos.contractSync("eosio");

ctx.regproducerSync(config["producer-name"], config["public-key"], config["url"], 1);
