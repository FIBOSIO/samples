var FIBOS = require('./initClient.js')
var config = {
    "public-key": "FO6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
    "private-key": "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"
};

// new FIBOS client
var fibos = FIBOS(config["private-key"]);

fibos.newaccountSync({
    creator: 'eosio',
    name: "hello",
    owner: config["public-key"],
    active: config["public-key"]
});