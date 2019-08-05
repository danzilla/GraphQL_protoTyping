import React, { Component, Fragment } from 'react';
// AddAccountForm
import AddAccountForm from './addAccountForm';
import Materialize from '../../../util/Materialize';
// Head
class Head extends Component {
    constructor(props) {
      super(props)
      this.state = { showAddAccount: false}
    }

      // show AddAccount button
  showAccountAddButton = () => {
    this.setState({ showAddAccount: true })
  }
  // Hide AddAccount button
  hideAccountAddButton = () => {
    this.setState({ showAddAccount: false })
  }
  // Raaar
  render() {
    // brrrrrr
    return (
      <Fragment>
          <div className="container center-align">
              <div class="col s12">

                <button onClick={this.props.activeShowFannyPack} name="action"
                  className="breadcrumb btn-large pink accent-1 waves-effect waves-light">
                  {this.props.fannyPack.activeFannyPackName} -  {this.props.fannyPack.activeFannyPackSerial}
                </button>

                <a class='dropdown-trigger breadcrumb pink accent-2 btn-large' 
                  href='#!' data-target='dropdown1'> Records 
                </a>
                <ul id='dropdown1' class='dropdown-content'>
                  <li><a href="#!">Records</a></li>
                  <li><a href="#!">Category</a></li>
                  <li><a href="#!">Account Type</a></li>
                </ul>

                {this.state.showAddAccount ?
                  <button onClick={this.hideAccountAddButton}
                    className="blue-text text-darken-4 transparent btn-large waves-effect waves-dark z-depth-4">
                    <i className="material-icons">clear</i>
                  </button>
                  :
                  <button onClick={this.showAccountAddButton}
                    data-position="bottom"
                    data-tooltip="New FannyPack"
                    className="tooltipped blue-text text-darken-1 transparent btn-large waves-effect waves-dark z-depth-4">
                    <i className="material-icons">add</i>
                  </button>
                }               
              </div>
              {this.state.showAddAccount === true &&
                <AddAccountForm
                  hideAccountAddButton={this.hideAccountAddButton}
                  getUserFannyPack={this.props.getUserFannyPack}
                  updateAlertMessage={this.props.updateAlertMessage}
                  changeActiveFannyPack={this.props.changeActiveFannyPack}
                  fannyPack={this.props.fannyPack} />
              }
          </div>
      <Materialize/>
    </Fragment>
    );
  }
}
export default Head;
