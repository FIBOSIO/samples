var FIBOS = require('./initClient.js')
var config = {
    "public-key": "FO6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
    "private-key": "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3",
    "contractName": "hello"
};

// new FIBOS client
var fibos = FIBOS(config["private-key"]);

//call abi
var ctx = fibos.contractSync(config["contractName"]);
let i = ctx.hiSync('hello', {
    authorization: config["contractName"]
});