"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.isWeekend = void 0;
/* 1-) Create an application app.ts which will import the following three modules:
1. Module 01 - module01.ts
Complete the code for isWeekend() function and return the string "weekend" or
"weekday" without using if-statement. */
function isWeekend() {
    var todayDate = new Date();
    //const day: number = todayDate.getDay(); // 0 – 6 (0 is Sunday)
    // your code here
    return ["weekday", "weekend"][todayDate.getDay() / 6]; // need parseInt(todayDate.getDay() / 6)
}
exports.isWeekend = isWeekend;
isWeekend();
var item = {
    "name": "Avocado",
    "type": "Fruit",
    "category": "Food",
    "price": 200
};
// let applyCoupon= (Iitem) => (discount) => Iitem-(Iitem*0.1);
// applyCoupon(100)(10)
//let applyCoupon: (i: Iitem) => (discount: number) => (price:number)=>price-discount;
//applyCoupon(item)(10)// 180
/*3. Module 03 - module03.ts
Write a function function isDual(arr: number[]): boolean{} that accepts an Array of
numbers. An array is said to be dual if it has an even number of elements and each pair
of consecutive elements sum to the same value.
Return true if the array is dual, otherwise return false.*/
function isDual(arr) {
    var sum = [];
    if (arr.length % 2 !== 0)
        return false;
    for (var i = 0; i < arr.length; i++) {
        sum.push(arr[i] + arr[i + 1]);
    }
    var result = sum.every(function (ele) { return ele !== sum[0] ? true : false; });
    return result;
}
isDual([1, 1, 2, 2]);
var MyStorage = /** @class */ (function () {
    function MyStorage() {
        this.storage = {};
    }
    MyStorage.prototype.getItem = function (key) {
        return this.storage[key];
    };
    MyStorage.prototype.setItem = function (key, value) {
        this.storage[key] = value;
    };
    MyStorage.prototype.getStorage = function () {
        return this.storage;
    };
    return MyStorage;
}());
var ImmutableStorage = /** @class */ (function (_super) {
    __extends(ImmutableStorage, _super);
    function ImmutableStorage() {
        var _this = _super.call(this) || this;
        Object.freeze(_this.storage);
        _this.storage2 = __assign({}, _this.getStorage());
        return _this;
    }
    // complete the code here
    ImmutableStorage.prototype.setItem = function (key, value) {
        this.storage2[key] = value;
    };
    return ImmutableStorage;
}(MyStorage));
var immute = new ImmutableStorage();
immute.setItem('hello', "world");
console.log(immute);
/* 5. Write a function function removeDuplicates(): number[] {} that will work on any Array
object, the function will remove all the duplicate numbers from an array.*/
function removeDuplicates(array) {
    return array.filter(function (a, b) { return array.indexOf(a) === b; });
}
;
removeDuplicates([4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2]);
/*6. Write a function filterWords(string[]): string {} that will work on any String object. It
accepts an array of strings that specifies a list of banned words. The function returns the
string after replacing all the banned words with three stars.*/
function filterWords(arr) {
    var rr;
    var str = "This course is awesome";
    for (var i = 0; i < arr.length; i++) {
        if (str.includes(arr[i])) {
            rr = "This course is awesome".replace(arr[i], "***");
            arr.shift(arr[i]);
        }
    }
    return rr;
}
var b = filterWords((['course', 'awesome']));
var d = b.replace("awesome", "***");
console.log(d);
