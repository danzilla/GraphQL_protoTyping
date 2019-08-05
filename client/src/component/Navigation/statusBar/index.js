import React, { Component } from 'react';
// Search bar
class searchBar extends Component {
    render() {
        return (
            <nav className="col m12 s12 light-blue darken-3">
                <div className="nav-wrapper">
                    {/* LOGO */}
                    <a href="/login/" className="brand-logo px-1 left tooltipped"
                        data-position="bottom" data-tooltip="Dashboard">
                        {this.props.pageName}
                    </a>
                </div>
            </nav>
        );
    }
}
export default searchBar;
