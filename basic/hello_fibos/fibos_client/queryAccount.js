var FIBOS = require('./initClient.js')
// new FIBOS client
var fibos = FIBOS("5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3");

var user = fibos.getAccountSync("hello");
console.warn('---- user ----', user);