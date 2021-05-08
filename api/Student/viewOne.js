import express from 'express';

import { getOneStudent } from './../../src/modules/Student/controller';

//Routes
const app = express();

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
 *         required: true
 *         type: string
 *         minimum: 1
 *         description: The Student name
 *   responses:
 *    '200':
 *      description: success
 *    '400':
 *      description: fail
 */

app.get('/getOneStudent/:name',getOneStudent);

export default app;







