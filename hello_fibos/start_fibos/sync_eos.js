var fibos = require('fibos');

fibos.config_dir = "./sync_data_Dir";
fibos.data_dir = "./sync_data_Dir";

console.notice("config_dir:", fibos.config_dir);
console.notice("data_dir:", fibos.data_dir);

fibos.load("http", {
	"http-server-address": "0.0.0.0:8888"
});

fibos.load("net", {
	"p2p-listen-endpoint": "0.0.0.0:9876",
	"p2p-peer-address": ["45.119.146.189:9876", "167.99.91.77:9876", "159.65.214.148:9876", "149.202.165.174:19876"]
});

fibos.load("producer");
fibos.load("chain", {
	"genesis-json": "./genesis.json"
});
fibos.load("chain_api");
fibos.load("wallet");
fibos.load("wallet_api");

fibos.start();