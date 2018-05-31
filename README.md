# catto_contact
- Catto contact is a small project, actually it is a small function in a big project, it's mail contact function.
- Catto contact was made by Express, NodeJS, Jade (Pug) and a NodeJS library called "nodemailer".
- It just a small project. So, i wrote the controller in the "app.js".

# Quick start
1. Download my project to your pc.
2. Install libraries: "npm install"
3. Open "app.js" and find this

- var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'thanh.tran3k@gmail.com',
			pass: 'empty'//your password
		}
	});

And change the to your email and password.

4. Go to this URL to active the service from gmail: "https://www.google.com/settings/security/lesssecureapps" or "https://myaccount.google.com/lesssecureapps"

And turn on Access for less secure apps.

5. Start the project: "npm start" or "node app.js".
6. The project will run on PORT 3000.
