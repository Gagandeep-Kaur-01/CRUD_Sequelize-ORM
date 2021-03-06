import express from 'express';
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';

import { OneById } from '../../src/modules/Student/controller';

//Routes
const app = express();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/byId/{id}:
 *  get:
 *   tags: ["Student"]
 *   summary: student get details api
 *   description: This api will be used to get details of Student <br/><br/> <b>Note:-</b>by passing id<br/>
 *   security:
 *    - OAuth2: [user]   # Use Authorization
 *   parameters:
 *      - in: header
 *        name: Authorization
 *        description: The auth token generated from backend.
 *        type: string
 *        required: true
 *      -  in: path
 *         name: id
 *         type: integer
 *         minimum: 1
 *         required: true
 *         description: Student Id
 *   responses:
 *    '200':
 *      description: success
 *    '400':
 *      description: fail
 */

const getStudentById = Joi.object().keys({
    id: Joi.string()
    .regex(/^[0-9]/)
    .messages({ 'string.pattern.base': `ID must be an number.` })
    .required()
    .label('Student Id'),
});

app.get(
    '/byId/:id',
    validator.params(getStudentById, { 
       joi: { convert: true, allowUnknown: false },
    }), 
    OneById
);

export default app;







