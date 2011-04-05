function prepareRadarItems(){
	var items = new Array();
	items.push(new Item("Database based integration", new Info("", "", false), new Position(130, 90)));//1
	items.push(new Item("Scrum certification", new Info("", "", false), new Position(105, 90)));//2
	items.push(new Item("Real-time business intelligence", new Info("Business are running 24x7, but the information needed to make business decisions is being provided by outdated methods using ETL jobs in batch mode. The batch window is shrinking as businesses move to global markets and are open for longer durations. The data provided by these jobs is out of date by the time the business needs to make a decision. There is substantial value in taking the event as it happens in the transactional system and feeding it to the data warehouse so that the business can get near real-time business intelligence.", "", false), new Position(150, 72)));//3
	items.push(new Item("Smart Systems", new Info("Smart Phones with a GPS, cameras and a screen are but one example of smart systems which are proliferating around us, fusing the real and the digital world. Augmented reality apps like Google Goggles, geolocation services & smart grids are just some of the possible applications.", "", true), new Position(125, 70)));//4
	items.push(new Item("Progressive Enhancement", new Info("Progressive enhancement is a web design strategy that uses layers of web technologies to build a compelling user experience. Progressive enhancement emphasizes accessibility, allowing access to the basic content using any browser. This strategy enables more content to be cached which improves overall system performance and scalability.", "", true), new Position(175, 50)));//5
	items.push(new Item("Automation of technical tests", new Info("", "", false), new Position(165, 50)));//6
	items.push(new Item("Automate database deployment", new Info("When moving to continuous delivery, deployment of database changes should also be automated so that the application release that relies on those changes does not have to wait for manual deployment of the database changes. Automated database deployment ensures that the full cycle of deploying application and database changes is automated.", "", true), new Position(155, 45)));//7
	items.push(new Item("Concurrency abstractions and patterns", new Info("Concurrency is a difficult problem and increasingly difficult to avoid. Hardware isn’t getting faster but multicore platforms are becoming the norm, with even mobile phones containing two or more processors. Concurrency abstractions and patterns -- which are not new, but less widely known -- are helping address many of the challenges seen in this space. In particular the models seen in Clojure, Erlang, Retlang and Event Patterns offer a more testable and reliable approach than the better known threads, locks and semaphores.", "", true), new Position(152, 55)));//8
	items.push(new Item("Capability modelling", new Info("", "", false), new Position(145, 52)));//9
	items.push(new Item("Acceptance test of journeys", new Info("Many teams focus acceptance testing at the story level, but this can lead to a large number of hard to maintain tests, and a focus on completing individual stories instead of coherent functionality needed to go live. A more holistic approach is to group user stories into journeys for which we create acceptance tests. Journeys through a system are a set of user interactions that provide value for both users and the business. At the outset a journey acceptance test will cover only one step, but as stories are completed the journey is expanded to encompass each stage in the user’s progress. Once the acceptance test of journeys passes, this tells us we have delivered real value.", "", true), new Position(135, 55)));//10
	items.push(new Item("DevOps", new Info("The DevOps movement continues to gain traction as people pay more attention to the often-broken relationship between development and operations. DevOps promotes closer collaboration and joint responsibility between development and operations. DevOps applies agile practices to operations processes such as provisioning, change management and production monitoring and also brings production- like thinking, tools and environments to development. DevOps is a key underpinning for organizations wanting to achieve continuous delivery of application releases into production.", "", true), new Position(125, 45)));//11
	items.push(new Item("Service choreography", new Info("", "", false), new Position(120, 55)));//12
	items.push(new Item("Continuous deployment", new Info("", "", false), new Position(108, 55)));//13
	items.push(new Item("Categorization & prioritization of technical debt", new Info("Technical debt is a powerful and useful metaphor for dealing with the compromises we make when building software. Unfortunately it has become a catch-all term for many different kinds of issues and problems, leading to confusion and “devaluation” of the term. A very useful approach for dealing with this is catagorization of technical debt, assigning value and prioritizing debt payback in an analogous way to user stories. This helps the team focus on the most important areas and keeps issues transparent and measurable.", "", true), new Position(98, 52)));//14
	items.push(new Item("Evolutionary architecture", new Info("", "", false), new Position(98, 44)));//15
	items.push(new Item("Coding architects", new Info("", "", false), new Position(170, 32)));//16
	items.push(new Item("Visualisation and metrics", new Info("", "", false), new Position(145, 32)));//17
	items.push(new Item("Web as platform", new Info("", "", false), new Position(125, 30)));//18
	items.push(new Item("Emergent design", new Info("", "", false), new Position(105, 32)));//19
	items.push(new Item("Evolutionary database", new Info("", "", false), new Position(150, 20)));//20
	items.push(new Item("Platform roadmaps", new Info("", "", false), new Position(105, 18)));//21
	items.push(new Item("Build pipelines", new Info("", "", false), new Position(155, 10)));//22
	
	items.push(new Item("Subversion", new Info("", "http://subversion.tigris.org/", false), new Position(45, 8)));//23
	items.push(new Item("Squid", new Info("", "http://www.squid-cache.org/", false), new Position(80, 25)));//24
	items.push(new Item("Infrastructure as code", new Info("The large number of hosts and devices in a modern datacenter or cloud deployment have made manually installing and configuring infrastructure unwise. Infrastructure as code is an approach whereby infrastructure configuration is scripted or described by files that are stored in version control, and changes are pushed out to the datacenter in a controlled manner. This parallels the discipline of source control and build promotion used in software development, hence ‘as code’. The two front-running open source tools for infrastructure automation are Chef and Puppet. They both use a textual DSL to script automation. Using this approach provides consistent and repeatable environment changes, reducing the manual effort involved, especially in troubleshooting environmental differences.", "", true), new Position(40, 35)));//25
	items.push(new Item("Apache camel", new Info("", "http://camel.apache.org/", false), new Position(85, 55)));//26
	items.push(new Item("Message buses without smarts", new Info("", "", false), new Position(85, 45)));//27
	items.push(new Item("Next gen test tools", new Info("", "", false), new Position(70, 48)));//28
	items.push(new Item("Splunk", new Info("Application logs are both a blessing and a curse. They are comforting to have when a production issue arises, but actually digging out the data we need usually requires cobbling together scripts written in tools such as AWK and sed. Splunk is an elegant solution that quickly analyzes many standard log file formats like IIS, Log4J and syslog, and is extensible to custom formats. It indexes files, statically or in real time, to generate canned or custom reports. If the raw log fields do not provide what you need, simply use a regular expression, either inline or to define a new field, to get the desired level of detail. Splunk’s full power is difficult to describe, so we recommend downloading and trying it.", "http://www.splunk.com/", true), new Position(55, 50)));//29
	items.push(new Item("NoSQL", new Info("", "", false), new Position(40, 55)));//30
	items.push(new Item("Mercurial", new Info("", "http://mercurial.selenic.com/", false), new Position(20, 45)));//31
	items.push(new Item("Git", new Info("", "http://git-scm.com/", false), new Position(10, 50)));//32
	items.push(new Item("Cross mobile platforms", new Info("", "", false), new Position(80, 70)));//33
	items.push(new Item("Deltacloud", new Info("Every Infrastructure as a Service (IaaS) cloud offering provides their own API for performing common tasks. Deltacloud aims to abstract those APIs and provide a RESTful interface for performing common cloud management functions, making it possible to migrate virtual infrastructure between clouds.", "http://incubator.apache.org/deltacloud/", true), new Position(50, 72)));//34
	items.push(new Item("Github", new Info("", "https://github.com/", false), new Position(60, 68)));//35
	items.push(new Item("Vagrant", new Info("The tool Vagrant makes it simple for teams to distribute virtualized development environments constructed using version-control friendly descriptors. Vagrant helps eliminate environmental differences in development and reduce troubleshooting waste.", "https://github.com/mitchellh/vagrant", true), new Position(45, 73)));//36
	items.push(new Item("Restfulie", new Info("", "http://restfulie.caelum.com.br/", false), new Position(35, 70)));//37
	items.push(new Item("WCF HTTP", new Info("Microsoft’s WCF HTTP API, though currently in the early stages of development, is evolving rapidly, and we’re already impressed by its support for HTTP primitives as well as idioms such as content negotiation and conditional requests. The API encourages the development of highly testable solutions with a clear separation of concerns. What is of particular interest to us is the way in which the project is being developed in Codeplex’s open source community. The ability for the community to steer the development of this part of the .NET platform merits this project’s early inclusion in the radar. While the license does allow for using the library in production today, given the current volatility of the API, we caution against taking a dependency at this early stage; many of the features we’ve admired in recent releases, such as its use of an attribute- light programming model based on convention over configuration, may not make it into the first version.", "http://msdn.microsoft.com/en-us/netframework/aa663324", true), new Position(28, 55)));//38
	items.push(new Item("RDF triple stores", new Info("", "", false), new Position(22, 75)));//39
	items.push(new Item("API management services", new Info("Exposing APIs to a large developer community creates nonfunctional requirements that are often the same from one business to another. Key management, authentication, access control, traffic management, caching, tracking and reporting are often implemented as commodity functions that can be reused across applications and businesses without modification. Some service providers have spotted this trend and are offering API management via software as a service. Prominent vendors in this space include Mashery and Apigee, who both offer the option of hosting the service on a customer’s own infrastructure. API management services may also be interesting to enterprise customers who are using Web as platform techniques for their internal SOA, providing a lighter weight alternative to traditional SOA management tools.", "", true), new Position(10, 72)));//40
	items.push(new Item("ESB", new Info("", "", false), new Position(22, 90)));//41

	items.push(new Item("KVM", new Info("", "", true), new Position(245, 12)));//42
	items.push(new Item("Android", new Info("", "", false), new Position(200, 25)));//43
	items.push(new Item("Atom", new Info("", "", true), new Position(230, 18)));//44
	items.push(new Item("Heroku", new Info("", "", false), new Position(185, 56)));//45
	items.push(new Item("Facebook as business platform", new Info("", "", false), new Position(205, 55)));//46
	items.push(new Item("iPad", new Info("", "", true), new Position(220, 53)));//47
	items.push(new Item("EC2 & S3", new Info("", "", false), new Position(235, 53)));//48
	items.push(new Item("Mobile Web", new Info("", "", true), new Position(250, 51)));//49
	items.push(new Item("GPGPU", new Info("", "", true), new Position(187, 75)));//50
	items.push(new Item("Node.js", new Info("", "", true), new Position(200, 68)));//51
	items.push(new Item("vFabric", new Info("", "", true), new Position(210, 75)));//52
	items.push(new Item("OpenStack", new Info("", "", true), new Position(220, 75)));//53
	items.push(new Item("Application appliances", new Info("", "", false), new Position(230, 73)));//54
	items.push(new Item("RDFa", new Info("", "", false), new Position(235, 65)));//55
	items.push(new Item("OAuth", new Info("", "", false), new Position(245, 68)));//56
	items.push(new Item("App containers", new Info("", "", false), new Position(255, 68)));//57
	items.push(new Item("Azure", new Info("", "", false), new Position(265, 72)));//58
	items.push(new Item("WS-* beyond basic profile", new Info("", "", false), new Position(200, 90)));//59
	items.push(new Item("GWT", new Info("", "", false), new Position(240, 90)));//60
	items.push(new Item("RIA", new Info("", "", false), new Position(260, 90)));//61
	
	items.push(new Item("Ruby", new Info("", "", false), new Position(310, 8)));//62
	items.push(new Item("C# 4.0", new Info("", "", false), new Position(350, 20)));//63
	items.push(new Item("JRuby", new Info("", "", false), new Position(305, 22)));//64
	items.push(new Item("JavaScript as a first class language", new Info("", "", false), new Position(280, 22)));//65
	items.push(new Item("SASS, SCSS, and LESS", new Info("", "", true), new Position(305, 52)));//66
	items.push(new Item("DSL’s", new Info("", "", false), new Position(330, 48)));//67
	items.push(new Item("HAML", new Info("", "", true), new Position(320, 52)));//68
	items.push(new Item("Scala", new Info("", "", true), new Position(310, 50)));//69
	items.push(new Item("Groovy", new Info("", "", false), new Position(290, 50)));//70
	items.push(new Item("HTML 5", new Info("", "", true), new Position(280, 51)));//71
	items.push(new Item("Java language end of life", new Info("", "", false), new Position(335, 72)));//72
	items.push(new Item("F#", new Info("", "", false), new Position(325, 66)));//73
	items.push(new Item("Clojure", new Info("", "", false), new Position(310, 64)));//74
	
	return items;
}