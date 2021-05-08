import express from 'express';
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';

import { updateMany } from '../../src/modules/Student/controller';

//Routes
const app = express();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/updateMany:
 *  put:
 *   tags: ["Student"]
 *   summary: update many student api
 *   description: This api will be used to update many Students 
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
    newColumn: Joi.string().optional(),  
});

app.put(
    "/updateMany", 
    validator.body(studentUpdateSchema, { 
        joi: { convert: true, allowUnknown: false } 
    }), 
    updateMany
);


export default app;