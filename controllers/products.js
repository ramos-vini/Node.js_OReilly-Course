const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        title: 'Add-Product',
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req, res, next) =>{
    products.push({title: req.body.title});
    console.log(products);
    res.redirect('/admin/add-product');
}

exports.getProducts = (req, res, next) => {
    res.render('shop', {
        prods: products,
        title: 'Shop',
        path: '/'
    });
}