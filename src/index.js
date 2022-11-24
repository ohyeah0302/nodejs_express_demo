const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const db = require('./config/db');

const app = express();
const port = 3000;

db.connect();
// route
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
// hhtp logger
app.use(morgan('dev'));
// Template engin
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// parse body, middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

route(app);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
