/** @ function Snake
  * scope for snake game
  */
function Snake(){
	var self = this;
	this.cellsize = 10;
	this.width = 15;
	this.height = 15;
	this.snake = [{x:7, y:7}, {x:6, y:7}, {x:5, y:7}];
	this.direction = 'right';
	this.food = [];
	var canvas = document.createElement('canvas');
	canvas.width = this.width * this.cellsize;
	canvas.height = this.height * this.cellsize;
	document.body.appendChild(canvas);
	this.ctx = canvas.getContext('2d');
	
	window.onKeyDown = this.handleKeyDown;
	
	setInterval(()=>this.loop(), 1000);
	//this.render();
}
new Snake();

Snake.prototype.handleKeyDown = function (event){
	switch(event.keyCode){
		case 'w':
	}
}

Snake.prototype.render = function(){
	this.ctx.fillStyle = "#000";
	this.ctx.fillRect(0,0, this.width * this.cellsize, canvas.height = this.height * this.cellsize);
	this.ctx.fillStyle = 'ivory';
	this.snake.foreach((segment)=>{
		this.ctx.fillRect(segment.x*this.cellsize, segment.y*this.cellsize, this.cellsize, this.cellsize);	
	});
	
	this.ctx.fillStyle = 'gold';
	this.food.foreach((food)=>{
		this.ctx.fillRect(food.x*this.cellsize, food.y*this.cellsize, this.cellsize, this.cellsize);	
	});
}

Snake.prototype.update = function()
{
	var x = this.snake[0].x;
	var y = this.snake[0].y;
	switch(this.direction){
		case 'right':
			x++;
			break;
		case 'left':
			x--;
		case 'down':
			y++;
			break;
		case 'up':
			y--;		
	}
	
	if(x<0 || x> this.width || y < 0 || y > this.height)
	return;
	
	this.snake.pop();
	this.snake.unshift({
		{x:x, y:y}
	});
}

Snake.prototype.loop = function(){
	this.update();
	this.render();
}