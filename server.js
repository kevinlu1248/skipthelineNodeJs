"use strict";

// const http = require('http');
const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
var bodyParser = require('body-parser');
const path = require('path');
// const bootstrap = require('bootstrap');
var favicon = require('serve-favicon');
const app = express();

// mysql conn
var conn = mysql.createConnection({
    host: "localhost",
    port: "8889",
    user: "root",
    password: "root"
})

conn.connect((err) => {
    if (err) throw err;
    console.log('connected as id ' + conn.threadId);
});

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static('views'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bubbly-bg/dist'));
app.use('/css', express.static(__dirname + '/node_modules/animate.css/'));
app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/views/favicon.ico'));

app.get('/', (req, res) => {
    res.render('index', {path: req.originalUrl});
})

app.get('/signup', (req, res) => {
    // res.send('Hello World');
    res.render('signup', {path: req.originalUrl});
})

app.post('/auth', (req, res) => {
    // res.send('Hello World');
    console.log(req.body);
    response.send('Please enter Username and Password!');
    response.end();
})

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at localhost:${port}`));
