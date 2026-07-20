//odd or even
console.log("Odd or even");
const prompt = require("prompt-sync")();
let num = prompt("Enter a number: ");
if (num % 2 === 0){
    console.log("Even");
}
else{
    console.log("Odd");
}

//+ve or -ve
console.log("Positive or negative");
const p = require("prompt-sync")();

let n = Number(p("Enter a number: "));

if (n > 0) {
    console.log("Positive");
} else if (n < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//multiplication table
console.log("Multiplication table");
const con = require("prompt-sync")();
let nn = con("Enter a number: ");
for (let i = 1; i <= 10; i++) {
    console.log(`${nn} * ${i} = ${nn * i}`);
}



//sum of first N numbers
const q = require("prompt-sync")();
let l = Number(prompt("Enter N : "));
let summm = 0;
for (let i = 1; i <= l; i++) {
    summm += i;
}
console.log(`Sum of first ${l} numbers is: ${summm}`);

//factorial
console.log("Factorial");
const c = require("prompt-sync")();
let f = Number(prompt("Enter a number: "));
let fact = 1;
for(let ii = 1; ii<=f; ii++){
    fact *= ii;
}
console.log(`Factorial of ${f} is: ${fact}`);


//reverse
const promptuu = require("prompt-sync")();

let nu = Number(promptuu("Enter a number: "));
let reverse = 0;

while (nu > 0) {
    let digit = nu % 10;
    reverse = reverse * 10 + digit;
    nu = Math.floor(nu / 10);
}

console.log("Reverse =", reverse);


//palindrome
const pal = require("prompt-sync")();
let pa = Number(pal("Enter a number: "));
let original = pa;
let reversed = 0;
while(pa > 0){
    let dig = pa % 10;
    reversed = reversed * 10 + dig;
    pa = Math.floor(pa / 10);
}
if (original === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}



//find larges digit
let largest  = 0;
let smallest = 9;
const inp = require("prompt-sync")();
let numberrr = Number(inp("Enter a number: "));
while(numberrr){
    let rem = numberrr % 10;
    largest = Math.max(rem, largest);
    smallest = Math.min(rem, smallest);
    numberrr = parseInt(numberrr / 10);
}
console.log("Largest digit is: " + largest);
console.log("Smallest digit is: " + smallest);

//fibonacci series
const fib = require("prompt-sync")();
let ff = Number(prompt("Enter terms: "));
let aa = 0; 
let bb = 1;
for(let o = 1; o <= ff; o++){
    console.log(aa);
    let cc = aa + bb;
    aa = bb;
    bb = cc;
}