let arr = [1, 2, 3, 4, 5, 6, 7];

//map function (modifies ever element of an array)
let a = arr.map((arr) => arr - 100);
console.log(a);



//filter
let b = arr.filter((arr) => arr % 2 === 0);
console.log(b);



//reduce
//we gave 0 , bcoz it is inital value, so like the total initally starts from 0
let c = arr.reduce((total, num) => total + num, 0);
console.log(c);


//find

//returns only first element
let d = arr.find((arr => arr > 5));
console.log(d);


//some
let e = arr.some((arr => arr === 5));
console.log(e);


//every
let f = arr.every((arr => arr > 10));
console.log(f);


//sort

//ascending
let g = arr.sort((a, b) => a - b);
console.log(g);


//descending
let h = arr.sort((a, b) => b - a);
console.log(h);