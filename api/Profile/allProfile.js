import express from 'express';

import { getProfileAll } from '../../src/modules/Profile/controller';

//Routes
const app = express();

app.get('/allProfiles', getProfileAll);

export default app;







