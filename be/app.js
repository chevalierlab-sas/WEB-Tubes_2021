var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/v1', require('./routes/v1'));

app.use((req, res) => {
    res.status(404).json({
        code: 404,
        message: 'Request not found'
    })
})

module.exports = app;
