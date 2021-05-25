/*1-)Re-write the following code using TypeScript. Try to be as explicit as possible and add Types
to everything you can. When you are done, transpile the TS code to JS code and inspect the JS
code.*/
export = {}
function University(name: string, dept:string) {
this.name = name;
this.dept = dept;
this.graduation = function(year: number) {
console.log(`Graduating ${this.dept} ${year} students`);
}
}
var miu = new University("MIU", "Computer Science");
miu.graduation(2019);
/*2-)Re-write the following code using TypeScript. Try to be as explicit as possible and
add Types to everything you can. When you are done, transpile the TS code to JS code
and inspect the JS code.*/
 
interface bankAccount {
  money:number;
  name: string;
  hobbies: string [];
  deposit:(value:number)=>number;
}
function deposit(bankAccount: bankAccount, value:number):number {
   return bankAccount.money += value;
};

 let myself: {
  name: "Asaad",
  money: 2000,
  hobbies: ["Violin", "Cooking"],
  deposit: 3000
  };
console.log(myself.deposit)
  /*3-)Re-write the following code using TypeScript Class syntax. Try to be as explicit as possible
  and add Types to everything you can. When you are done, transpile the TS code to JS code
  and inspect the JS code. */
  interface Mcar {
    name:string;
    acceleration: number;
    honk:(string)=> string;
    accelerate:(number)=> number;
  }
  class Car implements Mcar{
      name: string;
      acceleration: number;
      constructor(name:string, acceleration:number){
          this.name= name;
          this.acceleration= acceleration;
      }
      honk(name:string):string{
          return` ${this.name} is saying: Toooooooooot!`;
         } 
      accelerate(speed:number):number{
            return this.acceleration = this.acceleration + speed;
      }
  }
  var car = new Car("BMW", 60);
  car.honk("BMW"); // BMW is saying: Toooooooooot!
  console.log(car.acceleration); // 0
  car.accelerate(60);
  console.log(car.acceleration); // 60