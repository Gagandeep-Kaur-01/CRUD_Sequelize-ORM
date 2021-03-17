import express from 'express';

import { updateById } from '../../src/modules/Student/controller';

//Routes
const app = express();

app.put('/updateId', updateById);

export default app;