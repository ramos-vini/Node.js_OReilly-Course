const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log("This Always Runs");
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log("In a middleware!");
    res.send('<h1>Want to add a Product?</h1>');
});

app.use('/', (req, res, next) => {
    console.log("In another middleware!");
    res.send('<h1>Hello, Express.js!</h1>');
});

app.listen(3000);