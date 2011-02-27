function Shape(){}
function Circle(){}
Circle.prototype = new Shape();
Circle.prototype.draw = function(context, position, popularity, color){
	context.beginPath();
	context.arc(position.x, position.y, popularity * PopularityLevelFactor, 0, Math.PI * 2, false);
	context.closePath();
	context.fillStyle = color;
	context.fill();
};
function Triangle(){}
Triangle.prototype = new Shape();
Triangle.prototype.draw = function(context, position, popularity, color){
	context.beginPath();
	context.arc(position.x, position.y, popularity * PopularityLevelFactor, 0, Math.PI * 2, false);
	context.closePath();
	context.fillStyle = color;
	context.fill();
}
function Square(){}
Square.prototype = new Shape();
Square.prototype.draw = function(context, position, popularity, color){
	context.beginPath();
	context.arc(position.x, position.y, popularity * PopularityLevelFactor, 0, Math.PI * 2, false);
	context.closePath();
	context.fillStyle = color;
	context.fill();
}
function Hexagon(){}
Hexagon.prototype = new Shape();
Hexagon.prototype.draw = function(context, position, popularity, color){
	context.beginPath();
	context.arc(position.x, position.y, popularity * PopularityLevelFactor, 0, Math.PI * 2, false);
	context.closePath();
	context.fillStyle = color;
	context.fill();
}
function Octagon(){}
Octagon.prototype = new Shape();
Octagon.prototype.draw = function(context, position, popularity, color){
	context.beginPath();
	context.arc(position.x, position.y, popularity * PopularityLevelFactor, 0, Math.PI * 2, false);
	context.closePath();
	context.fillStyle = color;
	context.fill();
}
function FiveStar(){}
FiveStar.prototype = new Shape();
FiveStar.prototype.draw = function(context, position, popularity, color){
	context.beginPath();
	context.arc(position.x, position.y, popularity * PopularityLevelFactor, 0, Math.PI * 2, false);
	context.closePath();
	context.fillStyle = color;
	context.fill();
}
