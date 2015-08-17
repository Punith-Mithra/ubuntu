(function (window) {
    debugger;
    Car.prototype.mpg = 30;

    Car.num_of_wheels = 4;

    function Car(make, model, color) {
        var _make = make;
        var _model = model;
        this.color = color;
        this.getMaker = function () {
            return _make
        };
        this.getModel = function () {
            return _model;
        };
    }

    Car.prototype.startEngine = function () {

        console.log(getDesc(this) + ' Engine Started');
    }

    function getDesc(context) {
        return context.getMaker() + ' ' + context.getModel();
    }

    window.Car = Car;
}(window));