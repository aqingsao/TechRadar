// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function drawBackground(context, height, width){
	context.fillStyle = "#ddd";
	context.fillRect(0, 0, height, width);
				
	for (var x = 0.5; x < width; x += 10) {
	  context.moveTo(x, 0);
	  context.lineTo(x, height);
	}
	
	for (var y = 0.5; y < height; y += 10) {
	  context.moveTo(0, y);
	  context.lineTo(width, y);
	}
	context.strokeStyle = "#eee";
	context.stroke();
}
function drawCoordinates(context, height, width){	
	context.beginPath();
	context.moveTo(0, height/2);
	context.lineTo(width, height/2);
	context.moveTo(width/2, 0);
	context.lineTo(width/2, height);
	context.strokeStyle = "#fff";
	context.stroke();
}

function drawRings(context, height, width){
	context.beginPath();
	var maxRadius = Math.min(height, width) / 2 - 10;
	drawRing(context, height, width, maxRadius, "Hold");
	drawRing(context, height, width, maxRadius - 10, "Hold");
	context.closePath();
	context.strokeStyle = "#fff";
	context.stroke();
}
function drawRing(context, height, width, radius, text){
	context.arc(height/2, width/2, radius, 0, Math.PI * 2, false);
}

function drawQuadrants(context, height, width){
	context.font = "bold 12px sans-serif";
	context.fillStyle = "#000";
	var upMargin = 5;
	var leftMargin = 8;
	context.textBaseline = "top";
	context.fillText("Techniques", leftMargin, upMargin);
	context.textAlign = "right";
	context.fillText("Tools", width - leftMargin, upMargin);
	
	context.textBaseline = "bottom";
	context.textAlign = "left";
	context.fillText("Platforms", leftMargin, height - upMargin);
	context.textAlign = "right";
	context.fillText("Languages", width - leftMargin, height - upMargin);
}