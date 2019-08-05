// React
import React, { Component } from 'react';
// FannyPack
import AddFannyPack from './addFannyPack';
import ViewFannyAccount from './viewFannyAccount';
// Content
class Content extends Component {
  // constructor
  constructor(props) {
    super(props)
    this.state = { nada: "nada" }
  }
  // Raaar
  render() {
    return (
      <div className="row h-100">
        <div className="col m12 s12">
          {/* Add FannyPack */}
          <div className="row py-2">
            <AddFannyPack
              getUserFannyPack={this.props.getUserFannyPack}
              updateAlertMessage={this.props.updateAlertMessage}
              changeActiveFannyPack={this.props.changeActiveFannyPack}
              fannyPack={this.props.fannyPack} />
          </div>
          <hr />
          {/* View FannyPack's Accounts */}
          <div className="row">
            <ViewFannyAccount
              activeShowAccount={this.props.activeShowAccount}
              activeShowFannyPack={this.props.activeShowFannyPack}

              getUserFannyPack={this.props.getUserFannyPack}
              updateAlertMessage={this.props.updateAlertMessage}
              changeActiveFannyPack={this.props.changeActiveFannyPack}
              fannyPack={this.props.fannyPack} />
          </div>
        </div>
      </div>
    );
  }
}
export default Content;