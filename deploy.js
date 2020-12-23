const HDwalletprovider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDwalletprovider(
  "march box art maid curtain empty above security wave adapt yellow scout",
  "https://rinkeby.infura.io/v3/2ae324fcb0d94486b6b022f559475dc7"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("attempting to deploy from account", accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("contract deployed to", result.options.address);
};
deploy();
