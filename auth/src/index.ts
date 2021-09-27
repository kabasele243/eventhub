import express from "express";
import { json } from "body-parser";
import { currentUserRouter } from "./route/current-user";

const app = express();
app.use(json());

app.use(currentUserRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000 My Boy!!!");
});
