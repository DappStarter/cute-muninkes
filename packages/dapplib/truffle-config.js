require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food struggle rescue pizza sniff grace office army ghost'; 
let testAccounts = [
"0x2472ad5e788f63718d2f9e7c1932d6af8e48449fad25a56a19f366f1d0db46aa",
"0xab20fb5f39dc33e56a833725664b046d0a0885460485fe8ac51401256027e3f8",
"0xc8315d6ed74f24de9786d69152170d5f576130e913fe89f9029683b189dcd369",
"0x49a1b8e1b6bf28a8a88c7e0ffcde8731a18c3c80d28edd3848f87e2d09c0dfe9",
"0x0492894fe102cfdc03feae49ee0dfd91c191831abdcb6a42e7c3281d4fb147dc",
"0xeadd31dc025cebf8155dd54ed1231208b9fb1593f34c34d810b44ea976bc516a",
"0xb3ff583206a45810ffcd305298d66d9c790ae5b1efd5c23b18711b6da191b784",
"0x01a34998920c69f0e8dfd81a47afe09185d4ed4459a8566ddd3a24dea6fb25b9",
"0xf2627321feda8c43d1da1622e3c6bf6b89b53cbfebd3df0fa0c985dfc6f5d493",
"0x771aeb3967d5067415e233b76fdd13961e499c4653593a3afce015878b65a431"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

