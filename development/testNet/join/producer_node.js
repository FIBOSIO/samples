var fibos = require('fibos');
var fs = require("fs");
var config = {
	"producer-name": "producer-name",
	"public-key": "producer public key",
	"private-key": "producer private key"
};


console.notice("正在启动FIBOS name:", config["producer-name"]);
fibos.config_dir = config["producer-name"] + "_Dir";
fibos.data_dir = config["producer-name"] + "_Dir"

console.notice("config_dir:", fibos.config_dir);
console.notice("data_dir:", fibos.data_dir);

if (fs.exists(fibos.data_dir) || fs.exists(fibos.config_dir)) {
	console.warn("data_dir or config_dir is exists");
	process.exit(-1);
}

fibos.load("http", {
	"http-server-address": "0.0.0.0:8888"
});

fibos.load("net", {
	"p2p-listen-endpoint": "0.0.0.0:9876",
	"p2p-peer-address": "103.80.170.107:9876"
});

fibos.load("producer", {
	'producer-name': config["producer-name"],
	'enable-stale-production': true,
	'private-key': JSON.stringify([config["public-key"], config["private-key"]])
});

fibos.load("chain");
fibos.load("chain_api");
fibos.load("wallet");
fibos.load("wallet_api");


fibos.start();
