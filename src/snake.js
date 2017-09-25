//snake.js

export default class Snake{
	constructor(x,y, segments){
		this.body = [];
		for(var i = 0; i<segments; i++)
		{
			this.body.push({
				x: x-i,
				y: y
			});
		}
		this.direction = 'right';
	}
	update(food){
		if(food.x === this.body[0].x && )
	}
	render(ctx){
		this.body.foreach(function(segment){
			ctx.save();
			ctx.fillStyle = 'green';
			ctx.fillrect(
				segment.x,
				segment.y,
				1,
				1
				
			);
			ctx.restore();
		});
	}
}