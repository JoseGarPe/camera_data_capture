const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'camera_data_capture'
});
module.exports = connection;