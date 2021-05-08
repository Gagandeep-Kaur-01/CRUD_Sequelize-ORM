import express from 'express';
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';

import { deleteById } from '../../src/modules/Student/controller';

//Routes
const app = express();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/deleteById/{id}:
 *  delete:
 *   tags: ["Student"]
 *   summary: student delete api (passing id)
 *   description: This api will be used to delete student <br/><br/> <b>Note:-</b>by passing id<br/>
 *   security:
 *    - OAuth2: [user]   # Use Authorization
 *   parameters:
 *       - in: header
 *         name: Authorization
 *         description: The auth token generated from backend.
 *         type: string
 *         required: true
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         minimum: 1
 *         description: The Student ID
 *   responses:
 *    '200':
 *      description: success
 *    '400':
 *      description: fail
 */

 const removeStudentById = Joi.object().keys({
    id: Joi.string()
    .regex(/^[0-9]/)
    .messages({ 'string.pattern.base': `ID must be an number.` })
    .required()
    .label('Student Id'),
});

app.delete(
    '/deleteById/:id',
    validator.params(removeStudentById, { 
       joi: { convert: true, allowUnknown: false },
    }), 
    deleteById
);

export default app;