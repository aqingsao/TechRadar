function Point(x, y){
	this.x = x;
	this.y = y;
}

var cospi4 = Math.cos(Math.PI / 4);
var cos3pi4 = Math.cos(Math.PI * 3 / 4);
var cos5pi4 = Math.cos(Math.PI * 5 / 4);
var cos7pi4 = Math.cos(Math.PI * 7 / 4);
var sinpi4 = Math.sin(Math.PI / 4);
var sin3pi4 = Math.sin(Math.PI * 3 / 4);
var sin5pi4 = Math.sin(Math.PI * 5 / 4);
var sin7pi4 = Math.sin(Math.PI * 7 / 4);
var cospi6 = Math.cos(Math.PI / 6);
var sinpi6 = Math.sin(Math.PI / 6); 

function Shape(){}
Shape.prototype.draw = function(context, position, size, color){
	context.beginPath();
	this.drawPath(context, position, size);
	context.closePath();
	context.fillStyle = color;
	context.fill();
}

function Circle(){}
Circle.prototype = new Shape();
Circle.prototype.drawPath = function(context, position, size){
	context.arc(position.x, position.y, size, 0, Math.PI * 2, false);
};
function Triangle(){}
Triangle.prototype = new Shape();
Triangle.prototype.drawPath = function(context, position, size){
	context.moveTo(position.x, position.y - size / 2);
	context.lineTo(position.x + size * cospi6, position.y + size * sinpi6);
	context.lineTo(position.x - size * cospi6, position.y + size * sinpi6);
	context.lineTo(position.x, position.y - size / 2);
}
function Square(){}
Square.prototype = new Shape();
Square.prototype.drawPath = function(context, position, size){
	context.moveTo(position.x - size / 2, position.y - size / 2);
	context.lineTo(position.x + size / 2, position.y - size / 2);
	context.lineTo(position.x + size / 2, position.y + size / 2);
	context.lineTo(position.x - size / 2, position.y + size / 2);
	context.lineTo(position.x - size / 2, position.y - size / 2);
}
function Hexagon(){}
Hexagon.prototype = new Shape();
Hexagon.prototype.drawPath = function(context, position, size){
	context.arc(position.x, position.y, size, 0, Math.PI * 2, false);
}
function Octagon(){}
Octagon.prototype = new Shape();
Octagon.prototype.drawPath = function(context, position, size){
	context.arc(position.x, position.y, size, 0, Math.PI * 2, false);
}
function FiveStar(){}
FiveStar.prototype = new Shape();
FiveStar.prototype.drawPath = function(context, position, size){
	context.arc(position.x, position.y, size, 0, Math.PI * 2, false);
}

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
			shape: new Circle()
		},
		OpenSource:{
			id:1,
			shape: new Triangle()
		},
		BSD:{ 
			id:2,
			shape: new Triangle()
		},
		Apache:{ 
			id:3,
			shape: new Square()
		},
		GPL:{ 
			id:4,
			shape: new Hexagon()
		},
		LGPL:{ 
			id:5,
			shape: new Octagon()
		},
		NA:{
			id:-1,
			shape: new FiveStar()
		}
	};
}