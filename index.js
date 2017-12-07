var express = require('express')
var mongoose = require('mongoose');
var app = express()
var result = "";
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
var uristring = 'mongodb://localhost';

app.get('/', function(request, response) {
  response.send(result);
});
  

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

  

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) {
  result = "error"; 
  } else {
  result = "good";
  }
});
