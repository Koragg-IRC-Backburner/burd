applyConfig = function(){
	for(var i in config){
		switch(i){
			case "showJoinMessages":
			case "showPartMessages":
			case "showQuitMessages":
			case "showModeMessages":
			case "showKickMessages":
			case "nickColors":
			case "textColors":
				if(config[i]) $("#" + i).addClass("slider_on");
				break;
		}
		
		if(config.sounds.highlight) $("#highlightsound").addClass("slider_on");
		if(config.sounds.pm) $("#pmsound").addClass("slider_on");
		if(config.sounds.notice) $("#noticesound").addClass("slider_on");
		
		$("#scrollback").val(config.scrollback);
	}
}

slider.addEventListener(function(e){
	console.log(e);
	switch(e.id){
		case "showJoinMessages":
		case "showPartMessages":
		case "showQuitMessages":
		case "showModeMessages":
		case "showKickMessages":
		case "nickColors":
		case "textColors":
			config[e.id] = e.state;
			break;
	}
});