const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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


geocode.geoCodeAddress(argv.address, (error, data) => {
    if (error !== undefined) {
        console.log(error);
    } else {
        var result = data.results[0];
        console.log(`Address: ${result.formatted_address}`);
        console.log(`Latitude: ${result.geometry.location.lat}`);
        console.log(`Longitude: ${result.geometry.location.lng}`); 
    }
});