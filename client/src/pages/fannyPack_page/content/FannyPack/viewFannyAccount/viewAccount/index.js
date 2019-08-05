import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { emojify } from 'react-emojione';
// viewAccounts
class viewAccounts extends Component {

  // Fetch FannyPacks's Accounts
  getUserFannyPackAccounts = () => {
    axios.post('http://localhost:5000/account/view', {
      userSerial: this.props.fannyPack.activeUser,
      fannyPackSerial: this.props.fannyPack.activeFannyPackSerial
    })
    // if any response
    .then((response) => {
      if(response.data.pageMessage.results == "nada" || response.data.pageMessage.results == ""){
        this.setState({
          accountData: [{
            account_type_id: "Nada - Error",
            account_serial: "Nada - Error! ",
            account_lastmodify: "Nada - Error!!!"
            }]
        })
      } else {
        this.setState({
          accountData: response.data.pageMessage.results
        })
      }
    })
    // catch error
    .catch((error) => {
      this.setState({
        content: error
      })
      console.log("account/view: \n" + JSON.stringify(error));
    });
  }
  // constructor and states -- What is a constructor?
  constructor(props) {
    super(props)
    this.state = { 
      accountData: [{
      account_type_id: "Nada - Error",
      account_serial: "Nada - Error! ",
      account_lastmodify: "Nada - Error!!!"
      }]
    }
    this.getUserFannyPackAccounts()
  }
  // componentWillReceiveProps
  componentWillReceiveProps(prevProps) {
    console.log("prevPropsprevProps\n" + JSON.stringify(prevProps))
    // Fetch userFannyPackAccounts
    this.getUserFannyPackAccounts()
  }
  // Raaar
  render() {
    let accountData = this.state.accountData;
    // Raaa
    return (
      <Fragment>
        {/* Refresh FannyPack info */}
        <div className="col s12 m12 l12 py-1">
          <div className="row">
            <div className="btn-large col l10 m10 s10 pink lighten-2">
              <span> {this.props.fannyPack.activeUser} - {this.props.fannyPack.activeFannyPackSerial} </span>
            </div>
            <div className="col l2 m2 s2">
              <button onClick={this.getUserFannyPackAccounts} name="action"
                className="blue-text text-darken-4 transparent btn-large waves-effect waves-dark z-depth-4">
                <i class="material-icons">cached</i>
              </button>
            </div>
          </div>
        </div>
        {/* View FannyPack Accounts info */}
        <div className="col s12 m12 l12">
          {accountData.map((account) =>
            <div className="row" key={account.account_serial}>
              <div className="btn-large col m2 s2 pink lighten-3">
                <span> Type {account.account_type_id} </span>
              </div>
              <div className="btn-large col m8 s8 pink lighten-3">
                <span> {account.account_serial} - {account.account_lastmodify} </span>
              </div>
              <button onClick={this.props.activeShowAccount} name="action"
                className="blue-text text-darken-4 transparent btn-large waves-effect waves-dark z-depth-4">
                {emojify(':purse:')}
              </button>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}
export default viewAccounts;
