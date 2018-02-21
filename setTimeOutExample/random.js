function random(min, max, delay, callback) {
    if (min < max) {
        var myNumber = Math.ceil(Math.random() * (min - max) + max);
        setTimeout(callback, delay, null, myNumber);
    } else {
        var error = {
            msg: "min > max"
        }
        setTimeout(callback, delay, error);
    }
}
random(1, 100, 2000, function (error, data) {

    console.log(data);
});
random(1000, 100, 3000, function (error, data) {
    console.log("Error:" + error.msg);
});