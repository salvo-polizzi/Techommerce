import express from "express";

const app = express();
const session = require('express-session');  

app.set('view engine', 'ejs');
app.set('views', process.cwd() + '/src/views');

//setto il middleware della sessione
app.use(session({
    secret : '1234567890abcdefghijklmnopqrstuvwxyz',
	resave : false,
	saveUninitialized : true,
	cookie : { secure : false }
}))

//definisco il middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', express.static('./src/views'));
app.use('/shop', express.static('./src/views'));

//Routes
app.use('/', require('./routes/routes'));

app.listen(process.env.DEV_PORT);

