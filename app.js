const express = require('express');
const app = express();
var cookieParser = require('cookie-parser')
const cors = require('cors');
//import middleware for Errors
const errorMidilewere = require('./middlewere/Error')



//import config midelewere
app.use(express.json());
app.use(cookieParser());
app.use(cors());
//import routes
const product = require('./routes/ProductRoutes');

app.use("/api/v1",product)

// error middleware
app.use(errorMidilewere);

module.exports = app;                                 