var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var locations = ['Seville', 'Canary Islands', 'Cape Verde', 'Strait of Magellan', 'Guam', 'Philippines']

var nextLocation = [
	{location: 'Seville',
	nextLocation: 'Canary Islands'},
	{location: 'Canary Islands',
	nextLocation: 'Cape Verde'},
	{location: 'Cape Verde',
	nextLocation: 'Straight of Magellan'},
	{location: 'Straight of Magellan',
	nextLocation: 'Guam'},
	{location: 'Guam',
	nextLocation: 'Philippines'},
	{location: 'Philippines',
	nextLocation: 'Return to Seville'}
	]

// Created variable so / and /seville will be served same exact content
var homepage = function(req, res) {
	res.render('seville', {
		locationsArr: locations
	});
}

app.get('/', function(req, res) {
	res.render('homepage', {
		locationsArr: locations
	});
});

app.get('/seville', homepage);

app.get('/canaryislands', function(req, res) {
	res.render('canaryislands', {
		locationsArr: locations
	});
});

app.get('/capeverde', function(req, res) {
	res.render('capeverde', {
		locationsArr: locations
	});
});

app.get('/straightofmagellan', function(req, res) {
	res.render('straightofmagellan', {
		locationsArr: locations
	});
});

app.get('/guam', function(req, res) {
	res.render('guam', {
		locationsArr: locations
	});
});

app.get('/philippines', function(req, res) {
	res.render('philippines', {
		locationsArr: locations
	});
});

app.get('/unknown', function(req, res) {
	res.render('unknown', {
		locationsArr: locations
	});
});

app.get('/next', function(req, res) {
	var currentLocation=req.param('locations')
	for (var i = 0; i < nextLocation.length; i++) {
		if (currentLocation.toUpperCase() === (nextLocation[i].location).toUpperCase()) {
			res.send(nextLocation[i]);
		}
	}
	
});

app.all('*', function(req, res) {
  res.redirect('/unknown');
});



var server = app.listen(8308, function() {
	console.log('Express server listening on port ' + server.address().port);
});
