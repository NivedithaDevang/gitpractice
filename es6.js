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



var $variable_name12 = 10 
        /* Global variable can be accessed
         from anywhere */
        function Geeks() {

            var $variable_name12 = 100
            console.log("<br>Inside Geeks() = " + $variable_name12)
        }
        console.log("Outside Geeks() = " + $variable_name12)
        Geeks();


        //another example
        var exam = "ES6";
        function result(){
          var exam = "ES5";
          console.log("Result function exam: " + exam)

        }
        console.log("Outside result function : " + exam)
        result();


        const pair = {x:30, y:60};

// Updating the x and y values of the object
pair.x = 10;
pair.y = 90;

console.log(pair);

//adding another pair
pair.z = 20;
console.log(pair);


//constants in for..of loop
const arr = ['hi', 'hello', 'how'];
for(const e of arr){
  console.log(e);
}



//void keyword is used to evaluate an expression but do not return any value
const re = x => x * x;
console.log(void re(5));

console.log(void 10);



const compareNumbers = (a, b) => 
    a > b ? "a is greater than b" : "b is greater than a";

console.log(compareNumbers(10, 20)); // Output: b is greater than a



//decision making statements
const compare = (a, b) => {
    if (a > b) {
        console.log(a+ " is greater than " +b);
    } else {
        console.log(b+ " is greater than " +a);
    }
};

compare(10, 20);


//timeout function
setTimeout(function() {
    console.log('Hello, world!');
}, 3000);


console.log("Start");

setTimeout(function() {
    console.log("Delayed log after 2000 milliseconds");
}, 6000);

console.log("End");



//forEach 
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num));
