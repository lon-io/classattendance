var express = require('express');
var path = require('path');

var app = express();

var db_name = 'rfid_attendance';
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

//provide a sensible default for local development
var mongodb_connection_string = 'mongodb://127.0.0.1:27017/' + db_name;
//take advantage of openshift env vars when available:
if(process.env.OPENSHIFT_MONGODB_DB_URL){
  mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + db_name;
}

app.set('port', (server_port));

app.use('/', express.static(__dirname + '/../../dist'));
app.use('/', express.static(__dirname + '/../public'));

var mongoose = require('mongoose');
mongoose.connect(mongodb_connection_string);
var db = mongoose.connection;
mongoose.Promise = global.Promise;

var middleware_then_route = require('./middleware');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');

  //Load the rest of the Server App through middleware
  middleware_then_route(app);

  app.listen(app.get('port'), function() {
    // console.log( "Listening on " + server_ip_address + ", port " + server_port );
    console.log('Attendance System Server listening on port '+ app.get('port'));
  });
});

module.exports = app;