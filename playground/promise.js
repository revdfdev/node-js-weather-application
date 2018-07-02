// resolve : fulfilled
// reject: rejected or errored
asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('Arguments must be numbers');
        }
    });
}

asyncAdd(2,8).then(res => {
    console.log('Result : ', res);
    return asyncAdd(2, res);
}).then((res) => {
    console.log('Result should be 12: ', 12)
}).catch(error => {
    console.log(error);
}) 
/* var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Hey it worked');
        reject("It did not work");
    }, 2000)
});

somePromise.then(message => { 
    console.log(`Printing succes: ${message}`)
}, (error) => {
    console.log(`Error message : ${error}`);
}); */