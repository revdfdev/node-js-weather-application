const request = require("request");

getForeCast = (requestData, callback) => {
  request.get(
    {
      url: `https://api.darksky.net/forecast/f8549c0052c34f7dc1ac1421720d294e/${
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