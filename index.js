var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(port, function() {
  console.log('Listening on port: ' + port);
})
