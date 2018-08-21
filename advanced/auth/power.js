var FIBOS = require('fibos.js');

//账户 hellofibos 的公私钥对
let pubkey = "FO5dZut9MG9ZdqrT1WYdPkp1Txxi6JLRYEgYCtAUDWH6ymNqdJpR";
let prikey = '5KMx2vJR1L2rsrKuND4N6YM1gu26jwUjn5ZLorBeWnK15DfraQW';

//账户 hellofibos2 的公私钥对
let pubkey2 = "FO5UFAzxUsbjQCijL5LtS6TaTtkJgPJACZ8qwDpXyLaW3sE9Ed2D";
let prikey2 = '5JhJaiRmvpR8MmvrxGFYGoC7tG9icYkooLFUdVMDJ5cAsLTbsob';

var name = 'hellofibos';
var name2 = 'hellofibos2';

//创建 hellofibos2 账户

var fibos = FIBOS({
  chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f',
  keyProvider: '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3',
  httpEndpoint: 'http://127.0.0.1:8888',
  logger: {
    log: null,
    error: null
  }
});
fibos.newaccountSync({
  creator: 'eosio',
  name: name2,
  owner: pubkey2,
  active: pubkey2
});


//修改hellofibos 的active权限,客户端 需要更改为 hellofibos 的私钥
fibos = FIBOS({
  chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f',
  keyProvider: '5KMx2vJR1L2rsrKuND4N6YM1gu26jwUjn5ZLorBeWnK15DfraQW',
  httpEndpoint: 'http://127.0.0.1:8888',
  logger: {
    log: null,
    error: null
  }
});

let ctx = fibos.contractSync("eosio");
ctx.updateauthSync({
  account: name,
  permission: "active",
  parent: 'owner',
  auth: {
    threshold: 1,
    keys: [{
      key: "FO5UFAzxUsbjQCijL5LtS6TaTtkJgPJACZ8qwDpXyLaW3sE9Ed2D",
      weight: 1
    }]
  }
});

var c = fibos.getAccountSync(name);
console.notice(c);
