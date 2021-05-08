import express from 'express';
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';

import { getOneStudent } from './../../src/modules/Student/controller';

//Routes
const app = express();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/getOneStudent/{name}:
 *  get:
 *   tags: ["Student"]
 *   summary: student get details api
 *   description: This api will be used to get details of Student <br/><br/> <b>Note:-</b>by passing name<br/>
 *   security:
 *    - OAuth2: [user]   # Use Authorization
 *   parameters:
 *       - in: header
 *         name: Authorization
 *         description: The auth token generated from backend.
 *         type: string
 *         required: true
 *       - in: path
 *         name: name
 *         type: string
 *         minimum: 1
 *         required: true
 *         description: The Student name
 *   responses:
 *    '200':
 *      description: success
 *    '400':
 *      description: fail
 */

app.get('/getOneStudent/:name',getOneStudent);

const getStudentByName = Joi.object().keys({
    name: Joi.string()
    .regex(/^[a-zA-Z]/)
    .messages({ 'string.pattern.base': `name must be a string.` })
    .required()
    .label('Student Name'),
});

app.get(
    '/byName/:name',
    validator.params(getStudentByName, { 
       joi: { convert: true, allowUnknown: false },
    }), 
    getOneStudent
);

export default app;







