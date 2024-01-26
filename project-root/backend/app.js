const express = require('express');
const body_parser = require('body-parser');
const studentRouter = require('./src/routes/studentRoutes')



const app = express();
app.use(body_parser.json());

app.use('/',studentRouter);



module.exports = app;