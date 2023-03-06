import express from "express";
import { processNotFoundEndpoint } from "./middleware/not-found.middleware";
import { processError } from "./middleware/process-error.middleware";
import { mountRouter as mountUserRouter } from "./user/user.router";

const app = express();

app.use(express.json());

mountUserRouter(app);

app.use(processNotFoundEndpoint);
app.use(processError);

export { app };
