const express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
const path = require('path');


const PORT = process.env.PORT || 3000;

console.log('yoyo running ' + PORT);

// app.use('/officeInterface', express.static('OfficeInterface'));
//
// app.get('/', function(req, res){
//
// 	res.sendFile(path.join(__dirname, '..', 'OfficeInterface/index.html'));
// });
//
// io.on('connection', function(socket){
//
// 	socket.emit('news', { hello: 'world' });
// 	socket.on('my other event', function (data) {
//
// 		console.log(data);
// 	});
// });
//
// server.listen(PORT, function(){
//     console.log('listening on *:3000');
// });

// 'use strict';
//
// const express = require('express');
// const socketIO = require('socket.io');
// const path = require('path');
//
// const PORT = process.env.PORT || 3000;
// const INDEX = path.join(__dirname, '..', 'OfficeInterface/index.html');
//
// const server = express()
// 	.use((req, res) => res.sendFile(INDEX) )
// 	.listen(PORT, () => console.log(`Listening on ${ PORT }`));
//
// const io = socketIO(server);
//
// io.on('connection', (socket) => {
// 	console.log('Client connected');
// 	socket.on('disconnect', () => console.log('Client disconnected'));
// });
//
// setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
