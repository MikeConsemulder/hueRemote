/**
 * Created by Mike C on 17-Nov-17.
 */
// if user is running mozilla then use it's built-in WebSocket
window.WebSocket = window.WebSocket || window.MozWebSocket;

//import credentials from '../credentials/credentials';

let url = 'ws://officehue.herokuapp.com';
url = 'ws://127.0.0.1:1337';


let Connection = initConnection(url);

let PiUserName = 'testing';
let PiPassword = 'test';
let NormalUserName = 'testing';
let NormalPassword = 'test';


function initConnection(url){

    let connection = new WebSocket(url);

    connection.onopen = function () {
        // connection is opened and ready to use
        console.log('open');
    };

    connection.onclose = function (){

        console.log('connection closed');
        initConnection(url);
    };

    connection.onerror = function (error) {
        console.log('error');
        // an error occurred when sending/receiving data
    };

    connection.onmessage = function (message) {

        console.log(message.data);
        // try to decode json (I assume that each message
        // from server is json)
        try {
            //
        } catch (e) {
            //
        }
        // handle incoming message
    };

    return connection;
}


function authenticatieAsPi(){

    let message = {
        type: 'raspberryPiInit',
        username: PiUserName,
        password: PiPassword,
        message: ''
    };

    Connection.send(JSON.stringify(message));
}

function sendMessage(messageText){

    let message = {
        type: 'normalMessage',
        username: NormalUserName,
        password: NormalPassword,
        message: messageText
    };

    Connection.send(JSON.stringify(message));
}

