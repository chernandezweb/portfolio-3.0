const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Backend listening on port ${port}!`));


// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../frontend/build')));
//     //
//     app.get('*', (req, res) => {
//         res.sendfile(path.join(__dirname = '../frontend/build/index.html'));
//     })
// }

app.use(express.static(path.join(__dirname, '../frontend/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'../frontend/build/index.html'));
});

app.use(bodyParser.json());

// Enable CORS from client-side
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials, token");
//     res.header("Access-Control-Allow-Credentials", "true");
//     next();
// });

router(app);

app.use(function(err, req, res, next) {
    console.log(err);

    res.status(500).json({
        error:err
    });

});

module.exports = app;

console.log('Magic happens on port ' + port);







