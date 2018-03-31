//require express
const express = require('express');
//hbs
const hbs = require('hbs');

//app server
var app =  express();

//register partials
hbs.registerPartials('views/partials');

//register helper
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

//set view engine
app.set('view engine', 'hbs');

//static dirname
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  res.render('maintenance.hbs');
})

//root
var homePageData = {
  pageTitle: 'Home Page',
  welcomeMsg: 'Welcome to my page'
}
app.get('/', (req, res) => {
  res.render('home.hbs', homePageData)
});

//about
var aboutPageData = {
  pageTitle: 'About Page',
  welcomeMsg: 'Welcome to my about page'
}
app.get('/about', (req, res) => {
  res.render('about.hbs', aboutPageData)
});

//bad
app.get('/bad', (req, res) => {
  res.send({
    errorMsg: 'Unable to get page you requested'
  })
});

//listen
app.listen(3000, () => {
  console.log('Starting up server on port 3000');
});
