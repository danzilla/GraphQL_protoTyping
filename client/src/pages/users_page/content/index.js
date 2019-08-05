import React, { Component } from 'react'
import axios from 'axios';
// Head and Body
import Head from './head'
import Body from './body'
// Content
class Content extends Component {
  // constructor
  constructor(props) {
    super(props)
    this.state = {
      fetchUsersResponse: ["fetchUsersResponse"]
    }
  }
  // 
  // Fetch user List
  fetchUsers = () => {
    axios
    .post('http://localhost:5000/user/view', {
        uname: "this.state.login.userName",
        pwd: "this.state.login.password"
    })
    .then((response) => {
        this.setState({ fetchUsersResponse: response.data.pageInfo.pageMessage})
        this.props.updateAlertMessage({pageMessage: "Users been Fetched!"})
    })
    .catch((error) => {
        this.props.updateAlertMessage({pageMessage: "Error! " + error})
        console.log(error);
    });
  }
  // 
  // componentDidMount
  componentDidMount() {
    this.fetchUsers()
    this.props.updateAlertMessage({ pageMessage: "Users page loaded" })
  }
  // Raaar
  render() {
    return (
      <div className="container h-100 overflowN">
        <div className="col m12 s12 h-100 overflowY">
          {/* Add User */}
          <div className="row">
            <Head
              fetchUsers={this.fetchUsers}
              updateAlertMessage={this.props.updateAlertMessage}
              pageName={this.props.pageName} />
          </div>
          {/* User Body */}
          <div className="row">
            <div className="col s12 m12 l12 z-depth-2">
            <Body 
              fetchUsersResponse={this.state.fetchUsersResponse}
              updateAlertMessage={this.props.updateAlertMessage}
              pageName={this.props.pageName} />
            </div>
          </div>
         </div>
      </div>
    );
  }
}
export default Content;
