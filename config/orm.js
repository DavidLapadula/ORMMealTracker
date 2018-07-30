let connection = require('../config/connection.js');

// Print the amount of question marks needed for a prepared statement
function preparedQuestionMarks(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Make string from key value pairs
function keyValToSQL(ob) {
    let arr = [];

    for (var key in ob) {
        // use prototype method as a fail safe. Prevents from pushing in inherited methods
        if (Object.prototype.hasOwnProperty.call(ob, key)) {
            arr.push(`${key}=${ob[key]}`);
        }
    }
    return arr.toString();
}


// return promises of all database queries recieved from models
let orm = {
    selectAll: function (table) {
        return new Promise(function (resolve, reject) {
            let allQuery = `SELECT * FROM ${table}`
            connection.query(allQuery, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result)
                }
            });
        });
    },

    insertOne: function (table, columns, values, ) {
        return new Promise(function (resolve, reject) {
            let insertQuery = `INSERT INTO ${table} (${columns.toString()}) VALUES (${preparedQuestionMarks(values.length)})`;
            connection.query(insertQuery, values, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result)
                }
            }); 
        });
    }, 

    updateOne: function (table, colKeyVals, condition) {
        return new Promise(function (resolve, reject) {
            let updateQuery = `UPDATE ${table} SET ${keyValToSQL(colKeyVals)} WHERE ${condition}`
            connection.query(updateQuery, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result); 
                }
            });
        });
    }
};    


module.exports = orm; 