import React, { Component } from 'react';
// User Table
class Table extends Component {
    // constructor
    constructor(props) {
        super(props)
        this.state = { 
            isHide: true,
            isHideSerial: null,
            isHideSerialPrev: null
        }
    }
    //isHide to show user more
    //
    isHide (serial) {
        // Hide all First 
        let elemToHide = document.getElementById(serial);
        elemToHide.className = "hide"
        this.setState({isHide: true, isHideSerial: null, isHideSerialPrev: null})
    }
    isShow (serial) {
        // Hide Prev Action
        if(this.state.isHideSerialPrev){
            let elemToHidePrev = document.getElementById(this.state.isHideSerialPrev);
            elemToHidePrev.className = "hide"
        }
        // Show the Selected 
        let elemToShow =  document.getElementById(serial);
        elemToShow.className = ""
        this.setState({isHide: true, isHideSerial: serial, isHideSerialPrev: serial})
    }
    // 
    // Data
    render() {
        return (
            <div className="row">
                <table className="highlight responsive-table">
                    <thead>
                        <tr id="elemHeading">
                            <th>Serial</th>
                            <th>User</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.fetchUsersResponse.map((item) => {
                            return (
                                <React.Fragment>
                                <tr key={item.user_serial}>
                                    <td>{item.user_serial}</td>
                                    <td>{item.user_name}</td>
                                {this.state.isHideSerial === item.user_serial && this.state.isHide === true ?
                                    <td><button onClick={() => {this.isHide(item.user_serial)}} className="btn waves-effect waves-dark"><i class="material-icons">clear</i></button></td>
                                    :
                                    <td><button onClick={() => {this.isShow(item.user_serial)}} className="btn waves-effect waves-dark"><i class="material-icons">add</i></button></td>
                                }
                                </tr>
                                <tr id={item.user_serial} className="hide">
                                    <td colspan="3">
                                        <div class="container">
                                            <p>
                                                {JSON.stringify(item)}
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                </React.Fragment>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Table;
