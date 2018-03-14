const app = express();
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/resources/assets'));
app.use(express.static(__dirname + '/resources/styling'));
app.use(express.static(__dirname + '/resources/functionality'));

app.listen(80, () => console.log('Server running on Port 80'));

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}