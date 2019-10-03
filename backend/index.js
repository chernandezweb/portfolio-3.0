const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

const port = process.env.PORT || 3000;



app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use(bodyParser.json());

// Enable CORS from client-side
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials, token");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// router(app);

app.use(function(err, req, res, next) {
    console.log(err);

    res.status(500).json({
        error:err
    });

});

module.exports = app;

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'../frontend/build/index.html'));
});

app.listen(port, '127.0.0.1', () => console.log(`Backend listening on port ${port}!`));

console.log('Magic happens on port ' + port);







