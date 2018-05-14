var Web3 = require('web3');
var contract = require('truffle-contract');
var DucaturToken = require('../../build/contracts/DucaturToken.json');
var HDWalletProvider = require("truffle-hdwallet-provider");
var Transactions = require('../models/Transactions');

const hdWalletProvider = new HDWalletProvider(process.env.MNE, "https://ropsten.infura.io/VaxMZqBPDeLCJNBAsNN1");
const ownerAddress = hdWalletProvider.address;
const web3 = new Web3(hdWalletProvider);
const token = contract(DucaturToken);

token.setProvider(web3.currentProvider);

function sample() {
    console.log("\n----- Running Dapp task -----");

};

module.exports = sample;