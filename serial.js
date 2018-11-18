var serialport = require("serialport");
var Serialport = serialport.Serialport;
var portName = process.argv[2];

var myPort = new Serialport(portName, {
    baudRate: 9600,
    parser: serialport.parsers.readline("\r\n")
})
myPort.on('open', onOpen);
myPort.on('data', onData);

myPort.on()

function onOpen() {

    console.log("Open connection");
}

function onData(data) {
    console.log("Data : " + data);
}

var data = "919721716833";
socket.on('serialEvent', function (data) {

    // The message received as a String
    console.log(data);

    // Sending String character by character
    for (var i = 0; i < data.length; i++) {
        myPort.write(new Buffer(data[i], 'ascii'), function (err, results) {
            // console.log('Error: ' + err);
            // console.log('Results ' + results);
        });
    }

    // Sending the terminate character
    myPort.write(new Buffer('\n', 'ascii'), function (err, results) {
        // console.log('err ' + err);
        // console.log('results ' + results);
    });
});