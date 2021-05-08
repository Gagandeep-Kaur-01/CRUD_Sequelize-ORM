import express from 'express';

import { getAllStudents } from '../../src/modules/Student/controller';

const app = express();

/**
 * @swagger
 * /api/getAllStudents:
 *  get:
 *   tags: ["Student"]
 *   summary: get student details 
 *   description: get student details. <br/> <b>Note:-</b> all the students details <br/> 
 *   security:
 *    - OAuth2: [admin]   # Use Authorization
 *   parameters:
 *      - in: header
 *        name: Authorization
 *        description: The auth token generated from backend. 
 *        type: string
 *        required: true        
 *   responses:
 *    '200':
 *      description: success
 *    '400':
 *      description: fail
 */

//Routes

app.get('/getAllStudents', getAllStudents);

export default app;







