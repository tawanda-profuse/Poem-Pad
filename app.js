const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const { render } = require('ejs');
const poemRoutes = require('./routes/poemRoutes');

// express app
const app = express();

//connect to mongoDB
const dbURI = 'mongodb://profusetawanda:H50Eb0PJuuzAcCbo@poem-pad-shard-00-00.tngyj.mongodb.net:27017,poem-pad-shard-00-01.tngyj.mongodb.net:27017,poem-pad-shard-00-02.tngyj.mongodb.net:27017/poem-pad?ssl=true&replicaSet=atlas-x690cf-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(result => app.listen(3000))
.catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
//just added
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/poems');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/poems', poemRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
