var fibos = require('fibos');

fibos.config_dir = "sync_data_Dir";
fibos.data_dir = "sync_data_Dir";

console.notice("config_dir:", fibos.config_dir);
console.notice("data_dir:", fibos.data_dir);

fibos.load("http", {
	"http-server-address": "0.0.0.0:8888"
});

fibos.load("net", {
	"p2p-listen-endpoint": "0.0.0.0:9876",
	"p2p-peer-address": "103.80.170.107:9876"
});

fibos.load("producer");
fibos.load("chain", {
	"delete-all-blocks": true
});
fibos.load("chain_api");
fibos.load("wallet");
fibos.load("wallet_api");

fibos.start();
