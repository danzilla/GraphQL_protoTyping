import React, { Component } from 'react';
import axios from 'axios';
// addNewUsers Form
class addNewUsersForm extends Component {
    // states
    constructor(props) {
        super(props)
        this.state = {
            register: {
                userName: "",
                password: "",
                fannyPack: ""
            }
        }
    }
    // handleChange - get and set state for register form
    handleChange = (propertyName, event) => {
        const register = this.state.register;
        register[propertyName] = event.target.value;
        this.setState({ register: register });
    }
    // handleSubmit - register
    handleSubmit = (event) => {
        if (!this.state.register.userName || !this.state.register.password || !this.state.register.fannyPack) {
            // If the input are empty 
            // setState to = False
            this.props.updateAlertMessage("Credentials required ")
        } else {
            // submit to server
            axios
            .post('http://localhost:5000/user/add', {
                userName: this.state.register.userName,
                password: this.state.register.password,
                fannyPack: this.state.register.fannyPack
            })
            .then((response) => {
                this.props.updateAlertMessage({pageMessage: response.data.pageInfo.pageMessage});
                this.props.fetchUsers();
            })
            .catch((error) => {
                this.props.updateAlertMessage({pageMessage: error.message})
                console.log("Message: " + error.message);
            });
        }
        // default prevent-refresh Form dawg
        event.preventDefault();
    }
    // Render
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* Register Form - input */}
                <div className="row">
                    {/* FannyPack Name */}
                    <div className="input-field col s4 m3">
                        <input name="fannyPack" id="fannyPack" type="text"
                            onChange={this.handleChange.bind(this, 'fannyPack')}
                            value={this.state.register.fannyPack}
                            className="validate" required />
                        <label htmlFor="fannyPack">Fanny Pack</label>
                    </div>
                    {/* User Name */}
                    <div className="input-field col s4 m4">
                        <input name="userName" id="userName" type="text"
                            onChange={this.handleChange.bind(this, 'userName')}
                            value={this.state.register.userName}
                            className="validate" required />
                        <label htmlFor="userName">User name</label>
                    </div>
                    {/* Password */}
                    <div className="input-field col s4 m4">
                        <input name="password" id="password" type="password"
                            onChange={this.handleChange.bind(this, 'password')}
                            value={this.state.register.password}
                            className="validate" required />
                        <label htmlFor="password">Password</label>
                    </div>
                    {/* Form - Sub button */}
                    <div className="input-field col s1 m1">
                        <div className="row center-align">
                            <button className="btn waves-effect waves-light" type="submit" name="action"><i class="material-icons">how_to_reg</i></button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
export default addNewUsersForm;
