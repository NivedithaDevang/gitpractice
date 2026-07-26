
//template literals
//literals means to assign a finxed value to a variable
//use backticks and not single quotes
let s1 = 'hello, my name is niveditha. ';
let s2 = `You are learning from ${s1}`;

console.log(s2);


//multiline string without having to use </br> but again use backticks
let s = `
    This is a
    multiline
    string`;

console.log(s);

//find the length of a string
console.log(s1.length);


//concat
console.log(s1 + s2);
//or
console.log(s1.concat(s2));


//substring, even space is counted
console.log(s1.substring(0, 11));

//uppercase and lowercase
console.log(s1.toUpperCase());
console.log(s2.toLowerCase());


//to search for a string
console.log(s1.indexOf(','));



//replace a string
console.log(s1.replace('niveditha', 'Nivi'));



//removing unwanted whitespace
let s3 = '    123.    ';
console.log(s3);
console.log(s3.trim());



//access characters
console.log(s2.charAt(1));


//comapring strings
/*
localCompare - it returns -1 is s1 comes before s2
returns 1 if s1 comes after s2
return 0 if both strings are equal
so its basically like comparing string alphabetically
*/
console.log(s1 == s2);
console.log(s1 === s2);
console.log(s1.localeCompare(s2));
console.log(s2.localeCompare(s1));
console.log(s1.localeCompare(s1));



//string methods

//slice
console.log(s1.slice(0, 3));

//substring
console.log(s1.substring(3, 12));

