var express = require('express');
var path = require('path'); //path module
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.set('views', path.join(__dirname, 'views'));//the template folder
app.set('view engine', 'jade');


app.use(bodyParser.json());//parse to json
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	//console.log('Hello!');//Server
	//res.send('<h1>Hello</h1>');//Client
	res.render('index', {title:'Hello'});
});

app.get('/about', function(req, res){
	res.render('about');
});

app.get('/contact', function(req, res){
	res.render('contact');
});

app.post('/contact/send', function(req, res){
	//console.log('Test');
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'thanh.tran3k@gmail.com',
			pass: 'empty'//your password
		}
	});

	var mailOptions = {
		from: 'Thanh Tran <thanhtran3k@gmail.com>',
		to: 'thanh.tran3k@gmail.com',
		subject: 'Website Submission',
		text: 'You have a submission with the following details... Name: '+req.body.name+'Email: '+req.body.email+ 'Message: '+req.body.message,
		html: '<p>You have a submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		}else{
			console.log('Message is sent'+info.response);
			res.redirect('/')
		}
	});
});


app.listen(3000);
console.log('Server is running on port 3000');
