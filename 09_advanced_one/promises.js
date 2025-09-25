const promiseone=new Promise(function(resolve,reject){
    //do an async task
    //DB CALLS,cryptographic functions,network

    setTimeout(function(){
   console.log("Async task is complete")
   resolve()
    },1000)
}) //promise reduces call back hell i.e.call back inside a call back

promiseone.then(function(){
      console.log("promise resolved")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task is completed 2")
    },1000)
    resolve()
}).then(function(){
    console.log("promise completed 2")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))
