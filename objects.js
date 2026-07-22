//objects in curl braces with key value pairs
let obj = {
    name : "Niveditha",
    age : "21",
    place : "Bengaluru"

}
console.log(obj);


//accessing object properties
console.log(obj.name);

//modify
obj.age = 21.5;
console.log(obj);


//adding properties
obj.clg = "AMC";
console.log(obj);


//delete properties
delete obj.age;
console.log(obj);


//to check if any property is there or not
console.log("age" in obj);
console.log(obj.hasOwnProperty("name"));


//mergin two objects
let o = {"gender" : "female"}
let objs = {"course" : "bca",
    "age" : 21,
}
let mergee = {...o, ...objs};
console.log(mergee);
console.log({...obj, ...objs});


//object length
console.log(Object.keys(objs).length);