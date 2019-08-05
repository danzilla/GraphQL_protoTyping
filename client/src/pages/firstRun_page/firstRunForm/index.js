import React, { Component } from 'react';
import axios from 'axios';
import { emojify } from 'react-emojione';

class FirstRunCheck extends Component {
    // states
    constructor(props) {
        super(props)
        this.state = {
        FirstRunCheck: "Hi",
        pageMesage: "",
        }
    }
    // onClick show register form
    // set - isRegisterForm === false
    activeRegisterPage = () => {
        this.props.activeRegisterPage()
    }
    // Init Database and Table
    // onClick create DB - Request
    initDatabase = () => {
        // onClick
        this.props.updateAlertMessage({ pageMessage: "Hold on... initializing DBz" });
        // submit to server
        axios.post('http://localhost:5000/firstrun')
        .then((response) => {
            console.log("response : " + response.data);
            this.props.updateAlertMessage({ pageMessage: response.data.pageMesage });
            this.setState({ FirstRunCheck: response.data.firstRunCheck, pageMesage: response.data.pageMesage })
        })
        .catch((error) => {
            let errMsg = error.response.statusText + " - " + error.response.status;
            console.log("error: " + errMsg);
            this.props.updateAlertMessage({ pageMessage: errMsg });
        });
    }
    // Raaaar
    render() {
        let FirstRunLabels = [];
        let FirstRunCheckStatus = this.state.FirstRunCheck;
        if (FirstRunCheckStatus.length > 2) {
            {/* Initialize Database */ }
            {/* Database results - checklist */ }
            for (let i = 0; i < FirstRunCheckStatus.length; i++) {
                FirstRunLabels.push(
                    <li>
                        <label>
                            <input type="checkbox" checked={FirstRunCheckStatus[i].checked} />
                            <span> {FirstRunCheckStatus[i].title} </span>
                        </label>
                    </li>
                )
            }
        }
        return (
            <div>
                {FirstRunCheckStatus === "Hi" &&
                    <h5 className="text-neon card-1 p-1 center-align waves-effect waves-light card-title black-text"
                        onClick={this.initDatabase}>
                        Initiate First-run {emojify(':hot_pepper:')}
                    </h5>
                }
                {FirstRunCheckStatus.length > 2 &&
                    <div>
                        <h5 className="center-align waves-effect waves-light card-title black-text">
                            Initiated First-run {emojify(':balloon:')}
                        </h5>
                        {/* FirstRunLabels */}
                        <ul> {FirstRunLabels} </ul>
                        {/* activeRegisterPage - button */}
                        <div className="row center-align">
                            <button onClick={this.activeRegisterPage} 
                                className="card-1 transparent btn waves-effect waves-light black-text"> 
                                Register  
                            </button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
export default FirstRunCheck;
