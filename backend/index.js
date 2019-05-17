const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    router = require('./router');

const port = 4000;

app.listen(port, () => console.log(`Backend listening on port ${port}!`));

app.use(bodyParser.json());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    //
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = '../frontend/build/index.html'));
    })
}

// Enable CORS from client-side
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials, token");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

router(app);

app.use(function(err, req, res, next) {
    console.log(err);

    res.status(500).json({
        error:err
    });

});

module.exports = app;