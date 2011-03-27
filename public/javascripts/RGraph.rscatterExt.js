/**
* This method extends RGraph rscatter lib to get customized effect
*/
RGraph.Rscatter.prototype.DrawBackground = function ()
{
    this.context.lineWidth = 1;

	this.context.fillStyle = "#080E24";
	this.context.fillRect(0, 0, RGraph.GetHeight(this), RGraph.GetWidth(this));

    // Draw the background grey circles
    this.context.strokeStyle = '#626668';
	for(var i = 2; i <= 5; i++){
		this.radius * i / 5;
        // Radius must be greater than 0 for Opera to work
        this.context.arc(this.centerx, this.centery, this.radius * i / 5, 0, (2 * Math.PI), 0);
    }
    this.context.stroke();
    
    this.context.beginPath();
    this.context.strokeStyle = '#fff';

    // Draw the X axis
    this.context.moveTo(this.centerx - RGraph.GetHeight(this) / 2, this.centery);
    this.context.lineTo(this.centerx + RGraph.GetHeight(this) / 2, this.centery);

    // Draw the Y axis
    this.context.moveTo(this.centerx, this.centery - RGraph.GetWidth(this) / 2);
    this.context.lineTo(this.centerx, this.centery + RGraph.GetWidth(this) / 2);
    
    // Stroke it
    this.context.closePath();
    this.context.stroke();
}


/**
* Unsuprisingly, draws the labels
*/
RGraph.Rscatter.prototype.DrawLabels = function ()
{
    this.context.lineWidth = 1;
    var key = this.Get('chart.key');
    
    // Set the color to black
    this.context.fillStyle = 'black';
    this.context.strokeStyle = 'black';
    
    var r         = this.radius;
    var color     = this.Get('chart.text.color');
    var font_face = this.Get('chart.text.font');
    var font_size = this.Get('chart.text.size');
    var context   = this.context;
    var axes      = this.Get('chart.labels.axes').toLowerCase();
    
    this.context.fillStyle = this.Get('chart.text.color');

    // Draw any labels
    if (typeof(this.Get('chart.labels')) == 'object' && this.Get('chart.labels')) {
        this.DrawCircularLabels(context, this.Get('chart.labels'), font_face, 22, r);
    }


    var color = 'rgba(255,255,255,0.8)';

	this.scale = ["", "Adopt", "Trial", "Assess", "Hold"];
    // The "North" axis labels
    if (axes.indexOf('n') > -1) {
        // RGraph.Text(context,font_face,font_size,this.centerx,this.centery - ((r) * 0.2),String(this.scale[0]),'center','center',true,false,color);
        RGraph.Text(context, font_face, font_size, this.centerx, this.centery - ((r) * 0.4), String(this.scale[1]), 'center', 'center');
        RGraph.Text(context, font_face, font_size, this.centerx, this.centery - ((r) * 0.6), String(this.scale[2]), 'center', 'center');
        RGraph.Text(context, font_face, font_size, this.centerx, this.centery - ((r) * 0.8), String(this.scale[3]), 'center', 'center');
        RGraph.Text(context, font_face, font_size, this.centerx, this.centery - r, String(this.scale[4]), 'center', 'center');
    }

    /**
    * Draw the key
    */
    if (key && key.length) {
        RGraph.DrawKey(this, key, this.Get('chart.colors'));
    }
}


/**
* This method draws a set of data on the graph
*/
RGraph.Rscatter.prototype.DrawRscatter = function ()
{
    var data = this.data;

    for (var i=0; i<data.length; ++i) {

        var d1 = data[i][0];
        var d2 = data[i][1];
        var a   = d1 / 180 * Math.PI; // RADIANS
        var r   = d2 / 100 * this.radius;
        var x   = Math.cos(a) * r;
        var y   = Math.sin(a) * r;
        var color = data[i][2];
        var tooltip = data[i][3];
        
        if (tooltip && tooltip.length) {
            this.hasTooltips = true;
        }

        /**
        * Account for the correct quadrant
        */
        x = x + this.centerx;
        y = this.centery - y;


	    var tickmarks    = data[i][5];
		var ticksize = data[i][4];	    
        this.DrawTick(x, y, color, tickmarks, ticksize);
		        
        // Populate the coords array with the coordinates and the tooltip
        this.coords.push([x, y, color, tooltip]);
    }
}

/**
* Draws a single tickmark
*/
RGraph.Rscatter.prototype.DrawTick = function (x, y, color, tickmarks, ticksize)
{

    this.context.strokeStyle = color;
    this.context.fillStyle   = color;

    // Cross
    if (tickmarks == 'cross') {

        this.context.beginPath();
        this.context.moveTo(x + ticksize, y + ticksize);
        this.context.lineTo(x - ticksize, y - ticksize);
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(x - ticksize, y + ticksize);
        this.context.lineTo(x + ticksize, y - ticksize);
        this.context.stroke();
    
    // Circle
    } else if (tickmarks == 'circle') {

        this.context.beginPath();
        this.context.arc(x, y, ticksize, 0, 6.2830, false);
        this.context.fill();

    // Square
    } else if (tickmarks == 'square') {

        this.context.beginPath();
        this.context.fillRect(x - ticksize, y - ticksize, 2 * ticksize, 2 * ticksize);
        this.context.fill();
    
    // Diamond shape tickmarks
     } else if (tickmarks == 'diamond') {

        this.context.beginPath();
            this.context.moveTo(x, y - ticksize);
            this.context.lineTo(x + ticksize, y);
            this.context.lineTo(x, y + ticksize);
            this.context.lineTo(x - ticksize, y);
        this.context.closePath();
        this.context.fill();

    // Plus style tickmarks
    } else if (tickmarks == 'plus') {
    
        this.context.lineWidth = 1;

        this.context.beginPath();
            this.context.moveTo(x, y - ticksize);
            this.context.lineTo(x, y + ticksize);
            this.context.moveTo(x - ticksize, y);
            this.context.lineTo(x + ticksize, y);
        this.context.stroke();
    }
}


/**
* Draws the circular labels that go around the charts
* 
* @param labels array The labels that go around the chart
*/
RGraph.Rscatter.prototype.DrawCircularLabels = function (context, labels, font_face, font_size, r)
{
    var position = this.Get('chart.labels.position');
    var r        = r + 10;

    for (var i=0; i<labels.length; ++i) {


        var a = (360 / labels.length) * (i + 1) - (360 / (labels.length * 2));
        var a = a - 90 + (this.Get('chart.labels.position') == 'edge' ? ((360 / labels.length) / 2) : 0);

        var x = Math.cos(a / 57.29577866666) * (r + 100);
        var y = Math.sin(a / 57.29577866666) * (r + 10);

        RGraph.Text(context, font_face, font_size, this.centerx + x, this.centery + y, String(labels[i]), 'center', 'center');
    }
}

