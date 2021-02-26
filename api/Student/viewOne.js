import express from 'express';

import { getOneStudent } from "../../src/modules/Student/controller";

//Routes
const app = express();

app.get('/getOneStudent/:id', getOneStudent);

export default app;







