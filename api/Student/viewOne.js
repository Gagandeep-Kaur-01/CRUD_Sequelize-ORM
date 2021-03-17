import express from 'express';

import { getOneStudent } from './../../src/modules/Student/controller';

//Routes
const app = express();

app.get('/getOneStudent/:name',getOneStudent);

export default app;







