import React, { Component } from "react";
import { Button, Card } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
class recordIndex extends Component {
  static async getInitialProps() {
    const records = await factory.methods.getDeployedRecords().call();
    return { records };
  }

  renderRecords() {
    const items = this.props.records.map((address) => {
      return {
        header: address,
        description: <a>View record</a>,
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <Button
          content="Create record"
          floated="right"
          icon="add circle"
          primary
        />
        {this.renderRecords()}
      </Layout>
    );
  }
}

export default recordIndex;
