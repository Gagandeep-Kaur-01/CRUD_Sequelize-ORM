import express from "express";

import { createStudent } from "../../../../example/src/modules/Student/controller";

const app = express();


app.post(
  "/createStudent",
  createStudent
);

export default app;
