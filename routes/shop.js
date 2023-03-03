const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const prods = adminData.products;
    res.render('shop', {prods: prods, title: 'Pug Shop', path: "/", hasProds: prods.length > 0 ? true : false });
});

module.exports = router;