import React, { Component } from 'react';
// Global-Style Materialize
import Materialize from '../../util/Materialize';
// Nav barz
import NavBar from './navBar';
import SearchBar from './searchBar';
import StatusBar from './statusBar';
// Navigation 
class Nav extends Component {
  render() {
    return (
      // Navigation
      <div className="row w-100 p-1 m-0">
        <div className="container"> 
          <NavBar 
            alertMessage={this.props.alertMessage}
            activeFannyPack={this.props.activeFannyPack}
            activeCategory={this.props.activeCategory}
            activeUsers={this.props.activeUsers} />
        </div>
        <Materialize />
      </div>
    );
  }
}
export default Nav;

/*
        <div className="col s12 m4 l4 px-0"> 
          <StatusBar 
            pageName={this.props.pageName} /> 
        </div>
        <div className="col s12 m4 l4 px-0"> 
          <SearchBar /> 
        </div>
*/
