function Square(side) {
    this._side = side;
    this.getSide = function () {
        return this._side;
    }
    this.perimeter = function () {
        return this._side * 4
    }

}
function CubeOne(side) {
    Square.call(this, side);
    this.perimeter = function () {
        console.log("Perimetr CubeOne:" + "  " + this._side * 12);
    }
}
function CubeTwo(side) {
    Square.call(this, side);
    var parentPerimeter = this.perimeter;
    this.perimeter = function () {
        var sidePer = parentPerimeter.call(this);
        console.log("Perimetr CubeTwo:" + "  " + (this._side * 8 + sidePer));
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