//primitive and non primitive 
//it depends upon how the values are stored in the memory and how it can be accessed
//Primitive data types are call by value i.e. no change is reflected in the original value
//Primitive data types are of 7 types: string,number,boolean,null,undefined,symbol(unique),bigint(very large values)

/*JavaScript is a dynamically typed language ✅
Here’s why:
Dynamic typing means you don’t have to declare a variable’s type. The type is determined at runtime based on the value you assign.
A variable can hold a number at one moment, then a string, then an object — and JavaScript won’t complain.*/

//Non Primitive or reference type
//they are call by reference 
//changes made in actual value are reflected back 

//Arrays
//Object
//Functions

const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id===anotherId)


//Arrays
const heroes=["a","b","c"]


//objects key-value pairs
let myObj={
    name:"Alok",
    age : 21
}

//function
const myfunction=function(){
    console.log("hello world")
}
