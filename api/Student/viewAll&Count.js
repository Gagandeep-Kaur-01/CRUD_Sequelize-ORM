import express from 'express';

import { getAllCount } from '../../src/modules/Student/controller';

//Routes
const app = express();

/**
 * @swagger
 * /api/stuCount:
 *  get:
 *   tags: ["Student"]
 *   summary: get detail of active students with count 
 *   description: get student details. <br/> <b>Note:-</b> Active = true <br/> 
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


app.get('/stuCount', getAllCount);

export default app;







