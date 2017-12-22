/**
 * Created by Mike C on 17-Nov-17.
 */

//First create the connection
let socket = io();
//Present yourself as an normal connection
presentYourself('normalUser');

let el = document.getElementById('placeholder');

function presentYourself(connectionType){

	socket.emit('clientPresents', connectionType);
}



//socket listeners

socket.on('news', function(data) {

	el.innerHTML = 'data: ' + data.hello;
});

socket.on('officeMapping', function(officeMapping){

	console.log(officeMapping);
});

socket.on('mappingScript', function(officeMapping){

	console.log(officeMapping);
});