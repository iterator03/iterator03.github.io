var $ = require('jQuery');
var getJSON = require('get-json')

getJSON('https://api.thingspeak.com/channels/615754/fields/1/last.json')
    .then(function (response) {
        console.log(response.field1);
    }).catch(function (error) {
        console.log(error);
    });