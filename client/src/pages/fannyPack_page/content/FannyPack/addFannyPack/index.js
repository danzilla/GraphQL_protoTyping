import React, { Component, Fragment } from 'react';
// NewFannyPack
import AddFannyPackForm from './addFannyPackForm';
import Materialize from '../../../../../util/Materialize';
// Head
class Head extends Component {
    constructor(props) {
      super(props)
      this.state = { showAddAccount: false}
    }
  // Raaar
  render() {
    // FannyPack DropDown and Add FannyForm
    let fannyData = [];
    let data = this.props.fannyPack.activeFannyPackData;
    for (let i = 0; i < data.length; i++) {
      let pushD = {
        fannypack_name: data[i].fannypack_name,
        fannypack_serial: data[i].fannypack_serial
      }; fannyData.push(pushD);
    }
    // brrrrrr
    return (
      <Fragment>
        <div className="container center-align">
          <a className="dropdown-trigger btn-large" data-target="DropDrip1">
            {this.props.fannyPack.activeFannyPackName} - {this.props.fannyPack.activeFannyPackSerial}
          </a>
          {/* FannyPack list */}
          <ul id="DropDrip1" className="dropdown-content">
            {fannyData.map(data => (
            <li key={data.fannypack_serial}>
              <a onClick={() => this.props.changeActiveFannyPack(data.fannypack_serial, data.fannypack_name)}>
                {data.fannypack_serial} - {data.fannypack_name}
              </a>
            </li>
            ))}
          </ul>
          {/* DropDown */}
          <AddFannyPackForm
            getUserFannyPack={this.props.getUserFannyPack}
            updateAlertMessage={this.props.updateAlertMessage}
            changeActiveFannyPack={this.props.changeActiveFannyPack}
            fannyPack={this.props.fannyPack} />
        </div>
        <Materialize/>
      </Fragment>
    );
  }
}
export default Head;
