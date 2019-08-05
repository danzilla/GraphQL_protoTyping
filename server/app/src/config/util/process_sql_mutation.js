// Process query mutatation 
const { blingblaw, postgresDefault } = require('../app.config');
// Using - mutate_sql_blingblaw ('blingBlaw')
// Export - mutate_sql(callback, sql_statement, Results)
function mutate_sql_blingblaw(callback, sql_statement, Results) {
    // PageMessage
    let pageMessage = { title:"Query_sql", message: "", checked: "", result: "" };
    // Using default Database "blingblaw"
    blingblaw.connect(function(err, client, release){
        if(err) {
            pageMessage.title = sql_statement.title;
            pageMessage.checked = err.code;
            pageMessage.result = err.stack;
            pageMessage.message = "Error connecting to client";
            Results.push(pageMessage);
            release();
            callback(null, pageMessage);
        } else if (client){
            // Connect to DB using default Database 
            client.query(sql_statement.sql, userData, function (clientErr, clientResult) {
                if (!clientErr && clientResult) { // If no errors and Results == Good
                    pageMessage.title = sql_statement.title;
                    pageMessage.checked = "checked";
                    pageMessage.result = clientResult;
                    pageMessage.message = "Query good!";
                } else if (clientErr) { // if any errors
                    pageMessage.title = sql_statement.title;
                    pageMessage.checked = clientErr.code;
                    pageMessage.result = clientErr.stack;
                    pageMessage.message = "Error executing query";
                }
                Results.push(pageMessage);
                release();
                callback(null, pageMessage);
            });
        }
    });
};

// Process SQL using - postgresDefault ('public')
// Export - mutate_sql(callback, sql_statement, Results)
function mutate_sql_postgresDefault(callback, sql_statement, Results) {
    // PageMessage
    let pageMessage = { title:"Query_sql", message: "", checked: "", result: "" };
    // Using default Database "public"
    postgresDefault.connect(function(err, client, release){
        if(err) {
            pageMessage.title = sql_statement.title;
            pageMessage.checked = err.code;
            pageMessage.result = err.stack;
            pageMessage.message = "Error connecting to client";
            Results.push(pageMessage);
            release();
            callback(null, pageMessage);
        } else if (client){
            // Connect to DB using default Database 
            client.query(sql_statement.sql, function (clientErr, clientResult) {
                if (!clientErr && clientResult) { // If no errors and Results == Good
                    pageMessage.title = sql_statement.title;
                    pageMessage.checked = "checked";
                    pageMessage.result = clientResult;
                    pageMessage.message = "Query good!";
                } else if (clientErr) { // if any errors
                    pageMessage.title = sql_statement.title;
                    pageMessage.checked = clientErr.code;
                    pageMessage.result = clientErr.stack;
                    pageMessage.message = "Error executing query";
                }
                Results.push(pageMessage);
                release();
                callback(null, pageMessage);
            });
        }
    });
};
// Export 
const mutate_sql = {
    using_blingblaw: mutate_sql_blingblaw,
    using_postgresDefault: mutate_sql_postgresDefault
}
module.exports = mutate_sql;