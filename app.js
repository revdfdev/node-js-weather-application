const request = require("request");
const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const forecast = require("./forecast/forecast");

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
    console.log(`Weather forcast for Address: ${result.address}`);

    forecast.getForeCast(
      { lat: result.latitude, long: result.longitude },
      (errMessage, weather) => {
        if (errMessage) {
          console.log(errMessage);
        } else {
          console.log(`Current temperature: ${weather.temperature} Farenhiet`);
          console.log(`Summary: ${weather.summary}`);
        }
      }
    );
  }
});

// f8549c0052c34f7dc1ac1421720d294e
