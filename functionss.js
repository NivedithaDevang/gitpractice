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