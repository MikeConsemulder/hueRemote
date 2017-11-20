/**
 * Created by Mike C on 17-Nov-17.
 */
// if user is running mozilla then use it's built-in WebSocket
window.WebSocket = window.WebSocket || window.MozWebSocket;

var connection = new WebSocket('ws://127.0.0.1:1337');

connection.onopen = function () {
    // connection is opened and ready to use
    console.log('open');
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