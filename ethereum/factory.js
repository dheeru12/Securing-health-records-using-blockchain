import web3 from "./web3";
import RecordFactory from "./build/RecordFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(RecordFactory.interface),
  "0x29d621036a3337C85e97a792E2D3CD4689D3813f"
);

export default instance;
