"use strict";

const http = require('http');
const mysql = require('mysql');
const express = require('express');
// const bootstrap = require('bootstrap');
const app = express();

app.use(express.static(__dirname + 'public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.set('view engine', 'ejs');

// var con = mysql.createConnection({
//     host: "localhost",
//     port: "8889",
//     user: "root",
//     password: "root"
// }).connect((err) => {
//     if (err) throw err;
//     console.log("Connected!");
// });

app.get('/', (req, res) => {
    // res.send('Hello World');
    res.render('index');
})

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at localhost:${port}`));
