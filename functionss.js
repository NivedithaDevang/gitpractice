//basic function example
function show(){
    let msg = "HELLO";
console.log(msg);
}
show();
show();


//outside variable
let u = "Me";
function f(){
    console.log(u);
}
f();


//parameters
function par(from, text){
    console.log(from + ' : ' + text);
}
par('Nivi', 'Dhanvi');


//returning a value
function sum(a, b){
    return a + b;
}
let result = sum(2, 3);
console.log(result);


//returning without a value
function age(a){
    if(a >= 16){
        return true;

    }
    else{
        return false;
    }
}
const agee = require("prompt-sync")();
let a = agee("Enter our age: ");
if(age(a)){
    console.log("eligible for 10th");
}
else{
    console.log("not eligible for 10th");
}


//function for factorial
function fact(nd){
    if(nd == 0 || nd == 1){
        return 1;
    }
    return nd * fact(nd-1);
    
}
console.log(fact(10));


//global variable
const num1 = 20;
const num2 = 23;
const name = "Niveditha";
function get(){
    
    function score(){
    
    return `${name} scored  ${num1 + num2}`;
}
return score();
}
console.log(get());


//power
function pow(x, n){
    return Math.pow(x, n);
}
console.log(pow(3, 3));



//arrow functions, with parameter
const add = (a, b) => a + b;
console.log(add(11, 3));


//arrow functions without parameters
const gfg = () => {
    console.log("HI");
}
gfg();


//arrow function
//this is without using arrows
const elements = ["Helium", "Hydrogen", "Lithium", "Berillium"];
const ele = elements.map(function(sub){
    return sub.length;
});
console.log(ele);
//now using arrow
const el = elements.map((sub) => sub.length);
console.log(el);

//addition
const arrowFunc = (par1, par2) => par1 + par2;
console.log(arrowFunc(5, 7));