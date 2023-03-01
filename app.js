const express = require('express');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);