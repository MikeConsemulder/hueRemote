/**
 * Created by Mike C on 17-Nov-17.
 */
// if user is running mozilla then use it's built-in WebSocket
window.WebSocket = window.WebSocket || window.MozWebSocket;

var url = 'ws://officehue.herokuapp.com';
url = 'ws://127.0.0.1:5000';
//var port = '1337';

let socket = io.connect(url);

socket.on('news', function (data) {

	console.log(data);
	socket.emit('my other event', { my: 'data' });
});