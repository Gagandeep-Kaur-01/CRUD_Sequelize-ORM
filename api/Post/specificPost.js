import express from 'express';

import { getPost } from '../../src/modules/Post/controller';

//Routes
const app = express();

app.get('/post/:id', getPost);

export default app;







