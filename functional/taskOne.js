function Shape(centerX, centerY) {
    var x = centerX;
    var y = centerY;

    this.getX = function () {
        return x;
    }
    this.setX = function (centerX) {
        x = centerX;
    }
    this.getY = function () {
        return y;
    }
    this.setY = function (centerY) {
        y = centerY;
    }
    this.info = function () {
        console.log("x:" + x + "   " + "y:" + y);
    }

}

function Rectangle(x, y, diagonal) {
    Shape.call(this, x, y);
    this.diagLength = diagonal;
    var parentInfo = this.info.bind(Shape);
    this.info = function () {
        parentInfo();
        console.log("diagonal:" + diagonal);
    }

}

function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.radius = radius;
    var parentInfo = this.info.bind(Shape);
    this.info = function () {
        parentInfo();
        console.log("radius:" + radius);
    }
}

function main() {
    var r = new Rectangle(1, 2, 3);
    var c = new Circle(4, 5, 6);
    var shapes = [r, c];

    for (var i = 0; i < shapes.length; i++) {
        shapes[i].info();
    }
}

main();