import React, { Component } from 'react';
import axios from 'axios';
import { log } from 'util';
// Register Form
class RegisterForm extends Component {
    // states
    constructor(props) {
        super(props)
        this.state = {
            register: {
                userName: "",
                password: "",
                fannyPack: ""
            },
            pageMessage: ""
        }
    }
    // onClick show LoginForm
    // set - isRegisterForm === false
    activeLoginForm = () => {
        this.props.activeLoginPage();
    }
    //
    // handleChange - get and set state for register form
    handleChange = (propertyName, event) => {
        const register = this.state.register;
        register[propertyName] = event.target.value;
        this.setState({ register: register });
    }
    // handleSubmit - POST - register
    handleSubmit = (event) => {
        if (!this.state.register.userName || !this.state.register.password || !this.state.register.fannyPack) {
            // If the input are empty
            // setState to = False
            this.setState({ pageMesage: "Credentials required" });
        } else {
            // submit to server
            axios
            .post('http://localhost:5000/user/add', {
                userName: this.state.register.userName,
                password: this.state.register.password,
                fannyPack: this.state.register.fannyPack
            })
            .then((response) => {
                // Err check
                if (response.data.addUserResult.add_user_to_userAuth.checked == "checked" || 
                    response.data.addUserResult.add_user_to_userAuth.checked == "23505" ){
                    this.setState({ pageMessage: response.data.pageMessage.message })
                    this.props.updateAlertMessage({ pageMessage: response.data.pageMessage.message })
                } else if (response.data.addUserResult.add_user_to_userAuth.checked == "3D000" || 
                           response.data.addUserResult.add_user_to_userAuth.checked == "42P01" ) {
                    // Go to - inital page - Set to isInitalConfig == True
                    this.props.updateAlertMessage({ pageMessage: response.data.pageMessage.message })
                    this.props.activFirstRunPage();
                } else if (response.data.loginValidationResults.validate_user_auth.checked == "ECONNREFUSED") {
                    // If there is no connection - ECONNREFUSED
                    this.props.updateAlertMessage({ pageMessage: response.data.pageMessage.message });
                } else { // if any other issue
                    this.props.updateAlertMessage({ pageMessage: response.data.pageMessage.message })
                    this.setState({ pageMessage: response.data.pageMessage.message });
                }
            })
            .catch((error) => {
                // get and set props - register state
                this.setState({ pageMessage: JSON.stringify(error)});
                this.props.updateAlertMessage({ pageMessage: JSON.stringify(error) })
            });
        }
        // default prevent-refresh Form dawg
        event.preventDefault();
    }
    //
    // brr brr
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* Register Form - input */}
                <div className="row">
                    {/* FannyPack Name */}
                    <div className="input-field col s12">
                        <input name="fannyPack" id="fannyPack" type="text"
                            onChange={this.handleChange.bind(this, 'fannyPack')}
                            value={this.state.register.fannyPack}
                            className="validate" required />
                        <label htmlFor="fannyPack">Fanny Pack</label>
                    </div>
                    {/* User Name */}
                    <div className="input-field col s12">
                        <input name="userName" id="userName" type="text"
                            onChange={this.handleChange.bind(this, 'userName')}
                            value={this.state.register.userName}
                            className="validate" required />
                        <label htmlFor="userName">User name</label>
                    </div>
                    {/* Password */}
                    <div className="input-field col s12">
                        <input name="password" id="password" type="password"
                            onChange={this.handleChange.bind(this, 'password')}
                            value={this.state.register.password}
                            className="validate" required />
                        <label htmlFor="password">Password</label>
                    </div>
                    {/* err */}
                    <div className="center-align col m12 s12 pink-text text-lighten-2">
                        {this.state.pageMessage}
                    </div>
                </div>
                {/* Form - Sub button */}
                <div className="row center-align">
                    <button className="btn waves-effect waves-light"
                        type="submit" name="action">
                        Register
                    </button>
                    <br />
                    <button className="my-1 waves-effect waves-teal btn-flat"
                        onClick={this.activeLoginForm} >
                        login
                    </button>
                </div>
            </form>
        );
    }
}
export default RegisterForm;
