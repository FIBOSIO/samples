var FIBOS = require('fibos.js');

var fibos = FIBOS({
  chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f',
  keyProvider: '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3',
  httpEndpoint: 'http://127.0.0.1:8888',
  logger: {
    log: null,
    error: null
  }
});

//合约所属账户 hellocode 的公私钥对
let pubkey = "FO5L9g2mnC4zZMZWDR8VBksz3exFmXV4kwfj65oYeKdqRPc2oPFW";
let prikey = '5KMg9oUf5caX9yku7zQQwKZQLukRW7dMHaST8njpBf22puUvjea';

//创建合约账户
var name = 'hellocode';
fibos.newaccountSync({
  creator: 'eosio',
  name: name,
  owner: pubkey,
  active: pubkey
});

//发布一个合约
var abi = {
  "version": "eosio::abi/1.0",
  "structs": [{
    "name": "hi",
    "base": "",
    "fields": [{
      "name": "user",
      "type": "name"
    }]
  }],
  "actions": [{
    "name": "hi",
    "type": "hi",
    "ricardian_contract": ""
  }]
};

//由 hellocode 提供私钥发布合约
fibos = FIBOS({
  chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f',
  keyProvider: prikey,
  httpEndpoint: 'http://127.0.0.1:8888',
  logger: {
    log: null,
    error: null
  }
});

fibos.setabiSync(name, abi);

var js_code = `exports.hi = v => console.error(action);`;
fibos.setcodeSync(name, 0, 0, fibos.compileCode(js_code));
