function Item(name, info, position){
	this.name = name;
	this.info = info;
	this.position = position;
}
Item.prototype.color = function(){
	return 'blue';
}
Item.prototype.tooltip = function(){
	var title = "<h3>" + this.name + "</h3>";
	var homepage = this.info.homePage === "" ? "" : "<div><a target='_blank' href='" + this.info.homePage + "'> Go to Home Page </a></div>";
	var desc = this.info.description === '' ? "<div>No description yet</div>" : "<div>" + this.info.description + "</div>";
	
    return title + homepage + desc;
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

var animation;
function startAnimation(items, id){	
	var data = [];
 	animation = setInterval(function(){
		drawRadar(data, items, id);
	}, 20);
}

function drawRadar(data, items, id){
	RGraph.Clear(document.getElementById(id));

    var radar = getRadar(id, data);
    radar.Draw();

	var item = items.shift();
	if(typeof(item) == 'undefined'){
		clearInterval(animation);
	}
	else{
		data.push(item.toArray());
	}
}

function getRadar(id, data){
    var radar = new RGraph.Rscatter(id, data);
    var config = {
                  'chart.text.color':                  '#386077',
                  'chart.text.font':                  'Verdana',
                  'chart.text.size':             		12,
                  'chart.labels.axes':         			'n',
                  'chart.labels.position':             'edge',
                  'chart.gutter': 						60,
				  'chart.labels': 			['Tools', '', 'Languages', '', 'Platforms', '', 'Techniques', ''],	
				  'chart.tooltips.effect': 			'fade'
                 };
	RGraph.SetConfig(radar, config);
	return radar;
}