//singleton


const mysym=Symbol("key1")

//object literals
const JSuser={
    name:"alok",
    age:21,
    [mysym]:"mykey1",
    "full name":"alok tiwari",
    location:"bengaluru",
    email:"alok@google.com",
    isloggedin:false,
    lastlogindays:["monday","saturday"]
}

//console.log(JSuser.name)
//console.log(JSuser["email"])
//console.log(JSuser["full name"])
//console.log(JSuser["mysym"])
//console.log(typeof JSuser["mysym"])

JSuser.email="alok@chatgpt.com"
//console.log(JSuser["email"])
//Object.freeze(JSuser)
JSuser.email="alok@microsoft.com"
//console.log(JSuser["email"])

JSuser.greeting=function(){
    console.log("hello world")
}
console.log(JSuser.greeting)