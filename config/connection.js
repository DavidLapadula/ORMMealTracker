// require mySQl dependancies
let mysql = require('mysql'); 

// Connect to the database
let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'burgers_db'
});

// Start and make the connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

// export the connection
module.exports = connection;  