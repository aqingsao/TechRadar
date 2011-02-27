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

var PopularityLevelFactor = 2;

var cospi4 = Math.cos(Math.PI / 4);
var cos3pi4 = Math.cos(Math.PI * 3 / 4);
var cos5pi4 = Math.cos(Math.PI * 5 / 4);
var cos7pi4 = Math.cos(Math.PI * 7 / 4);
var sinpi4 = Math.sin(Math.PI / 4);
var sin3pi4 = Math.sin(Math.PI * 3 / 4);
var sin5pi4 = Math.sin(Math.PI * 5 / 4);
var sin7pi4 = Math.sin(Math.PI * 7 / 4);

function Category(techniqueFactor, toolFactor, platformFactor, languageFactor){
	this.techniqueFactor = techniqueFactor;
	this.toolFactor = toolFactor;
	this.languageFactor = languageFactor;
	this.platformFactor = platformFactor;	
}
Category.prototype.offX = function(){
	return (this.toolFactor * cospi4 + this.techniqueFactor * cos3pi4 + this.platformFactor * cos5pi4 + this.languageFactor * cos7pi4)/100;
}
Category.prototype.offY = function(){
	return (this.toolFactor * sinpi4 + this.techniqueFactor * sin3pi4 + this.platformFactor * sin5pi4 + this.languageFactor * sin7pi4)/100;
}

function Grade(grade){
	this.grade = grade;	
}
if(typeof Shape == "undefined"){
	var Shape = {
		Circle: {id:1}, 
		Triangle: {id:2},
		Square: {id:3},
		Hexagon: {id:4},
		Octagon: {id:5},		
		FiveStar: {id:6}		
	}
}
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
	this.drawCoordinates();
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
	
	for(var i = 1; i <= 5; i++){
		this.drawRing(this.radius * i / 5);
	}
}

TechnologySky.prototype.drawRing = function(radius){
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
TechnologySky.prototype.drawCoordinates = function(){	
	this.context.beginPath();
	this.context.moveTo(0, this.height/2);
	this.context.lineTo(this.width, this.height/2);
	this.context.moveTo(this.width /2 , 0);
	this.context.lineTo(this.width / 2, this.height);
	this.context.closePath();
	this.context.strokeStyle = technologySkyCoordinateColor;
	this.context.stroke();
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

function Star(category, community, license, popularity, value){
	this.category = category;
	this.community = community;
	this.license = license;
	this.popularity = popularity < 0 ? 0 : (popularity > 5 ? 5 : popularity);	
	this.value = value < 0 ? 0 : (value > 5 ? 5 : value);	
}

Star.prototype.getPosition = function(central){
	return this.position;
}

Star.prototype.getRadius = function(){
	return this.popularity * PopularityLevelFactor;
}
Star.prototype.getColor = function(){
	return this.community.color;
}
Star.prototype.getShape = function(){
	return this.license.shape;
}

Star.prototype.init = function(central, maxRadius){
	var radius = (5 - this.value)/5 * maxRadius;
	if(radius < maxRadius / 20){
		radius = maxRadius / 20;
	}
	var x = this.category.offX() * radius;
	var y = this.category.offY() * radius;
	this.position = new Point(central.x + x, central.y - y);
}

function Point(x, y){
	this.x = x;
	this.y = y;
}

Point.prototype.relativeTo = function(p){
	var cosine = dot / length1 / length2;
	return new Point();
}