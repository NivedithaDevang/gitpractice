let v = 15;
function f1() { 
   "use strict"; 
   var v = "Hi!  I'm a strict mode script!"; 

}
 console.log(v);

 //merging arr1 and arr2 in es6
let arr1 = [1,2,3];
let arr2 = [...arr1,4,5];
console.log(arr2);

// in old JS
let a = 1;
let b = 2;
let x = 3;
function add(a, b) {
  return a + b;
}
console.log(add(a, b));

// in es6
const addi = (a, b) => a + b;             
const addition = (a, b) => { return a + b; };  
const square = x => x * x;              
const greet = () => 'Hello!';   
console.log(addi(a, b));         
console.log(addition(a, b));
console.log(square(x));
console.log(greet());

