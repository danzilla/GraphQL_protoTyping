import React, { Component, Fragment } from 'react'
// AddFannyPackFrom
import FannyPackForm from './FannyPackForm'
// AddFannyPack
class AddFannyPack extends Component {
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
    return (
      <Fragment>
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
        {this.state.showAddAccount === true &&
          <FannyPackForm
            hideAccountAddButton={this.hideAccountAddButton}
            getUserFannyPack={this.props.getUserFannyPack}
            updateAlertMessage={this.props.updateAlertMessage}
            changeActiveFannyPack={this.props.changeActiveFannyPack}
            fannyPack={this.props.fannyPack} />
        }
      </Fragment>
    );
  }
}
export default AddFannyPack;
