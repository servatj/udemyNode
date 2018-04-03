const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'upgrade gravity strategy edit glove start range shove biology audit ceiling strong',
  'https://rinkeby.infura.io/g3d8ag9ONJMwmTVzS7jV'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi , there']})
    .send({ gas: 1000000, from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
};
deploy();

