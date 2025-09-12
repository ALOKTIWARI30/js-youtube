//Array
const myArr=[1,2,3,4,5]
const  myheroes=["shaktiman","naagraj"]
const myarr2=new Array(1,2,3,4,5)
//console.log(myArr[1])

//arrays methods
//myArr.push(8)
//myArr.push(75)
//myArr.pop()
//myArr.unshift(90)
//myArr.shift()
//console.log(myArr)



//slice,splice
//console.log("A ",myArr)


const myarr1=myArr.slice(1,3)
//console.log(myarr1)
//console.log("B ",myArr)


const myarrnew2=myArr.splice(1,3)
//console.log(myarrnew2)
//console.log("C ",myArr)



//Arrays part 2




const my_heroes=["111111","2222","333333"]
const dc_heroes=["4444444","55555555","66666666"]
//my_heroes.push(dc_heroes)
//console.log(my_heroes)
//console.log(my_heroes[3][2])
//const hero=my_heroes.concat(dc_heroes)
//console.log(hero)


//spread operator
const all_new_heroes=[...my_heroes,...dc_heroes]
//
//console.log(all_new_heroes)
const another_array=[1,2,3,[4,5,6],6,7,[7,6,8],9,[7,5,4]]
const real_array=another_array.flat(Infinity)
console.log(real_array)

console.log(Array.isArray("alok"))
console.log(Array.from("alok"))