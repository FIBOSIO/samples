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

//账户 hellofibos 的公私钥对
let pubkey = "FO5dZut9MG9ZdqrT1WYdPkp1Txxi6JLRYEgYCtAUDWH6ymNqdJpR";
let prikey = '5KMx2vJR1L2rsrKuND4N6YM1gu26jwUjn5ZLorBeWnK15DfraQW';

var name = 'hellofibos';
fibos.newaccountSync({
  creator: 'eosio',
  name: name,
  owner: pubkey,
  active: pubkey
});

var c = fibos.getAccountSync(name);
console.notice(c);