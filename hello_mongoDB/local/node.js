var fibos = require('fibos');

fibos.load("http");
fibos.load("chain", {
    "contracts-console": true,
    "delete-all-blocks": true,
});
fibos.load("net");
fibos.load("chain_api");
fibos.load("history_api");
fibos.load("producer", {
    'producer-name': 'eosio',
    'enable-stale-production': true,
    "max-transaction-time": 3000
});
fibos.load("mongo_db", {
    "mongodb-uri": "mongodb://localhost:27017/eosmain"
})

fibos.start();