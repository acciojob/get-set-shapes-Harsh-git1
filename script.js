//complete this code
class Rectangle {
	constructor(width, height) {
		this.w = width;
		this.h = height;
		
	}

	get width() {
		return this.w;
	}
	get height() {
		return this.h;
	}
	getArea() {
		let area = this.h * this.w;
		return area;
	}

	
}

class Square extends Rectangle {

	constructor(number){
		super(number, number);
		this.n = number;
	}
	
	getPerimeter() {
		return (4*this.n);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
