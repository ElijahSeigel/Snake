import Snake from './snake';

class Game{
	constructor(){
		this.snake = new Snake();
		this.food = [];
		this.canvas = document.createElement('canvas');
		this.canvas.width = 100;
		this.canvas.height = 100;
		document.appendChild(canvas);
		this.context = canvas.getContext('2d');
	}
	update(){
		this.snake.update();	
	}
	render(){
		this.snake.render(context);
	}
}