import express from 'express';
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';

import { updateById } from '../../src/modules/Student/controller';
const validator = createValidator({ passError: true });

//Routes
const app = express();


/**
 * @swagger
 * /api/updateId:
 *  put:
 *   tags: ["Student"]
 *   summary: student update api (by passing id)
 *   description: This api will be used to update the Student 
 *   security:
 *    - OAuth2: [user]   # Use Authorization
 *   parameters:
 *      - in: header
 *        name: Authorization
 *        description: The auth token generated from backend.
 *        type: string
 *        required: true
 *      - in: body
 *        name: student
 *        description: The student to update.
 *        schema:
 *         type: object
 *         required:
 *          - student update
 *         properties:
 *           id:
 *             type: string
 *             required: true             
 *           name:
 *             type: string
 *           email:
 *             type: string
 *           mobileNo:
 *             type: string
 *           city:
 *             type: string
 *             nullable: false
 *             required: false
 *           address:
 *             type: string
 *             nullable: false
 *           state:
 *             type: string
 *             nullable: false
 *           zip:
 *             type: string
 *             nullable: false
 *           Active:
 *             type: boolean
 *           test:
 *             type: string
 *           testingColumn1:
 *             type: integer
 *           newColumn:
 *             type: string
 *   responses:
 *    '200':
 *      description: success
 *    '400':
 *      description: fail
 */


 const studentUpdateSchema = Joi.object({
    id: Joi.string().regex(/^[0-9]/).messages({ 'string.pattern.base': `ID must be an number.` })
                    .required().label('Student Id'),
    name: Joi.string().min(3).max(30).label('Name'),
    email: Joi.string().email(),     
    password: Joi.string().pattern(new RegExp('[ A-Za-z0-9_@./#&+-]{3,15}')),
    mobileNo: Joi.number().min(10),   
    city: Joi.string().pattern(new RegExp('^[a-zA-Z]')), 
    address: Joi.string(),  
    state: Joi.string(),
    zip: Joi.string(), 
    Active: Joi.boolean(), 
    test: Joi.string(),
    testingColumn1: Joi.number(),
    newColumn: Joi.string().optional(),  // required: false
});

app.put(
    "/updateId", 
    validator.body(studentUpdateSchema, { 
        joi: { convert: true, allowUnknown: false } 
    }), 
  updateById
);



export default app;