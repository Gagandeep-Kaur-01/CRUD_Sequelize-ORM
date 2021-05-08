import express from "express";
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';
import { createStudent } from "./../../src/modules/Student/controller";

const validator = createValidator({ passError: true });
const app = express();


/**
 * @swagger
 * /api/createStudent:
 *  post:
 *   tags: ["Student"]
 *   summary: student create api
 *   description: This api will be used to create the Student 
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
 *        description: The student to create.
 *        schema:
 *         type: object
 *         required:
 *          - property create
 *         properties:
 *           name:
 *             type: string
 *             required: true
 *           email:
 *             type: string
 *             required: true
 *           password:
 *             type: string
 *             required: true
 *           mobileNo:
 *             type: string
 *             required: true
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
 *             nullable: true
 *           testingColumn1:
 *             type: integer
 *             nullable: true
 *           newColumn:
 *             type: string
 *             nullable: true
 *           status:
 *             type: number
 *             enum: [0, 1, 2]
 *             nullable: false
 *             required: false
 *             default: 1
 *   responses:
 *    '200':   
 *      description: success
 *    '400':
 *      description: fail
 */

 const studentCreateSchema = Joi.object({
	  name: Joi.string().min(3).max(30).required().label('Name'),
   	email: Joi.string().required().email().label('Email'),   
    password: Joi.string().pattern(new RegExp('[ A-Za-z0-9_@./#&+-]{3,15}')).required().label('Password'),
    mobileNo: Joi.string().min(10).max(15).regex(/^[0-9]/).required().label('Mobile Number'),  
    city: Joi.string().pattern(new RegExp('^[a-zA-Z]')).label('City'),
    address: Joi.string().label('Address'), 
    //if nullable: true; then =>  .allow('', null)
    state: Joi.string().label('State'), 
    zip: Joi.string().label('Zip'),  
    Active: Joi.boolean().label('Active'), 
    test: Joi.string().label('Test').allow('', null),
    testingColumn1: Joi.number().allow('', null).label('Testing Column'),
    newColumn: Joi.string().optional().allow('', null).label('New Column'),  
    status: Joi.number().optional().valid(0, 1, 2).label('Status'),
});

app.post(
    "/createStudent", 
    validator.body(studentCreateSchema, { 
      joi: { convert: true, allowUnknown: false } 
    }), 
  createStudent
);

export default app;
