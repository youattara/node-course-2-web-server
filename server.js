//require express
const express = require('express');
//hbs
const hbs = require('hbs');

//port
const port = process.env.PORT || 3000;

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

//app use
app.use((req, res, next) => {
  //res.render('maintenance.hbs');
  next();
})

//static dirname
app.use(express.static(__dirname + '/public'));


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

//projects
var projectsPageData = {
  pageTitle: 'Projects Page',
  welcomeMsg: 'Welcome to my about page'
}
app.get('/projects', (req, res) => {
  res.render('projects.hbs', projectsPageData)
});

//bad
app.get('/bad', (req, res) => {
  res.send({
    errorMsg: 'Unable to get page you requested'
  })
});

//listen to port 3000
app.listen(port, () => {
  console.log(`Starting up server on port ${port}`);
});
