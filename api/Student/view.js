import express from 'express';

import { getAllStudents } from './../../src/modules/Student/controller';

//Routes
const app = express();

app.get('/getAllStudents', getAllStudents);

export default app;







