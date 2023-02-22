const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/add-product');
})

app.use('/', (req, res, next) => {
    res.send('<h1>Hello, Express.js!</h1>');
});

app.listen(3000);