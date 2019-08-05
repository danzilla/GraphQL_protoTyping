import React, { Component } from 'react';
// CheckList
import FirstRunForm from './firstRunForm';
// FirstRun
class FirstRun extends Component {
  // states
  constructor(props) {
    super(props)
    this.state = { pageName: "FirstRun" }
  }
  // componentDidMount
  componentDidMount() {
    this.props.updateAlertMessage({ pageMessage: "First run - Inital Database pages" })
  }
  // First Run
  render() {
    return (
      <div className="valign-wrapper w-100 h-100">
        <div className="valign w-100">
          <div className="container">

            <div className="center-align">
              {/* FirstRun config */}
              <FirstRunForm 
                updateAlertMessage={this.props.updateAlertMessage}
                activeLoginPage={this.props.activeLoginPage}
                activeRegisterPage={this.props.activeRegisterPage}
                activFirstRunPage={this.props.activFirstRunPage} />
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default FirstRun;
