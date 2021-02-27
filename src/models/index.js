import Sequelize, { INTEGER } from 'sequelize';
import config from 'config';

const { DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD } = config.get('db');
const { HOST } = config.get('app');

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
	host: HOST,
	dialect: 'postgres',
	pool: {
		max: 5,
		min: 0,
		idle: 10000,
	},
	logging: false,
});

const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize;

//----------------------------------------------------------------//
db.student = require('./Student')(sequelize, Sequelize);

db.user = require('./User')(sequelize, Sequelize);
db.post = require('./Post')(sequelize, Sequelize);
db.profile = require('./Profile')(sequelize, Sequelize);

module.exports = db;
