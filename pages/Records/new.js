import React, { Component, createFactory } from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import healthrecord from "../../ethereum/build/healthrecord.json";
import { Router } from "../../routes";

//ipfs requirements
const ipfsClient = require("ipfs-http-client");

const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

class newRecord extends Component {
  state = {
    name: "",
    buffer: null,
    account: null,
    recordhash: null,
    errorMessage: "",
    loading: false,
  };

  async componentDidMount() {}

  captureFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) });
      console.log("buffer", this.state.buffer);
    };
  };

  onSubmit = async (event) => {
    event.preventDefault();
    await window.ethereum.enable();
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      this.setState({ account: accounts[0] });
      console.log("submitting to ipfs ", accounts);
      await factory.methods
        .createRecord()
        .send({ from: this.state.account, gas: "1000000" });
      const result = await ipfs.add(this.state.buffer);
      this.setState({ loading: false });
      console.log(result.path);
      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    //console.log(this.state.buffer);
  };

  render() {
    return (
      <Layout>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>name</label>
            <Input
              placeholder="enter your name"
              value={this.state.name}
              onChange={(event) => {
                this.setState({ name: event.target.value });
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>files</label>
            <input type="file" onChange={this.captureFile} />
          </Form.Field>
          <Message error header="Oops!!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary type="submit">
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default newRecord;
