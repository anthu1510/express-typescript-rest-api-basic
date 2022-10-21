import express from "express";
import Routers from "../routes";

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Added Router file
Routers(app);

export default app;
