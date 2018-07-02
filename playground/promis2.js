const request = require("request");

geocodeAddress = address => {
    var encodedAddress = encodeURIComponent(address);
    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to google servers');
            } else if(response.statusCode === 404) {
                reject('Unable to connect to google servers');  
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Cannot find that address');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
}

geocodeAddress("400003").then(
    location => {
        console.log("address: ", location.address);
        console.log("latitude: ", location.latitude);
        console.log("longitude: ", location.longitude);
    }, 
).catch(error => {
    console.log(error);
})
