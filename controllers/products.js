const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        title: 'Add-Product',
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req, res, next) =>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/admin/add-product');
}

exports.getProducts = (req, res, next) => {
    res.render('shop', {
        prods: Product.fetchAll(),
        title: 'Shop',
        path: '/'
    });
}