var FIBOS = require('fibos.js');

var config = {
    chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f', // 32 byte (64 char) hex string
    keyProvider: '5KH6znunJQBdexEVcx7FkeJH7Npswi9hEpJx2fXqAvQA77SPE6V', // WIF string or array of keys..
    httpEndpoint: 'http://103.80.170.107:8888',
    logger: {
        log: null,
        error: null
    }
}

var fibos = FIBOS(config);
var ctx = fibos.contractSync("eosio.token");
var result = ctx.transferSync("hellomongodb", "eosio", '10.0000 FO', 'transfer');
console.log('result', result);