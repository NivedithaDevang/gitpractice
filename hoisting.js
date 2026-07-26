console.log("Variabe hoisting");
console.log(a);
var a = 10;

console.log("let and const hoisting");
let b = 20;
console.log(b);



console.log("Function declaration hoisting");
greet();
function greet(){
    console.log("Hello");
}


console.log("Hoisting with classes");
class MyClass {
    constructor() {
        this.name = "Niveditha";
        console.log(this.name); //to print Niveditha

    }
}
const obj = new MyClass(); // ReferenceError if this is above the class
console.log(obj.name);
