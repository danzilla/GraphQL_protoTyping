// FannyPackz
import React, { Component } from 'react';
import axios from 'axios';
// Global-Style Materialize
import Materialize from '../../util/Materialize';
// Content
import Content from './content';
// FannyPackz
class FannyPackz extends Component {
  constructor(props) {
    super(props);
    // FannyPack Display
    const fannyPack = {
      activeUser: "",
      activeUserData: "",
      activeFannyPackName: "",
      activeFannyPackSerial: "",
      activeFannyPackData: "",
      activeAccount: "",
      activeAccountData: ""
    };
    // States
    this.state = { fannyPack: fannyPack };
  }
  // Change FannyPack - callback
  changeActiveFannyPack = (fannyPackSerial, fannyPackName) => {
    this.setState({
      fannyPack: {
        ...this.state.fannyPack, 
        activeFannyPackName: fannyPackName,
        activeFannyPackSerial: fannyPackSerial
      }
    });
  }



  // Fetch FannyPacks
  getUserFannyPack = () => {
    // Get and Parse - sessionData
    let sessionData = JSON.parse(localStorage.getItem('sessionData'));
    // If(serial) good - Set state for user_serial
    if (sessionData == null || !sessionData.user_serial || !sessionData) {
      this.setState({
        fannyPack: {
          ...this.state.fannyPack, 
          activeUser: "No user info from sessionData",
          activeUserData: "",
          activeFannyPackSerial: "No user info from sessionData",
          activeFannyPackData: ""
        }
      })
      this.props.updateAlertMessage({ pageMessage: "No user info from sessionData" });
    } else if (sessionData.user_serial) {
      // Set ActiveUser
      // Get View_User_fannyPack
      // Axios - POST - fannypack/view
      axios.post('http://localhost:5000/fannypack/view', {
        userSerial: sessionData.user_serial
      })
      // if any response
      .then((response) => {
        this.setState({
          fannyPack: {
            ...this.state.fannyPack, 
            activeUser: sessionData.user_serial,
            activeUserData: sessionData,
            activeFannyPackName: response.data.pageMessage.results[0].fannypack_name,
            activeFannyPackSerial: response.data.pageMessage.results[0].fannypack_serial,
            activeFannyPackData: response.data.pageMessage.results
          }
        })
        this.props.updateAlertMessage({ pageMessage: "FannyPackz fetched!" });
      })
      // catch error
      .catch((error) => {
        this.setState({
          fannyPack: {
            ...this.state.fannyPack, 
            activeUser: sessionData.user_serial,
            activeUserData: sessionData,
            activeFannyPack: error.message,
            activeFannyPackData: error
          }
        })
        this.props.updateAlertMessage({ pageMessage: "Errr: " + error.message });
      });
    }
  }

  // componentDidMount
  componentDidMount() {
    // Fetch userFannyPack
    this.getUserFannyPack()
  }
  // Rrrr
  render() {
    let pageContent = <Content
        fannyPack={this.state.fannyPack}
        getUserFannyPack={this.getUserFannyPack}
        changeActiveFannyPack={this.changeActiveFannyPack}
        updateAlertMessage={this.props.updateAlertMessage} />;
      
    // Bling
    return (
      // FannyPackz
      <div className="row w-100 h-85">
        {/* Contents */}
        <div className="container h-100">
          <div className="col s12 m12 l12 h-100 overflowN">
            <div className="row h-100 p-2">
              {/* Feature - Profile */}
              <div className="col s12 m12 l12 h-100 card-1 z-depth-3 overflowN">
                {pageContent}
              </div>
            </div>
          </div>
        </div>
        <Materialize />
      </div>
    );
  }
}
// Bling
export default FannyPackz;



