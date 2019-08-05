// React
import React, { Component } from 'react';
// Head and Body
import FannyPack from './FannyPack';
import AccountRecord from '../../account_page';
// Content
class Content extends Component {
  // constructor
  constructor(props) {
    super(props)
    // pageDisplay
    const pages = {
      showFannyPack: true,
      showAccountRecord: false,
      showAccountCategory: false,
      showAccountType: false,
    };
    // State
    this.state = { pages: pages }
  }


  // activeShowFannyPack
  activeShowFannyPack = () => {
    this.setState({
      pages: {
        ...this.state.pages,
        showFannyPack: true, showAccountRecord: false
      }
    })
  }
  // activeShowAccount
  activeShowAccount = () => {
    this.setState({
      pages: {
        ...this.state.pages,
        showFannyPack: false, showAccountRecord: true
      }
    })
  }



  
  // Raaar
  render() {

    // FannyPackPage
    let FannyPackPage = <FannyPack
        activeShowAccount={this.activeShowAccount}
        activeShowFannyPack={this.activeShowFannyPack}

        getUserFannyPack={this.props.getUserFannyPack}
        updateAlertMessage={this.props.updateAlertMessage}
        changeActiveFannyPack={this.props.changeActiveFannyPack}
        fannyPack={this.props.fannyPack} />;
    // AccountPage
    let AccountPage = <AccountRecord    
        activeShowAccount={this.activeShowAccount}
        activeShowFannyPack={this.activeShowFannyPack}

        getUserFannyPack={this.props.getUserFannyPack}
        updateAlertMessage={this.props.updateAlertMessage}
        changeActiveFannyPack={this.props.changeActiveFannyPack}
        fannyPack={this.props.fannyPack} />;


    // Which content to show
    let showPage;
    if (this.state.pages.showFannyPack === true) {
      // FannyPack page
      showPage = FannyPackPage;
    } else if (this.state.pages.showAccountRecord === true) {
      // AccountRecord page
      showPage = AccountPage;
    } else {
      // FannyPack page
      showPage = FannyPackPage;
    }
    return (
      <div className="row h-100 overflowN">
        <div className="col m12 s12 h-100 overflowY">
          {/* Page content */}
          {showPage}
        </div>
      </div>
    );
  }
}
export default Content;
