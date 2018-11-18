var $ = require('jQuery');
var getJSON = require('get-json')

getJSON('https://api.thingspeak.com/channels/615754/fields/2/last.json')
    .then(function (response) {
        console.log(response.field2);
    }).catch(function (error) {
        console.log(error);
    });