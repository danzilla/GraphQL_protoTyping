import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Papa from './papaCSVReader'
import TableReview from './tableReviewCSV'

class NewStatement extends Component {
    // States
    constructor(props) {
        super(props)
        this.state = {
            reviewData: [],
            statementInfo: {
                staType: "",
                staComment: "",
                staDate: ""
            },
            pageMesage: ""
        }
    }

    // Handle Events 
    // On Event update the states for input
    handleChange = (propertyName, event) => {
        const statementInfo = this.state.statementInfo;
        statementInfo[propertyName] = event.target.value;
        this.setState({ statementInfo: statementInfo });
    }
    // ReviewData - callback
    // Get child-componets review-data  
    getReviewData = (reviewCSV) => {
        this.setState({
            reviewData: reviewCSV
        })
    }

    // Submit - POST
    // Add reviewd CSV 
    submitReviewTransaction = (event) => {
        // if no date or type given
        if (!this.state.statementInfo.staType || !this.state.statementInfo.staDate || !this.state.reviewData) {
            // If the input are empty
            this.setState({ pageMesage: "Please fill the require fileds"});
        } else {
            // If the input are all good
            this.setState({ pageMesage: "" });
            axios.post('http://localhost:5000/statement/add', {
                reviewTransactionData: this.state.reviewData,
                statementInfo: this.state.statementInfo
            })
            // if any response
            .then((response) => {
                this.setState(prevState => ({
                    pageMesage: response.data.pageMesage, 
                    reviewData: [],
                    statementInfo: {
                        ...prevState.statementInfo,
                        staType: "",
                        staComment: "",
                        staDate: ""
                    }}));
            })
            // catch error
            .catch((error) => {
                // get and set props - register state
                console.log("message: " + error.message);
                this.setState({pageMesage: error.message});
            });
        }
        // naa reload
        event.preventDefault();
    }
    // Render
    render() {
        return (
        // Content
        <Fragment>
            <div className="col s12 red">
                <div className="row">
                    <div className="input-field col m3 s12">
                        <Papa
                            btnText={"Select a CSV file"}
                            reviewData={this.getReviewData}
                            className="blue-text text-darken-2 card-1 col m12 s12 upload grey lighten-4 waves-effect waves-dark btn-large" />
                    </div>
                    <div className="input-field col m3 s12">
                        <i className="material-icons prefix">unfold_more</i>
                        <select name="staType" value={this.state.statementInfo.staType} 
                            onChange={this.handleChange.bind(this, 'staType')}>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label htmlFor="autocomplete-input">Type</label>
                    </div>
                    <div className="input-field col m3 s12">
                        <i className="material-icons prefix">date_range</i>
                        <input name="staDate" type="date" id="staDate"
                            value={this.state.statementInfo.staDate} 
                            onChange={this.handleChange.bind(this, 'staDate')} />
                    </div>
                    <div className="input-field col m3 s12">
                        <i className="material-icons prefix">add_comment</i>
                        <input type="text" id="staComment" name="staComment" 
                            value={this.state.statementInfo.staComment}
                            onChange={this.handleChange.bind(this, 'staComment')} />
                        <label htmlFor="autocomplete-input">lalala... </label>
                    </div>
                    {/* err */}
                    <div className="center-align col s12 pink-text text-lighten-2">
                        {this.state.pageMesage}
                    </div>
                </div>
            </div>
            <div className={this.state.reviewData == "" ? "hide" : "col s12 m12"}>
                <div className="row ">
                    <div className="center-align">
                        <button onClick={this.submitReviewTransaction}
                            className="card-1 waves-effect waves-teal btn-flat card-panel blue lighten-5">
                            Review and upload <i className="material-icons right">send</i>
                        </button>
                    </div>
                    <div className="center-align">
                        <TableReview
                            reviewCSV={this.state.reviewData}
                            className={"Table h-80 overflowY"} />
                    </div>
                </div>
            </div>
        </Fragment>
        );
    }
}

export default NewStatement;
