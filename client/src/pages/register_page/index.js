import React, { Component } from 'react';
import { emojify } from 'react-emojione';
// Register Form
import RegisterForm from './registerForm'
// Register
class Register extends Component {
  // states
  constructor(props) {
    super(props)
    this.state = { pageName: "Register" }
  }
  // componentDidMount
  componentDidMount() {
    this.props.updateAlertMessage({ pageMessage: this.props.pageName })
  }
  // brr brr
  render() {
    return (
      <div className="valign-wrapper w-100 h-100">
        <div className="valign w-100">
          <div className="container">

            <div className="row">
              <div className="col m4 offset-m4 s8 offset-s2">
                <div className="card card-1 z-depth-4">
                  <div className="card-content">
                    <h5 className="card-title black-text">Register {emojify(':heart:')}</h5>
                    <RegisterForm
                      updateAlertMessage={this.props.updateAlertMessage}
                      activeLoginPage={this.props.activeLoginPage}
                      activeRegisterPage={this.props.activeRegisterPage}
                      activFirstRunPage={this.props.activFirstRunPage} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default Register;
