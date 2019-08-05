import React, { Component } from 'react';
// Search bar
class searchBar extends Component {
    render() {
        return (
            <nav className="col m12 s12 px-0 light-blue darken-2">
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" required />
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        );
    }
}
export default searchBar;
