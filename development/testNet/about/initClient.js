var FIBOS = require("fibos.js");

function initClient(_keyProvider) {
	return FIBOS({
		chainId: "cf057bbfb726	40471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",
		keyProvider: _keyProvider,
		httpEndpoint: "http://103.80.170.107:8888",
		logger: {
			log: null,
			error: null
		}
	});
}

module.exports = initClient;
