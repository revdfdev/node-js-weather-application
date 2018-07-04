const yargs = require("yargs");
const axios = require("axios");
const constants = require("./secret");

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: "address",
            describe: "Address to fetch the weather for",
            string: true
        }
    })
    .help()
    .alias("help", "h").argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
axios
    .get(geocodeUrl)
    .then((response) => {
        if (response.data.status === "ZERO_RESULTS") {
            throw new Error("Cannot find that address");
        }

        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        var weatherurl = `https://api.darksky.net/forecast/${constants.apiKey}/${lat}, ${lng}`;
        return axios.get(weatherurl);        
    }).then((response) => {
        var temperature = response.data.currently.temperature;
        var summary = response.data.hourly.summary;
        console.log(`Current temperature is ${temperature}, ${summary}`);
    })
    .catch((error) => {
        if (error.code === 'ENOTFOUND') {
            console.log('Unabled to connect to the servers');
        } else {
            console.log(error.message);
        }
    })


