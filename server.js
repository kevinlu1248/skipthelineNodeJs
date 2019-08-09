"use strict";

const http = require('http');
const mysql = require('mysql');
const express = require('express');
// const bootstrap = require('bootstrap');
const app = express();

app.use(express.static('public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/jquery/dist'));
app.use(express.static(__dirname + '/node_modules/bubbly-bg/dist'));
app.use(express.static(__dirname + '/node_modules/animate.css/'));
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
    res.render('index', {path: req.originalUrl});
})

app.get('/signup', (req, res) => {
    // res.send('Hello World');
    res.render('signup', {path: req.originalUrl});
})

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at localhost:${port}`));
