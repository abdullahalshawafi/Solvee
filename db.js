const mysql = require('mysql');

//Database Connection Setup
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
});


module.exports = {
    connectToDB: () => {
        connection.connect(err => {
            if (err) return console.error('Error connecting to DB', err);
            console.log('***DB Connected***');
        });
    },
    QueryDB:connection
    ,
    endDBConnection: () => {
        // connection.end(err => {
        //   // if (err) return console.error(err);
        //   // The connection is terminated gracefully
        //   // Ensures all remaining queries are executed
        //   // Then sends a quit packet to the MySQL server.
        // });
    }
}