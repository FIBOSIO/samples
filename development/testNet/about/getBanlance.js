var FIBOS = require('./initClient.js');

var fibos = FIBOS("注册时的私钥");
var result = fibos.getTableRowsSync(true, "eosio.token", "注册时账户名称", "accounts")
console.log(result);
