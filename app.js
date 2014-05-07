var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var locations = ['Seville', 'Canary Islands', 'Cape Verde', 'Strait of Magellan', 'Guam', 'Philippines']

var homepage = function(req, res) {
	res.render('seville', {
		locationsArr: locations
	});
}

app.get('/', homepage);

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

var server = app.listen(8308, function() {
	console.log('Express server listening on port ' + server.address().port);
});
