function Item(name, info, position){
	this.name = name;
	this.info = info;
	this.position = position;
}
Item.prototype.color = function(){
	return 'blue';
}
Item.prototype.tooltip = function(){
    return "<h3>" + this.name + "</h3> <div>" + this.info.description + "</div><div>"+ this.info.homePage+"</div>";
}

Item.prototype.size = function(){
	return 6;
}
Item.prototype.shape = function(){
	return this.info.isNew ? 'square' : 'circle';
}
Item.prototype.toArray = function(){
	return [this.position.alpha, this.position.radius, this.color(), this.tooltip(), this.size(), this.shape()];
}

function Position(alpha, radius){
	this.alpha = alpha;
	this.radius = radius;
}
function Info(description, homePage, isNew){
	this.description = description;
	this.homePage = homePage;
	this.isNew = isNew;
}
function toRadarData(items){
	var data = [];
	for(var i = 0; i < items.length; i++){
		data.push(items[i].toArray());
	}
	return data;
}
function drawRadar(items, id){
	var data = toRadarData(items);

    var radar = new RGraph.Rscatter(id, data);
	radar.Set('chart.text.color', "#386077");
	radar.Set('chart.text.font', "Verdana");
	radar.Set('chart.text.size', 12);
	
    radar.Set('chart.labels.axes', 'n');
    radar.Set('chart.labels.position', 'edge');

	radar.Set('chart.gutter', 60);	
    radar.Set('chart.labels', ['Tools', '', 'Languages', '', 'Platforms', '', 'Techniques', '']);

    radar.Set('chart.tooltips.effect', 'fade');
    radar.Draw();
}