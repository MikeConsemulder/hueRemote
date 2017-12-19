let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
const path = require('path');

app.use('/officeInterface', express.static('OfficeInterface'));

app.get('/', function(req, res){

	res.sendFile(path.join(__dirname, '..', 'OfficeInterface/index.html'));
});

io.on('connection', function(socket){

	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data) {

		console.log(data);
	});
});

server.listen(3000, function(){
    console.log('listening on *:3000');
});

