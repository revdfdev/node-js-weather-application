const request = require('request');

geoCodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Unable to connect to google servers", undefined);
        } else if (body.status === "ZERO_RESULTS") {
            callback('Unable to find that address', undefined);
        } else if (body.status === "OK") {
            callback(undefined, body);
        }
    })
};

module.exports = {
    geoCodeAddress,
}