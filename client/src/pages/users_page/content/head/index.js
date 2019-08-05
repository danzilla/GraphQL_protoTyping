import React, { Component } from 'react'
// Add User - Head
import NewUser from './addUser'
// Head
class Head extends Component {
    constructor(props) {
      super(props)
      this.state = { showAddUser: false}
    }
  // show AddUser button
  showUserAddButton = () => {
    this.setState({ showAddUser: true })
  }
  // Hide AddUser button
  hideUserAddButton = () => {
    this.setState({ showAddUser: false })
  }

  // Raaar
  render() {
    return (
      <div className="">
        <h3 className="container center-align py-1"> 
          {this.props.pageName}
          {this.state.showAddUser ?
            <button onClick={this.hideUserAddButton}
              className="mx-1 blue-text text-darken-2 transparent btn waves-effect waves-dark z-depth-4">
              <i className="material-icons">clear</i>
            </button>
            :
            <button onClick={this.showUserAddButton}
              className="mx-1 blue-text text-darken-2 transparent btn waves-effect waves-dark z-depth-4">
              <i className="material-icons">add</i>
            </button>
          }
          <button onClick={this.props.fetchUsers} 
            className="blue-text text-darken-2 transparent btn waves-effect waves-dark z-depth-4">
              <i class="material-icons">sync</i>
          </button>
        </h3>
        {this.state.showAddUser === true &&
          <div className="container"> 
            <NewUser
              fetchUsers={this.props.fetchUsers}
              updateAlertMessage={this.props.updateAlertMessage} /> 
          </div>
        }
      </div>
    );
  }
}
export default Head;
