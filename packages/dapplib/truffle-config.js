require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe stuff rival predict code hard light army gentle'; 
let testAccounts = [
"0xd749d68f4058b354e34f76a95d916965953e8235334ec0707f32d3ec8e31fa2f",
"0x61a628b6cd96b2ad699153b6e46a345deb1eef63f03086157e8bf7684e3f7dd4",
"0xdebae3b7baf99d51bbe87bd06d92fbe5dd62b6157fc234bc1bf60908d7bcfab9",
"0xd42bd0bdca3e759d2a91b59347cd42ca0f276e92e825ecccf6304337a91fc907",
"0xe96ce29ef1dc191d0ead90291d92a00070290a4550b006d5961877e047b8d687",
"0x302462dbaaffdf1a2188d53766e3b5384fd7941c5889fffff36f7a3493b16e2e",
"0xefff2b68621cc76de2100274be028680fcc53fe6d2dcbac6276b6acf7ad97e16",
"0x371ff0a563c3d9eec52bc4f7da889753380d9e508f6e77c762c47d37170bbf57",
"0xcbad4791168899dbd057d171bf83c04f627b9d4a1749b4e46a867fca2d62a000",
"0x33bb30fda2be2dececd06960ae9475e4275af59310cd9f454d625386979598b8"
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

