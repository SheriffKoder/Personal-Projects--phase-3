
//keep in mind
//let y = x ?? "in case x is null/undefined, this string will be in y";
//console.log(x%3); //if x is divisable by 3, will console 0
//return (a > b)? a : b;
// let x = y || "default value";
//forEach on array of html_elements to give eventListeners
//a function variable can be used in a nested function

// function x (...args) {
//     args.forEach(p => {
//         console.log(p);
//     });
// };
// x(1,2);


////Array Methods

//an array is a numbered object
//console.log(array1 instanceof Array);   //true/false

// array matrix =[ [,,][,,][,,]  ];
// arrays can hold function, obj-ref, 



////JS Works

//array.slice (new array) -- take specific values from an
/*
//return values in index 0,1,2 - not reach 3
array.slice(0,3)
//return values from 3 to pre last value - not reach last value
//-1 last value
array.slice(3,-1)


*/


//.filter -- get specific elements from an array
//returns a (new array) with elements get a true statement on
/*
let arr1 = [1,"a",3,4];

let x = arr1.filter(p => {
    return isNaN(p)
});

console.log(x);

*/


//array.reduce -- combines elements of an input together based on the call back
//can be used for sum/subtraction
/*
//an initial value may be used for the first iteration. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

const array1 = [1,2,3,4]; const initialValue = 0;

const sumWithInitial = array1.reduce((accumulator, currentValue) => 
    accumulator + currentValue, initialValue
);    
console.log(sumWithInitial);

const subWithInitial = array1.reduce((accumulator, currentValue) => 
    accumulator - currentValue, initialValue
);    
console.log(subWithInitial);

const merge = (...objects) =>
//many objects here
//callback to return one object of all the objects passed
objects.reduce((accumulator, currentValue) => ({...accumulator, ...currentValue}));
console.log(merge(Obj1, Obj2));

*/




////Convert

//.join()  -- outputs a string from the array elements combined
//.join("-") - with a - in between elements
//array.toString();
//.reverse()
//.sort                     -- sort array numbers (changes original)
/*
array1.sort((a,b) => a/b - b/a);
a - b (incrementing) , b - a (decrementing)
idea: not switch if negative comparison, will switch if positive
*/







////Add Remove

//.splice                   -- add anywhere (changes original)
/*
//arr1.splice(2,1, "one", "two") -- add both string values in position 2, remove 1 element after
*/

//array1.unshift("x");      -- add from beginning (changes original)
//array1.shift();           -- remove from beginning (changes original)
//arr1.pop();               -- remove from end (changes original)
//arr1.push("x")            -- add to end (changes original)
// .concat                  -- add to end (new array)
/*
//array1.concat(value1, value2)
*/










/*
RegEx
"use strict"
switch case
stringify(to json), parse(to object)

create objects
give objects values
object methods, Object.keys
combine objects into one object
copy object "properties" into another object
spread operator on objects/arrays
function parameter of ...args (value) args (array - can use forEach on it)

prototypes (new instances), give them methods

for (let in/of) , arr.forEach(p)
label, break for loops
AND OR chains ?


return anonymous functions from functions and name/use outside by calling the parent function
pass function to function
choose functions/var fn value with a ternary operator (var or code), into a stored/called

function execution context - how the code runs
console methods





//FIXME:
//TODO:


can add to object, keys on the fly
or use defineProperty, assign

the spread operator allows it to "hold the properties of an object
or hold multiple objects in a function parameter
to be combined in an object or an array of objs(... omitted)

"hold the whole array's keys" in a single word with ...arrayName
to pass to functions, place in other arrays, combine with other arrays

prototypes
can use functions to hold values with "this"
and these functions hold other functions to run on it fn.prototype
this is used on a new Function instance passed to it values


array.forEach(p => {})
for (let prop of arr1) {

for (let prop in arr/obj)   //obj only gives keys not values
//but can use on objects this way
for (let obj of arrayOfObjects) { console.log(obj.key); }
arrayOfObjects.forEach(obj => console.log(obj.key));





*/




let obj1 = {
    key: 1,
}

let obj2 = {
    key: 2,
}

const arrX = [obj1, obj2];

let arr1 = [1,5,3,4];

const st = "string"


console.log(
    


);


