const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./02-fetching-products-time-to-practice/controllers/error');
const db = require('./02-fetching-products-time-to-practice/util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./02-fetching-products-time-to-practice/routes/admin');
const shopRoutes = require('./02-fetching-products-time-to-practice/routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
