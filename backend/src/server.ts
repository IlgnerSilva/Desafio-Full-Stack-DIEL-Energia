import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import 'dotenv/config';
import cors from "cors";

import { router } from "./useCases/routes";
const PORT = process.env.PORT || 4000
const app = express();

app.use(cors())

app.use(express.json());

app.use(router);

app.use('/', (req, res)=>{
    res.send('Raiz!');
})

app.listen(PORT, () => console.log("Server is running on port ", PORT));