import express from 'express';

import { updateMany } from '../../src/modules/Student/controller';

//Routes
const app = express();

app.put('/updateMany', updateMany);

export default app;