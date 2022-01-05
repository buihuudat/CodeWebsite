const express = require('express');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const $ = require( "jquery" );


const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');
db.connect();

app.use(express.static(__dirname + '/public'));
app.engine('hbs', engine({ 
  extname: 'hbs',
  helpers: {
    sum: (a, b) => a + b,
  }, 
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


route(app);
app.listen(port);