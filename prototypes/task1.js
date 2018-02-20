function Shape(x, y) {
    this._x = x;
    this._y = y;
}
Shape.prototype.info = function () {
    console.log("x:" + this._x + "   " + "y:" + this._y);
}
Shape.prototype.getX = function () {
    return this._x;
}
Shape.prototype.getY = function () {
    return this._y;
}
function Rectangle(x, y, diagonal) {
    Shape.call(this, x, y);
    this._diagonal = diagonal;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.info = function () {
    console.log("x:" + this.getX() + "   " + "y:" + this.getY() + "  " + "diagonal:"+ "  " + this._diagonal);
};
function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this._radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.info = function () {
    console.log("x:" + this.getX() + "   " + "y:" + this.getY() + "  " + "radius:"+ "  " + this._radius);
};
function main() {
    var rectangle = new Rectangle(1, 2, 3);
    var circle = new Circle(4, 5, 6);

    var shapes = [rectangle, circle];

    for (var i = 0; i < shapes.length; i++) {
        shapes[i].info();
    }
}

main();

