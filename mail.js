var api_key = '8958ac44e2f65cd50ce41d316081d40c-bd350f28-793bcf82';
var domain = 'sandboxda6d20ae8d344b6b9e2d6c70b66c417d.mailgun.org';
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