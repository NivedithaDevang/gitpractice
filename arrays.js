//empty array
let a= [];
console.log(a);

//array with values
let b = [1, 2, 3];
console.log(b);

//accessing elements of an array
let c = [1, 2, 3, 4, 5];
console.log(c[2]);
console.log(c[0]);

//accessing last element of an array
console.log(c[c.length-1]);


//modifing array
let d = [1, 2, 3, 4, 5];
console.log(d);
d[1] = "HI";
console.log(d);


//adding elements
let e = ["HTML", "CSS", "JS"];
console.log(e);
e.push("Node");
e.unshift("Web");
console.log(e);


//removing elements
let f = [1, 2, 3, 4, 5];
console.log(f);
f.pop();
f.shift();
f.splice(1, 2);
console.log(f);

//array length
console.log(f.length);


//increase or decrease length of array
f.length = 7;
console.log(f);

f.length = 0;
console.log(f);

//iterating array
for(i = 0; i < e.length; i++){
    console.log(e[i]);
}



//foreach function
e.forEach(function my(x){
    console.log(x);
})


//concat
console.log(d.concat(b));


//convert array to string
console.log(d.toString());

//to check type
console.log(typeof(d));


//isArray and instanceOf
console.log(Array.isArray(c));
console.log(b instanceof Array);



//print alternate numbers
let g = [10, 20, 30, 40, 50, 60, 70];
for(let i = 0; i < g.length; i += 2){
    console.log(g[i]);
}
