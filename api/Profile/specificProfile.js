import express from 'express';

import { getProfile } from '../../src/modules/Profile/controller';

//Routes
const app = express();

app.get('/find/:id', getProfile);

export default app;







