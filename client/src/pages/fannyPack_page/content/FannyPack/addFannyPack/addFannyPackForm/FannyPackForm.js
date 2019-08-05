import React, { Component, Fragment } from 'react';
import axios from 'axios';
// addNewFannyPackForm
class addNewFannyPackForm extends Component {
    // states
    constructor(props) {
        super(props)
        this.state = {
            wallet: {
                name: ""
            }
        }
    }
    // handleChange - get and set state for wallet form
    handleChange = (propertyName, event) => {
        const wallet = this.state.wallet;
        wallet[propertyName] = event.target.value;
        this.setState({ wallet: wallet });
    }
    // onSubmit
    submitNewFannyPack = () => {
        // Axios - POST - fannypack/view
        axios.post('http://localhost:5000/fannypack/add', {
            fannyPack: this.state.wallet.name,
            userSerial: this.props.fannyPack.activeUser
        })
        // if any response
        .then((response) => {
            let msg = `${response.data.pageMessage.results.rows[0].fannypack_name} - ${response.data.pageMessage.message}`
            this.props.updateAlertMessage({ pageMessage: msg })
            this.props.hideAccountAddButton()
            this.props.getUserFannyPack()
        })
        // catch error
        .catch((error) => {
            this.props.updateAlertMessage(JSON.stringify(error));
        });
    }
    // Render
    render() {
        return (
        <Fragment>
            <div className="col s12 m12">
                {/* FannyPackName */}
                <div className="input-field col s11 m11">
                    <input name="FannyPackName" id="FannyPackName" type="text"
                        onChange={this.handleChange.bind(this, 'name')}
                        value={this.state.wallet.name}
                        className="validate" required />
                    <label htmlFor="FannyPackName">FannyPack name</label>
                </div>
                {/* Form - Sub button */}
                <div className="input-field col s1 m1">
                    <div className="row">
                        <button onClick={this.submitNewFannyPack} name="action"
                            className="btn waves-effect waves-light">
                            <i className="material-icons">create_new_folder</i>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
        );
    }
}
export default addNewFannyPackForm;
