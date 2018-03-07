const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/resources/assets'));
app.use(express.static(__dirname + '/resources/styling'));
app.use(express.static(__dirname + '/resources/functionality'));


const db_config = {
	host: "localhost",
	user: "root",
	password: "@Gtmp1002_0116",
	database: "NOVA"
};

var con;

function handleDisconnect(){
	con = mysql.createConnection(db_config);
	con.connect(function(err){
		if(err){
			console.log("Error when connection to db:", err);
			setTimeout(handleDisconnect, 5000);
		}
	});
	
	con.on("error", function(err){
		console.log("DB Error", err);
		if(err.code == "PROTOCOL_CONNECTION_LOST"){
			handleDisconnect();
		} else {
			throw err;
		}
	});
}

app.listen(80, () => console.log('Server running on Port 80'));

handleDisconnect();

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}