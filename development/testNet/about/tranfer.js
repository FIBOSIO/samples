var FIBOS = require('./initClient.js');

var fibos = FIBOS("注册时的私钥");

var ctx = fibos.contractSync("eosio.token");
var result = ctx.transferSync("eosio", "gulou", '10.0000 FO', 'transfer');
console.log(result);
