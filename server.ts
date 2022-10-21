import dotenv from "dotenv";
import http from "http";
import app from "./src/start/app";

dotenv.config();
const server = http.createServer(app);

server.listen(process.env.PORT, () =>
  console.log(
    `server started at http://${process.env.HOST}:${process.env.PORT}`
  )
);
