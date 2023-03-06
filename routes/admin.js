const express = require('express');

const path = require('path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        title: 'Add-Product'
    });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) =>{
    products.push({title: req.body.title});
    console.log(products);
    res.redirect('/admin/add-product');
});

exports.products = products;
exports.router = router;