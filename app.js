var express = require('express'),
    app = express(),
    httpServer = require('http').Server(app);

// make default public path as 'www'.
app.use(express.static('www'));

// handle root call.
app.get('/', function(req, rsp){
    rsp.sendFile(__dirname + '/www/index.html')
});

// listen on port 2121.
httpServer.listen(2121, function() {
   console.log('listening on port *:2121');
});