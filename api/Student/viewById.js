import express from 'express';

import { OneById } from '../../src/modules/Student/controller';

//Routes
const app = express();

app.get('/byId/:id',OneById);

export default app;







