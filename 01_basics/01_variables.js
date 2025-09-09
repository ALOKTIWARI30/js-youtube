const accountId = 144553
let accountEmail = "alok@google.com"
var accountPassword = "12345"
accountCity="Bengaluru"
let accountState
// accountId=2 // not allowed
accountEmail="at@at.com"
accountPassword="1234554321"
accountCity="Kanpur"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var 
because of issue in block scope and functional scope
semicolon is not necessary in javascript
If variable is declared and value is not defined then it is undefined
*/

