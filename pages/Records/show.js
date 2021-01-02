import Link from "next/link";
import React, { Component } from "react";
import { Grid, Segment, Label, Image } from "semantic-ui-react";
import Layout from "../../components/Layout";
import record from "../../ethereum/record";
import web3 from "../../ethereum/web3";

class recordShow extends Component {
  static async getInitialProps(props) {
    const accounts = await web3.eth.getAccounts();
    const currentRecord = record(props.query.address);
    const NameAndImage = await currentRecord.methods
      .getNameandAddress()
      .call({ from: accounts[0] });
    const details = await currentRecord.methods
      .getDetails()
      .call({ from: accounts[0] });
    const prescriptionlength = await currentRecord.methods
      .getPrescriptionLength()
      .call({ from: accounts[0] });
    const reportLength = await currentRecord.methods
      .getReportLength()
      .call({ from: accounts[0] });
    const prescriptions = [];
    for (var i = 0; i < prescriptionlength; i++) {
      const prescriptionlink = await currentRecord.methods
        .getPrescription(i)
        .call({ from: accounts[0] });
      prescriptions.push(
        <Link href={prescriptionlink}>
          <a target="_blank">prescription {i + 1}</a>
        </Link>
      );
    }
    const reports = [];
    for (var i = 0; i < reportLength; i++) {
      const reportLink = await currentRecord.methods
        .getReport(i)
        .call({ from: accounts[0] });
      reports.push(
        <Link href={reportLink}>
          <a target="_blank">report {i + 1}</a>
        </Link>
      );
    }
    return { NameAndImage, details, accounts, reports, prescriptions };
  }
  render() {
    console.log(this.props);
    return (
      <Layout>
        <Grid columns={1}>
          <Grid.Column>
            <Segment raised>
              <Label as="a" color="red" ribbon>
                Overview
              </Label>
              <span>Name and profile image</span>
              <h3>{this.props.NameAndImage[0]}</h3>

              <Image
                style={{
                  maxWidth: "150px",
                  maxHeight: "150px",
                  display: "block",
                }}
                src={this.props.NameAndImage[1]}
              />
              <p></p>
              <Label as="a" color="blue" ribbon>
                Details
              </Label>
              <span>your details</span>
              <p></p>
              <p>Age: {this.props.details[1]}</p>
              <p>height: {this.props.details[2]}</p>
              <p>weight: {this.props.details[3]}</p>
              <p>gender: {this.props.details[4]}</p>
              <Label as="a" color="orange" ribbon>
                prescription links
              </Label>
              <p>{this.props.prescriptions}</p>
              <Label as="a" color="teal" ribbon>
                report links
              </Label>
              <p>{this.props.reports}</p>
            </Segment>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default recordShow;
