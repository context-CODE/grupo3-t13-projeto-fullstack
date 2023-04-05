import express from "express";
import "reflect-metadata";
import "express-async-errors";
import handleError from "./errors/handlerError";
import "dotenv/config";

const app = express();
app.use(express.json());

const API_DETAIL = process.env.API_DETAIL || "/api/v1";

// EXAMPLE
// app.use(`${API_DETAIL}/users`, userRouter)

app.use(handleError);

export default app;
