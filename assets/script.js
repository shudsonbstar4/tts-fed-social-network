//Create usernames that users can log in with

var validUsernames = [
	{"user": "Username"},
	{"user": "SarahH"},
	{"user": "Charlie"},
	{"user": "Smith"},
	{"user": "Carly"},
	{"user": "CoolGuy"}
];

//var x = "String here \"Still a string\" or use 'Still a string'";

var signOut = function(){
	document.getElementById("welcome_msg").innerHTML = '';
	document.getElementById("logged_in").style.display = "none";
	document.getElementById("logged_out").style.display = "block";
	document.getElementById("sign_in").style.display = "block";
	document.getElementById("sign_out").style.display = "none";
};

var signIn = function(username){
	document.getElementById("welcome_msg").innerHTML = '<p class="welcome">Welcome to My Neighborhood, ' + username + '!</p>';
	document.getElementById("logged_in").style.display = "block";
	document.getElementById("logged_out").style.display = "none";
	document.getElementById("sign_out").style.display = "block";
	document.getElementById("sign_in").style.display = "none";
};

var signInModal = function(){
	var username = prompt("Please enter your username to log in.", "Username");
	if(username !== null && username !== ''){ //First check to see if they've entered a username
		for(var a = 0; a < validUsernames.length; a++){ //If the user has entered input, check if it's a valid username
			if(validUsernames[a].user === username){
				var validUser = true;
				//put our signIn function here
				signIn(username);
				break;
			};
		};

	} else {
		alert("Sorry! You need to enter a username!");
	}
};

var validateAnswer = function(event){
	event.preventDefault();

	var answer = document.getElementById('challenge1').value;
	var sum = 2 + 2;

	if(answer === sum.toString()){
		document.getElementById('correct').style.display = "inline-block";
	} else {
		document.getElementById('incorrect').style.display = 'inline-block';
	};

	setTimeout(function(){
		document.getElementById('correct').style.display = "none";
		document.getElementById('incorrect').style.display = "none";
	}, 3000);
};

var addToFavs = function(title, friend){
	var paragraph = '<p>' + title + ' by ' + friend + '</p>';
	document.getElementById("yay_favs").style.display = "block";
	document.getElementById("no_favs").style.display = "none";
	document.getElementById("recent_fav").innerHTML = paragraph;
};

var favorite = function(title, friend, id){
	//fill in with code
	document.getElementById(id).style.color = "blue";
	document.getElementById(id).style.fontSize = "2.2em";
	document.getElementById(id).style.transition = "0.4s linear all";

	setTimeout(function(){
		document.getElementById(id).style.color = "rgb(180, 0, 80)";
		document.getElementById(id).style.fontSize = "2em";
		document.getElementById(id).style.transition = "0.4s linear all";
	}, 500);

	alert("You have favorited " + title + " by " + friend);
	addToFavs(title, friend);
};