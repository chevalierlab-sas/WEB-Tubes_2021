const express = require('express')
const path = require('path')
const multer = require('multer')
const cookieParser = require('cookie-parser')
const response = require('../helpers/ResponseHandler')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))

// for parsing application/json
app.use(express.json())
// for parsing application/xwww-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// for parsing multipart/form-data
app.use(multer().array())
app.use(cookieParser())

// route version
app.use('/api/', require('./routes/index'))

app.use((req, res) =>
    response.error404(res)
)

module.exports = app