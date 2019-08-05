// Authentication Page
import React, { Component } from 'react';
// Global-Style Materialize
import Materialize from '../../util/Materialize';
// Messages
import MessageAlert from '../../component/MessageAlert';
// Contents 
import LoginPage from '../../pages/login_page';
import RegisterPage from '../../pages/register_page';
import FirstRunPage from '../../pages/firstRun_page';
// Dashboard
class Dashboard extends Component {
  // constructor
  constructor(props) { 
    super(props);
    // Page-Display Setting
    const pageDisplay = {
      isLogin: true,
      isRegister: false,
      isFirstrun: false
    };
    const alertMessage = { pageMessage: "" };
    this.state = { pageDisplay: pageDisplay, alertMessage: alertMessage };
  }
  // Alert Message 
  // updateAlertMessage
  updateAlertMessage = (msg) => {
    this.setState({
      alertMessage: msg
    })
  }
  //
  // Pages
  // - Login | Register | FirstRun
  // - 3 Depth - Props -> nav > navBar
  // 
  // activeLoginPage
  activeLoginPage = () => {
    this.setState({
      pageDisplay: { ...this.state.pageDisplay, 
        isLogin: true, isRegister: false, isFirstrun: false
      }
    })
  }
  // activeRegisterPage
  activeRegisterPage = () => {
    this.setState({
      pageDisplay: { ...this.state.pageDisplay, 
        isLogin: false, isRegister: true, isFirstrun: false
      }
    })
  }
  // activFirstRunPage
  activFirstRunPage = () => {
    this.setState({
      pageDisplay: { ...this.state.pageDisplay, 
        isLogin: false, isRegister: false, isFirstrun: true
      }
    })
  }
  //
  // blaze contents
  render() {
    // Which content to show
    let showPage, pageName;
    if (this.state.pageDisplay.isLogin === true) {
      // Login page
      pageName = "Login page";
      showPage = <LoginPage
        pageName={pageName}
        activeLoginPage={this.activeLoginPage}
        activeRegisterPage={this.activeRegisterPage}
        activFirstRunPage={this.activFirstRunPage}
        updateAlertMessage={this.updateAlertMessage} />;
    } else if (this.state.pageDisplay.isRegister === true) {
      // Register page
      pageName = "Register page";
      showPage = <RegisterPage
        pageName={pageName}
        activeLoginPage={this.activeLoginPage}
        activeRegisterPage={this.activeRegisterPage}
        activFirstRunPage={this.activFirstRunPage}
        updateAlertMessage={this.updateAlertMessage} />;
    } else if (this.state.pageDisplay.isFirstrun === true) {
      // First-run page
      pageName = "First-run page";
      showPage = <FirstRunPage
        pageName={pageName}
        activeLoginPage={this.activeLoginPage}
        activeRegisterPage={this.activeRegisterPage}
        activFirstRunPage={this.activFirstRunPage}
        updateAlertMessage={this.updateAlertMessage} />;
    } else {
      // Login page
      pageName = "Login page";
      showPage = <LoginPage
        pageName={pageName}
        activeLoginPage={this.activeLoginPage}
        activeRegisterPage={this.activeRegisterPage}
        activFirstRunPage={this.activFirstRunPage}
        updateAlertMessage={this.updateAlertMessage} />;
    }
    // #brrrrrom
    return (
      <div className="h-100 w-100">
        {/* Alert Message */}
        <MessageAlert 
          alertMessage={this.state.alertMessage}
          pageDisplay={this.state.pageDisplay} />

        {/* Page content */}
        {showPage}

        {/* Init Materializecss */}
        <Materialize />
      </div>
    );
  }
}
// Bling
export default Dashboard;



