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
function prepareRadarItems(){
	var items = new Array();
	items.push(new Item("Database based integration", new Info("desc", "homepage", false), new Position(130, 90)));//1
	items.push(new Item("Scrum certification", new Info("desc", "homepage", false), new Position(105, 90)));//2
	items.push(new Item("Real-time business intelligence", new Info("desc", "homepage", false), new Position(150, 72)));//3
	items.push(new Item("Smart Systems", new Info("desc", "homepage", true), new Position(125, 70)));//4
	items.push(new Item("Progressive Enhancement", new Info("desc", "homepage", true), new Position(175, 50)));//5
	items.push(new Item("Automation of technical tests", new Info("desc", "homepage", false), new Position(165, 50)));//6
	items.push(new Item("Automate database deployment", new Info("desc", "homepage", true), new Position(155, 45)));//7
	items.push(new Item("Concurrency abstractions and patterns", new Info("desc", "homepage", true), new Position(152, 55)));//8
	items.push(new Item("Capability modelling", new Info("desc", "homepage", false), new Position(145, 52)));//9
	items.push(new Item("Acceptance test of journeys", new Info("desc", "homepage", true), new Position(135, 55)));//10
	items.push(new Item("DevOps", new Info("desc", "homepage", true), new Position(125, 45)));//11
	items.push(new Item("Service choreography", new Info("desc", "homepage", false), new Position(120, 55)));//12
	items.push(new Item("Continuous deployment", new Info("desc", "homepage", false), new Position(108, 55)));//13
	items.push(new Item("Categorization & prioritization of technical debt", new Info("desc", "homepage", true), new Position(98, 52)));//14
	items.push(new Item("Evolutionary architecture", new Info("desc", "homepage", false), new Position(98, 44)));//15
	items.push(new Item("Coding architects", new Info("desc", "homepage", false), new Position(170, 32)));//16
	items.push(new Item("Visualisation and metrics", new Info("desc", "homepage", false), new Position(145, 32)));//17
	items.push(new Item("Web as platform", new Info("desc", "homepage", false), new Position(125, 30)));//18
	items.push(new Item("Emergent design", new Info("desc", "homepage", false), new Position(105, 32)));//19
	items.push(new Item("Evolutionary database", new Info("desc", "homepage", false), new Position(150, 20)));//20
	items.push(new Item("Platform roadmaps", new Info("desc", "homepage", false), new Position(105, 18)));//21
	items.push(new Item("Build pipelines", new Info("desc", "homepage", false), new Position(155, 10)));//22
	
	items.push(new Item("Subversion", new Info("desc", "homepage", false), new Position(45, 8)));//23
	items.push(new Item("Squid", new Info("desc", "homepage", false), new Position(80, 25)));//24
	items.push(new Item("Infrastructure as code", new Info("desc", "homepage", true), new Position(40, 35)));//25
	items.push(new Item("Apache camel", new Info("desc", "homepage", false), new Position(85, 55)));//26
	items.push(new Item("Message buses without smarts", new Info("desc", "homepage", false), new Position(85, 45)));//27
	items.push(new Item("Next gen test tools", new Info("desc", "homepage", false), new Position(70, 48)));//28
	items.push(new Item("Splunk", new Info("desc", "homepage", true), new Position(55, 50)));//29
	items.push(new Item("NoSQL", new Info("desc", "homepage", false), new Position(40, 55)));//30
	items.push(new Item("Mercurial", new Info("desc", "homepage", false), new Position(20, 45)));//31
	items.push(new Item("Git", new Info("desc", "homepage", false), new Position(10, 50)));//32
	items.push(new Item("Cross mobile platforms", new Info("desc", "homepage", false), new Position(80, 70)));//33
	items.push(new Item("Deltacloud", new Info("desc", "homepage", true), new Position(50, 72)));//34
	items.push(new Item("Github", new Info("desc", "homepage", false), new Position(60, 68)));//35
	items.push(new Item("Vagrant", new Info("desc", "homepage", true), new Position(45, 73)));//36
	items.push(new Item("Restfulie", new Info("desc", "homepage", false), new Position(35, 70)));//37
	items.push(new Item("WCF HTTP", new Info("desc", "homepage", true), new Position(28, 55)));//38
	items.push(new Item("RDF triple stores", new Info("desc", "homepage", false), new Position(22, 75)));//39
	items.push(new Item("API management services", new Info("desc", "homepage", true), new Position(10, 72)));//40
	items.push(new Item("ESB", new Info("desc", "homepage", false), new Position(22, 90)));//41

	
	return items;
}