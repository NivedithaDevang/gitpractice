// simple statement
console.log("HIIII", eval("3 + 5"));
// variable declaration
var m = 5;
console.log("M is : ", m);

//let and const
let n = 10;
n = 14;
n = 22;
console.log("N is : ", n);

const sum = 5 + 3; // Addition
const diff = 10 - 2; // Subtraction
const p = 4 * 2; // Multiplication
const q = 8 / 2; // Division
console.log("Sum is : ", sum);
console.log("Difference is : ", diff);
console.log("Product is : ", p);
console.log("Quotient is : ", q);

// Assignment operators
let a = 10;
a /= 10;
a *= 2;
console.log("A is : ", a);

//ternary operator
const age = 18;
const status = age >= 19 ? "Adult" : "Minor";
console.log(status);


//increement operator
let x = 5;

console.log(--x);

//bigint
const big1 = 123456789012345678901234567890n;
const big2 = 987654321098765432109876543210n;
console.log(big1 + big2);

//string concatenation
const s= "HELLO" + " " + "WORLD";
console.log(s);


const obj = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(obj.name);
console.log(obj.age);
console.log(obj.city);

//optional chaining
const ob = { name: "Aman", address: { city: "Delhi" } };
console.log(ob.address?.city);
console.log(ob.contact?.phone);

//if else statement
let d = 100;
if (d >=15) {
  console.log("D is greater than or equal to 15");
} else {
  console.log("D is less than 15");
}


//switch statement
let num = 0;

switch (num) {
    case 0:
        console.log("Number is zero.");
        break;
    case 1:
        console.log("Nuber is one.");
        break;
    case 2:
        console.log("Number is two.");
        break;
    default:
        console.log("Number is greater than 2.");
};


//ternary operator
let numm = 10;

let result = numm >= 0 ? "Positive" : "Negative";

console.log(`The number is ${result}.`);


//for loop
console.log("/nFOR LOOP");
for (let i = 0; i <= 10; i++) {
  if (i % 10 === 0) {
    console.log(i);
  }
};


//while
console.log("/nWHILE LOOP");
let qq = 1;
while (qq <= 10) {
  console.log(qq);
  qq++;
}


//dowhile
console.log("/nDO WHILE LOOP");
let num1 = 1;

do {
    console.log(num1);
    num1++;
} while (num1 <= 5);

console.log("Datatypes");
// 1. Define variables of different data types
const name = "Alice";        // String
const agee = 30;              // Number
const isDeveloper = true;    // Boolean
const skills = ["JS", "TS"]; // Array (Object)
const profile = { id: 101 };  // Object
const missingData = null;    // Null (Object bug in JS)
let undefinedVar;            // Undefined

// 2. Find and print their data types
console.log("name:", typeof name);                 // "string"
console.log("agee:", typeof agee);                   // "number"
console.log("isDeveloper:", typeof isDeveloper);   // "boolean"
console.log("profile:", typeof profile);           // "object"
console.log("undefinedVar:", typeof undefinedVar); // "undefined"

// 3. Special cases to watch out for:
console.log("missingData (null):", typeof missingData); // "object" 

// Since arrays return "object" with typeof, use Array.isArray() instead:
console.log("skills (is array?):", Array.isArray(skills)); // true



//type conversion
let number = 100;
let str = "50"
let bool = true;

//implicit
console.log("Implicit Conversion:");
console.log(number + str);
console.log(number + bool);

//explicit
console.log("Explicit Conversion:");
console.log(String(number));
console.log(Number(str));
console.log(Boolean(bool));


//checking types
console.log("Checking Types:");
console.log(typeof number); // "number"
console.log(typeof str);    // "string"
console.log(typeof bool);   // "boolean"