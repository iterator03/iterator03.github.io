var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var RecordSchema = new mongoose.Schema({
    Act: Number, // 0- given , 1-taken
    group: String,
    quants: Number,
    sourceId: String
});

module.exports = mongoose.model("Records", RecordSchema);