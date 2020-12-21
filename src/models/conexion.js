const mysql = require('mysql');
//mysql://be9cd74a1aad6b:63cb72bf@us-cdbr-east-02.cleardb.com/heroku_c5963e5ac37fee1?reconnect=true
const connection = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user:'be9cd74a1aad6b',
    password:'63cb72bf',
    database:'heroku_c5963e5ac37fee1'
});
module.exports = connection;