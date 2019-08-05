import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { emojify } from 'react-emojione';
// viewAccounts
class addAccounts extends Component {
    constructor(props) {
      super(props)
      this.state = { Content: "Content"}
    }


  // Add FannyPacks's Accounts
  addUserFannyPackAccounts = () => {
    axios.post('http://localhost:5000/account/add', {
      userSerial: this.props.fannyPack.activeUser,
      fannyPackSerial: this.props.fannyPack.activeFannyPackSerial,
      accountType: "lalalala"
    })
    // if any response
    .then((response) => {
      this.setState({
        content: response.data
      })
      this.props.updateAlertMessage({ pageMessage: response.data.pageMessage.message })
      console.log("JSON-response: " + JSON.stringify(response));
    })
    // catch error
    .catch((error) => {
      this.setState({
        content: error
      })
      console.log("JSON-error: " + JSON.stringify(error));
    });
  }
  // Raaar
  render() {
    return (
      <Fragment>
        <div className="container p-1">
          <div className="pink accent-2 btn-large col m8 s8">
            <span id={this.props.fannyPack.activeFannyPackSerial}>
              Add new account to {this.props.fannyPack.activeFannyPackName}
            </span>
          </div>
          <button onClick={this.addUserFannyPackAccounts} name="action"
            className="blue-text text-darken-4 transparent btn-large waves-effect waves-dark z-depth-4">
            <i className="material-icons center-align">add</i>
          </button>
        </div>
      </Fragment>
    );
  }
}
export default addAccounts;
