var FIBOS = require('fibos.js');

//合约所属账户 hellocode 的公私钥对
let pubkey = "FO5L9g2mnC4zZMZWDR8VBksz3exFmXV4kwfj65oYeKdqRPc2oPFW";
let prikey = '5KMg9oUf5caX9yku7zQQwKZQLukRW7dMHaST8njpBf22puUvjea';
var name = 'hellocode';

var fibos = FIBOS({
  chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f',
  keyProvider: prikey,
  httpEndpoint: 'http://127.0.0.1:8888',
  logger: {
    log: null,
    error: null
  }
});

var ctx = fibos.contractSync(name);
var r = ctx.hiSync('hellocode', {
  authorization: name
});

console.error(r.processed.action_traces[0].console);


var ctx = fibos.contractSync(name);
var r = ctx.hiSync('eosio', {
  authorization: name
});

console.error(r.processed.action_traces[0].console);
