//practicing es6

//subtraction
let a = (a, b) => a - b;
console.log(a(3, 3));

//printing
let b = () => "HI";
console.log(b());


//addition
let add = (a, b) => a + b;
console.log(add(10, 20));


//square
let square = a => a * a;
console.log(square(10));
//

//even or odd
let num = a =>{
if(a % 2 == 0){
    console.log("Even number");
}
else{
    console.log("odd number");
}
}
num(21);


//larger of two numbers
let large = (a, b) =>
{
    if(a > b){
        console.log(a+ " is greater than " +b);
    }
    else{
        console.log(a+ " is less than " +b);
    }
}
large(100, 11);



//return length of a string
let st = () => "java";
console.log(st().length);


//convert to uppercase
console.log(st().toUpperCase());


//find sum of elements
const sumArray = (arr) => arr.reduce((sum, n) => sum + n, 0);
console.log(sumArray([2, 4, 6])); // 12

//reverse a string
const rev = (str) => str.split("").reverse().join("");
console.log(rev("hello"));


//merge arrays
let a1 = [1, 2];
let a2 = [3, 4];
let a3 = [...a1, ...a2];
console.log(a3);


//rest operator
let sum = (...num) => {
console.log(num);
}
sum(11, 11, 11);


//destructuring
let colors = ["Red","Blue","Green"];

let [red, blue, green] = colors;

console.log(red);
console.log(blue);
console.log(green);


//default parameters(if name is not defined in the function,
// it'll displa guest by default)
const greet = (name = "Guest") => {
    console.log(`Hello ${name}`);
}

greet();


//student object
const student = {
    name: "Niveditha",
    age: 21,
    course: "BCA"
};

// Arrow function
const display = (student) => {
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Course: ${student.course}`);
};
display(student);

//or another way
const displaystu = ({ name, age, course }) =>
    console.log(`Name: ${name}, Age: ${age}, Course: ${course}`);
displaystu(student);