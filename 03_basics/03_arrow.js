//this refer to current calling context or object 
const user={
    username:"Alok",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)//this will print the current context that is entire object along with its values
    }
}
//user.welcomemessage()
//user.username="sam"//here we have change the context or the username hence we are able to call the function successfully using this keyword
//user.welcomemessage()


console.log(this)//this will print empty string since we are in the node environment

//whenever this engine runs in the browser ,global object in the browser is window object



//this context will work only inside object ,it will not work inside function so output will be undefined
//function chai(){

    //let username ="Alok"
    //console.log(this.username)
//}
//chai()


//same as above
const chai =function(){
    let username ="Alok"
    //console.log(this.username)
}
chai()


//arrow function

//same output as above function //here we cannot use this also
const chaii =()=>{
    let username ="Alok"
    //console.log(this.username)
}
chaii()






//more about arrow functions

//explicit return 
const addtwo =(num1,num2) => {
    return num1+num2
}

console.log(addtwo(2,7))//output 9

//another way to declare arrow function implicit return  wrap in round bracket so no need to write return keyword
const addtwoo =(num1,num2) => (num1+num2)


console.log(addtwoo(2,7))

const addthree =(num1,num2) => ({username:"alok"})//way to return an object