//Displays Nav Menu
function showMenu(){
	if($("#menu").css("display") == "none"){		
		$("#menu").css("display", "flex").hide().fadeIn("slow");
	}
	// Find a way to load these through another function //
	document.getElementById("menu").onclick = function(event){
		if(event.target == document.getElementById('menu') || event.target == document.getElementById("closeNav")){
			closeNavMenu();
		}
	}
	
	$(".closeNav").mouseover(function(){
		$(this).find("i").addClass("fa-lg");
	});

	$(".closeNav").mouseout(function(){
		$(this).find("i").removeClass("fa-lg");
	});
}

function closeNavMenu(){
	$("#menu").fadeOut("slow");
	//document.getElementById("menu").style.visibility = "hidden";
}

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}