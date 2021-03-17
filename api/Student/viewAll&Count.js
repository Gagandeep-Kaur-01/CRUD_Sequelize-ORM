import express from 'express';

import { getAllCount } from '../../src/modules/Student/controller';

//Routes
const app = express();

app.get('/stuCount', getAllCount);

export default app;







