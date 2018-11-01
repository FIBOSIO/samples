var fibos = require('fibos');

fibos.load("http", {
    "http-server-address": "0.0.0.0:8888"
});
fibos.load("chain");
fibos.load("net", {
    "p2p-listen-endpoint": "0.0.0.0:9876"
});
fibos.load("chain_api");
fibos.load("history_api");
fibos.load("producer", {
	'producer-name': 'eosio',
	'enable-stale-production': true
});
fibos.config_dir = "fibos_config_dir/";
fibos.data_dir = "fibos_data_dir/";

fibos.enableJSContract = true;
fibos.start();
