const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("In a middleware!");
    next();
});

app.use((req, res, next) => {
    console.log("In another middleware!");
    res.send('<h1>Hello, Express.js!</h1>');
});

app.listen(3000);