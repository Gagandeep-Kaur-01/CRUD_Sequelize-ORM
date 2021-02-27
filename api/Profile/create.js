import express from "express";

import { createProfile } from "./../../src/modules/Profile/controller";

const app = express();


app.post(
  "/createProfile",
  createProfile
);

export default app;
