import express from 'express';

import { deleteById } from '../../src/modules/Student/controller';

//Routes
const app = express();

app.delete('/deleteById/:id', deleteById);

export default app;