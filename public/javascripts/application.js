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
var currentPoint = null;
function TechnologySky(technologySkyId, stars) {
 	var canvas = document.getElementById(technologySkyId);
	this.context = canvas.getContext("2d");
	this.width = canvas.width;
	this.height = canvas.height;
	this.radius = Math.min(this.height, this.width) / 2 - 20;
	this.central = new Point(this.width / 2, this.height/2);
    
	this.stars = stars;
	for(var i = 0; i < this.stars.length; i++){
		this.stars[i].init(this.central, this.radius);
	}
	
	var me = this;
	var c = $("#" + technologySkyId)
    c.mousemove(function(e) {
        me.mousemove(c, e);
    });
	this.mouseoverEventHandler = new MouseoverEventHandler(this.context, c);
	this.mouseOverHandler = function(context, star){
		if(currentPoint == null){
			return;
		}
		context.font="16pt Calibri";
		context.fillStyle="black";
		context.textBaseline = "top";
		context.textAlign = "right";
		context.fillText(star == null? "" : star.name, currentPoint.x, currentPoint.y);	
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
		this.stars[i].draw(this.context);
		this.mouseoverEventHandler.addPath(this.stars[i], this.mouseOverHandler);
	}
}
TechnologySky.prototype.mousemove = function(canvas, e){
    e.preventDefault();
    currentPoint = new Point(e.clientX - canvas.offset().left, e.clientY - canvas.offset().top);
    this.draw();
}

function Star(name, category, community, license, popularity, value){
	this.name = name;
	this.category = category;
	this.community = community;
	this.license = license;
	this.popularity = popularity < 0 ? 0 : (popularity > 5 ? 5 : popularity);	
	this.value = value < 0 ? 0 : (value > 5 ? 5 : value);
}

Star.prototype.init = function(central, maxRadius){
	var radius = (5 - this.value)/5 * maxRadius;
	// if(radius < maxRadius / 20){
		// radius = maxRadius / 20;
	// }
	var x = this.category.offX() * radius;
	var y = this.category.offY() * radius;
	this.position = new Point(central.x + x, central.y - y);
}

Star.prototype.draw =  function(context){
	this.license.shape.draw(context, this.position, this.popularity * PopularityLevelFactor, this.community.color);
}

function MouseoverEventHandler(context, canvas) {
	this.context = context;
	this.canvas = canvas;
	this.activeStar = null;
 
	this.addPath = function(star, mouseOverHandler) {
		this.activeStar = null;
		if(currentPoint == null){
			return;
		}
		
		if (this.context.isPointInPath(currentPoint.x, currentPoint.y)) {
			this.activeStar = star;
			log("Mouse over " + star.name);
		}
		// mouseOverHandler(this.context, this.activeStar);
	}
}