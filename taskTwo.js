function Square(side) {
    var sideLength = side;
    this.getSide = function () {
        return sideLength;
    }
    this.perimeter = function () {
        return sideLength * 4
    }
}
function CubeOne(side) {
    Square.call(this, side);
    var parentPerimeter = this.perimeter.bind(Square);
    this.perimeter = function () {
        console.log("Perimetr CubeOne:" + "  " + side * 12);
    }
}
function CubeTwo(side) {
    Square.call(this, side);
    var parentPerimeter = this.perimeter.bind(Square);
    this.perimeter = function () {
        var sidePer = parentPerimeter();
        console.log("Perimetr CubeTwo:" + "  " + (side * 8 + sidePer));


    }
}
function main() {
    var cubeOne = new CubeOne(2);
    var cubeTwo = new CubeTwo(2);
    var array = [cubeOne, cubeTwo];
    for (var i = 0; i < array.length; i++) {
        array[i].perimeter();
    }
}

main();