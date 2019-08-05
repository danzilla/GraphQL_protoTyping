import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
// To-do
// Session and Auto login/redirect
// Session Client
// 
// Login
class LoginForm extends Component {
  // states
  constructor(props) {
    super(props)
    this.state = {
      login: {
        userName: "",
        password: ""
      },
      pageMessage: ""
    }
  }
  // onClick show RegisterForm
  // isRegisterForm === TRUE
  activeRegisterForm = () => {
    this.props.activeRegisterPage()
  }
  //
  // onChange - get and set state for Login form
  handleChange = (propertyName, event) => {
    const login = this.state.login;
    login[propertyName] = event.target.value;
    this.setState({ login: login });
  }
  // submit login
  handleSubmit = (event) => {
    // If the input are empty
    if (!this.state.login.userName || !this.state.login.password) {
      // setState to = False
      this.setState({ pageMessage: "Credentials required "});
    } else { // validate against server:5000
      // Post | query
      axios
      .post('http://localhost:5000/user/login', {
        userName: this.state.login.userName,
        userPassword: this.state.login.password
      })
      .then((response) => {
        // Err check
        if (response.data.loginValidationResults.validate_user_auth.checked == "checked"){
          // Set localstorage with {sessionData}
          localStorage.setItem('sessionData', JSON.stringify(response.data.pageMessage.results));
          // Send pageMessage and Redirect to /dashboard
          this.props.updateAlertMessage({ pageMessage: response.data.pageMessage.message });
          this.props.history.push('/dashboard');
        } else if (response.data.loginValidationResults.validate_user_auth.checked == "3D000") {
          // Go to - inital page - Set to isInitalConfig == True
          this.props.updateAlertMessage({ pageMessage: response.data.pageMessage.message });
          this.props.activFirstRunPage();
        } else if (response.data.loginValidationResults.validate_user_auth.checked == "ECONNREFUSED") {
          // If there is no connection - ECONNREFUSED
          this.props.updateAlertMessage({ pageMessage: response.data.pageMessage.message });
        } else { // if any other issue
          this.props.updateAlertMessage({ pageMessage: response.data.pageMessage.message });
          this.setState({ pageMessage: response.data.pageMessage.message });
        }
      })
      .catch((error) => { // get and set props - Login state
        this.setState({ pageMessage: JSON.stringify(error)});
        this.props.updateAlertMessage({ pageMessage: JSON.stringify(error) });
        console.log("error" + error);
      });
    }
    // default prevent-refresh form dawg
    event.preventDefault();
  }
  // validation
  render() {
    return (
    <form onSubmit={this.handleSubmit}>
        {/* Login Form - input */}
        <div className="row">
            {/* User Name */}
            <div className="input-field col s12">
                <input name="userName" id="userName" type="text"
                onChange={this.handleChange.bind(this, 'userName')}
                value={this.state.login.userName}
                className="validate" required />
                <label htmlFor="userName">User name</label>
            </div>
            {/* Password */}
            <div className="input-field col s12">
                <input name="password" id="password" type="password"
                onChange={this.handleChange.bind(this, 'password')}
                value={this.state.login.password}
                className="validate" required />
                <label htmlFor="password">Password</label>
            </div>
            {/* err */}
            <div className="center-align col s12 pink-text text-lighten-2">
                {this.state.pageMessage}
            </div>
        </div>
        {/* Login Form - Sub button */}
        <div className="row center-align">
            <button className="btn waves-effect waves-light"
                type="submit" name="action">
                Sign In
            </button>
            <br />
            <button className="my-1 waves-effect waves-teal btn-flat"
                onClick={this.activeRegisterForm} >
                Register
            </button>
        </div>
    </form>
    );
  }
}
export default withRouter(LoginForm);
