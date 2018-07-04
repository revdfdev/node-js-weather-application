const request = require("request");
const constants = require('../secret');

getForeCast = (requestData, callback) => {
  request.get(
    {
      url: `https://api.darksky.net/forecast/${constants.api}/${
        requestData.lat
        }, ${requestData.long}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          summary: body.hourly.summary
        });
      } else {
        callback('Unabled to fetch weather data');
      }
    }
  );
};


module.exports = {
  getForeCast
};