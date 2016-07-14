var Tile = function(container, width, height, x, y, url){
	
	this.container 	= container;
	this.width 		= width;
	this.height 	= height;
	this.x 			= x;
	this.y 			= y;
	this.url 		= url;
	
	this.render();
};

Tile.prototype.render = function(){
	
	var $element = $('<div>',{ class:'tile-container' });
	this.$element = $element;
	
	$element.css({
		position:'absolute',
		x		: this.x,
		y		: this.y,
		width	: this.width,
		height	: this.height,
		backgroundColor:'#eeeeee'
		
	});
	
	this.$element.on('mouseenter', this.mouseOver.bind(this));
	
	$(this.container).append($element);
};

Tile.prototype.loadImage = function(){
	
	
	
};


Tile.prototype.mouseOver = function(){
	
	var self = this;
	
	$(this.$element).transition({
		backgroundColor:'#aaaaaa'
	});
	
	setTimeout(function(){
		
		$(self.$element).transition({
			backgroundColor: '#eee'
		});
		
	},500);
};

var app = {
	
	NUM_TILES:10,
	TILE_WIDTH:100,
	TILE_HEIGHT:100,
	init:function(){
		
		var container = $('.tiles-container');
		var rowNum = Math.floor($(window).height()/app.TILE_HEIGHT);
		
		while(rowNum--){
		
			var tileNum = Math.floor($(window).width()/app.TILE_WIDTH); 
			
		while(tileNum--){
			
			var tile = new Tile(
				container, 
				app.TILE_WIDTH, 
				app.TILE_HEIGHT, 
				tileNum * (app.TILE_WIDTH+5),
				rowNum * (app.TILE_HEIGHT+5),
				''
			);
		}
		
		}
	}
	
};
app.init();