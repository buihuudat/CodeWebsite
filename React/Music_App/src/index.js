const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const route = require('./routes');
const db = require('./config/db');
const hbs = handlebars.create({ extname: '.hbs' });
const app = express();
const port = 3000;

db.connect();
app.use(express.static(__dirname + '/public'));


// app.use(morgan('combined'));
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

route(app);

app.listen(port);