//synchronous callback
function outer(){
    let counter = "Hello";
    function inner(){
       
        console.log(counter);
    }
    inner();
}
outer();




function create(){
 let count = 0;

function increment(){
   
    count++;
    console.log(count);
}
return {increment};
}
const cou = create();
cou.increment();
cou.increment();
cou.increment();
cou.increment();
cou.increment();



let score = 0;
function increase(points){
    score += points;
    console.log(`${points} pts`);
}
function decrease(points){
    score -= points;
    console.log(`${points} pts`);
}
function get(){
    return score;
}
increase(2);
increase(90);
decrease(20);
console.log(`final score is ${get()} pts`);


function name(){
    let n = "nivi";
    function print(){
        console.log(n);
    }
    print();
}
const cc = name();
console.log(cc);
console.log(cc);

//asynchronous callback
const hello = () =>
{
    console.log("NIVEDITHA");
}
setTimeout(hello, 3000);


//callbacks
function sum(a, b){
    console.log(a + b);
}
function calc(a, b, call){
    call(a, b);
}
calc(1, 2, sum);
//do not return callback in parentheses


//another way
calc(1, 2, (a, b) => {
    console.log(a + b);
});



//promises
//resolved
let promise = new Promise((resolve, reject) => {
console.log("This is a promise");
resolve("Done");

}
);

//rejected
let promise1 = new Promise((resolve, reject) => {
console.log("This is a promise");
reject("rejected");

}
);


//then & catch keywords
let result = new Promise((resolve, reject) => {
    resolve("Data received successfully");
});

result.then((message) => {
        console.log(message);
    })
    result.catch((error) => {
        console.log(error);
    });