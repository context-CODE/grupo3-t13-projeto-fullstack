import express from "express";
import "reflect-metadata";
import "express-async-errors";
import handleError from "./errors/handlerError";
import "dotenv/config";
import advertisementRouter from "./routes/advertisements.routes";
import authRouter from "./routes/auth.routes";

const app = express();
app.use(express.json());

const API_DETAIL = process.env.API_DETAIL || "/api/v1";

app.use(`${API_DETAIL}/advertisements`, advertisementRouter);
app.use(`${API_DETAIL}/auth`, authRouter);

app.use(handleError);

export default app;
