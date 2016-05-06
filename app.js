var     express = require('express'),
        path = require('path'),
        logger = require('morgan'),
        session = require('express-session'),
        app = express(),
        router = express.Router(),
        request = require('request'),
        userId = '';

app.use(logger('dev'));
app.use(session({secret : 'blahblahblah', saveUninitialized: true, resave : true }));

app.use(express.static(path.join(__dirname, '/public')));


router.get('/', function(req, res){
    res.redirect('/index.html');
});


app.use('/', router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
