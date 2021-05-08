import express from 'express';
import bodyParser from 'body-parser';
import fileupload from 'express-fileupload';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import config from 'config';
import swaggerUi from 'swagger-ui-express';

import api from './api';
import { failAction } from './src/utilities/response';
import SwaggerJsDocs from './config/swagger';

const db = require('./src/models');
const app = express();
const { PORT } = config.get('app');

/*=============================================
=                   DATABASE                  =
=============================================*/

// const db=require('./config/database');

db.sequelize
	.authenticate()
	.then(() => {
		console.log('---database connected----');
	})
	.catch(err => {
		console.log('ERROR : ', err);
	});

// sync()
let drop = { force: true };
db.sequelize.sync({alter:true}).then(() => {
	console.log(' re-sync db.');
}); 

/*==============================================
=                 MIDDLEWARE                  =
================================================*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.options('*', cors());
app.use(fileupload());

/*=============================================
=               Swagger UI setup              =
=============================================*/
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(SwaggerJsDocs));

/*=============================================
=                   ROUTES                    =
=============================================*/

app.use('/api', api);

// After your routes add a standard express error handler. This will be passed the Joi
// error, plus an extra "type" field so we can tell what type of validation failed
app.use((err, req, res, next) => {
	if (err && err.error && err.error.isJoi) {
		// we had a joi error, let's return a custom 400 json response
		console.log('err.error.message.toString(): ', err.error.message.toString().replace(/[\""]+/g, ''));
		res.status(400).json(failAction(err.error.message.toString().replace(/[\""]+/g, '')));
	} else {
		// pass on to another error handler
		console.log('---ERROR ----', err);
		if (err.name === 'UnauthorizedError') {
			res.status(401).json({ message: err.message, isLoggedIn: false });
		}
		next(err);
	}
});

// app.use(express.static(__dirname + "/views/dist/project_name"));
app.get('/*', (req, res) => {
	return res.sendFile(path.join(__dirname + '/views', 'index.html'));
});

const port = PORT || 3000;

app.listen(port, () => {
	console.log(`Server started at PORT :${port} `);
});
