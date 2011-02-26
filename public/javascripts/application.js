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

var starImportanceFactor = 2;

if(typeof Community == "undefined"){

    var Community = {

    Java:{
		id: 0, 
		color: "red"
	},
    DotNet:{
		id: 1, 
		color: "blue"
	},
    Database:{
		id: 2, 
		color: "green"
	},
    Scala:{
		id:3, 
		color:"pink"
	},
    Html:{
		id:4, 
		color:"yellow"
	},
    JavaScript:{
		id:5, 
		color:"orange"
	}, 
	NA:{
		id:-1,
		color:"white"
	}
	};
}
if(typeof License == "undefined"){
    var License = {
		Commercial:{ 
			id:0,
			shape: Shape.Circle
		},
		OpenSource:{
			id:1,
			shape: Shape.Triangle
		},
		BSD:{ 
			id:2,
			shape: Shape.Triangle
		},
		Apache:{ 
			id:3,
			shape: Shape.Square
		},
		GPL:{ 
			id:4,
			shape: Shape.Hexagon
		},
		LGPL:{ 
			id:5,
			shape: Shape.Octagon
		},
		NA:{
			id:-1,
			shape: Shape.FiveStar
		}
	};
}

function TechnologySky(technologySkyId, stars) {
	var canvas = document.getElementById(technologySkyId);
	this.context = canvas.getContext("2d");
	this.width = canvas.width;
	this.height = canvas.height;
	this.radius = Math.min(this.height, this.width) / 2;
	this.central = new Point(this.width / 2, this.height/2);
	
	this.stars = stars;
	for(var i = 0; i < this.stars.length; i++){
		this.stars[i].init(this.central, this.radius);
	}
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
	this.context.font = technologySkyRingFont;
	this.context.textAlign = "center";
	this.context.textBaseline = "middle";
	
	this.drawRing((this.radius) * 0.95, "Hold");
	this.drawRing((this.radius * 3 / 4) * 1, "Assess");
	this.drawRing((this.radius / 2) * 1.1, "Trial");
	this.drawRing((this.radius / 4) * 1.2, "Adopt");
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
	var position = star.getPosition(this.central);
	
	this.context.beginPath();
	this.context.arc(position.x, position.y, star.getRadius(), 0, Math.PI * 2, false);
	this.context.closePath();
	this.context.fillStyle = star.getColor();
	this.context.fill();
}

function Star(techniqueFactor, toolFactor, platformFactor, languageFactor, voteCount, grade, community, license){
	this.techniqueFactor = techniqueFactor;
	this.toolFactor = toolFactor;
	this.languageFactor = languageFactor;
	this.platformFactor = platformFactor;
	this.voteCount = voteCount;	
	this.grade = grade;
	this.community = community;
	this.license = license;
}

Star.prototype.getPosition = function(central){
	return this.position;
}

Star.prototype.getRadius = function(){
	return this.voteCount * starImportanceFactor;
}
Star.prototype.getColor = function(){
	return this.community.color;
}
Star.prototype.getShape = function(){
	return this.license.shape;
}

Star.prototype.init = function(central, radius){
	var x = this.languageFactor + this.toolFactor - this.techniqueFactor - this.platformFactor;
	var y = this.platformFactor + this.languageFactor - this.techniqueFactor - this.toolFactor;
	this.position = new Point(central.x + x, central.y + y);
}

function Point(x, y){
	this.x = x;
	this.y = y;
}

Point.prototype.relativeTo = function(p){
	var cosine = dot / length1 / length2;
	return new Point();
}

function Shape(){
	
}