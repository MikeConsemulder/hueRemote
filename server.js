const express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use('/officeInterface', express.static('OfficeInterface'));
app.use('/json', express.static('json'));

app.get('/', function(req, res){

	res.sendFile(__dirname + '/OfficeInterface/office.html');
});

io.on('connection', function(socket){

	socket.emit('news', { hello: 'world' });

	socket.on('clientPresents', function (data) {

		checkUser(socket, data);
	});
});

server.listen(PORT, function(){
    console.log('listening on *:' + PORT);
});

function checkUser(socket, user){

	if(user === 'normalUser'){

		socket.emit('officeMapping', '{test,test}');
	}else if(user === 'rasp'){

		console.log('save connection as raspberryPi');
		socket.emit('mappingScript', JSON.stringify(__dirname + '/Json/officeMapping.json'));
		//
	}
}
