var api_key = '';//add API Keys
var domain = ''; // add domain
var mailgun = require('mailgun-js')({
    apiKey: api_key,
    domain: domain
});

var data = {
    from: 'Arjita Chaurasia <arjitachauraisa@gmail.com>',
    to: 'arjch0302@gmail.com',
    subject: 'Hello',
    text: 'Sending mail option done!!!'
};

mailgun.messages().send(data, function (error, body) {
    if (error) {
        console.log(error);
    } else
        console.log(body);
});
