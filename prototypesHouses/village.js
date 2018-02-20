function House(name) {
    this._name = name;
}
House.prototype.getName = function () {
    return this._name;
}
House.prototype.open = function () {
    console.log("Door opens normally");
}

function ExtendedDoorConfigHouse(name) {
    House.call(this, name);
}

ExtendedDoorConfigHouse.prototype = Object.create(House.prototype);
ExtendedDoorConfigHouse.prototype.constructor = ExtendedDoorConfigHouse;

House.prototype.open = function () {
    console.log("Door opens vertically");
}
function ExtensionedHouse(name, extension) {
    House.call(this, name);
    this._extension = extension;
}

ExtensionedHouse.prototype = Object.create(House.prototype);
ExtensionedHouse.prototype.constructor = ExtensionedHouse;
ExtensionedHouse.prototype.getExtension = function () {
    return _extension;
}
ExtensionedHouse.prototype.info = function () {
    console.log("Owner:" + "  " + this.getName() + ". House has " + this._extension);
}

var houseChildOne = new ExtendedDoorConfigHouse("Olga");
houseChildOne.open();
var houseChildTWo = new ExtensionedHouse("Yuri", "Stable");
houseChildTWo.info();