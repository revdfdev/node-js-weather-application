const request  = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=yakub%20street%20Ibrahim%20rehmatulla%20road%20mandvi%20mumbai%20400003',
    json: true
}, (error, response, body) => {
    console.log(body);
})