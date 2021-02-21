import express from 'express';

import { deleteStudent } from "../../src/modules/Student/controller";

//Routes
const app = express();

app.delete('/delete', deleteStudent);

export default app;