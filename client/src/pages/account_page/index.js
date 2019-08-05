import React, { Component } from 'react';
// Account
import AddAccount from './addAccount';
import ViewAccount from './viewAccount';
// Content
class Content extends Component {
  // props
  constructor(props) {
    super(props)
    this.state = {
      pageDisplay: "pageDisplay"
    }
  }
  // Raaar
  render() {
    return (
      <div className="row h-100">
        <div className="col m12 s12">

        <div className="row py-2">
          <AddAccount 
            activeShowAccount={this.props.activeShowAccount}
            activeShowFannyPack={this.props.activeShowFannyPack}

            getUserFannyPack={this.props.getUserFannyPack}
            updateAlertMessage={this.props.updateAlertMessage}
            changeActiveFannyPack={this.props.changeActiveFannyPack}
            fannyPack={this.props.fannyPack} />
        </div>
        <hr />
        <div className="row">
          <ViewAccount
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
