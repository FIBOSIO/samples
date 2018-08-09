var fibos = require('fibos');

fibos.load("http");
fibos.load("net");
fibos.load("producer", {
	'producer-name': 'eosio',
	'enable-stale-production': true
});

fibos.load("chain", {
	"delete-all-blocks": true
});
fibos.load("chain_api");
fibos.load("wallet");
fibos.load("wallet_api");

fibos.start();