const express = require('express');

const expressHbs = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.engine('hbs', expressHbs.engine({layoutsDir: 'views', extname: '.hbs', defaultLayout: ''}));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {title: 'Page not Found'});
});

app.listen(3000);