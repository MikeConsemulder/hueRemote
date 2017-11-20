var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
    // process HTTP request. Since we're writing just WebSockets
    // server we don't have to implement anything.
});
server.listen(process.env.PORT || 1337, function() { });


//Sending data
//connection.send('');

// create the server
wsServer = new WebSocketServer({
    httpServer: server
});


// WebSocket server
wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);

    console.log('new user connected');

    // This is the most important callback for us, we'll handle
    // all messages from users here.
    connection.on('message', function(message) {

        //check if message is legit
        if (message.type === 'utf8') {
            // process WebSocket message

            console.log(message.utf8Data);

        }
    });

    connection.on('close', function(connection) {
        // close user connection

        console.log('bye bye user');

    });
});