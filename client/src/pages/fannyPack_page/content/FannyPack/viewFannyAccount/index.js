import React, { Component } from 'react';
import { emojify } from 'react-emojione';

import AddAccount from './addAccount';
import ViewAccount from './viewAccount';

// viewAccounts
class viewFannyPackAccounts extends Component {
    constructor(props) {
      super(props)
      this.state = { Content: "Content"}
    }
  // Raaar
  render() {
    return (
      <div class="container">


        <ViewAccount 
          activeShowAccount={this.props.activeShowAccount}
          activeShowFannyPack={this.props.activeShowFannyPack}

          getUserFannyPack={this.props.getUserFannyPack}
          updateAlertMessage={this.props.updateAlertMessage}
          changeActiveFannyPack={this.props.changeActiveFannyPack}
          fannyPack={this.props.fannyPack} />

        <AddAccount 
          activeShowAccount={this.props.activeShowAccount}
          activeShowFannyPack={this.props.activeShowFannyPack}

          getUserFannyPack={this.props.getUserFannyPack}
          updateAlertMessage={this.props.updateAlertMessage}
          changeActiveFannyPack={this.props.changeActiveFannyPack}
          fannyPack={this.props.fannyPack} />

      </div>
    );
  }
}
export default viewFannyPackAccounts;
