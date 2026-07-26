//array looping
//this is for...of loop
console.log("For...of loop");
let a = [10, 20, 30, 40, 50];
for (let item of a) {
    console.log(item);
}


//foreach method
console.log("ForEach method");
a.forEach((item) => {
    console.log(item);
}
)

//for...in loop
console.log("For..in loop");
for(let i in a){
    console.log(a[i]);
}


//for loop
console.log("For loop");
for(i = 0; i < a.length; i++){
    console.log(a[i]);
}


//while loop
console.log("while loop");
let i1 = 0;
while(i1 < a.length){
    console.log(a[i1]);
    i1++;
}


//do while loop
console.log("Do while loop");
let i2 = 0;
do{
    console.log(a[i2]);
    i2++;
}while(i2 < a.length);