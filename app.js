var express = require('express'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	User = require('./models/User'),
	LocalStrategy = require('passport-local'),
	passportLocalMongoose = require('passport-local-mongoose');

//mongoose connection

mongoose.connect(
	'mongodb://localhost/grantliv', {
		useNewUrlParser: true,
	}
);

// App variable
var app = express();
// Body-Parser
var bodyParser = require('body-parser');
// Port
var port = process.env.PORT || 3000;
// Secret
app.use(
	require('express-session')({
		secret: 'GRANTLIV',
		resave: false,
		saveUninitialized: false,
	})
);

// middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

// Passport credentials
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// set view engine
app.set('view engine', 'ejs');

// DEFINING ROUTES //

/* Home Page */
app.get('/', function (req, res) {
	//console.log('Welcome');
	res.render('home');
});

app.get('/send', function (req, res) {
	const Nexmo = require('nexmo');
	const nexmo = new Nexmo({
		apiKey: 'b28389d6',
		apiSecret: '99SJ8CY9Nl61iTSQ',
	});
	const from = 'GrantLiv';
	const to = '919721716833';
	const text = "O+ blood Group Needed , Contact Details:  Krishan Kant Gupta 9839450104";

	nexmo.message.sendSms(from, to, text,
		(err, responseData) => {
			if (err) {
				console.log(err);
			} else {
				console.dir(responseData);
			}
		}
	);
	res.send("Your Request has been sent");
});

// for register
/*
app.post('/register', (req, res) => {
	User.register(
		new User({
			cat = req.body.category,
			name = req.body.name,
			gp = req.body.group,
			cont = req.body.contact,
			email = req.body.email,
			loc = req.body.loc
		}),
		req.body.password,
		function (err, user) {
			if (err) {
				console.log(err);
			}
			passport.authenticate('local')(req, res, function () {
				res.redirect('/secret');
			});
		}
	);
});
*/
// for login
app.post(
	'/login',
	passport.authenticate('local', {
		successRedirect: '/secret',
		failureRedirect: '/login',
	}),
	(req, res) => {}
);

//for logout
app.get('/logout', isLoggedIn, function (req, res) {
	req.logOut();
	res.redirect('/');
});

app.get("/stats", function (req, res) {

	res.render("stats");
});

app.get("/h", function (req, res) {

	res.render("partials/header");
});
// default one
app.get('*', function (req, res) {
	res.send('URL NOT FOUND!!!');
});

//middleware
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
}
// second argument of route function is middleware

// event listener
app.listen(port);