console.log('starting app');

setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setImmediate(() => {
    console.log('second timeout works');
}, 0);

setImmediate(() => {
    console.log('Inside of immediate');
}, 2000);

console.log('finishing up');