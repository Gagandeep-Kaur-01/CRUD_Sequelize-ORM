import express from 'express';

import { allWith_Profile_Post } from '../../src/modules/User/controller';

//Routes
const app = express();

app.get('/allPP', allWith_Profile_Post);

export default app;
