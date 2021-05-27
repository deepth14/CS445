"use strict";
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
var applyCoupon;
-discount;
applyCoupon(item)(10); // 180
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
