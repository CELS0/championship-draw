import "reflect-metadata";
import express from "express";
import 'dotenv/config'
import http from 'http';
import cors from 'cors';


import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(cors());

const serverHttp = http.createServer(app);


app.use(routes);

serverHttp.listen(8111, () => {
    console.log('Server is running port 3000')
})