const name="alok"
const repocount=50

const gamename=new String("alok-tiwari")
console.log(gamename[0])
//console.log(gamename[0].__proto__.)
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt('2'))
console.log(gamename.indexOf('k'))
const newstring=gamename.substring(0,7)
console.log(newstring)
const anotherstring=gamename.slice(-8,4)
console.log(anotherstring)
const newstringone="       alok       "
console.log(newstringone)
console.log(newstringone.trim())
const url="hhfnhfbehnfhfehfe%20efnrhbrjr"
console.log(url.replace('%20','-'))
console.log(url.includes('efnr'))

const names=new String("alok-tiwari-at")
console.log(names.split('-'))
//console.log(name + repocount)
//console.log(name + repocount+ "value")
//console.log(`hello my name is ${name} and my repocount is ${repocount}`)//this concept is called string interpolation
