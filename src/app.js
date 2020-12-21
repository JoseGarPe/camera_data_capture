const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
//settings
app.set('port',process.env.PORT || 3000);

//Middleware 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

//routes
require('./routes/conteoSucursalRoutes')(app);

app.listen(app.get('port'),()=>{
    console.log('server on port 3000');
});