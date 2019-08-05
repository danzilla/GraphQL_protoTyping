import React from 'react';
import csv from "csvtojson";

import CSVReader from 'react-csv-reader'

class FileReader extends React.Component {
    // React States
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            data1: []
        };
    }
    // Parase CSV to JSON array 
    // Need more works~
    ConvertToCSV(objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line !== '') line += ','
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    }
    // File handle
    // On file being reviews
    handleForce = data => {
        // Convert csv to Json
        csv({
            noheader: true,
            output: "json"
        })
        .fromString(this.ConvertToCSV(data))
        .then(csvRows => {
            this.setState({
                data: csvRows,
                data1: this.ConvertToCSV(data),
                data2: csvRows,
            });
            this.props.reviewData(csvRows)
        })
    }
    // Render
    render() {
         return (
            <CSVReader
                cssClass={this.props.className}
                label={this.props.btnText}
                onFileLoaded={this.handleForce}
                inputId="stat"
                accept=".csv, text/csv"
                parserOptions={{
                    delimiter: "",	// auto-detect
                    newline: "",	// auto-detect
                    quoteChar: '"',
                    escapeChar: '"',
                    header: false
                }}
            />
        );
    }
}

export default FileReader;