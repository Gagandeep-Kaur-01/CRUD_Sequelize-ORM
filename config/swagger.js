/**
 * @file: create.js
 * @summary It Contains swagger configuration.
*/

import config from 'config';
import swaggerJsDocs from 'swagger-jsdoc';

const { SERVER, PORT, HOST } = config.get('app');
const Hosting_Server = `${SERVER}://${HOST}:${PORT}`;

const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: 'crud in sequelize project apis',
			version: '1.0',
			description: 'All api end points',
			contact: {
				name: '',
			},
			servers: [Hosting_Server],
		},
		produces: ['application/json'],
		host: `${HOST}:${PORT}`,
		schemes: ['http', 'https'],
	},
	apis: ['./api/*/*.js'],
	layout: 'AugmentingLayout',
};
export default swaggerJsDocs(swaggerOptions);
