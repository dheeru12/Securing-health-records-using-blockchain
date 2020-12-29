import React, { Component } from "react";
import { Form, Input } from "semantic-ui-react";
import Layout from "../../components/Layout";

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
  };
  captureFile = (event) => {};

  render() {
    return (
      <Layout>
        <Form>
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
        </Form>
      </Layout>
    );
  }
}

export default newRecord;
