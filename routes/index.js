var express = require('express');
var passport = require('passport');
var router = express.Router();
var Account = require('../models/account');

// Home page
router.get('/', function (req, res) {
  res.render('index', { title: 'Dog App', user: req.user });
});

// Registration page
router.get('/register', function(req, res) {
  res.render('register', { title: 'Dog App Registration' });
});

// Registration POST route
router.post('/register', function(req, res) {
  Account.findOne({ username: req.body.username })
    .then(function (user) {
      if (user != null) {
        console.log("User already exists: " + req.body.username);
        return res.render('register', {
          title: 'Registration',
          message: 'Existing User',
          account: req.body.username
        });
      }

      let newAccount = new Account({ username: req.body.username });
      Account.register(newAccount, req.body.password, function(err, user) {
        if (err) {
          console.log("Database creation issue: " + err);
          return res.render('register', {
            title: 'Registration',
            message: 'Database access error',
            account: req.body.username
          });
        }

        if (!user) {
          return res.render('register', {
            title: 'Registration',
            message: 'Database access error',
            account: req.body.username
          });
        }

        console.log('Success, redirect');
        res.redirect('/');
      });
    })
    .catch(function (err) {
      return res.render('register', {
        title: 'Registration',
        message: 'Registration error',
        account: req.body.username
      });
    });
});

// Login page
router.get('/login', function(req, res) {
  res.render('login', { title: 'Dog App Login', user: req.user });
});

// Login POST route
router.post("/login", passport.authenticate("local"), function (req, res) {
  res.redirect("/");
});

// Logout route
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// Ping route
router.get('/ping', function(req, res) {
  res.status(200).send('pong');
});

module.exports = router;
