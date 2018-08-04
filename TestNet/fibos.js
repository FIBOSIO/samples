var FIBOS = require("fibos.js");
var fibos = FIBOS({
	chainId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",
	httpEndpoint: "http://103.80.170.107:8888",
	logger: {
		log: null,
		error: null
	}
});

var result = fibos.getBlockSync(1);

console.log(result);