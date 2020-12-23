const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");
let accounts;
let healthrecord;
beforeEach(async () => {
  //get a list of all accounts
  //https://rinkeby.infura.io/v3/2ae324fcb0d94486b6b022f559475dc7
  try {
    accounts = await web3.eth.getAccounts();
  } catch (error) {
    console.error(error.message);
  }

  healthrecord = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["asd@eeer"] })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("record", () => {
  it("deploys a contract", () => {
    assert.ok(healthrecord.options.address);
  });
});
