var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    ID: Number,
    username: String,
    password: String,
    category: Number, // 1- donor , 2- needy one , 3-blood group
    group: String,
    contact: Number,
    email: String,
    location: String
});


UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);


//     var x = mongoose.model("y",UserSchema);

// to  add users
/*
var newUser = new User({
    email :"arjita",name:"hh"
});

newUser.save(function(err,user){
});


array.push();

x.findOne({name : ""},(err,user ){
    
})
*/