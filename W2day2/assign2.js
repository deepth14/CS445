"use strict";
function University(name, dept) {
    this.name = name;
    this.dept = dept;
    this.graduation = function (year) {
        console.log("Graduating " + this.dept + " " + year + " students");
    };
}
var miu = new University("MIU", "Computer Science");
miu.graduation(2019);
function deposit(bankAccount, value) {
    return bankAccount.money += value;
}
;
var myself;
console.log(myself.deposit);
var Car = /** @class */ (function () {
    function Car(name, acceleration) {
        this.name = name;
        this.acceleration = acceleration;
    }
    Car.prototype.honk = function (name) {
        return " " + this.name + " is saying: Toooooooooot!";
    };
    Car.prototype.accelerate = function (speed) {
        return this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW", 60);
car.honk("BMW"); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60
module.exports = {};
