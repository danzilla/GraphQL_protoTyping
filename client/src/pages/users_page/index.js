// User
import React, { Component } from 'react';
// Global-Style Materialize
import Materialize from '../../util/Materialize';
// User
// User Content
import Content from './content';
// Users 
class User extends Component {
  // state
  constructor(props) {
    super(props);
    this.state = { pageDisplay: "pageDisplay" };
  }
  // Rrrr
  render() {
    
    // Bling
    return (
      <div className="row w-100 h-85">
        {/* Contents */}
        <div className="col s12 m12 l12 h-100 overflowN">
          <div className="row h-100">
            {/* Feature - Profile */}
            <div className="col s12 m12 l12 h-100 overflowN">
              <Content 
                updateAlertMessage={this.props.updateAlertMessage}
                pageName={this.props.pageName}/>
            </div>
          </div>
        </div>
        <Materialize />
      </div>
    );
  }
}
// Bling
export default User;