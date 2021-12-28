import "reflect-metadata";
import express from "express";
import 'dotenv/config'

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(8111, () => {
    console.log('Server is running port 3000')
})