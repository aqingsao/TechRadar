var technologySkyBackgroundColor = "#080E24";

var technologySkyGridSpace = 10;
var technologySkyGridColor = "#eee";

var technologySkyCoordinateColor = "#fff";

var technologySkyRingFont =  "bold 12px sans-serif";
var technologySkyRingColor = "#626668";

var technologySkyQuadrantsFont = "bold 16px sans-serif";
var technologySkyQuadrantsColor = "#386077";
var technologySkyQuadrantsLeftMargin = 30;
var technologySkyQuadrantsUpMargin = 30;

function TechnologySky(technologySkyId, stars) {
	var canvas = document.getElementById(technologySkyId);
	this.context = canvas.getContext("2d");
	this.width = canvas.width;
	this.height = canvas.height;
	this.central = new Point(this.width / 2, this.height/2);
	this.stars = stars;
}

TechnologySky.prototype.draw = function(){
	this.drawBackground();
	this.drawRings();
	this.drawQuadrants();
	this.drawStars();
}

TechnologySky.prototype.drawBackground = function(){
	this.context.fillStyle = technologySkyBackgroundColor;
	this.context.fillRect(0, 0, this.height, this.width);
}

TechnologySky.prototype.drawRings = function(){
	var radius = Math.min(this.height, this.width) / 2;
	this.context.font = technologySkyRingFont;
	this.context.textAlign = "center";
	this.context.textBaseline = "middle";
	
	this.drawRing((radius) * 0.95, "Hold");
	this.drawRing((radius * 3 / 4) * 1, "Assess");
	this.drawRing((radius / 2) * 1.1, "Trial");
	this.drawRing((radius / 4) * 1.2, "Adopt");
}

TechnologySky.prototype.drawRing = function(radius, text){
	this.context.beginPath();
	this.context.arc(this.central.x, this.central.y, radius, 0, Math.PI * 2, false);
	this.context.closePath();
	this.context.strokeStyle = technologySkyRingColor;
	this.context.stroke();
	// this.context.fillText(text, this.width/2, this.height/2 - radius);
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

TechnologySky.prototype.drawStars =  function(){
	for(var i = 0; i < this.stars.length; i++){
		this.drawStar(this.stars[i]);
	}
}

TechnologySky.prototype.drawStar =  function(star){
	var position = star.getPosition();
	
	this.context.beginPath();
	this.context.arc(this.central.x + position.x, this.central.y + position.y, star.getRadius(), 0, Math.PI * 2, false);
	this.context.closePath();
	this.context.fillStyle = "red";
	this.context.fill();
}

function Star(techniqueFactor, toolFactor, platformFactor, languageFactor, importance){
	this.techniqueFactor = techniqueFactor;
	this.toolFactor = toolFactor;
	this.languageFactor = languageFactor;
	this.platformFactor = platformFactor;
	this.importance = importance;	
}

Star.prototype.getPosition = function(){
	var x = this.toolFactor + this.languageFactor - this.techniqueFactor - this.platformFactor;
	var y = this.platformFactor + this.languageFactor - this.techniqueFactor - this.toolFactor;
	return new Point(x, y);
}

Star.prototype.getRadius = function(){
	return this.importance;
}

function Point(x, y){
	this.x = x;
	this.y = y;
}