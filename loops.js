//for loop
console.log("For loop");

for(i = 10; i >= 0; i--){
    
    console.log(i);
}

//even numbers
console.log("Even numbers");
for(let i = 2; i <= 50; i += 2){
    console.log(i);
}

//odd numbers
console.log("Odd numbers");
for(let i = 1; i <= 25; i += 2){
    console.log(i);
}

//sum
let sum = 0;
for(let i = 0; i <=100; i++){
    sum += i;
}
console.log("Sum of numbers from 0 to 100 is: " + sum);


//multiplication
console.log("Multiplication");
let num = 7;
for(let i = 1; i <=5; i++){
    console.log(`${num} * ${i} = ${num*i}`);
}

//count numbers divisble by 5
console.log("Counting numbers");
let count = 0;
for(let i = 1; i <=60; i++){
    if(i % 5 === 0){
        count++;
    }
}
console.log("Count is : ", count);


//print each character of a string
console.log("Print each character of a string");
let str = "JavaScript";
for(let i = 0; i < str.length; i++){
    console.log(str[i]);
}



console.log("While loops");
let n = 0;
let x = 0;
while(n < 3){
    n++;
    x += n;
    console.log(x);
}

//print numbers
let nn = 0;
while (nn <= 10){
    console.log(nn);
    nn++;
}

//even numbers
console.log("Even numbers");
let io = 1;

while (io <= 20) {
    if (io % 2 === 0) {
        console.log(io);
    }
    io++;
}

//odd number
console.log("Odd numbers");
let iii = 1;

while (iii <= 20) {
    if (iii % 2 !== 0) {
        console.log(iii);
    }
    iii++;
}


//do while
console.log("Do while loop");
let bot = 1;
do{
    console.log(bot);
    bot++;
}
while(bot <= 3);

//break statements
console.log("Break statements");
let nivi = 0;
while (nivi < 10) {
    if (nivi === 5) {
        break;
    }
    console.log(nivi);
    nivi++;
}

//continue statememts
console.log("Continue statements");
let nivu = 0;
let navi = 0;
while (nivu < 10) {
    nivu++;
    if (nivu === 5) {
        continue;
    }
    navi += nivu;
    console.log(navi);
}


//pattern
console.log("Left Pattern");
let pat = 5;
for (let i = 1; i <= pat; i++) {
    let str = "* ";
    console.log(str.repeat(i));
}

//right pattern
console.log("Right Pattern");
for (let ick = 5; ick >= 1; ick--) {
    let pattern = "";

    for (let jug = 1; jug <= ick; jug++) {
        pattern += "*";
    }

    console.log(pattern);
}


//square pattern
console.log("Square Pattern");
for(let square = 1; square <= 5; square++){
    let k = "";
    for(let c = 1; c <=5; c++){
        k += "* ";    
    }
    console.log(k);
}


//number triangle
console.log("Number Triangle");
for(let tri = 1; tri <= 5; tri++){
    let numTri = "";
    for(let t = 1; t <= tri; t++){
        numTri += t;

    }
    console.log(numTri);
}


console.log("upside down number pattern");
for (let pick = 5; pick >= 1; pick--) {
    let patt = "";

    for (let jugg = 1; jugg <= pick; jugg++) {
        patt += jugg;
    }

    console.log(patt);
}

//triangle form right
console.log("Triangle form right");
for(let row = 1; row <= 5; row++){
    let dew = " ";
    for(let mount = 1; mount <= 5-row; mount++){
        dew += " ";
        for(let city = 1; city <= row; city++){
            dew += "*";
        }
        console.log(dew);
    }
        }
    
