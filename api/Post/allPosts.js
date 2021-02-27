import express from 'express';

import { getAllPost } from '../../src/modules/Post/controller';

//Routes
const app = express();

app.get('/allPosts', getAllPost);

export default app;







