//let a=10
//var b=20
//const c=30
let a =500
var b =300
if(true){
    let a=10
  var b=20
  const c=30
  //console.log("inner:" ,a)
}
//console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const username="Alok"
    
    function two(){
        const website="youtube"
       // console.log(username)
    }
    //console.log(website)// inner loop has access to outer loop but outer loop has no access to inner loop

    two()
}
one()

if(true){
    const username="Alok"
    if(username==="Alok")
    {
        const website=" youtube"
        //console.log(username+website)
    }
    //console.log(website)
    
}
//console.log(username)



//+++++++++++++++++++++++++++++++   INTERESTING  ++++++++++++++++++++++++++++++++++++++





//addone(5) addone function can be called here also unlike add two

//this concept is called hoisting
function addone(num)
{
    return num+1
}

addone(5)



//addtwo(5) this function cannot be called in this way because it it like an expression i.e assigned to a variable
const addtwo=function(num)
{
    return num+2
}
addtwo(5)
//addtwo is a funciton which is kept inside a variable