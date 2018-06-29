const request = require("request");
const yargs = require("yargs");
const geocode = require("./geocode/geocode");

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

geocode.geoCodeAddress(argv.address, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Address: ${result.address}`);
    console.log(`Latitude: ${result.latitude}`);
    console.log(`Longitude: ${result.longitude}`);
  }
});
