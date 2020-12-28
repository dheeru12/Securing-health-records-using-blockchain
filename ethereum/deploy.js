const HDwalletprovider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("../ethereum/build/RecordFactory.json");

const provider = new HDwalletprovider(
  "march box art maid curtain empty above security wave adapt yellow scout",
  "https://ropsten.infura.io/v3/2ae324fcb0d94486b6b022f559475dc7"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("attempting to deploy from account", accounts[0]);
  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode, arguments: [] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("contract deployed to", result.options.address);
};
deploy();

//contract address 0x29d621036a3337C85e97a792E2D3CD4689D3813f
