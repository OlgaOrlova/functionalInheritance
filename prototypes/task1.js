function Shape(centerX, centerY) {
    this.x = centerX;
    this.y = centerY;
}
Shape.prototype.info = function () {
    console.log("x:" + this.x + "   " + "y:" + this.y);
}
Shape.prototype.getX = function () {
    return this.x;
}
Shape.prototype.getY = function () {
    return this.y;
}
function Rectangle(x, y, diagonal) {
    Shape.call(this, x, y);
    this.diagonal = diagonal;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.info = function () {
    console.log("x:" + this.x + "   " + "y:" + this.y + "  " + this.diagonal);
};
function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.info = function () {
    console.log("x:" + this.x + "   " + "y:" + this.y + "  " + this.radius);
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

