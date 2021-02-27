import express from "express";

import { newUser } from "./../../src/modules/User/controller";

const app = express();


app.post(
  "/newUser",
  newUser
);

export default app;
