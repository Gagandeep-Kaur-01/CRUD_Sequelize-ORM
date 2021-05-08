import express from 'express';

import { deleteById } from '../../src/modules/Student/controller';

//Routes
const app = express();

/**
 * @swagger
 * /api/deleteById/{id}:
 *  delete:
 *   tags: ["Student"]
 *   summary: student delete api
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


app.delete('/deleteById/:id', deleteById);

export default app;