const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const prods = adminData.products;
    res.render('shop', {
        prods: prods,
        title: 'Shop',
        path: "/",
        hasProds: prods.length > 0 ? true : false,
        activeShop: true
    });
});

module.exports = router;