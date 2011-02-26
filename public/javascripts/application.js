var technologySkyBackgroundColor = "#ddd";

var technologySkyGridSpace = 10;
var technologySkyGridColor = "#eee";

var technologySkyCoordinateColor = "#fff";

var technologySkyRingFont =  "bold 12px sans-serif";
var technologySkyRingColor = "#fff";

var technologySkyQuadrantsFont = "bold 16px sans-serif";
var technologySkyQuadrantsColor = "#000";
var technologySkyQuadrantsLeftMargin = 30;
var technologySkyQuadrantsUpMargin = 30;

function TechnologySky(TechnologySkyId) {
	var canvas = document.getElementById(TechnologySkyId);
	this.context = canvas.getContext("2d");
	this.width = canvas.width;
	this.height = canvas.height;
}

TechnologySky.prototype.draw = function(){
	this.drawBackground();
	this.drawGrid();
	this.drawCoordinates();
	this.drawRings();
	this.drawQuadrants();
}

TechnologySky.prototype.drawBackground = function(){
	this.context.fillStyle = technologySkyBackgroundColor;
	this.context.fillRect(0, 0, this.height, this.width);
}

TechnologySky.prototype.drawGrid = function(){
	for (var x = 0.5; x < this.width; x += technologySkyGridSpace) {
	  this.context.moveTo(x, 0);
	  this.context.lineTo(x, this.height);
	}
	
	for (var y = 0.5; y < this.height; y += technologySkyGridSpace) {
	  this.context.moveTo(0, y);
	  this.context.lineTo(this.width, y);
	}
	this.context.strokeStyle = technologySkyGridColor;
	this.context.stroke();
}
TechnologySky.prototype.drawCoordinates = function(){
	this.context.beginPath();
	this.context.moveTo(0, this.height/2);
	this.context.lineTo(this.width, this.height/2);
	this.context.moveTo(this.width/2, 0);
	this.context.lineTo(this.width/2, this.height);
	this.context.strokeStyle = technologySkyCoordinateColor;
	this.context.stroke();
}

TechnologySky.prototype.drawRings = function(){
	this.context.beginPath();
	var radius = Math.min(this.height, this.width) / 2;
	this.context.font = technologySkyRingFont;
	this.context.textAlign = "center";
	this.context.textBaseline = "middle";
	
	this.drawRing((radius) * 0.95, "Hold");
	this.drawRing((radius * 3 / 4) * 1, "Assess");
	this.drawRing((radius / 2) * 1.1, "Trial");
	this.drawRing((radius / 4) * 1.2, "Adopt");
	
	this.context.closePath();
	this.context.strokeStyle = technologySkyRingColor;
	this.context.stroke();
}

TechnologySky.prototype.drawRing = function(radius, text){
	this.context.arc(this.height/2, this.width/2, radius, 0, Math.PI * 2, false);
	this.context.fillText(text, this.width/2, this.height/2 - radius);
}

TechnologySky.prototype.drawQuadrants =  function(){
	this.context.font = technologySkyQuadrantsFont;
	this.context.fillStyle = technologySkyQuadrantsColor;
	this.context.textBaseline = "top";
	this.context.textAlign = "left";
	this.context.fillText("Techniques", technologySkyQuadrantsLeftMargin, technologySkyQuadrantsUpMargin);
	this.context.textBaseline = "top";
	this.context.textAlign = "right";
	this.context.fillText("Tools", this.width - technologySkyQuadrantsLeftMargin, technologySkyQuadrantsUpMargin);
	
	this.context.textBaseline = "bottom";
	this.context.textAlign = "left";
	this.context.fillText("Platforms", technologySkyQuadrantsLeftMargin, this.height - technologySkyQuadrantsUpMargin);
	this.context.textBaseline = "bottom";
	this.context.textAlign = "right";
	this.context.fillText("Languages", this.width - technologySkyQuadrantsLeftMargin, this.height - technologySkyQuadrantsUpMargin);
}