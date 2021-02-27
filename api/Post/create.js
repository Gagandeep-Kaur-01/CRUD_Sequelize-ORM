import express from "express";

import { createPost } from "./../../src/modules/Post/controller";

const app = express();


app.post(
  "/createPost",
  createPost
);

export default app;
