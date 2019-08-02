// process query
const { blingblaw, postgresDefault } = require('../app.config')

let pageMesage = {title:"", message: "", checked: "", result: "" };


function process_client(client, sql_statement, FirstRunResults, resolve, reject) {
    client.query(sql_statement.sql, (clientErr, clientResult) => {
        if (clientErr) {
            pageMesage = {
                title: sql_statement.title,
                checked: clientErr.code,
                result: clientErr.stack,
                message: 'Error executing query'
            }; FirstRunResults= pageMesage; resolve(pageMesage);
        } else if (clientResult) {
            pageMesage = {
                title: sql_statement.title,
                checked: "checked",
                result: clientResult,
                message: 'Yeee'
            }; FirstRunResults.push(pageMesage); resolve(pageMesage);
        }
    });
}
// Process SQL using - postgresDefault ('blingBlaw')
// Export - process_sql(sql_statement) - Require: sql_statement
function process_sql_blingblaw(sql_statement, FirstRunResults) {
    return new Promise((resolve, reject) => {
        blingblaw.connect((err, client, release) => {
            // If Query and connection is Good
            if (client) {  
                process_client(client, sql_statement, FirstRunResults, resolve, reject);
                release(); 
            } 
            // If catch any error during DB connection 
            else if (err) {
                pageMesage = {
                    title: sql_statement.title, 
                    checked: err.code, 
                    result:  err.stack,
                    message: 'Error acquiring client'
                }; resolve(pageMesage); release();
            } else {
                pageMesage = {
                    title: sql_statement.title, 
                    checked: "nopenope",
                    result:  "nopenope",
                    message: 'Something wrong'
                }; resolve(pageMesage); release();
            }
        });
    });
};
// Process SQL using - postgresDefault ('public')
// Export - process_sql(sql_statement) - Require: sql_statement
function process_sql_postgresDefault(sql_statement) {
    return new Promise((resolve, reject) => {
        postgresDefault.connect((err, client, release) => {
            // If Query and connection is Good
            if (client) {
                process_client(client, sql_statement, resolve, reject);
                release();
            }
            // If catch any error during DB connection 
            else if (err) {
                pageMesage = {
                    title: sql_statement.title,
                    checked: err.code,
                    result: err.stack,
                    message: 'Error acquiring client'
                };
                resolve(pageMesage);
                release();
            } else {
                pageMesage = {
                    title: sql_statement.title,
                    checked: "nopenope",
                    result: "nopenope",
                    message: 'Something wrong'
                };
                resolve(pageMesage);
                release();
            }
        });
    });
};


// Export 
const process_sql = {
    using_blingblaw: process_sql_blingblaw,
    using_postgresDefault: process_sql_postgresDefault
}
module.exports = process_sql;