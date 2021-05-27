/* 1-) Create an application app.ts which will import the following three modules:
1. Module 01 - module01.ts
Complete the code for isWeekend() function and return the string "weekend" or
"weekday" without using if-statement. */
export function isWeekend(): string {
    const todayDate: Date  = new Date();
    //const day: number = todayDate.getDay(); // 0 – 6 (0 is Sunday)
    // your code here
    return ["weekday", "weekend"][todayDate.getDay() / 6]; // need parseInt(todayDate.getDay() / 6)
}
isWeekend()

/*2. Module 02 - module02.ts
We want to create a curryable function that takes one argument:
● An item object
The returned function takes another one argument:
● Discount value between 0 and 100 (a $100 item with a 10% discount will
cost $90).*/
interface Iitem {
    name: string, type: string, category: string, price: number
}
const item: Iitem = {
    "name": "Avocado",
    "type": "Fruit",
    "category": "Food",
    "price": 200
}
// let applyCoupon= (Iitem) => (discount) => Iitem-(Iitem*0.1);
// applyCoupon(100)(10)
let applyCoupon: (i: Iitem) => (discount: number) => (price:number)=>price-discount;
applyCoupon(item)(10)// 180

/*3. Module 03 - module03.ts
Write a function function isDual(arr: number[]): boolean{} that accepts an Array of
numbers. An array is said to be dual if it has an even number of elements and each pair
of consecutive elements sum to the same value.
Return true if the array is dual, otherwise return false.*/
function isDual(arr: number[]) {
    let sum: number[] = []
    if (arr.length % 2 !== 0) return false;
    for (let i = 0; i < arr.length; i++) {
        sum.push(arr[i] + arr[i + 1])
    }
    let result: boolean = sum.every(ele => ele !== sum[0] ? true : false)

    return result;
}
isDual([1, 1, 2, 2])

/* 5. Write a function function removeDuplicates(): number[] {} that will work on any Array
object, the function will remove all the duplicate numbers from an array.*/

function removeDuplicates(array):[] {
    return array.filter((a:number, b:number) => array.indexOf(a) === b)
  };
 
  removeDuplicates([4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2])

/*6. Write a function filterWords(string[]): string {} that will work on any String object. It
accepts an array of strings that specifies a list of banned words. The function returns the
string after replacing all the banned words with three stars.*/
function filterWords(arr){ 
    let rr: string
    let str ="This course is awesome"
    for(let i=0; i<arr.length; i++){ 
      if(str.includes(arr[i])){
       rr="This course is awesome".replace(arr[i], "***")
       arr.shift(arr[i]) 
      }  
    } 
           return rr     
  }
  
  let b= filterWords((['course', 'awesome']))
  let d=b.replace("awesome", "***")
  console.log(d)
