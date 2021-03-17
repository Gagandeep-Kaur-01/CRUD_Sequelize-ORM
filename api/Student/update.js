import express from 'express';

import { updateStudent } from './../../src/modules/Student/controller';

//Routes
const app = express();

app.put('/updateStu', updateStudent);

export default app;