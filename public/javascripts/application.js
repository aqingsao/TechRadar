var radarBackgroundColor = "#ddd";

var radarGridSpace = 10;
var radarGridColor = "#eee";

var radarCoordinateColor = "#fff";

var radarRingFont =  "bold 12px sans-serif";
var radarRingColor = "#fff";

var radarQuadrantsFont = "bold 16px sans-serif";
var radarQuadrantsColor = "#000";
var radarQuadrantsLeftMargin = 30;
var radarQuadrantsUpMargin = 30;

function Radar(radarId) {
	var canvas = document.getElementById(radarId);
	this.context = canvas.getContext("2d");
	this.width = canvas.width;
	this.height = canvas.height;
}

Radar.prototype.draw = function(){
	this.drawBackground();
	this.drawGrid();
	this.drawCoordinates();
	this.drawRings();
	this.drawQuadrants();
}

Radar.prototype.drawBackground = function(){
	this.context.fillStyle = radarBackgroundColor;
	this.context.fillRect(0, 0, this.height, this.width);
}

Radar.prototype.drawGrid = function(){
	for (var x = 0.5; x < this.width; x += radarGridSpace) {
	  this.context.moveTo(x, 0);
	  this.context.lineTo(x, this.height);
	}
	
	for (var y = 0.5; y < this.height; y += radarGridSpace) {
	  this.context.moveTo(0, y);
	  this.context.lineTo(this.width, y);
	}
	this.context.strokeStyle = radarGridColor;
	this.context.stroke();
}
Radar.prototype.drawCoordinates = function(){
	this.context.beginPath();
	this.context.moveTo(0, this.height/2);
	this.context.lineTo(this.width, this.height/2);
	this.context.moveTo(this.width/2, 0);
	this.context.lineTo(this.width/2, this.height);
	this.context.strokeStyle = radarCoordinateColor;
	this.context.stroke();
}

Radar.prototype.drawRings = function(){
	this.context.beginPath();
	var radius = Math.min(this.height, this.width) / 2;
	this.context.font = radarRingFont;
	this.context.textAlign = "center";
	this.context.textBaseline = "middle";
	
	this.drawRing((radius) * 0.95, "Hold");
	this.drawRing((radius * 3 / 4) * 1, "Assess");
	this.drawRing((radius / 2) * 1.1, "Trial");
	this.drawRing((radius / 4) * 1.2, "Adopt");
	
	this.context.closePath();
	this.context.strokeStyle = radarRingColor;
	this.context.stroke();
}

Radar.prototype.drawRing = function(radius, text){
	this.context.arc(this.height/2, this.width/2, radius, 0, Math.PI * 2, false);
	this.context.fillText(text, this.width/2, this.height/2 - radius);
}

Radar.prototype.drawQuadrants =  function(){
	this.context.font = radarQuadrantsFont;
	this.context.fillStyle = radarQuadrantsColor;
	this.context.textBaseline = "top";
	this.context.textAlign = "left";
	this.context.fillText("Techniques", radarQuadrantsLeftMargin, radarQuadrantsUpMargin);
	this.context.textBaseline = "top";
	this.context.textAlign = "right";
	this.context.fillText("Tools", this.width - radarQuadrantsLeftMargin, radarQuadrantsUpMargin);
	
	this.context.textBaseline = "bottom";
	this.context.textAlign = "left";
	this.context.fillText("Platforms", radarQuadrantsLeftMargin, this.height - radarQuadrantsUpMargin);
	this.context.textBaseline = "bottom";
	this.context.textAlign = "right";
	this.context.fillText("Languages", this.width - radarQuadrantsLeftMargin, this.height - radarQuadrantsUpMargin);
}