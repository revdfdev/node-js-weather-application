const request = require('request');
const yargs = require('yargs');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch the weather for',
        string: true
    }
}).help()
.alias('help', 'h')
.argv;

console.log(argv);
var address = argv._.a;
var encodedAddress = encodeURIComponent(argv.address);
console.log(encodedAddress);
request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    var result = body.results[0];
    console.log(`Address: ${result.formatted_address}`);
    console.log(`Latitude: ${result.geometry.location.lat}`);
    console.log(`Longitude: ${result.geometry.location.lng}`);
})