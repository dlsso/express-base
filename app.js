// Require the express package
var express = require('express');

// Instantiate a new express application and store it in 'app'
var app = express();

// Handle all root url requests by sending back a string of html
app.get('/', function(req, res) {
	// Send the html string back to the client machine
	res.send('<h1>Hello Boulder! This is the homepage</h1>');
});

// Add a handler for the '/about' page
app.get('/about', function(req, res){
	// Send back some html to the requester
	res.send('<h1>About Page</h1>')
})

// Set up the actual HTTP listerner(port, onRunning)
var server = app.listen(8038, function() {
	// Print to terminal to let us know this thing actually works
	console.log('Express server listening on port ' + server.address().port);
});
