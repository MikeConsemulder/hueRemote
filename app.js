/*
 X-Minions messenger application
 V1.0
 Mike Consemulder
 26-01-2017
 */

/*
 POST DATA =
 token=XXXXXXXXXXXXXXXXXX
 team_id=T0001
 team_domain=example
 channel_id=C2147483705
 channel_name=test
 timestamp=1355517523.000005
 user_id=U2147483697
 user_name=Steve
 text=googlebot: What is the air-speed velocity of an unladen swallow?
 trigger_word=googlebot:
 */

//requirements
var express = require('express');
var bodyParser = require('body-parser');

//user class
function User() {

	this.team_domain = "";
	this.channel_name = "";
	this.timestamp = "";
	this.user_name = "";
	this.user_id = "";
	this.text = "";
}

//global variables
var app = express();
var port = process.env.PORT || 1337;
var possible_answers = ['beer','coffee','sex','whiskey'];

// body parser middleware
app.use(bodyParser.urlencoded({extended: true}));

// test route
app.get('/', function (req, res) {
	res.status(200).send('Hello world!');
});

app.listen(port, function () {
	console.log('Listening on port ' + port);
});

app.post('/hello', function (req, res, next) {

	var user = make_user(req);
	var userName = user.user_name;
	var demand = search_for_demand(user.text);
	var response_message = get_response_by_demand(demand);
	var botPayload = {
		text: response_message
	};
	// Loop otherwise..
	if (userName !== 'slackbot') {
		return res.status(200).json(botPayload);
	} else {
		return res.status(200).end();
	}
});

//search the demand
function search_for_demand(message) {

	var return_demand = "";
	possible_answers.some(function(demand) {
		if(message.toLowerCase().search(demand) != -1){
			return_demand = demand;
		}
	});
	return return_demand;
}

//get the right response by demand
function get_response_by_demand(demand) {

	switch (demand.toLowerCase()) {
		case 'beer':
			return 'YEAH you want a beer';
			break;
		case 'coffee':
			return 'YEAH you want a coffee, good choice';
			break;
		case 'sex':
			return "sorry sir, can't help you with that";
			break;
		case 'whiskey':
			return "Have some whiskey mofo, <a href='https://www.gall.nl/shop/whisky/?utm_source=google&utm_medium=cpc&utm_campaign=218365976'>click click</a>";
			break;
		default:
			return 'excuse me sir. I have no idea what you are saying! maybe i can get you a banana?';
	}
}

//Create the user
function make_user(user_object) {
	var temp_user = new User();
	temp_user.team_domain = user_object.body.team_domain;
	temp_user.channel_name = user_object.body.channel_name;
	temp_user.timestamp = user_object.body.timestamp;
	temp_user.user_name = user_object.body.user_name;
	temp_user.user_id = user_object.body.user_id;
	temp_user.text = user_object.body.text;
	return temp_user;
}