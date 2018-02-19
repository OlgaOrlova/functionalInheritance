function Square(side) {
    this._side = side;
}
Square.prototype.side = function () {
    console.log("side:" + this._side);
}
Square.prototype.getSide = function () {
    return this._side;
}
Square.prototype.perimeter = function () {
    return this._side * 4
}

function CubeOne(side) {
    Square.call(this, side);
}
CubeOne.prototype = Object.create(Square.prototype);
CubeOne.prototype.constructor = CubeOne;

CubeOne.prototype.perimeter = function () {
    console.log("Perimetr CubeOne:" + "  " + this._side * 12);
};

function CubeTwo(side) {
    Square.call(this, side);
}

CubeTwo.prototype = Object.create(Square.prototype);
CubeTwo.prototype.constructor = CubeTwo;
CubeTwo.prototype.perimeter = function () {
    var parentPerimeter = Square.prototype.perimeter.call(this);
    console.log("Perimetr CubeTwo:" + "  " + (this._side * 8 + parentPerimeter));
};

function main() {
    var cubeOne = new CubeOne(2);
    var cubeTwo = new CubeTwo(2);
    var array = [cubeOne, cubeTwo];
    for (var i = 0; i < array.length; i++) {
        array[i].perimeter();
    }
}

main();
