import express from "express";

import { createStudent } from "../../src/modules/Student/controller";

const app = express();


app.post(
  "/createStudent",
  createStudent
);

export default app;
