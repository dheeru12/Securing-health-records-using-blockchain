import web3 from "./web3";
import RecordFactory from "./build/RecordFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(RecordFactory.interface),
  "0x239Bbf21048aB6E98e2E783911e30344d6F7644f"
);

export default instance;
