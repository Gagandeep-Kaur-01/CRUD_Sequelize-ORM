import express from 'express';

import { deleteStudent } from '../../src/modules/Student/controller';

//Routes
const app = express();

app.delete('/deleteOne', deleteStudent);

export default app;