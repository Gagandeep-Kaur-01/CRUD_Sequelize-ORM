import express from 'express';

import { getAllUsers } from '../../src/modules/User/controller';

//Routes
const app = express();

app.get('/allUsers', getAllUsers);

export default app;







