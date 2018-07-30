// require mySQl dependancy
let mysql = require('mysql'); 
let connection; 

// Connect to the database. Either on local machine or heroku server
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL); 
} else {
    connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'password',
        database: 'burgers_db'
    });
}
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