const express = require('express');
const hbs = require('hbs');
const films = require('./data/films.json');
const PORT = 3000;

const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static('public'));

app.get('/', (req, res, next) => {
  const name = 'JOSE';
  res.render('home', { name })
});

app.get('/films', (req, res, next) => {
  res.render('films', { films })
});

app.listen(PORT, () => console.info(`Application listen at port ${PORT}`));
