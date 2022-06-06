"use strict";
$(function () {
    let car = {
        make: "default",
        model: "default",
        color: "default",
        drive: function (speed) {
            console.log(`${this.color} ${this.make} ${this.model} and is deriving at ${speed}`);
        },
        stop: function () {
            console.log(`${this.color} ${this.make} ${this.model} stopping`);
        },
    };
    let redHondaAccord = Object.create(car);
    redHondaAccord.color = "red";
    redHondaAccord.model = "Honda";
    redHondaAccord.make = "Accord";
    redHondaAccord.drive(200);

    function Car(make = "default", model = "default", color = "default") {
        this.model = model;
        this.make = make;
        this.color = color;
    }
    Car.prototype.drive = function (speed) {
        console.log(
            `${this.color} ${this.make} ${this.model} and is deriving at ${speed}`
        );
    };
    Car.prototype.stop = function () {
        console.log(`${this.color} ${this.make} ${this.model} stopping`);
    };
    let redHondaAccord2 = new Car("red", "honda", "Accord");
    redHondaAccord2.drive(300);

    let utile = (function () {
        let couunt = 0;
        function multipleCount(arr = [1, 2, 3, 4, 5, 6], b) {
            let count = 0;

            let filterArray = arr.filter((e, i) => {
                return e % b == 0;
            });
            this.count = filterArray.length;
            return this.count;
        }
        function reverse() {}
        return {
            multipleCount: multipleCount,
            reverse: reverse,
        };
    })();
    let x = utile.multipleCount([1, 2, 3, 4, 5], 2);
    console.log(x);

    let arrayUtils = (function () {

        function multipleCount(arr, b) {

            let filterArr = arr.filter((n1, n2) => {
                return n1 % b === 0;
            });

            return filterArr.length;
        }

        function reverse(arr) {
            return arr.map((item, i) => arr[arr.length - 1 - i]);
        }

        return {
            multipleCount: multipleCount,
            reverse: reverse,
        };
    })();
    let res = arrayUtils.reverse([1,2,3,4,5]);
    console.log(res);

// add printname Question 4
    utile.printName = function (name) {
        console.log(name);
    }
});