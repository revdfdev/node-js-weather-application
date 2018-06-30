// resolve : fulfilled
// reject: rejected or errored
var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Hey it worked');
        reject('It did not work');
    }, 2000)
});

somePromise.then(message => { 
    console.log(`Printing succes: ${message}`)
}, (error) => {
    console.log(`Error message : ${error}`);
});