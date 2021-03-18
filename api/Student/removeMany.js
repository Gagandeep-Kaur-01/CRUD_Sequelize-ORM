import express from 'express';

import { deleteMany } from '../../src/modules/Student/controller';

//Routes
const app = express();

app.delete('/deleteMany', deleteMany);

export default app;