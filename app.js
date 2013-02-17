
/**
* Module dependencies.
*/

var express = require('express')
, routes = require('./routes')
, http = require('http')
, path = require('path');

var app = express();

var Rsvp = require('./models/rsvp').Rsvp;
var mongoose = require('mongoose'),
db;

mongoose.connect(process.env.MONGOLAB_URI);

db = mongoose.connection;

 // Handle errors
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){

  app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'app')));
  });

   app.configure('development', function(){
    app.use(express.errorHandler());
  });

  app.get('/', routes.index);
  app.get('/partials/:name', routes.partials);
  app.post('/api/rsvp', function (req, res) {
    console.log(req.body);
    new Rsvp(req.body).save(function(err, rsvp){
      if(err) throw err;
      console.log(rsvp);
    });
  });

  app.get('/api/rsvp', function (req, res) {
    Rsvp.find(function(err, rsvps){
      res.send(rsvps);
    });
  });

  http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
  });

});