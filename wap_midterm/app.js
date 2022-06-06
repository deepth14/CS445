function mulCount(a,b){
   
let arr = a.filter(c=>c%b===0)
return arr.length;
}
console.log(mulCount([1,2,1,2,3,4,3,4],4))

/**
 * 
 */
function reversedInplace(a){
    let b=a.reverse();
    return b
}
console.log(reversedInplace([1,2,3,4,5]))