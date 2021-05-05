import express from "express";

import { createStudent } from "./../../src/modules/Student/controller";

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

app.post(
  "/createStudent",
  createStudent
);

export default app;
