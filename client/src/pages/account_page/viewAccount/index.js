import React, { Component } from 'react'
// viewAccounts
class viewAccounts extends Component {
    constructor(props) {
      super(props)
      this.state = { Content: "Content"}
    }
  // Raaar
  render() {
    return (
      <div class="col s12 m12 overflowN">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper ">
            <div class="col s2">
              {this.props.fannyPack.activeFannyPackName} -- 
              {this.props.fannyPack.activeFannyPackSerial}
              </div>
            <div class="col s10">
              <span class="black-text">
                <p> {JSON.stringify(this.props.fannyPack)}  </p>
              </span>

              <button onClick={this.props.activeShowAccount} name="action"
                className="btn waves-effect waves-light">
                activeShowAccount
              </button>
              <button onClick={this.props.activeShowFannyPack} name="action"
                className="btn waves-effect waves-light">
                activeShowFannyPack
              </button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default viewAccounts;
