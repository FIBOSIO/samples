var FIBOS = require("./initClient.js");
var fibos = FIBOS("");

var result = fibos.getBlockSync(1);

console.log(result);
